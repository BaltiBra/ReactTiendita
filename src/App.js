import './App.css';
// import Main from './components/Main';
import NavBar from './components/Navbar';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import fondo from './images/fondo.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Libros from './components/Libros';
import Cositas from './components/Cositas';
import Main from './components/Main';
import Carrito from './components/Carrito';
import Error404 from './components/Error404';

function App() {
  return (< div style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh',  overflow: 'hidden'}}>
    
        <Router>
          <div >
            < NavBar />
            </div>
          <Routes>
            <Route path='/' index element={<Main/>}/>
            <Route path='/Libros' element={<Libros></Libros>}/>
            <Route path='/Cositas'  element={<Cositas></Cositas>}/>
            <Route path='/*' element={<Error404></Error404>}/>
          </Routes>
          <Carrito></Carrito>
      <ItemListContainer nombre={'Baltasar'} />
          <ItemDetailContainer/>
  </Router>
 </div> );
}

export default App;