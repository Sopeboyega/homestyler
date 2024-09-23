import { Container, Button, Row, Col } from 'react-bootstrap';

function Hero() {
  return (
    <section className="hero-section bg-light text-dark py-5">
      <Container>
        <Row>
          <Col lg={6} className="my-auto">
            <h1>Build Your Elegant Dream Home Interior</h1>
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
