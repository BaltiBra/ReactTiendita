import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Icon.jsx';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CartWidget from './CartWidget.jsx';

function NavbarAndIcon() {
  return (
    <Navbar bg="primary" variant="dark">
        <Container style={{width: '80%', margin:'15px'}}>
          <Logo/>
          <Navbar.Brand href="#home" style={{paddingLeft: '20px',}}>Inicio</Navbar.Brand>
          <Nav className="me-auto dropdown">
          <DropdownButton id="dropdown-basic-button" title="Shop">
            <Dropdown.Item href="#/action-1">Cositas</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Libros</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Desabilitado</Dropdown.Item>
          </DropdownButton>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
  );
}

export default NavbarAndIcon;
