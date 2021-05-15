import React from 'react'
import Home from './home'
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap'

export default function Header(){
    return(
        <>
        <div className="header">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><h4>GroCart</h4></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Home" true>Home</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
      <Nav.Link href="/Catelogue">Catelogue</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
    <b>Call:</b><Nav.Link href="#">099-2346788</Nav.Link>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
      </>
    )
}
