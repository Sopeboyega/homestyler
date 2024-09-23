import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProductGrid = () => {
  return (
    <Container className="product-grid py-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row>
        {/* Repeat product card */}
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <Col md={4} key={product}>
            <Card className="mb-4">
              <Card.Img variant="top" src="src\assets\images (2).jpeg" />
              <Card.Body>
                <Card.Title>Product {product}</Card.Title>
                <Card.Text>Description of product {product}.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;
