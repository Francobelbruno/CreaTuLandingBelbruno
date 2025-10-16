import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/products';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then((producto) => setItem(producto))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container py-4">Cargando detalle...</div>;
  if (!item) return <div className="container py-4">Producto no encontrado</div>;

  return (
    <div className="container py-4">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
