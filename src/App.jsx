import './styles/bootstrap-cdn.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Articulo from './components/articulo.jsx';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido/a a BLOOM tu tienda de confianza!" />
      <Articulo
        titulo="Camisa Personalizada"
        descripcion="Crea tu propia camisa con nuestro diseñador."
      />
    </>
  );
}

export default App;
