import React, { } from 'react'
import {SlLocationPin} from 'react-icons/sl'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import { IframeHTMLAttributes } from 'react'
import { images } from './utility/Images'


export default function Contact() {


    return (
        <>
        <div className="contact-txt pt-40">
            <div className="container">
                <div className="txt">
                    <h4>Get in touch</h4>
                    <p>If you’ve got great products your making or looking to work with
                     us then drop us a line</p>
                </div>
            </div>
        </div>

        <div className="contact-info pt-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="contact-txt">
                        <div className="icon"><SlLocationPin/></div>
                        <div className="text">703, CROWN HEIGHTS, ROHINI SECTOR-10, NEW DELHI-110085</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="contact-txt">
                        <div className="icon"><BiPhoneCall/></div>
                        <div className="text2">1800-121-4704</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="contact-txt">
                        <div className="icon"><AiOutlineMail/></div>
                        <div className="text3">INFO@CELLECOR.IN</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="map pt-40">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111954.1847336692!2d77.20235733266553!3d28.732445589855413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc0f40000001%3A0xb58e9de805b150f5!2sNsp%20Associates!5e0!3m2!1sen!2sin!4v1698049559292!5m2!1sen!2sin"  height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
           </div>
        </div>

        <div className="contact-form pt-40">
            <div className="container">
            <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="txt">
                                <div className="form-content">
                                    <h4>Drop us message</h4>
                                    <p>If you’ve got great products your making or looking to work with us then drop us a line</p>
                                </div>
                            
                                <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Your Name</label>
                                        <input type="text" class="form-control" placeholder='Name' />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Your Email</label>
                                        <input type="text" class="form-control" placeholder='Email' />
                                    </div>
                                </div>
                                
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Your Phone Number</label>
                                        <input type="text" class="form-control" placeholder='Number' />
                                    </div>
                                </div>
                                
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Select Category</label>
                                        <select class="form-select" >
                                            <option selected>Select</option>
                                            <option value="return">Return</option>
                                            <option value="replace">Replace</option>
                                            <option value="refund">Refund</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Your message</label>
                                        <textarea class="form-control"  rows={8} placeholder="Leave a comment here" />
                                    </div>
                                </div>
                                <div className="btn">Send a message</div>      
                          </div>  
                       
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                        <div className="contact-img">
                            <img src={images.contactimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

