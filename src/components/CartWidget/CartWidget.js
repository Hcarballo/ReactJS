import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import carro from "./assets/img/carro.svg";


const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        cart.map((p) => (
            <Link to='/cart' className="CartWidget" style={{ display: p.cantidad > 0 ? 'block' : 'none' }} >
                <div className="carro_section">
                    <div>
                        <img src={carro} alt="Carro_img" />
                    </div>
                    <div>
                        {p.cantidad}
                    </div>
                </div>
            </Link>
        )));
}

export default CartWidget;