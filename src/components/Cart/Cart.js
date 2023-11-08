import "./cart.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="cart_final">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="btn btn-primary" >Inicio</Link>
            </div>
        )
    }

    return (
        <div className="cart_final">
            <h2>Detalle del carrito</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => <CartItem key={item.id} {...item} />)}
                </tbody>
            </table>
            <h3 className="total">Total: ${total.toFixed(1)}</h3>
            <footer className="footer">
                <button onClick={() => clearCart()} className="btn btn-danger btn-limpiar">Limpiar carrito</button>
                <Link to={"/checkout"} className="btn btn-primary">Checkout</Link>
            </footer>

        </div>
    )
}

export default Cart;