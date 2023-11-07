import React from 'react'
import { useState } from 'react';
import Proimg4 from "../../../assets/image/proimg4.png";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

export default function Wishlist() {

    const [data, setdataArr] = useState([
        {
            img: Proimg4,
            info: "Cellecor BroPods CB03 Waterproof Earbuds With 30 Hours Playtime, Automatic Pairing, ENC Bluetooth Headset (Blue, True Wireless)",
            code: "black",
            pricecut: 95.00,
            price: 85.00,
            offer: "26%off 5 offers applied",
            count: 1,
        },
        {
            img: Proimg4,
            info: "Cellecor BroPods CB03 Waterproof Earbuds With 30 Hours Playtime, Automatic Pairing, ENC Bluetooth Headset (Blue, True Wireless)",
            code: "black",
            pricecut: 95.00,
            price: 85.00,
            offer: "26%off 5 offers applied",
            count: 1,
        },
        {
            img: Proimg4,
            info: "Cellecor BroPods CB03 Waterproof Earbuds With 30 Hours Playtime, Automatic Pairing, ENC Bluetooth Headset (Blue, True Wireless)",
            code: "black",
            pricecut: 95.00,
            price: 85.00,
            offer: "26%off 5 offers applied",
            count: 1,
        },
        {
            img: Proimg4,
            info: "Cellecor BroPods CB03 Waterproof Earbuds With 30 Hours Playtime, Automatic Pairing, ENC Bluetooth Headset (Blue, True Wireless)",
            code: "black",
            pricecut: 95.00,
            price: 85.00,
            offer: "26%off 5 offers applied",
            count: 1,
        },
    ]);

   
    const removeMe = (index) => {
        let temp = [...data]
        temp.splice(index, 1)
        setdataArr(temp)
    }
    const [count, setcount] = useState(1)
    const increase = (index) => {
        let tempcardArr = [...data];
        let tempCardObj = tempcardArr[index]

        let count = tempCardObj.count;
        count = count + 1
        tempcardArr[index].count = count;

        setdataArr(tempcardArr)
    };
    const decrease = (index) => {

        let tempcardArr = [...data];
        let tempCardObj = tempcardArr[index]

        let count = tempCardObj.count;

        if (count > 1) {
            count = count - 1;
        }

        tempcardArr[index].count = count;

        setdataArr(tempcardArr)


    };
    return (
        <div>  {data.map((el, index) => (
            <div className="pro_add" key={index}>
                <div className="info">
                    <div className="img">
                        <img src={el.img} alt="" />
                    </div>
                    <div className="dels">
                        <div className="txt">
                            <h4>{el.info}</h4>
                            <p>color : {el.code}</p>
                        </div>

                        <div className="price_off">
                            <div className="price_txt">

                                {
                                    el.pricecut > 0 && (<span className='cutprice'>${el.pricecut}</span>)
                                }

                                <span className='price'>${el.price}</span>
                                <span className='offer'>{el.offer}</span>
                            </div>

                            <div className="main_pri">
                                <p>${el.price * el.count}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="additon">
                    <div className="button">
                        <button className="btn" onClick={() => decrease(index)} ><AiOutlineMinus /></button>
                        <h4>{el.count}</h4>
                        <button className="btn" onClick={() => increase(index)}><BsPlusLg /></button>
                    </div>
                    <div className="save_remove">
                        <button className="btn btn-outline-primary"> <p>Move to cart</p></button>
                        <button className="btn btn-outline-danger" onClick={() => removeMe(index)}><p>REMOVE</p></button>
                    </div>
                </div>
            </div>
        ))}</div>
    )
}
