
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';


function Navbarr() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
          <Link to="/" className='contenedor-logo'>
          <Navbar.Brand ><Logo /></Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/category/scrunchies" className="nav-link">Srunchies</Link>
            <Link to="/category/rumbas" className="nav-link">Rumbas</Link>
            <Link to="/category/lazos" className="nav-link">Lazos</Link>
            <Link to="/category/cintillos" className="nav-link">Cintillos</Link>
          </Nav>
          <Link to="/cart"><CartWidget /></Link>
         
      </Navbar>
  
    </>
  );
}

export default Navbarr;