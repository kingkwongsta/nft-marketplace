import React from "react";
import Image from "next/image";
import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../public/images/logo.svg";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="nav-container">
        <Nav className="nav-left">
          <Navbar.Brand href="#home">
            <Image src={logo} alt="log" />
            NFT Marketplace
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="nav-right">
            <Nav.Link href="#home">Marketplace</Nav.Link>
            <Nav.Link href="#link">Rankings</Nav.Link>
            <Nav.Link href="#link">Connect a wallet</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
