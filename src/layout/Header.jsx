
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Link, NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import logo from '../assets/image/logo.png.png';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineBell, AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Home from "../components/Home";



export default function Header() {


  const [progress, setProgress] = useState(0)

  useEffect(()=>{
    setProgress(progress+40);
    setTimeout(() => {
      setProgress(progress+100);
    }, 2000);
  },[]);


  return (
    <Navbar expand="lg" >

      <Container>
        <LoadingBar
          height={2}
          color='#f11946'
          waitingTime= {400}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand' />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand' aria-labelledby='offcanvasNavbarLabel-expand' placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
              <img src={logo} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-center flex-grow-1 pe-3'>
              <div>
                <NavLink to="/" onClick={() => setProgress(100)}>Home</NavLink>
              </div>
              <div>
                <NavLink to="/Shop" onClick={() => setProgress(100)}>Shop</NavLink>
              </div>
              <div>
                <NavDropdown title="Categories" id='offcanvasNavbarDropdown-expand'>
                  <NavDropdown.Item ><Link to="/Singleproduct" onClick={() => setProgress(100)}>TV</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Watch</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">TWS</NavDropdown.Item>
                  <NavDropdown.Item href="#action5"></NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </div>
              <div>
                <NavLink to="/About" onClick={() => setProgress(100)}>About us</NavLink>
              </div>
              <div>
                <NavLink to="/Contact" onClick={() => setProgress(100)}>Contact us</NavLink>
              </div>

            </Nav>
            <ul className='icon-list'>
              <li>
                <Link to=""> <AiOutlineSearch /></Link>
              </li>
              <li>
                <Link to="/Mycart" onClick={() => setProgress(100)}><AiOutlineShoppingCart /></Link>
              </li>
              <li>
                <Link to=""><AiOutlineBell /></Link>
              </li>
              <li>
                <Link to="/Myorder" onClick={() => setProgress(100)}><AiOutlineHeart /></Link>
              </li>
              <li>
                <Link to="/Page" onClick={() => setProgress(100)}><BiUserCircle /></Link>
              </li>

            </ul>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>

    </Navbar>
  );
}

