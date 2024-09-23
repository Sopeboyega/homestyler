import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import  '../App.css';

const Testimonials = () => {
  return (
    <Container className="testimonials-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>"Great service! Highly recommend."</Card.Text>
              <Card.Footer>– Client Name</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>"The best designs I've ever seen!"</Card.Text>
              <Card.Footer>– Client Name</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Text>"Amazing experience working with them."</Card.Text>
              <Card.Footer>– Client Name</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
