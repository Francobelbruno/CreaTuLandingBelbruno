import NavBar from './components/NavBar.jsx';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const ItemListContainer = lazy(() => import('./components/ItemListContainer.jsx'));
const ItemDetailContainer = lazy(() => import('./components/ItemDetailContainer.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));
const CheckoutForm = lazy(() => import('./components/CheckoutForm.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div className="container py-5 text-center">Cargando...</div>}>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido/a a BLOOM tu tienda de confianza!" />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      
    </>
  );
}

export default App;
