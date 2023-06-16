import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Icon.jsx';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CartWidget from './CartWidget.jsx';
import { Link } from 'react-router-dom';

const NavbarAndIcon = () => {
  const navbarStyle = {
    //  display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: '10px',
     borderRadius: '10px',
     padding: '10px',
     width: '70%',
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center' }}>
      <Navbar bg="primary" variant="dark" style={navbarStyle} >
        <Container >
          <Link to='/'><Logo/></Link>
          <Link to='/'><Navbar.Brand href="#home" style={{paddingLeft: '20px',}}>Inicio</Navbar.Brand></Link>
          <Nav className="me-auto dropdown">
            <DropdownButton id="dropdown-basic-button" title="Shop">
             <Link to='/Cositas'><Dropdown.Item href="#/action-1">Cositas</Dropdown.Item></Link>
             <Link to='/Libros'><Dropdown.Item href="#/action-2">Libros</Dropdown.Item></Link>
             <Dropdown.Item href="#/action-3">Desabilitado</Dropdown.Item>
           </DropdownButton>
          </Nav>
          <CartWidget/>
        </Container>
    </Navbar>
    </div>
  );
};
export default NavbarAndIcon;


