import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./layout/Header";
import Shop from "./components/shop";
import Singleproduct from "./components/Singleproduct"
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Blogdetails from "./components/Blogdetails";
import Myorder from "./components/Myorder";
import Mycart from "./components/Mycart";
import Page from "./components/profileleftbar/Page";
import Login from "./components/loginlogoutlayout/Login";
import "./css/style.css";
import './css/responsive.css';
import './css/variable.css';
import { icons } from "react-icons";
import Footer from './layout/Footer';
import Address from "./components/profileleftbar/profile.components/Address";


const index = lazy(() => import('./components/Home'))
const shop = lazy(() => import('./components/shop'))
const about = lazy(() => import('./components/About'))
const contact = lazy(() => import('./components/Contact'))
const blog = lazy(() => import('./components/Blog'))

function App() {

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Header />

      <Routes>

        <Route path="/" exact element={< Home />}></Route>
        <Route path="/Shop" exact element={< Shop />}></Route>
        <Route path="/About" exact element={< About />}></Route>
        <Route path="/Contact" exact element={<Contact />}></Route>
        <Route path="/Blog" exact element={<Blog />}></Route>
        <Route path="/Blogdetails" exact element={<Blogdetails />}></Route>
        <Route path="/Singleproduct" exact element={<Singleproduct />}></Route>
        <Route path="/Myorder" exact element={<Myorder />}></Route>
        <Route path="/Mycart" exact element={<Mycart />}></Route>
        <Route path="/Page" exact element={< Page />}></Route>
        <Route path="/Login" exact element={< Login />}></Route>

      </Routes>

      <Footer />
    </Suspense>
  );
}

export default App;
