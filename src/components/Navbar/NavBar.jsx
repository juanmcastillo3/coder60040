import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo-gaucho.png";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Link to="/">
          <img src={logo} width="100" height="100" className="d-inline-block align-top" alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <Link to="/category/hamburguesas" className="dropdown-item">Hamburguesas</Link>
              <NavDropdown.Divider />
              <Link to="/category/ensaladas" className="dropdown-item">Ensaladas</Link>
              <NavDropdown.Divider />
              <Link to="/category/acompañamientos" className="dropdown-item">Acompañamientos</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </Navbar>
  );
};

export default NavBar;
