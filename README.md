# BLOOM — E‑commerce con React (SPA)

Aplicación web de e‑commerce construida con React + Vite. Implementa catálogo y detalle de productos, carrito con Context, Checkout y persistencia en Firebase Firestore. La navegación es Single Page Application (SPA) con React Router.

## Objetivos
- Desarrollar el front‑end de una web app de e‑commerce con React.
- Incorporar Firestore como base de datos para productos y órdenes.
- Cumplir convenciones y patrones recomendados del ecosistema React.

## Stack técnico
- React 19, Vite 7, React Router, Context API
- Firebase (Firestore)
- Bootstrap 5 (estilos) y SweetAlert2 (feedback UX)

## Instalación y ejecución
- Prerrequisitos: Node.js 18+ y una cuenta de Firebase con Firestore habilitado.

1) Instalar dependencias
```
npm install
```

2) Ejecutar en desarrollo
```
npm run dev
```

3) Compilar para producción
```
npm run build
```

Deploy en GitHub Pages
- La app usa `HashRouter` y `vite.config.js` compila a `docs/` para Pages.
- Publicá la carpeta `docs/` en GitHub Pages (branch main, carpeta /docs).

## Configuración de Firebase
Editá `src/services/firebase.js` con las credenciales de tu proyecto.
- Colección `products` para el catálogo.
- Colección `orders` para registrar compras.
- Campos de producto soportados (normalizados): `titulo`, `descripcion`, `img`, `price` o `precio`, `stock`, `category` o `categoria`.

Ejemplo mínimo de reglas (sólo para pruebas locales):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // No usar en producción
    }
  }
}
```

## Estructura de componentes
- `App.jsx`
  - `NavBar` (navegación)
  - `CartWidget` (cantidad total del carrito)
- `ItemListContainer` (contenedor)
  - `ItemList` (presentacional)
    - `Item` (presentacional)
- `ItemDetailContainer` (contenedor)
  - `ItemDetail` (presentacional)
  - `ItemCount` (selección de cantidad con validaciones)
- `Cart` (lista, subtotales, total, eliminar/vaciar)
- `CheckoutForm` (creación de orden en Firestore + SweetAlert2)
- `NotFound`
- `context/CartContext.jsx` (estado global del carrito)
- `services/` (Firebase, productos, órdenes)

## Funcionalidades clave
- Listado y detalle conectados a Firestore (getDocs/getDoc/query/where)
- Filtros por categoría e id via `useParams`
- Renderizado condicional (loaders, vacíos, errores)
- `ItemCount` oculta tras agregar al carrito en el detalle
- `CartContext` con `addItem`, `removeItem`, `clearCart`, totales y cantidad total
- `CartWidget` muestra unidades agregadas
- Checkout registra órdenes y muestra el ID generado
- UX con Bootstrap y SweetAlert2

## Rutas
- `/` catálogo
- `/category/:categoryId` por categoría (ej. `ofertas`, `nuevas`)
- `/item/:id` detalle
- `/cart` carrito
- `/checkout` compra
- `*` 404

## Convenciones y buenas prácticas
- Separación contenedores vs presentacionales
- Naming consistente, sin código muerto ni logs de depuración
- Normalización de campos desde Firestore (precio/stock a número; categoría bilingüe)
- Estructura de carpetas clara y minimalista

## Licencia
Uso académico/educativo.

