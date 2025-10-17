import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Cart() {
  const { items, totalPrice, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-4">
        <h2>Carrito vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">Ir al catálogo</Link>
      </div>
    );
  }

  const handleRemove = async (id, title) => {
    const res = await Swal.fire({
      icon: 'warning',
      title: '¿Eliminar producto?',
      text: title,
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });
    if (res.isConfirmed) {
      removeItem(id);
      await Swal.fire({
        icon: 'success',
        title: 'Eliminado',
        timer: 1200,
        showConfirmButton: false
      });
    }
  };

  const handleClear = async () => {
    const res = await Swal.fire({
      icon: 'warning',
      title: '¿Vaciar carrito?',
      text: 'Se eliminarán todos los productos',
      showCancelButton: true,
      confirmButtonText: 'Vaciar',
      cancelButtonText: 'Cancelar'
    });
    if (res.isConfirmed) {
      clearCart();
      await Swal.fire({
        icon: 'success',
        title: 'Carrito vacío',
        timer: 1200,
        showConfirmButton: false
      });
    }
  };

  return (
    <div className="container py-4">
      <h2>Tu carrito</h2>
      <ul className="list-group mb-3">
        {items.map((it) => (
          <li key={it.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              {it.image && <img src={it.image} alt={it.title} width={56} height={56} style={{objectFit:'cover'}} />}
              <div>
                <div className="fw-semibold">{it.title}</div>
                <small className="text-muted">x{it.quantity}</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="text-muted">
                {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(it.price * it.quantity)}
              </span>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleRemove(it.id, it.title)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-outline-secondary" onClick={handleClear}>Vaciar carrito</button>
        <div className="fs-5">
          Total: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(totalPrice)}
        </div>
      </div>
      <div className="mt-3">
        <Link to="/checkout" className="btn btn-success">Ir a pagar</Link>
      </div>
    </div>
  );
}

export default Cart;
