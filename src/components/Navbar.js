import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';

const NavBar= () =>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">EPU</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/sheeps">Excel</Nav.Link>
            <Nav.Link href="#">Graphs</Nav.Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/bhanu">Bhanu Pratap</NavDropdown.Item>
              <NavDropdown.Item href="/shelja">Shelja Bhatia</NavDropdown.Item>
              <NavDropdown.Item href="/abhishek">Abhishek Kumar Yadav</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/hardik">Hardik</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/sheeps">Research Paper</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;