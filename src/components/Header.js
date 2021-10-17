import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import alore from '../images/alore-logo.png';
// import Link from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar
        fixed='top'
        collapseOnSelect
        expand='lg'
        bg='light'
        variant='light'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={alore} alt='logo' widht='60' height='60' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='#services'>Services</Nav.Link>
              <Nav.Link href='/contactus'>Contact us</Nav.Link>
              <Nav.Link href='/aboutus'>About us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
