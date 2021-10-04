import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";

class NavBar extends React.Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container >
          <Navbar.Brand href="/">My finances</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/" >BALANCE</Nav.Link>
            <Nav.Link className="ml-1" href="/abm">ABM-OPERATIONS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar;