import React from 'react';
import { Container,  Nav, Button, Row, Col, Card } from 'react-bootstrap';
import './App.css';  // Add custom styles if needed

// Components for each section
import Hero from './components/Hero';
import Features from './components/Features.jsx';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigationbar from './components/navbar.jsx';


function App() {
  return (
    <>
   <Navigationbar/>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* <ServicesSection /> */}

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
