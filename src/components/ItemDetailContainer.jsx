import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoById } from '../mock/AsyncService';
import ItemDetail from './ItemDetail';

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

  return (
    <div className="container py-4">
      {loading && <div>Cargando detalle...</div>}
      {!loading && item && <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer;
