function CartWidget() {
  return (
    <button type="button" className="btn btn-outline-primary position-relative" aria-label="Carrito">
      🛒
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
        <span className="visually-hidden">items en el carrito</span>
      </span>
    </button>
  );
}

export default CartWidget;

