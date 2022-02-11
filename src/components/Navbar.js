import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
const NavBar= () =>{
  return (
    <Navbar style={{position: "sticky"}}  collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/" class="navbar-brand">EPU</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/excel" role="button" data-rr-ui-event-key="#" class="nav-link" tabindex="0">Excel</Link>
            <Link to="#" role="button" data-rr-ui-event-key="#" class="nav-link" tabindex="0">Graphs</Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item ><Link to="/bhanu" role="button" data-rr-ui-event-key="#" tabindex="0" data-rr-ui-dropdown-item="" class="dropdown-item">Bhanu Pratap</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/shelja" role="button" data-rr-ui-event-key="#" tabindex="0" data-rr-ui-dropdown-item="" class="dropdown-item">Shelja Bhatia</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/abhishek" role="button" data-rr-ui-event-key="#" tabindex="0" data-rr-ui-dropdown-item="" class="dropdown-item">Abhishek Kumar Yadav</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/hardik" role="button" data-rr-ui-event-key="#" tabindex="0" data-rr-ui-dropdown-item="" class="dropdown-item">Hardik</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="" role="button" data-rr-ui-event-key="#" class="nav-link" tabindex="0">Research Paper</Link>
            <Link to="/contact" role="button" data-rr-ui-event-key="#" class="nav-link" tabindex="0">Contact Us</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;