import { useState } from "react";
import './assets/itemcount.css'


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="Counter">
            <div className="Controls">
                <button className="btn btn-success Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="btn btn-success Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-primary Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount;