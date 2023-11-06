import "bootstrap/dist/css/bootstrap.min.css"
import "../CartItem/assets/cartitem.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ id, producto, precio, cantidad, subtotal }) => {
    const { removerItem } = useContext(CartContext);

    return (
        <tr className="filas">
            <th scope="row" key={id}>{id}</th>
            <th>{producto}</th>
            <th>${precio.toFixed(1)}</th>
            <th>{cantidad}</th>
            <th>${subtotal.toFixed(1)}</th>
            <th>
                <button className="btn btn-danger Button" onClick={() => removerItem(id)}>x</button>
            </th>
        </tr>
    )
}

export default CartItem;