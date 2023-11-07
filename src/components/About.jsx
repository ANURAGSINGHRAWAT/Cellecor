import React, { } from 'react'
import { images } from './utility/Images'
import { AiOutlineArrowRight } from "react-icons/ai"
import {icons } from 'react-icons'
import {AiOutlineCalendar} from 'react-icons/ai'
import {CiHeadphones} from 'react-icons/ci'
import {LuNetwork} from 'react-icons/lu'
import {AiOutlinePercentage} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';


export default function About() {
    const cateslider ={
        300: {
          slidesPerView: 1.5
        },

        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5
        },
      }



    return (
        <>
            <div className="about-txt">
                <div className="container">
                    <div className="txt">
                        About our company
                    </div>
                </div>
            </div>

            <div className="aim">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="aim-txt">
                                <h4>Everything we do we aim to encourage the <br />
                                    customer to opt for technology at pocket-friendly prices</h4>
                                <p>Cellecor has always been at the forefront of providing excellent communication solutions to its customers.
                                    This long and successful journey started in the year 2011 when Cellecor introduced basic feature phones and landlines to make user communication efficient.
                                    After its success, Cellecor moved further with bulk shipments of phones from China like many popular mobile brands in 2014 and expanded the business.
                                    Then we further add on the categories like Smartwatch for men and women, Wireless earphones/headphones, keypad mobile,
                                    charging cables, mobile charger, and backpacks.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="aim-img">
                                < img src={images.aimimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="values">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="value-img">
                                <img src={images.valueimg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="value-txt">
                                <h4>Our values</h4>
                                <p>Odio augue placerat est, nec semper nisl erat ac ex el convallis ligula commodo ac.
                                    Aenean congue. Nunc eu tellus pellentesque nulla eget maximus elementum!
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <ul className='value-list'>
                                    <li className='list'><AiOutlineArrowRight /> 100% client satisfaction is our priority</li>
                                    <li className='list'> <AiOutlineArrowRight />Using complex & reliable digital solutions</li>
                                    <li className='list'> <AiOutlineArrowRight />High customer support standards</li>
                                    <li className='list'> <AiOutlineArrowRight />Working with leading market experts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="degien-img ">
                <img src={images.degienimg} alt="" />
            </div>

            <div className="about-text">
                <div className="container">
                    <div className="row">
                      <div className="about-sec1">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="text-1">
                                        <div className="icon">
                                            <AiOutlineCalendar/>
                                        </div>
                                        <h4>Reach experience</h4>
                                        <p>Ipsum amet - lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Donec non porttitor nunc. Curabitur et mattis. Maecenas sit amet commodo lorem ipsum dolor tellut!
                                        </p>
                                    </div>
                                </div>
                            
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="text-2">
                                        <div className="icon">
                                            <CiHeadphones/>
                                        </div>
                                        <h4>Great client support</h4>
                                        <p>Curabitur et mattis lorem nulla glavrida - ante consectetur adipiscing elit. Maecenas sit amet commodo tellut consectetur elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo nibh tellus adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="text-3">
                                        <div className="icon">
                                            <LuNetwork/>
                                        </div>
                                        <h4>Complex solutions</h4>
                                        <p>Ipsum dolor adipiscing elit. Donec non porttitor nunc. Curabitur et mattis. Maecenas sit amet commodo lorem ipsum dolor tellut!
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                      <div className="about-sec2 pt-50">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="text-4">
                                        <div className="icon">
                                            <AiOutlineCalendar/>
                                        </div>
                                        <h4>Unique technologies</h4>
                                        <p>IIpsum amet - lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non porttitor nunc, et suscipit urna. Ipsum amet - lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                            
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="text-5">
                                        <div className="icon">
                                            <AiOutlinePercentage/>
                                        </div>
                                        <h4>Flexible prices</h4>
                                        <p>Lorem nulla glavrida - ante consectetur adipiscing elit. Maecenas sit amet commodo tellut consectetur adipiscing elit. Donec non porttitor nunc.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="text-6">
                                        <div className="icon">
                                            <CgProfile/>
                                        </div>
                                        <h4>Top industry specialists</h4>
                                        <p>Nulla amet - et mattis lorem nulla glavrida - ante consectetur adipiscing elit. Maecenas sit amet commodo tellut consectetur adipiscing elit. Donec non porttitor nunc elit mattis, pulvinar dapibus leo nibh tellus.
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="degien-img2">
                <img src={images.degienimg2} alt="" />
            </div>

            <div className="brand pt-40">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="brand-heading">
                        <h4>We are available on</h4>
                      </div>
                    </div>
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={5}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={cateslider}
                      modules={[Autoplay]}
                      className="mySwiper">
                      <SwiperSlide><img src={images.brandicon1} alt="" /></SwiperSlide>
                      <SwiperSlide><img src={images.brandicon2} alt="" /></SwiperSlide>
                      <SwiperSlide> <img src={images.brandicon3} alt="" /></SwiperSlide>
                      <SwiperSlide> <img src={images.brandicon4} alt="" /></SwiperSlide>
                      <SwiperSlide><img src={images.brandicon5} alt="" /></SwiperSlide>
                      <SwiperSlide><img src={images.brandicon1} alt="" /></SwiperSlide>
                      <SwiperSlide><img src={images.brandicon2} alt="" /></SwiperSlide>
                      <SwiperSlide> <img src={images.brandicon3} alt="" /></SwiperSlide>
                      <SwiperSlide> <img src={images.brandicon4} alt="" /></SwiperSlide>
                      <SwiperSlide><img src={images.brandicon5} alt="" /></SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>

        </>
    )
}

