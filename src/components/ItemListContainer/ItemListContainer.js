import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { dbmorewine } from '../../services/firebase/firebaseConfig'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams();

    const collectionRef =
        categoriaId
            ? query(collection(dbmorewine, 'Productos'), where('categoria', '==', categoriaId))
            : collection(dbmorewine, 'Productos');

    useEffect(() => {

        const getprod = async () => {
            const data = await getDocs(collectionRef);
            const resultado = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));

            setProductos(resultado);
        }

        getprod();

    }, [collectionRef])

   
    return (
        <div>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;