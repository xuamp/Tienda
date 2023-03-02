import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ItemCarrito from "../ItemCarrito/ItemCarrito";
import { Link } from "react-router-dom";

function NavBarB() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
      <Container>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Nav.Link>Contacto</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pc</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Impresoras</NavDropdown.Item>
            </NavDropdown>
            <ItemCarrito />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarB;
