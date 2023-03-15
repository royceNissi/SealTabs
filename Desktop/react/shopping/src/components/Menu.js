import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { FaShoppingCart } from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <Navbar expand="sm" sticky="top" variant='light' className="bg-teal">
        <Container>
        <Link style={{textDecoration:"none"}} className='text-black' to='/'>
          <Navbar.Brand>ShopMe</Navbar.Brand>
        </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-right">
              <Link className='text-black' to='/Cart'><FaShoppingCart /></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}