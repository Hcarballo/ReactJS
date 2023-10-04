import { Link } from 'react-router-dom';
import './assets/item.css';

const Item = ({ id, producto, precio, img, categoria, stock, bodega, descripcion }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {producto}
                </h2>
            </header>
            <figure>
                <img src={img} alt='' className='ItemImg' />
            </figure>
            <section>
                <p className='Info'>
                    Bodega: {bodega}
                </p>
                <p className='Info'>
                    Categoría: {categoria}
                </p>
                <p className='Info'>
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='btn btn-primary Option'>Ver Detalle</Link>              
            </footer>
        </article>
    )
}

export default Item;
