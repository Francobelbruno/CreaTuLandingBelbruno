# BLOOM - E-commerce con React

Aplicación web de e-commerce desarrollada con React y Vite. Implementa catálogo, detalle de productos, carrito con Context, checkout y persistencia de datos en Firebase Firestore.

## Requisitos
- Node.js 18+
- Cuenta de Firebase y proyecto con Firestore habilitado

## Configuración

1. Instalar dependencias

```bash
npm install
```

2. Ejecutar en desarrollo
```bash
npm run dev
```

3. Compilar
```bash
npm run build
```

## Estructura principal
- `src/components`
  - `ItemListContainer`, `ItemList`, `Item`
  - `ItemDetailContainer`, `ItemDetail`, `ItemCount`
  - `Cart`, `CheckoutForm`, `CartWidget`, `NavBar`, `NotFound`
- `src/context/CartContext.jsx` (estado global del carrito)
- `src/services/` (Firebase config, productos y órdenes)


## Notas
- La app usa `HashRouter` para facilitar el deploy en GitHub Pages.

