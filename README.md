# BLOOM - E-commerce con React

Aplicación web de e-commerce desarrollada con React y Vite. Implementa catálogo, detalle de productos, carrito con Context, checkout y persistencia de datos en Firebase Firestore.

## Requisitos
- Node.js 18+
- Cuenta de Firebase y proyecto con Firestore habilitado

## Configuración
1. Copiar variables de entorno
   - Duplicar `.env.example` como `.env.local` y completar con los valores de tu proyecto Firebase.

2. Instalar dependencias

```bash
npm install
```

3. Ejecutar en desarrollo
```bash
npm run dev
```

4. Compilar
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

## Funcionalidades
- Listado y detalle de productos con React Router
- Filtro por categorías en rutas `/category/:categoryId`
- Carrito de compras con Context (agregar, eliminar, vaciar, totales)
- `CartWidget` muestra la cantidad total de unidades
- Checkout con creación de orden en Firestore y visualización de ID de compra
- Renderizado condicional (loaders, carrito vacío, etc.)

## Notas
- La app usa `HashRouter` para facilitar el deploy en GitHub Pages.
- Asegurate de crear la colección `products` en Firestore y cargar tus productos con campos: `name`, `price`, `image` (o `img`), `description`, `category`, `stock`.
