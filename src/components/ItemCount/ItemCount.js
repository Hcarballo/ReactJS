import { useState } from "react";
import './assets/itemcount.css'


const ItemCount = ({ initial, stock, onAdd }) => {

    const [cantidad, setQuantity] = useState(initial)
    
    const increment = () => {
        if (cantidad < stock) {
            setQuantity(cantidad + 1)
        }
    }

    const decrement = () => {
        if (cantidad > 0) {
            setQuantity(cantidad - 1)
        }
    }
    
    return (
        <div className="Counter">
            <div className="Controls">
                <button className="btn btn-success Button" onClick={decrement}>-</button>
                <h4 className="Number">{cantidad}</h4>
                <button className="btn btn-success Button" onClick={increment}>+</button>
            </div>
            <div>
                {
                    cantidad > 0 ? (
                        <button className="btn btn-primary Button" onClick={() => onAdd(cantidad)}>
                            Agregar al carrito
                        </button>
                    ) : (
                        <button className="btn btn-secondary Button" >
                            Agregar al carrito
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default ItemCount;