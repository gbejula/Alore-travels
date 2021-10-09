import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import alore from '../images/alore-logo.png';

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
          <Navbar.Brand href='#home'>
            <img src={alore} alt='logo' widht='60' height='60' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'>
            <Nav className='mr-auto'>
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link href='/link'>About us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
