import React, { useState } from 'react'
import order1 from '../assets/image/order1.png';
import order2 from "../assets/image/order2.png";
import order3 from "../assets/image/order4.png";
import order4 from '../assets/image/order4.png';
import order5 from "../assets/image/order5.png";
import { Pagination } from 'flowbite-react';

export default function Myorder() {


    
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => setCurrentPage(page)

    const [filter, setfilter] = useState([
        {
            txt: "On the way"
        },
        {
            txt: "Delivered"
        },
        {
            txt: "Cancelled"
        },
        {
            txt: "Returned"
        },
    ]);
    const [filter2, setfilter2] = useState([
        {
            txt: "Last 30 days"
        },
        {
            txt: "2023"
        },
        {
            txt: "2022"
        },
        {
            txt: "2021"
        },
    ]);

    const [order, setorder] = useState([
        {
            img: order1,
            text1: "Cellecor CLB21 20 W Bluetooth Soundbar (Black,2.2 Channel)",
            text2: "Color : Black",
            text3: "Size : Stander",
            price: "$2,184.00",
            code: "green",
            status: "Delivered",
            text4: " on march 12",
            text5: "Your item has been delivered",
        },
        {
            img: order2,
            text1: "Cellecor CLB21 20 W Bluetooth Soundbar (Black,2.2 Channel)",
            text2: "Color : Black",
            text3: "Size : Stander",
            price: "$2,184.00",
            code: "#FF6900",
            status: "Cancelled",
            text4: " on march 12",
            text5: "You requested a cancellation because you changed your mind about this product.",
        },
        {
            img: order3,
            text1: "Cellecor CLB21 20 W Bluetooth Soundbar (Black,2.2 Channel)",
            text2: "Color : Black",
            text3: "Size : Stander",
            price: "$2,184.00",
            code: "green",
            status: "Delivered",
            text4: " on march 12",
            text5: "Your item has been delivered",
        },
        {
            img: order4,
            text1: "Cellecor CLB21 20 W Bluetooth Soundbar (Black,2.2 Channel)",
            text2: "Color : Black",
            text3: "Size : Stander",
            price: "$2,184.00",
            code: "green",
            status: "Delivered",
            text4: " on march 12",
            text5: "Your item has been delivered",
        },
        {
            img: order5,
            text1: "Cellecor CLB21 20 W Bluetooth Soundbar (Black,2.2 Channel)",
            text2: "Color : Black",
            text3: "Size : Stander",
            price: "$2,184.00",
            code: "green",
            status: "Delivered",
            text4: " on march 12",
            text5: "Your item has been delivered",
        },
        {
            img: order1,
            text1: "Cellecor CLB21 20 W Bluetooth Soundbar (Black,2.2 Channel)",
            text2: "Color : Black",
            text3: "Size : Stander",
            price: "$2,184.00",
            code: "green",
            status: "Delivered",
            text4: " on march 12",
            text5: "Your item has been delivered",
        },
    ])
   


    return (
        <>
            <div className="myorder pt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="filter">
                                <div className="fill_head">
                                    <h4>Filters</h4>
                                </div>
                                <div className="fill_main">
                                    <div className="txt"><h4>Order Status</h4></div>

                                    {filter.map((el, index) => (
                                        <div class="form-check" key={index}>
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                {el.txt}
                                            </label>
                                        </div>
                                    ))}


                                    <div className="txt"><h4>Order Time</h4></div>
                                    {filter2.map((el, index) => (
                                        <div class="form-check" key={index}>
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                {el.txt}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9" >
                            {order.map((el, index) => (

                                <div className="fil_product" key={index}>
                                    <div className="pro_info">
                                        < img src={el.img} alt="" />
                                        <div className="txt">
                                            <h4>{el.text1}</h4>
                                            <p>{el.text2}</p>
                                            <p>{el.text3}</p>
                                        </div>
                                    </div>
                                    <div className="order_del">
                                        <div className="rate">
                                            <h4>{el.price}</h4>
                                        </div>
                                        <div className="status_del">
                                            <div className="status_color">
                                                <p style={{ backgroundColor: el.code }}></p>
                                                <h4>{el.status} {el.text4}</h4>
                                            </div>
                                            <div className="txt">
                                                <p>{el.text5}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            ))}
                            <div className="pagenate">
                                <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

