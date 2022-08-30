import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar>
        <Navbar.Brand href="/home">Sherpa</Navbar.Brand>
        <Nav className='ml-auto'>
            <Nav.Link href='/habits'>Habits</Nav.Link>
            <Nav.Link href='/goals'>Goals</Nav.Link>
            <Nav.Link href='/add-new'>Add New</Nav.Link>
            <Nav.Link href='/profile'>Profile</Nav.Link>
            <Nav.Link id='logout-btn'>Logout</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default NavBar