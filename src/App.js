import './App.css';
// import Main from './components/Main';
import NavBar from './components/Navbar';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import fondo from './images/fondo.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <router>
      <switch>        
        < div style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh',  overflow: 'hidden'}}>
          < NavBar />
          <ItemListContainer nombre={'Baltasar'} />
          <ItemDetailContainer/>
        </div>
      </switch>
  </router>
  );
}

export default App;
