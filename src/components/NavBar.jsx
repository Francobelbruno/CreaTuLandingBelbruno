import CartWidget from './CartWidget.jsx';
import logo from '../assets/BLOOM.png';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="border-bottom sticky-top bg-white">
      <nav className="navbar navbar-expand-lg navbar-light bg-white container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="BLOOM" width="28" height="28" />
          <span className="fw-bold">BLOOM</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/">Inicio</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/category/ofertas">Ofertas</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/nuevas">Nuevas</NavLink></li>
              </ul>
            </li>
            <li className="nav-item"><NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/">Contacto</NavLink></li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

