import React from 'react';
// import logo from '../logo.svg';

import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';


function NavigationBar () {
    return (
    <Navbar bg="transparent" expand='lg'>
        <Navbar.Brand href="#home" className='p-3'>
          {/* <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} */}
          Juan Marquez
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='p-2'>
          <Nav className="ms-auto">
           <Link className='nav-link' to="/">Home</Link>
           <Link className='nav-link' to="/about">About</Link>
           <Link className='nav-link' to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavigationBar;