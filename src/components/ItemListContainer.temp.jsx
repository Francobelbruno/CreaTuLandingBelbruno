import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllProducts, fetchProductsByCategory } from '../services/products';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    let mounted = true;

    const loadProducts = async () => {
      if (!mounted) return;
      
      setLoading(true);
      setError(null);

      try {
        const fetcher = categoryId ? fetchProductsByCategory : fetchAllProducts;
        const productos = await (categoryId ? fetcher(categoryId) : fetcher());
        
        if (mounted) {
          setData(productos || []);
        }
      } catch (error) {
        console.error('Error loading products:', error);
        if (mounted) {
          setError(error.message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      mounted = false;
    };
  }, [categoryId]);

  if (loading) {
    return (
      <div className="container mt-5">
        <h1>{greeting}</h1>
        <div className="alert alert-info">Cargando productos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <h1>{greeting}</h1>
        <div className="alert alert-danger">
          Error al cargar productos: {error}
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="container mt-5">
        <h1>{greeting}</h1>
        <div className="alert alert-warning">
          No hay productos disponibles en este momento.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>{greeting}</h1>
      <ItemList products={data} />
    </div>
  );
}

export default ItemListContainer;