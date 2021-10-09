import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <Container>
      <Row>
        <Col className='text-center'>
          &copy; copyright {currentDate} | Alore Travels
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
