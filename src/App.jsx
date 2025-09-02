import './styles/bootstrap-cdn.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido/a a BLOOM tu tienda de confianza!" />
    </>
  );
}

export default App;
