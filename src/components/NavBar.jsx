import CartWidget from './CartWidget.jsx';
import logo from '../assets/BLOOM.png';

function NavBar() {
  return (
    <header className="border-bottom sticky-top bg-white">
      <nav className="navbar navbar-expand-lg navbar-light bg-white container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={logo} alt="BLOOM" width="28" height="28" />
          <span className="fw-bold">BLOOM</span>
        </a>

        {/* Toggler para móviles */}
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
            <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Catálogo</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Personaliza</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

