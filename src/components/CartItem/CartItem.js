import "bootstrap/dist/css/bootstrap.min.css"
import "../CartItem/assets/cartitem.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ id, producto, precio, cantidad, subtotal }) => {
    const {removerItem} = useContext(CartContext);

    return (
        <tr className="filas">
            <th scope="row">{id}</th>
            <th>{producto}</th>
            <th>${precio}</th>
            <th>{cantidad}</th>
            <th>${subtotal}</th>
            <button className="btn btn-danger Button" onClick={() => removerItem(id)}>x</button>
        </tr>
    )
}

export default CartItem;