import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://material-ui.com/static/logo_raw.svg" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          <Typography variant="h6">Menu</Typography>
        </div>
        <div style={{ display: 'flex', fontSize: '16px' }}>
          <Button href="#" style={{ color: 'white', marginRight: '15px' }}>Inicio</Button>
          <Button href="#" style={{ color: 'white', marginRight: '15px' }}>Contacto</Button>
          <Button href="#" style={{ color: 'white' }}>Tienda</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;