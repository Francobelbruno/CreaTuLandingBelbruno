import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-5 fw-bold">404</h1>
      <p className="lead">Página no encontrada</p>
      <Link className="btn btn-primary" to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;
