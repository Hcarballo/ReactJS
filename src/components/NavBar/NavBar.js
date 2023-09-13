import CartWidget from "../CartWidget/CartWidget";
import Favicon from "./assests/img/favicon.png";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src={Favicon} alt="favicon" />
    <h4>MoreWine</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Vinos Tintos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Vinos Blancos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Vinos Espumantes</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
       
    );
}

export default NavBar;