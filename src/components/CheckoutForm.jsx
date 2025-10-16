import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { createOrder } from '../services/orders';
import { Link } from 'react-router-dom';

function CheckoutForm() {
  const { items, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer((b) => ({ ...b, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const order = {
        buyer,
        items: items.map(({ id, title, price, quantity }) => ({ id, title, price, quantity })),
        total: totalPrice,
      };
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error('Error creating order', err);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="container py-4">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input className="form-control" name="name" value={buyer.name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Teléfono</label>
          <input className="form-control" name="phone" value={buyer.phone} onChange={handleChange} required />
        </div>
        <div className="col-12">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={buyer.email} onChange={handleChange} required />
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div className="fs-5">Total: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(totalPrice)}</div>
          <button className="btn btn-success" type="submit" disabled={loading}>
            {loading ? 'Procesando...' : 'Confirmar compra'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
