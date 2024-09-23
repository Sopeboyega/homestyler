import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ServicesSection() {
  return (
    <section className="services-section bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4}>
            <Card className="bg-dark text-white border-0">
              <Card.Body>
                <Card.Title>Home Design Consultation</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </Card.Text>
                <Button variant="outline-light">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white border-0">
              <Card.Body>
                <Card.Title>Home Design 3D 2D Interior Service</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </Card.Text>
                <Button variant="outline-light">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white border-0">
              <Card.Body>
                <Card.Title>Home Design Consultation</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </Card.Text>
                <Button variant="outline-light">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;
