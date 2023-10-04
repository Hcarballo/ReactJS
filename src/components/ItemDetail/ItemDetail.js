import './assets/itemdetail.css'
import ItemCount from '../ItemCount/ItemCount';
import "bootstrap/dist/css/bootstrap.min.css"


const ItemDetail = ({ id, producto, precio, img, categoria, stock, bodega, descripcion }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {producto}
                </h2>
            </header>
            <picture>
                <img src={img} alt='' className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Bodega: {bodega}
                </p>
                <p className='Info'>
                    Categoría: {categoria}
                </p>
                <p className='Info'>
                    Detalle: {descripcion}
                </p>
                <p className='Info'>
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("cantidad agregada: ", quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail;
