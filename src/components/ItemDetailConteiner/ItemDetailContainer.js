import './assets/itemdetailcontainer.css'
import { useState, useEffect } from 'react';
import { getProductobyId } from '../../data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getProductobyId(itemId)
            .then(respose => {
                setProducto(respose)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer;