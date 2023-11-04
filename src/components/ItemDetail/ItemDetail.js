import './assets/itemdetail.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ id, producto, precio, imagen, categoria, stock, bodega, descripcion }) => {
    const [cantAgregada, setCantAgregada] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (cantidad) => {
        setCantAgregada(cantidad)
        const item = {
            id, producto, precio
        }
        addItem(item, cantidad)
    }

    return (
        <article className='ItemDetail'>
            <header className='ItemDetailHeader'>
                <h2>
                    {producto}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt='' className='ItemDetailImg' />
            </picture>
            <section>
                <p className='ItemDetailInfo'>
                    Bodega: {bodega}
                </p>
                <p className='ItemDetailInfo'>
                    Categoría: {categoria}
                </p>
                <p className='ItemDetailInfo'>
                    Detalle: {descripcion}
                </p>
                <p className='ItemDetailInfo'>
                    Precio: ${precio}
                </p>
                <p className='ItemDetailInfo'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemDetailFooter'>                
                {
                    cantAgregada > 0 ? (
                        <Link to='/cart' className='Option'>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
                    )
                }
                <Link to={`/`} className='Option'>Volver</Link>
            </footer>
        </article>
    )
}

export default ItemDetail;
