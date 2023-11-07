
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../assets/image/logo.png.png';
import { AiOutlineSearch ,AiOutlineShoppingCart ,AiOutlineBell ,AiOutlineHeart } from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Home  from "../components/Home";


export default function Header() {
  return (
    <Navbar expand="lg" >
    <Container>
      <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls='offcanvasNavbar-expand' />
      <Navbar.Offcanvas
        id='offcanvasNavbar-expand'aria-labelledby='offcanvasNavbarLabel-expand'placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
            <img src={logo} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='justify-content-center flex-grow-1 pe-3'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Shop">Shop</Nav.Link>
            <NavDropdown title="Categories" id='offcanvasNavbarDropdown-expand'>
            <NavDropdown.Item href="/Singleproduct">TV</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Watch</NavDropdown.Item>
            <NavDropdown.Item href="#action4">TWS</NavDropdown.Item>
            <NavDropdown.Item href="#action5"></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/About">About us</Nav.Link>
            <Nav.Link href="/Contact">Contact us</Nav.Link>
            
          </Nav>
          <ul className='icon-list'>
              <li>
                   <a href=""> <AiOutlineSearch/></a>
                 </li>
                 <li>
                   <a href="/Mycart"><AiOutlineShoppingCart/></a>
                 </li>
                 <li>
                 <a href=""><AiOutlineBell/></a>
                 </li>
                 <li>
                   <a href=""><AiOutlineHeart/></a>
                </li>
                <li>
                  <a href="/Page"><BiUserCircle/></a>
                </li>

              </ul>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  );
}

