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

function App() {
  return (< div style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh',  overflow: 'hidden'}}>
    
        <Router>
          <div >
            < NavBar />
            </div>
          <Routes>
            <Route patch='/' index Component={Main}/>
            <Route patch='/Libros' Component={Libros}/>
            <Route patch='/Cositas'  Component={Cositas}/>
          </Routes>
        
      <ItemListContainer nombre={'Baltasar'} />
          <ItemDetailContainer/>
  </Router>
 </div> );
}

export default App;