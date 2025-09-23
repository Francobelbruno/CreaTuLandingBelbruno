import React, { useState, useEffect } from 'react';
import { getProductos } from '../mock/AsyncService';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos()
    .then((productos) => { setData(productos);});
  }, []);

  return (
    <main className="container-xxl py-4">
      <div className="p-4 p-md-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-2">
          <h1 className="display-6 m-0">{greeting}</h1>
          <p className="text-muted m-0">Ropa personalizada y única hecha para vos.</p>
          <ItemList data={data} />
        </div>
      </div>
    </main>
  );
}

export default ItemListContainer;
