import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllProducts, fetchProductsByCategory } from '../services/products';
import ItemList from './ItemList';
import ComprarAhora from './ComprarAhora';
import Hero from './Hero';

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const fetcher = categoryId
          ? () => fetchProductsByCategory(categoryId)
          : fetchAllProducts;
        const productos = await fetcher();
        if (!cancelled) setData(productos || []);
      } catch (e) {
        console.error('Error cargando productos:', e);
        if (!cancelled) {
          setError(e?.message || 'No se pudieron cargar los productos');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true };
  }, [categoryId]);

  return (
    <main className="container-xxl py-4">
      {greeting ? (
        <Hero title={greeting} />
      ) : (
        <div className="p-4 p-md-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-2">
            <p className="text-muted m-0">Ropa personalizada y única hecha para vos.</p>
          </div>
        </div>
      )}

      <div className="container-fluid mt-4">
        {loading && <div className="mt-3">Cargando productos...</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {!loading && !error && data.length === 0 && (
          <div className="mt-3 text-muted">No hay productos para mostrar.</div>
        )}
        {!loading && !error && data.length > 0 && <ItemList data={data} />}
      </div>
    </main>
  );
}

export default ItemListContainer;
