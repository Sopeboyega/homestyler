import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import './App.css';  // Add custom styles if needed

// Components for each section
import Hero from './components/Hero';
import Features from './components/Features.jsx';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      <ServicesSection />

      {/* Product Showcase */}
      <ProductGrid />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
