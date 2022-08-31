import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar id="navbar" className="justify-content-end">
        <Navbar.Brand href="/home"><em>Sherpa</em></Navbar.Brand>
        <Nav>
            <Nav.Link href='/habits'>Habits</Nav.Link>
            <Nav.Link href='/goals'>Goals</Nav.Link>
            <Nav.Link href='/add-new'>Add New</Nav.Link>
            <Nav.Link href='/profile'>Profile</Nav.Link>
            <Nav.Link href='/login'>Logout</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default NavBar