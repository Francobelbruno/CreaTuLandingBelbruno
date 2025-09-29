import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex gap-2 align-items-center">
      <button className="btn btn-outline-secondary" onClick={handleDecrement} type="button">-</button>
      <span>{count}</span>
      <button className="btn btn-outline-secondary" onClick={handleIncrement} type="button">+</button>
      <button className="btn btn-primary" onClick={() => onAdd(count)} type="button">Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;