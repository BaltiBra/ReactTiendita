import './App.css';
// import Main from './components/Main';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ backgroundImage: 'url("./images/fondo.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
    <NavBar />
    <ItemListContainer nombre={'Baltasar'} />
  </div>
  );
}

export default App;
