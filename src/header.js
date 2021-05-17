import React from 'react'
import Home from './home'
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap'

export default function Header(){
    return(
        <div  className="App-h1 text-dark"><b>
        <Navbar bg="#111111" expand="lg">
          <Navbar.Brand href="/Home" ><h4><img src="/logo.png" className="App-h1"></img></h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/Home" true>Home</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                  <NavDropdown title="Location" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Catelogue">Kandukur</NavDropdown.Item>
                    <NavDropdown.Item href="/Catelogue1">Ongole</NavDropdown.Item>
                    <NavDropdown.Item href="/Catelogue2">Palukur</NavDropdown.Item>
                    <NavDropdown.Item href="/Catelogue3">Bhimavaram</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Other">Other</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/About">About</NavDropdown.Item>
                    <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
                    <NavDropdown.Item href="/Faqs">FAQ's</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Other">Other</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <Form inline>
                <div class="text-right">
                  <b><i> Call: </i></b> 099-2346788
                </div>
              </Form>
            </Navbar.Collapse>
          </Navbar></b>
        </div>
    )
}
