import React from "react";
import { Container, Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import { NavbarWrapper } from "../styled/navbar";

const NavBar = () => {
  return (
    <>
      <NavbarWrapper>
        <Navbar>
          <Nav className="ml-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Portfolio</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar>
      </NavbarWrapper>
    </>
  );
};

export default NavBar;
