/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Home from "../client/components/home";
import NavBar from "../client/components/navbar";
import { NavbarWrapper } from "../client/components/styled/navbar";
import About from "../client/components/about";
import ProgressBar from "react-bootstrap/ProgressBar";

const Starter = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
    </>
  );
};

export default Starter;
