import './App.css';
// import Main from './components/Main';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import fondo from './images/fondo.jpg'

function App() {
  return (
    <div style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh',  overflow: 'hidden'}}>
    <NavBar />
    <ItemListContainer nombre={'Baltasar'} />
  </div>
  );
}

export default App;
