import './assets/itemdetailcontainer.css'
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { dbmorewine } from '../../services/firebase/firebaseConfig';



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    //const [loading, setLoading] = useState(true)

    const { itemId } = useParams();

    const docRef = doc(dbmorewine, 'Productos', itemId);

    useEffect(()=>{
        const getprod = async () => {
            await getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProducto(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            // .finally(() => {
            //     setLoading(false)
            // })
        }
        getprod();
    },[docRef]
    )
      
    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer;