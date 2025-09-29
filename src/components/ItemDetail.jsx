import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  if (!item) return <div>Producto no encontrado</div>;

  return (
    <div className="row">
      <div className="col-md-6">
        {(item.image || item.img) && (
          <img
            src={item.image || item.img}
            alt={item.name || item.titulo}
            className="img-fluid rounded"
          />
        )}
      </div>
      <div className="col-md-6">
        <h2>{item.name || item.titulo}</h2>
        <p className="text-muted">{item.description || item.descripcion}</p>
        <p className="fs-5 fw-semibold">
          {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(item.price)}
        </p>
        <ItemCount 
          stock={item.stock || 10} 
          initial={1} 
          onAdd={(quantity) => console.log(`Agregaste ${quantity} unidades al carrito`)} 
        />
      </div>
    </div>
  );
}

export default ItemDetail;