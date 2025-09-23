import React from 'react'
import { Link } from 'react-router-dom'

function Item({ item, onAdd }) {
  const image = item?.image || item?.img || '';
  const title = item?.name || item?.titulo || 'Sin título';
  const description = item?.description || item?.descripcion || '';
  const priceValue = item?.price ?? item?.price ?? null;
  const price = priceValue
    ? new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(priceValue)
    : '';

  return (
    <div className="card mb-4 shadow-sm h-100">
      {image && (
        <Link to={`/item/${item?.id}`}>
          <img src={image} alt={title} className="card-img-top" style={{ objectFit: 'cover', height: 220 }} />
        </Link>
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title"><Link to={`/item/${item?.id}`} className="text-decoration-none">{title}</Link></h5>
        <p className="card-text text-muted">{description}</p>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <small className="text-muted">{price}</small>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onAdd && onAdd(item)}
            aria-label={`Agregar ${title} al carrito`}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
