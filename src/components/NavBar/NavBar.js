import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Favicon from "./assets/img/favicon.png";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={Favicon} alt="favicon" />
        <h3>MoreWine</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>             
            </li>
            <li className="nav-item">
            <NavLink to={`/categoria/tinto`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tintos</NavLink>  
              </li>
            <li className="nav-item">
            <NavLink to={`/categoria/blanco`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Blancos</NavLink>  
            </li>
            <li className="nav-item">
            <NavLink to={`/categoria/espumante`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Espumantes</NavLink>  
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>      
    </nav>
  );
}

export default NavBar;