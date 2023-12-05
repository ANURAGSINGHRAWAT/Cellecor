import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { images } from './utility/Images';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';


import Proimg1 from "../assets/image/proimg1.png";
import Proimg2 from "../assets/image/proimg2.png";
import Proimg3 from "../assets/image/proimg3.png";
import Proimg4 from "../assets/image/proimg4.png";
import Proimg5 from "../assets/image/proimg5.png";


export default function Shop() {
  const [name, setName] = useState("Short by")
  const [cutprice, setCutprice] = useState("Short by")

  const [product, setProduct] = useState([
    {
      image: Proimg1,
      name: "Sound Bar",
      mainprice: '200',
      cutprice: '300',
    },
    {
      image: Proimg2,
      name: "TWS",
      mainprice: '200',
      cutprice: '300',
    },
    {
      image: Proimg3,
      name: "Power Bank",
      mainprice: '200',
      cutprice: '300',
    },
    {
      image: Proimg4,
      name: "TWS",
      mainprice: '200',
      cutprice: '300',
    },
    {
      image: Proimg1,
      name: "Sound Bar",
      mainprice: '200',
      cutprice: '500',
    },
    {
      image: Proimg3,
      name: "Power Bank",
      mainprice: '300',
      cutprice: '500',
    },
    {
      image: Proimg5,
      name: "TWS",
      mainprice: '300',
      cutprice: '500',
    },
    {
      image: Proimg3,
      name: "Power Bank",
      mainprice: '200',
      cutprice: '300',
    },
    {
      image: Proimg1,
      name: "Sound Bar",
      mainprice: '200',
      cutprice: '300',
    },
  ])
  useEffect(() => {
    if (name != 'Short by') {
      let tempArr = product.filter((el) => el.name == name);
      setOrderArr(tempArr)
    } else {
      setOrderArr(product)

    }

  }, [name])
  useEffect(() => {
    if (cutprice != 'Short by') {
      let tempArr = product.filter((el) => el.cutprice == cutprice);
      setOrderArr(tempArr)
    } else {
      setOrderArr(product)

    }

  }, [cutprice])
  const [orderArr, setOrderArr] = useState(product)

  const cateslider = {
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
  const sliderpro = {
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
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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


      <div className="products pt-40">
        <div className="container">

          <div className="row">

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="title">
                <div className="title-text">
                  <h4>20 Products</h4>
                </div>
                <div className="filtter">
                  <div className="filtter1">
                    <h4>Filter:</h4>
                    <select className="fillter" value={name} onChange={(el) => setName(el.target.value)}>
                      <option value="Short by">Product</option>
                      <option value="TWS">TWS</option>
                      <option value="Sound Bar">Sound Bar</option>
                      <option value="Power Bank">Power Bank</option>
                    </select>

                    <select className="fillter" value={cutprice} onChange={(el) => setCutprice(el.target.value)}>
                      <option value="Short by">cutprice</option>
                      <option value="300">300</option>
                      <option value="500">500</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-items pt-30 ">
        <div className="container">
          <div className="row">
            {
              orderArr.map((el, index) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-12 pt-30" key={index}>

                    <div className='box'>
                      <div className="box-image">
                        <img src={el.image} alt="" />
                      </div>
                      <div className="box-text pt-30 ">
                        <h4>{el.name}</h4>
                        <p>24 Hr paytime</p>
                        <div className="price">
                          <div className="buy">
                            <span className='cut-price'>${el.cutprice}</span>
                            <span>${el.mainprice}</span>
                          </div>
                          <div className="btn">Buy Now</div>

                        </div>
                      </div>
                    </div>
                  </div>

                )
              })
            }
            <Pagination className='page pt-30'>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </div>
      </div>

      <div className="explore pt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="title">
                <div className="title-text">
                  <h4>Explore by Category</h4>
                </div>
                <div className="btn">View all</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-item pt-30 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 pb-10">
                  <div className="img-content1">
                    <div className="img-text1">
                      <h3>NeckBand</h3>
                      <button className='btn'>Shop Now</button>
                    </div>
                    < img src={images.shopimage2} alt="" />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 pb-10">
                  <div className="img-content2">
                    <div className="img-text2">
                      <h3>Charger</h3>
                      <button className='btn'>Shop Now</button>
                    </div>
                    <img src={images.shopimage1} alt="" />
                  </div>
                </div>

              </div>

              <div className="row pt-30">
                <div className="col-lg-6 col-md-6 col-sm-12 pb-10">
                  <div className="img-content3">
                    <div className="img-text3">
                      <h3>Data Cable</h3>
                      <button className='btn'>Shop Now</button>
                    </div>
                    <img src={images.fixedimg3} alt="" />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 pb-10">
                  <div className="img-content4">
                    <div className="img-text4">
                      <h3>Earphone</h3>
                      <button className='btn'>Shop Now</button>
                    </div>
                    <img src={images.fixedimg4} alt="" />
                  </div>
                </div>


              </div>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 pb-10">
              <div className="img-content5">
                <div className="img-text5">
                  <h3>SmartWatch</h3>
                  <button className='btn'>Shop Now</button>
                </div>
                <img src={images.fixedimg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="discription pt-30">
        <div className="container">
          <div className="dis-main">
            <div className="dis-text">
              <h4>Cellecor TWS Bluetooth Earbuds - Best Wireless Earphones in India</h4>
              <p>Cellecor is one of the most popular audio device brands in India offering a plethora of top & best TWS earbuds or earpods in the market. With a surround-sound experience, Cellecor Bluetooth earpods are considered one of the best earbuds in the market. Design, build quality, audio quality, and added features have made the Cellecor earbuds very popular among audio device customers. These features include active noise cancelling, waterproof or water resistance, extra bass, fast charging, quad mics, the latest Bluetooth technology, and a few others.
                As mentioned, Cellecor wireless earphones or earpods come with a lot of features, we have explained them below. So read on.
              </p>
              <span>Top Features Offered By Cellecor True Wireless Earbuds:</span>
            </div>
            <ul className="dis-list">
              <li>
                <h4>BoomXTM Bass Technology:</h4>
                <p>
                  Cellecor true wireless earbuds come with BoomXTM technology that provides extra bass in the speakers to enhance the quality of sound and improve the overall audio experience.
                  ii. Lightning TM Cellecor Fast Charging:
                  All wireless and Bluetooth earbuds from Cellecor have been incorporated with this fast-charging technology which offers hours of playtime for a few minutes of charging.
                </p>
              </li>
              <li>
                <h4> Long Battery Backup:</h4>
                <p>
                  Embedded with efficient and powerful batteries, Cellecor TWS wireless earbuds or earpods are able to offer hours of playtime lasting for a couple of days. This frees the users from charging their TWS earbuds at small intervals.</p>
              </li>
              <li>
                <h4> Blink & PairTM Connectivity:</h4>
                <p>The Blink & PairTM connectivity technology allows users to connect their TWS earbuds to their smartphones or laptops within a fraction of a second through the latest Bluetooth technology. It also helps them to have a seamless sound experience without any loss of connection.
                </p>
              </li>
              <li>
                <h4> Comfort Fit Design:</h4>
                <p>If you are using your TWS earbuds for a long time or even for a few minutes, then they should not cause any pain or discomfort in your ears. Cellecor Bluetooth earbuds are designed in such a way that they can be used for long hours comfortably.</p>
              </li>
              <li>
                <h4>Active Noise Cancellation (ANC):</h4>
                <p>Cellecor true wireless earbuds are considered among the top noise cancelling earbuds in the Indian audio device market because of their quality and affordability. ANC earbuds or earpods are quite expensive in the market, but Cellecor provides inexpensive yet excellent noise cancelling earphones incorporated with ANC.
                </p>
              </li>
              <li>
                <h4>Environmental Noise Cancellation (ENC) & Quad Mics:</h4>
                <p>Incorporated with HD mics and environmental noise cancellation, the true wireless earbuds from Cellecor provide a noiseless calling experience and let the other party listen to you clearly. This feature also helps in online gaming, video conferencing, and other places where you need to convey your voice.</p>
              </li>
              <li>
                <h4>Water Resistance:</h4>
                <p>All Cellecor Bluetooth earbuds are water-resistant and can withstand mild spills, drops and splashes very easily. These waterproof earbuds can be carefreely used in rain and shower easily.
                  All these features, together, make Cellecor Bluetooth earphones one of the best-selling TWS earbuds audio devices in India.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="faq pt-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h4>FAQs</h4>
            </div>
          </div>
          <div className="row pt-20 ">
            <div className="col-lg-9 col-md-9 col-sm-12">
              <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Payment for the order has been deducted from my account, but no order details have been received?</Accordion.Header>
                  <Accordion.Body>
                    You order details may have not been captured with us. The amount will be refunded to your account in next 5-7 days
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What payment options do you have?</Accordion.Header>
                  <Accordion.Body>
                    You order details may have not been captured with us. The amount will be refunded to your account in next 5-7 days
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>What payment options do you have?</Accordion.Header>
                  <Accordion.Body>
                    You order details may have not been captured with us. The amount will be refunded to your account in next 5-7 days
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>What types of furniture can you offer?</Accordion.Header>
                  <Accordion.Body>
                    You order details may have not been captured with us. The amount will be refunded to your account in next 5-7 days
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Do you offer a free initial consultation?</Accordion.Header>
                  <Accordion.Body>
                    You order details may have not been captured with us. The amount will be refunded to your account in next 5-7 days
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Where can I get more information on the interiors?</Accordion.Header>
                  <Accordion.Body>
                    You order details may have not been captured with us. The amount will be refunded to your account in next 5-7 days
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>How can you design small spaces?</Accordion.Header>
                  <Accordion.Body>
                    You order details may have not been captured with us. The amount will be refunded to your account in next 5-7 days
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>Do you offer a free initial consultation?</Accordion.Header>
                  <Accordion.Body>
                    You order details may have not been captured with us. The amount will be refunded to your account in next 5-7 days
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="faq-img">
                <img src={images.shopimage3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
