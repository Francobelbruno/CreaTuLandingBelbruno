import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  const { addItem } = useCart();
  const [addedQty, setAddedQty] = useState(0);

  const handleAdd = (quantity) => {
    const price = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
    const stock = typeof item.stock === 'string' ? parseInt(item.stock) : item.stock;
    addItem({ 
      id: item.id, 
      title: item.titulo, 
      price: price, 
      image: item.img, 
      stock: stock 
    }, quantity);
    setAddedQty(quantity);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        {item.img && (
          <img
            src={item.img}
            alt={item.titulo}
            className="img-fluid rounded"
          />
        )}
      </div>
      <div className="col-md-6">
        <h2>{item.titulo}</h2>
        <p className="text-muted">{item.descripcion}</p>
        <p className="fs-5 fw-semibold">
          {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(item.price)}
        </p>
        {addedQty === 0 ? (
          <ItemCount
            stock={item.stock || 10}
            initial={1}
            onAdd={handleAdd}
          />
        ) : (
          <div className="d-flex gap-2">
            <Link to="/cart" className="btn btn-success">Ir al carrito</Link>
            <Link to="/" className="btn btn-outline-secondary">Seguir comprando</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;