import carro from "./assets/img/carro.svg";


const CartWidget = () => {
    return (
        <div className="carro_section">
            <div>
                <img src={carro} alt="Carro_img" />
            </div>
            <div>
                0
            </div>
        </div>
    );

}

export default CartWidget;