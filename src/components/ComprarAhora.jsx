import React from 'react';

function ComprarAhora({ scrollTo = 'bottom', children = 'Comprar Ahora' }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (scrollTo && typeof scrollTo === 'string' && scrollTo !== 'bottom') {
      const el = document.querySelector(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // default: scroll to bottom of page
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="d-inline-flex align-items-center justify-content-center rounded-pill h-48 px-4 btn-buy-now"
      style={{ minWidth: 84, maxWidth: 480 }}
      aria-label={children}
    >
      <span className="truncate">{children}</span>
    </button>
  );
}

export default ComprarAhora;
