import React from 'react'
import { useState } from "react"
import order1 from '../../../assets/image/order1.png';
import order2 from "../../../assets/image/order2.png";
import order3 from "../../../assets/image/order4.png";
import order4 from '../../../assets/image/order4.png';
import order5 from "../../../assets/image/order5.png";
import style from "./order.module.css";
import { useEffect } from 'react';
import { Pagination } from 'flowbite-react';


export default function Order() {


    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => setCurrentPage(page)

    const [order, setorder] = useState([
        {
            img: order1,
            text1: "Cellecor CLB21 20 W Bluetooth Soundbar (Black,2.2 Channel)",
            text2: "Color : Black",
            text3: "Size : Stander",
            price: "$2,184.00",
            code: "green",
            status:"Delivered",
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
            status:"Cancelled",
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
            status:"Delivered",
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
             status:"Delivered",
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
             status:"Delivered",
            text4: " on march 12",
            text5: "Your item has been delivered",
        },

    ])
   



    return (
        <>
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
                                <h4>{el.status}, {el.text4}</h4>
                            </div>
                            <div className="txt">
                                <p>{el.text5}</p>
                            </div>
                        </div>
                    </div>
                </div>


            ))}

            <div className={style.pagenate}>
                <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
            </div>

        </>
    )
}

