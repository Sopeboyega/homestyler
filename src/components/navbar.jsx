import { Navbar, Nav, Container } from 'react-bootstrap';
import  '../App.css'


function Navigationbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/assets/Homco.png`}
              width="150"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Our Services</Nav.Link>
            <Nav.Link href="#projects">Our Projects</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#more">More</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
