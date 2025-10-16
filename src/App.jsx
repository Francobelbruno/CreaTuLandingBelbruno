import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import NotFound from './components/NotFound.jsx';
import Cart from './components/Cart.jsx';
import CheckoutForm from './components/CheckoutForm.jsx';

function App() {
  return (
    <>
      <NavBar />
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
      
    </>
  );
}

export default App;
