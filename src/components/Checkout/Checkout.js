import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { dbmorewine } from '../../services/firebase/firebaseConfig';
import Formulario from "../Formulario/Formulario";



const Checkout = () => {

    const [loading, setloading] = useState([false]);
    const [ordenId, setOrdenId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const crearOrden = async ({ nombre, telefono, dni, email }) => {
        setloading(true)

        try {
            const Orden = {
                buyer: {
                    nombre, telefono, dni, email
                },
                items: cart,
                total: total,
                fecha: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(dbmorewine)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            const productoref = collection(dbmorewine, 'Productos')
            const productosAddtodb = await getDocs(query(productoref, where(documentId(), 'in', ids)))
            const { docs } = productosAddtodb

            docs.forEach((doc) => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAdaptedtoCart = cart.find(prod => prod.id === doc.id)
                const prodCantidad = productAdaptedtoCart?.prodCantidad

                if (stockDb >= prodCantidad) {
                    batch.update(doc.ref, { stock: stockDb - prodCantidad })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const ordenRef = collection(dbmorewine, 'orders')
                const ordenAdded = await addDoc(ordenRef, Orden)

                setOrdenId(ordenAdded.id)
                clearCart()
            } else {
                console.error('hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }
    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if (ordenId) {
        return <h1>El id de su Orden es: {ordenId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <Formulario onConfirm={crearOrden} />
        </div>
    )


}

export default Checkout;