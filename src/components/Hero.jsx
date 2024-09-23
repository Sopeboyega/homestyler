import { Container, Button, Row, Col } from 'react-bootstrap';
import  '../App.css'

function Hero() {
  return (
    <section className="hero-section  text-dark py-5">
      <Container>
        <Row>
          <Col lg={6} className="my-auto">
          <h1 style={{color: "white", fontSize: '20px', fontWeight: 'bold', marginBottom: '45px' }}>WELCOME TO HOMCO</h1>
            <h1 style={{color: "white", fontSize: '60px', fontWeight: 'bold', marginBottom: '40px' }}>Build Your Elegant Dream Home Interior</h1>
           
            <p className="lead">Custom designs and solutions just for you.</p>
            <Button variant="primary" size="lg">Our Project</Button>
          </Col>
          <Col lg={6}>
            <div className="hexagon bg-secondary" style={{ height: '300px', backgroundColor: '#ccc' }}></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
