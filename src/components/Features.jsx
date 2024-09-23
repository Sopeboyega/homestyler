import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
  return (
    <Container className="features-section py-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <Row>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>HOME DESIGN CONSULTATION</Card.Title>
              <Card.Text>Short description of the feature.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>HOME DESIGN 3D 2D INTERIOR SERVICE</Card.Title>
              <Card.Text>Short description of the feature.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>HOME DESIGN CONSULTATION</Card.Title>
              <Card.Text>Short description of the feature.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
