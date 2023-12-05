import React from "react";
import {FaRegPaperPlane} from "react-icons/fa"
import {BsPhone} from "react-icons/bs";
import logo from '../assets/image/logo.png.png';
import {CiLocationOn} from  "react-icons/ci";
import {CiMail} from "react-icons/ci";
import {SiInstagram} from "react-icons/si";
import {BiLogoFacebook} from "react-icons/bi"
import {AiFillYoutube} from "react-icons/ai"
import {IoLogoTwitter} from "react-icons/io"
import { images } from "../components/utility/Images";

export default function Footer() {
    return (
    <>
        <div className="footer">
           <div className="footer-head">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 pt-50 pb-25 pt-25">
                            <div className="links">
                                <div className="link">
                                    <FaRegPaperPlane/><h4>Sign up to Newsletter</h4>
                                </div>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Enter your email address" />
                                    <button class="btn" type="button">Signup</button>
                                </div>
                            </div>     
                        </div>
                  </div>
                </div> 
           </div>



            <div className="main-footer">
                <div className="container">
                    <div className="row box-content">
                        <div className="col-lg-3 col-md-3 col-sm-3 pt-30">
                                    <img src={logo} alt="" /> 
                                    <h4>Contact</h4>
                                    <div className="contact">
                                    <div className="contact-text"> 
                                         < CiLocationOn/> <p>703, Crown Heights, Rohini <br />
                                         Sector-10,New Delhi-110085</p>
                                                 
                                    </div>
                                    <div className="contact-text">
                                        <CiMail/> <p>1800-121-4704</p>
                                    
                                    </div>
                                    <div className="contact-text">
                                       
                                        <BsPhone/><p>info@cellecor.in</p>
                                    </div>
                                   
                                </div>
                                <div className="social-icons">
                                    <SiInstagram/>
                                    <BiLogoFacebook/>
                                    <IoLogoTwitter/>
                                    <AiFillYoutube/>
                                </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9 pt-30">
                            <div className="footer-content">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                                  <h4>Shop</h4>
                                                <ul className="shop-list">
                                                    
                                                    <li>Smartwatch</li>
                                                    <li>Smart Tv</li>
                                                    <li>soundbar</li>
                                                    <li>Neckband</li>
                                                    <li>TWS</li>
                                                    <li>Earphone</li>
                                                    <li>Charger</li>
                                                    <li>Data Cable</li>
                                                    <li>keypad Phone</li>
                                                    <li>Power Bank</li>
                                                </ul>
                                            </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            
                                                <ul className="shop-list">
                                                    <h4>Help</h4>
                                                    <li>Track Your Order</li>
                                                    <li>Return Policy</li>
                                                    <li>Refund Policy</li>
                                                    <li>Cancelation Policy</li>
                                                    <li>Why Purchase Direct</li>
                                                    <li>Bulk Order</li>
                                                    <li>Warranty Registration</li>
                                                    <li>Locate Service Centers</li>
                                                    <li>FAQs</li>
                                                    <li>Warranty Policy</li>
                                                </ul>
                                            </div>
                                        
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            
                                                <ul className="shop-list">
                                                    <h4>Company</h4>
                                                    <li>About Cellecor</li>
                                                    <li>News</li>
                                                    <li>Blog</li>
                                                    <li>Articles</li>
                                                    <li>Careers</li>
                                                    <li>Terms of services</li>
                                                    <li>Privacy Policy</li>
                                                    <li>Financials</li>
                                                    <li>Marketing</li>
                                                </ul>
                                        </div>
                                        
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            
                                                <ul className="shop-list">
                                                    <h4>My Account</h4>
                                                    <li>Login & Security</li>
                                                    <li>Your Address</li>
                                                    <li><a href="/Myorder">Your Orders</a></li>
                                                    <li>Your Wishlist</li>
                                                    <li>Return Status</li>
                                                    <li>Refund Status</li>
                                                </ul>
                                            
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-end">
                    <div className="container">
                    <div className="flax">
                                <p>Copyright©2023 <b>Ebslon Infotech Pvt Ltd</b> All rights reserved.</p>
                                <img src={images.footerend} alt="" />   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
      
    );
  }

