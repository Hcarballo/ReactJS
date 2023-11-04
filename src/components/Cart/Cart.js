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
                <Link to="/" className="btnFooter" >Inicio</Link>
            </div>
        )
    }
    return (
        <div className="cart_final">
            <h2>Detalle del carrito</h2>
            <table className="table">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                </thead>
                <tbody>                    
                        {cart.map(item => <CartItem key={item.id} {...item} />)}                    
                </tbody>
            </table>
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="btn_limpiar">Limpiar carrito</button>
            <Link to="/checkout" className="btn_check">Checkout</Link>
        </div>
    )
}

export default Cart;