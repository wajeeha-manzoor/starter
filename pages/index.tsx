/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Home from "../client/components/home";
import NavBar from "../client/components/navbar";
import { Container, Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import { NavbarWrapper } from "../client/components/styled/navbar";

const Starter = () => {
  return (
    <>
      <NavBar/>
      <Home />
    </>
  );
};

export default Starter;
