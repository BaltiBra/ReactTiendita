import './App.css';
// import Main from './components/Main';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer nombre={'Baltasar'} />
  </div>
  );
}

export default App;
