import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const ProductGrid = () => {

  const productList = [
    {
      name: 'Modern Living Room Set',
      description: 'A stylish and comfortable modern living room set perfect for contemporary homes.'
    },
    {
      name: 'Luxury Bedroom Suite',
      description: 'Transform your bedroom into a luxurious retreat with this beautiful suite.'
    },
    {
      name: 'Sleek Kitchen Cabinetry',
      description: 'High-quality, sleek kitchen cabinetry with plenty of storage for your culinary needs.'
    },
    {
      name: 'Elegant Bathroom Vanity',
      description: 'An elegant bathroom vanity set designed to bring a touch of luxury to any bathroom.'
    },
    {
      name: 'Classic Dining Table',
      description: 'A timeless dining table made from durable wood to elevate your dining experience.'
    },
    {
      name: 'Home Office Workstation',
      description: 'A functional and ergonomic workstation designed to enhance your productivity at home.'
    }
  ];


  const productImages = [
    'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  return (
    <Container className="product-grid py-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row>
        {productImages.map((image, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={image} alt={`Product ${index + 1}`} />
              <Card.Body>
                <Card.Title>{productList.name}</Card.Title>
                <Card.Text>{productImages.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;
