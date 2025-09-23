import React from 'react';

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-5 fw-bold">404</h1>
      <p className="lead">Página no encontrada</p>
      <a className="btn btn-primary" href="/">Volver al inicio</a>
    </div>
  );
}

export default NotFound;
