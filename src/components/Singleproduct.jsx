import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { images } from './utility/Images';
import Accordion from 'react-bootstrap/Accordion';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import sipro1 from "../assets/image/sipro1.png";
import sipro2 from "../assets/image/sipro2.png";
import sipro3 from "../assets/image/sipro3.png";
import sipro4 from "../assets/image/sipro4.png";
import sipro5 from "../assets/image/sipro5.png";
import sipro6 from "../assets/image/sipro6.png";
import chat from "../assets/image/chat.png";
import card from "../assets/image/Card Payment.png";
import shipping from "../assets/image/Shipping.png";
import sheild from "../assets/image/Shield.png";
import tech1 from "../assets/image/tech1.png";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { BiPlus } from "react-icons/bi"
import { Pagination } from 'react-bootstrap';


export default function Singleproduct() {

    const [thumbsSwiper, setThumbsSwiper] = React.useState();

    const [sipro, setsipro] = useState([
        {
            img: sipro1,
        },
        {
            img: sipro2,
        },
        {
            img: sipro3,
        },
        {
            img: sipro4,
        },
        {
            img: sipro5,
        },

    ]);
    const [activeItem, setactiveItem] = useState(0)
    const click = (index) => {
        setactiveItem(index);
    };
    const [count, setcount] = useState(1)
    const increase = () => {
        setcount(count + 1);
    };
    const decrease = () => {
        if (count > 1) {
            setcount(count - 1);
        }
    };


    const [color, setcolor] = useState([
        {
            code: "#000",
            name: "Black",
            active: true,
        },
        {
            code: "#FFF",
            name: "White",
            active: false,

        },
        {
            code: "blue",
            name: "Blue",
            active: false,

        },
    ]);
    const [info, setinfo] = useState([
        {
            icon: chat,
            txt: 'SUPPORT 24/7',
        },
        {
            icon: shipping,
            txt: 'FREE SHIPPING',
        },
        {
            icon: card,
            txt: 'CARD PAYMENT',
        },
        {
            icon: sheild,
            txt: '1 Year Warranty',
        },

    ]);
    const [review, setreview] = useState([
        {
            logo: "J",
            iconTxt: "Justin G",
            verf: "Verified",
            date: "19/01/2023",
            pro: "Best Product",
            para: "I recently purchased the Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV and I must say, I am thoroughly impressed with its performance. The picture quality is outstanding, with vivid colors and sharp details that make for an immersive viewing experience. It's worth noting that from about 4 feet away, some pixels are visible, but this is only noticeable if you're up close and personal with the TV",
        },
        {
            logo: "J",
            iconTxt: "Justin G",
            verf: "Verified",
            date: "19/01/2023",
            pro: "Best Product",
            para: "I recently purchased the Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV and I must say, I am thoroughly impressed with its performance. The picture quality is outstanding, with vivid colors and sharp details that make for an immersive viewing experience. It's worth noting that from about 4 feet away, some pixels are visible, but this is only noticeable if you're up close and personal with the TV",
        },
        {
            logo: "J",
            iconTxt: "Justin G",
            verf: "Verified",
            date: "19/01/2023",
            pro: "Best Product",
            para: "I recently purchased the Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV and I must say, I am thoroughly impressed with its performance. The picture quality is outstanding, with vivid colors and sharp details that make for an immersive viewing experience. It's worth noting that from about 4 feet away, some pixels are visible, but this is only noticeable if you're up close and personal with the TV",
        },
        {
            logo: "J",
            iconTxt: "Justin G",
            verf: "Verified",
            date: "19/01/2023",
            pro: "Best Product",
            para: "I recently purchased the Redmi 80 cm (32 inches) HD Ready Smart LED Fire TV and I must say, I am thoroughly impressed with its performance. The picture quality is outstanding, with vivid colors and sharp details that make for an immersive viewing experience. It's worth noting that from about 4 feet away, some pixels are visible, but this is only noticeable if you're up close and personal with the TV",
        },
    ]);

    return (
        <>
            <div className="single_pro pt-40 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-1">
                            <div className="small_img">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"

                                >
                                    {
                                        sipro.map((el, index) => {
                                            return (
                                                <SwiperSlide key={index}>

                                                    <img src={el.img} alt="" />
                                                </SwiperSlide>
                                            )
                                        })
                                    }


                                </Swiper>

                            </div>


                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="big_img">
                                <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    // navigation={true}//
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    {
                                        sipro.map((el, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <img src={sipro6} alt="" />
                                                </SwiperSlide>
                                            )
                                        })
                                    }


                                </Swiper>


                            </div>

                        </div>


                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="pro_txt">
                                <div className="head_txt">
                                    <h4>Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)</h4>
                                </div>
                                <div className="price">
                                    <p className="cutprice">₹15,999.00</p>
                                    <p className='price_act'>₹9,119.00</p>
                                </div>
                                <div className="color_btn">

                                    {color && color.map((el, index) => (
                                        <div className={`btn_box`} style={{ border: index === activeItem ? `2px solid ${el.code}` : "", borderRadius: "20px", padding: "10px" }} onClick={() => click(index)} key={index}>
                                            <p style={{ backgroundColor: el.code }}></p>
                                            <h4>{el.name}</h4>
                                        </div>
                                    ))}
                                </div>
                                <div className="wranty_txt">
                                    <p>Warranty: 2 Year Standard Manufacturer Warranty from Cellecor...</p>
                                    <span>Read More</span>
                                </div>
                                <div className="add_pro">
                                    <div className="button">
                                        <button className="btn" onClick={() => decrease()} ><AiOutlineMinus /></button>
                                        <h4>{count}</h4>
                                        <button className="btn" onClick={() => increase()}><BsPlusLg /></button>
                                    </div>
                                    <div className="buy_pro"><button className="btn">Buy Now</button></div>
                                    <div className="add_wish"><buton className="btn">Add to Wishlist</buton></div>
                                </div>

                                <div className="bottm_del" >
                                    {
                                        info.map((el, index) => (

                                            <div className="info-icon" key={index} >
                                                <img src={el.icon} alt="" />
                                                <div className="info-text">
                                                    <p>{el.txt}</p>
                                                </div>
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="quick_guide">
                <div className="container">
                    <div className="quick_head">
                        <h4>Quick Guide</h4>
                    </div>
                    <div className="row pt-20">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="quick_img">
                                <img src={images.quick1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="quick_img">
                                <img src={images.quick2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-30">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="quick_img">
                                <img src={images.quick3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-20">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="quick_img">
                                <img src={images.quick4} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="quick_img">
                                <img src={images.quick5} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-20">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="quick_img">
                                <img src={images.quick6} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <div className="quick_img">
                                <img src={images.quick7} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tech_del pt-40">
                <div className="container">
                    <div className="tech_head">
                        <h4>Technical Details</h4>
                        <h4>Additional Information</h4>
                    </div>
                    <div className="row pt-30">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="tech_txt">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-30">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="tech_info">
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Model</td>
                                            <td>#8786867</td>
                                        </tr>
                                        <tr>
                                            <td>Style</td>
                                            <td>Classic style</td>
                                        </tr>
                                        <tr>
                                            <td>Certificate</td>
                                            <td>ISO-898921212</td>
                                        </tr>
                                        <tr>
                                            <td>Size</td>
                                            <td>34mm x 450mm x 19mm</td>
                                        </tr>
                                        <tr>
                                            <td>Memory</td>
                                            <td>36GB RAM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="ulist">
                                <ul className="list mb-10">
                                    <li><BsCheck />Some great feature name here</li>
                                    <li><BsCheck />Lorem ipsum dolor sit amet, consectetur</li>
                                    <li><BsCheck />Duis aute irure dolor in reprehenderit</li>
                                    <li><BsCheck />Some great feature name here</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="tech_img pt-40">
                <img src={tech1} alt="" />
            </div>
            <div className="faq_txt pt-40">
                <div className="container">
                    <div className="faq_head">
                        FAQ
                    </div>
                </div>
                <div className="container">
                    <div className="row pt-20 ">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="faq_info">
                                <Accordion defaultActiveKey="0" >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> <h4>Payment for the order has been deducted from my account, but no order details have been received?</h4></Accordion.Header>
                                        <Accordion.Body>
                                            <p>You order details may have not been captured with us. The amount will be refunded to your account in next 5-7 days</p>
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

                        </div>
                    </div>
                </div>
            </div>
            <div className="review pt-40">
                <div className="container">
                    <div className="review_txt">
                        <h4>Review</h4>
                        <button className='btn'> <BiPlus /> Wirte a Review</button>
                    </div>
                    <div className="row">

                        {
                            review.map((el, index) => (
                                <div className="col-lg-6 col-md-6 col-sm-6  pt-30" key={index}>
                                    <div className="rew_content" >
                                        <div className="main_content">
                                            <div className="rew_head">
                                                <div className="logo">
                                                    {el.logo}
                                                </div>

                                                <div className="verified">
                                                    <h4>{el.iconTxt}</h4>
                                                    <BiSolidStar />
                                                    <BiSolidStar />
                                                    <BiSolidStar />
                                                    <BiSolidStar />
                                                    <BiSolidStarHalf />
                                                </div>
                                            </div>

                                            <div className="infos">
                                                <h4>{el.verf}</h4>
                                                <p>{el.date}</p>
                                            </div>

                                        </div>

                                        <div className="rew_main">
                                            <h4>{el.pro}</h4>
                                            <p>{el.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }



                    </div>
                    <nav className="Page pt-30">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>



        </>
    )
}