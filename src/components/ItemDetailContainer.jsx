import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoById } from '../mock/AsyncService';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductoById(id)
      .then((producto) => setItem(producto))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container py-4">Cargando detalle...</div>;
  if (!item) return <div className="container py-4">Producto no encontrado</div>;

  return (
    <div className="container py-4">
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
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary" type="button">-</button>
            <button className="btn btn-outline-secondary" type="button">+</button>
            <button className="btn btn-primary" type="button">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
