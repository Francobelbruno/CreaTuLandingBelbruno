import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

function CartWidget() {
  const { totalQuantity } = useCart();
  return (
    <Link to="/cart" className="btn btn-outline-primary position-relative" aria-label="Carrito">
      🛒
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {totalQuantity}
        <span className="visually-hidden">items en el carrito</span>
      </span>
    </Link>
  );
}

export default CartWidget;

