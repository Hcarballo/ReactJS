import { Link } from 'react-router-dom';
import './assets/item.css';

const Item = ({ id, producto, precio, imagen, categoria, stock, bodega, descripcion }) => {
    return (
        <article className='Item'>
            <header className='ItemHeader'>
                <h2>
                    {producto}
                </h2>
            </header>
            <figure className = 'Itemfigura'>
                <img src={imagen} alt='' className='ItemImg' />
            </figure>
            <section>
                <p className='ItemInfo'>
                    Bodega: {bodega}
                </p>
                <p className='ItemInfo'>
                    Categoría: {categoria}
                </p>
                <p className='ItemInfo'>
                    Precio: ${precio}
                </p>
                <p className='ItemInfo'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='btn btn-primary'>Ver Detalle</Link>              
            </footer>
        </article>
    )
}

export default Item;
