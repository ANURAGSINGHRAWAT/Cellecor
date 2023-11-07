      import React, { useRef, useState } from 'react'
      import { Swiper, SwiperSlide } from 'swiper/react';
      import 'swiper/css';
      import { Autoplay, Pagination, Navigation } from 'swiper/modules';
      import { images } from './utility/Images';
      import { BiLogoDailymotion } from 'react-icons/bi';




      export default function Home() {

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
      const sliderpro ={
        300: {
          slidesPerView: 2
        },

        640: {
          slidesPerView: 3,
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
            <div className="body">
              <div className='banner'>
                <div className="container">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                 

                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="image">
                        <img src={images.banner1} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image">
                        <img src={images.banner1} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="image">
                        <img src={images.banner1} alt="" />
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </div>
              </div>

              <div className="mini-slider pt-50">
                <div className="container">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={5.8}
                    // autoplay={{
                    //   delay: 2500,
                    //   disableOnInteraction: false,
                    // }}
                    breakpoints={cateslider}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="slider-icon">
                        <img src={images.icon1} alt="" />
                        <div className="icon-text">
                          TWS
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-icon">
                        <img src={images.icon2} alt="" />
                        <div className="icon-text">
                          Smart tv
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-icon">
                        <img src={images.icon3} alt="" />
                        <div className="icon-text">
                          Speaker sound bar
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-icon">
                        <img src={images.icon4} alt="" />
                        <div className="icon-text">
                          Power bank
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-icon">
                        <img src={images.icon5} alt="" />
                        <div className="icon-text">
                          Mobile
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-icon">
                        <img src={images.icon6} alt="" />
                        <div className="icon-text">
                          Data cable
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-icon">
                        <img src={images.icon1} alt="" />
                        <div className="icon-text">
                          TWS
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-icon">
                        <img src={images.icon2} alt="" />
                        <div className="icon-text">
                          Smart tv
                        </div>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </div>
              </div>


              <div className="fixed-img pt-50">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12  position-relative">
                      <div className="img-content">
                        <h3>TWS</h3>
                        <button className='btn'>Shop Now</button>
                      </div>
                      <img src={images.fixed1} alt="" className='img1' />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3  position-relative ">
                          <div className="img-content1">
                            <h3>Tv</h3>
                            <button className='btn'>Shop Now</button>
                          </div>
                          <img src={images.fixed2} alt="" className='img2' />
                        </div>
                        <div className=" col-lg-12 col-md-12 col-sm-12  position-relative">
                          <div className="img-content2">
                            <h3>Sound Bar</h3>
                            <button className='btn'>Shop Now</button>
                          </div>
                          <img src={images.fixed3} alt="" className='img2' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>




              <div className="products pt-50">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="pro-heading">
                        <h4>Top Products</h4>
                        <button className="btn">View All</button>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-30">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={5}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={sliderpro}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg1} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg2} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg3} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg4} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg5} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg1} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg2} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="row pt-30">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={5}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={sliderpro}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg1} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg2} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg3} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg4} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg5} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg1} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider-pro">
                          <div className="img-product">
                            <img src={images.proimg2} alt="" />
                          </div>
                          <div className="pro-text">
                            <p>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</p>
                            <h3>₹9,119.00</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>


              <div className="info pt-50">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 pb-10">
                      <div className="info-icon" >
                        <img src={images.info1} alt="" />
                        <div className="info-text">
                          <h4>EASY RETURNS</h4>
                          <p>Shop With Confidence</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 pb-10">
                      <div className="info-icon" >
                        <img src={images.info2} alt="" />
                        <div className="info-text">
                          <h4>Shop With Confidence</h4>
                          <p>Delicated 24/7 Support</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 pb-10">
                      <div className="info-icon" >
                        <img src={images.info3} alt="" />
                        <div className="info-text">
                          <h4>FREE SHIPPING</h4>
                          <p>Capped at $50 per order</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 pb-10">
                      <div className="info-icon" >
                        <img src={images.info1} alt="" />
                        <div className="info-text">
                          <h4>CARD PAYMENT</h4>
                          <p>12 Months Installments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="slider pt-50">
                <div className="container">
                  <div className="row ">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={3}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={cateslider}
                      modules={[Autoplay]}
                      className="mySwiper">
                      <SwiperSlide>
                        <div className="slider1">
                          <div className="img-slider">
                            <img src={images.slide1} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider1">
                          <div className="img-slider">
                            <img src={images.slide2} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider1">
                          <div className="img-slider">
                            <img src={images.slide3} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider1">
                          <div className="img-slider">
                            <img src={images.slide1} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider1">
                          <div className="img-slider">
                            <img src={images.slide2} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="slider1">
                          <div className="img-slider">
                            <img src={images.slide3} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>

                </div>
              </div>
              <div className="fixed-img2 pt-50 pb-50">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                      <div className="row">
                        <div className="col-12 col-md-12 col-sm-12">
                          <div className="img-content1">
                            <div className="img-text1">
                              <h3>NeckBand</h3>
                              <button className='btn'>Shop Now</button>
                            </div>
                            <img src={images.fixedimg1} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="row pt-30">


                        <div className="col-lg-6 col-md-6 col-sm-12 pb-10">
                          <div className="img-content2">
                            <div className="img-text2">
                              <h3>Data Cable</h3>
                              <button className='btn'>Shop Now</button>
                            </div>
                            <img src={images.fixedimg3} alt="" />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 pb-10">
                          <div className="img-content3">
                            <div className="img-text3">
                              <h3>Earphone</h3>
                              <button className='btn'>Shop Now</button>
                            </div>
                            <img src={images.fixedimg4} alt="" />
                          </div>
                        </div>


                      </div>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 pb-10">
                      <div className="img-content4">
                        <div className="img-text4">
                          <h3>SmartWatch</h3>
                          <button className='btn'>Shop Now</button>
                        </div>
                        <img src={images.fixedimg2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="brand ">
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

              <div className="blog pt-50">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="blog-heading">
                        <h3>Blog</h3>
                        <a href='/Blog' className="btn">View All</a>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-50">
                    <div className="col-lg-6 col-md-6 col-sm-12 pb-10">
                      <div className="blog-main">
                        <div className="blog-img">
                          <img src={images.blogicon1} alt="" />
                        </div>
                        <div className="blog-text">
                          <h4>Advantages of Bluetooth Earbuds for Music Lovers</h4>
                          <h5>APRIL 7, 2023</h5>
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Curabitur id suscipit ex.
                            Suspendisse rhoncus laoreet purus quis elementum.
                            Phasellus sed efficitur dolor, et ultricies sapien.
                          </p>
                          <button className="btn">Read more</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="blog-main">
                        <div className="blog-img">
                          <img src={images.blogicon1} alt="" />
                        </div>
                        <div className="blog-text">
                          <h4>Advantages of Bluetooth Earbuds for Music Lovers</h4>
                          <h5>APRIL 7, 2023</h5>
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Curabitur id suscipit ex.
                            Suspendisse rhoncus laoreet purus quis elementum.
                            Phasellus sed efficitur dolor, et ultricies sapien.
                          </p>
                          <button className="btn">Read more</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="big-banner pt-50">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="banner">
                      <img src={images.bigbanner} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </>

        )
      }

