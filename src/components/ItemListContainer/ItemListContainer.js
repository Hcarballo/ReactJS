import { useState, useEffect } from "react";
import { getProductos, getProductosByCategory } from '../../data';
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()

    useEffect(() => {
        const asyncFunc = categoriaId ? getProductosByCategory : getProductos

        asyncFunc(categoriaId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoriaId])

    return (               
        <div>
            <h1>{greeting}</h1>
            <ItemList productos = {productos} />
        </div>        
    )
    
}

export default ItemListContainer;