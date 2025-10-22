import React from 'react';
import ComprarAhora from './ComprarAhora';

export default function Hero({ title = 'BLOOM', subtitle = 'Donde la moda florece con diseños florales únicos. Explora nuestra ropa personalizada, estampados y servicios para grupos.' }) {
  return (
    <header className="hero" role="banner" aria-label="Hero">
      <div className="hero-bg" style={{ backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuDiLo-qohd1EuFjiVHHGcUmJq8fffqzBSTkvQjagY4RLKu0rwebGhqgBEI9lqBGUGqh5qNHlGrdtnZZSY2ddjq_6GZlHJp9HuDpagM7iQosIMh_vAKOVPz8Cd45kv89gu4MUj77fy-GH0xXbJyYt7CdfGqvMGT9iuj0WbF6SG2yW24wAVVSuZEhnTrMT6qfKyvDm-sILBAik-PcCv5TN1LUW6R6tNO_0ui7-y8B80RGDsQpAYmLUStceyhI7pnoxVHkUpjcVDQubaiw)` }} />
      <div className="hero-overlay" />
      <div className="hero-content container text-center">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-cta">
          <ComprarAhora />
        </div>
      </div>
    </header>
  );
}
