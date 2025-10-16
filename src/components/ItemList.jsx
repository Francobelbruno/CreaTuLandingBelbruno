import React from 'react'
import Item from './Item'

function ItemList({ data }) {
  return (
    <div className="row">
      {data.map((item) => (
        <div className="col-md-4" key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
