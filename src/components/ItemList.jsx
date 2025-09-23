import React from 'react'
import Item from './Item'

function ItemList({ data }) {
  const handleAdd = (item) => {
    console.log('Agregar al carrito:', item);
  };

  return (
    <div className="row">
      {data.map((item) => (
        <div className="col-md-4" key={item.id}>
          <Item item={item} onAdd={handleAdd} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
