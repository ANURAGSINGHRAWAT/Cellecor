import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { images } from './utility/Images'
import {CiSearch} from "react-icons/ci"
import {AiOutlineCalendar} from "react-icons/ai"
import {AiOutlineEye} from "react-icons/ai"
import blogimg2 from "../assets/image/blogimg2.png";
import blogimg3 from "../assets/image/blogimg3.png";
import blogimg4 from "../assets/image/blogimg4.png";
import blogimg5 from "../assets/image/blogimg5.png";
import blogimg6 from "../assets/image/blogimg6.png";
import blogimg7 from "../assets/image/blogimg7.png";
import blogimg8 from "../assets/image/blogimg8.png";
import blogimg9 from "../assets/image/blogimg9.png";
import blogimg10 from "../assets/image/blogimg10.png";
import blogimg11 from "../assets/image/blogimg11.png";
import blogimg12 from "../assets/image/blogimg12.png";
import blogimg13 from "../assets/image/blogimg13.png";
import blogimg14 from "../assets/image/blogimg14.png";
import blogimg15 from "../assets/image/blogimg15.png";
import blogimg16 from "../assets/image/blogimg16.png";
import blogimg17 from "../assets/image/blogimg17.png";
import blogimg18 from "../assets/image/blogimg18.png";
import blogimg19 from "../assets/image/blogimg19.png";
import blogimg20 from "../assets/image/blogimg20.png";
import blogimg21 from "../assets/image/blogimg21.png";
import blogimg22 from "../assets/image/blogimg22.png";
import blogimg23 from "../assets/image/blogimg23.png";



export default function Blog(){
   
    const [list , setlist] = useState([
        {
          img:blogimg2,
          text:"Smartwatch"
        },
        {
            img:blogimg3,
            text:"Smart Tv"
          },
        {
            img:blogimg4,
            text:"Sound Bar"
        },
        {
            img:blogimg5,
            text:"Neck Band"
        },
        {
            img:blogimg6,
            text:"TWS"
        },
        {
            img:blogimg7,
            text:"Earphones"
        },
        {
            img:blogimg8,
            text:"Charger"
        },
        {
            img:blogimg9,
            text:"Data Cable"
        },
        {
            img:blogimg10,
            text:"Keypad Phone"
        },
        {
            img:blogimg11,
            text:"Power Bank"
        },
    ]);
 
     const [list2 , setlist2] = useState([
        {
            Img:blogimg12,
            Text:"Cellecor NK-3 Wireless Waterproof Neckband with 25 Hrs playtime Headphone Bluetooth Headset (Green, In the Ear)",
            price:" $696 - $2,499",
        },
        {
            Img:blogimg13,
            Text:"Cellecor 2.4 A Mobile Super Fast 12W Charging Adapter and 3.0A Type-C USB Data Cable Charger with Detachable Cable (White)",
            price:"$436 - $1,499",
        },
        {
            Img:blogimg14,
            Text:"BouCellecor BroPods CB01+ Waterproof Earbuds With 25 Hours Playtime, Automatic Pairing, ENC Bluetooth Headset (White, In the Ear)lt Audio Airbass X50 Wireless Earphone / X50 Bluetooth Headset (Black, True Wireless)",     
            price:" $996 - $996",
        },
        {
            Img:blogimg15,
            Text:"Cellecor ActFit A4 Android Multi-Sports Waterproof Smartwatch (Green Strap, Regular)",
            price:"$2,069 - $2,499",
        },
        {
            Img:blogimg16,
            Text:"Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)",
            price:" $9,119 - $14,999",
        },
     ]);

     const [read , setread] = useState([
        {
            IMG:blogimg18,
            date:"13 March 2023",
            view:"291",
            head:"Cellecor ActFit A4 Android Multi-Sports Waterproof Smartwatch (Green Strap, Regular)",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            IMG:blogimg19,
            date:"13 March 2023",
            view:"291",
            head:"Cellecor 80 cm (32 inch) Full HD LED Smart Android TV (E32X)",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            IMG:blogimg20,
            date:"13 March 2023",
            view:"291",
            head:"Cellecor NK-3 Wireless Waterproof Neckband with 25 Hrs playtime Headphone Bluetooth Headset (Green, In the Ear)",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            IMG:blogimg21,
            date:"13 March 2023",
            view:"291",
            head:"Cellecor 2.4 A Mobile Super Fast 12W Charging Adapter and 3.0A Type-C USB Data Cable Charger with Detachable Cable (Black)",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            IMG:blogimg22,
            date:"13 March 2023",
            view:"291",
            head:"Medium 27 L Laptop Backpack Large 3 in 1 Laptop Backpack || Travel Backpack || Messenger bag || Office Bag With 8 Compartments Unisex (17inch, Blue) (Red)",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            IMG:blogimg23,
            date:"13 March 2023",
            view:"291",
            head:"Cellecor R3+ (Blue)",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            IMG:blogimg22,
            date:"13 March 2023",
            view:"291",
            head:"Medium 27 L Laptop Backpack Large 3 in 1 Laptop Backpack || Travel Backpack || Messenger bag || Office Bag With 8 Compartments Unisex (17inch, Blue) (Red)",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            IMG:blogimg23,
            date:"13 March 2023",
            view:"291",
            head:"Cellecor R3+ (Blue)",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
     ])

    return(
        <>
        <div className="blog-page pt-40">
            <div className="container">
                <div className="blogimg">
                    <img src={images.blogimg1} alt="" />
                </div>   
            </div>
        </div>

        <div className="blog-content pt-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="search">
                            <div className="txt">
                             <h4>Search</h4>
                            </div>    
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="search"/>
                                <span class="input-group-text"><CiSearch/></span>
                            </div>
                        </div>
                        <div className="categorylist">
                            <div className="txt">
                                <h4>Category</h4>
                            </div>
                            <ul className='u-list'>
                                {
                                    list.map((el,index) => {
                                        return(
                                           <li  className='list' key={index}><img src={el.img} alt="" /><h4>{el.text}</h4></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="recentpost">
                            <div className="txt">
                                <h4>Recent Post</h4>
                            </div>
                            <ul className="ulist">
                               {
                                list2.map((el,index)=>{
                                    return(
                                        <li className='list' key={index}>
                                        <div className="img">
                                         <img src={el.Img}alt="" />
                                        </div>
                                        <div className="text">
                                            <p>{el.Text}</p> 
                                        <div className="price">
                                            <span>{el.price}</span>
                                        </div>
                                        </div> 
                                    </li>
                                    )
                                })
                               }
                               
                            </ul>
                        </div>
                        <div className="shopImg">
                                <div className="txt">
                                    <h4>SPECIAL OFFER </h4>
                                    <h3>SUPER SALE</h3>
                                    <p>THIS WEEKEND ONLY! Up to 50% OFF</p>
                                    <a href="" className='btn'>Shop Now</a>
                                </div>
                                <div className="img">
                                    <img src={blogimg5} alt="" />
                                </div>
                        </div>
                    </div>

                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <div className="row">
                                {
                                    read.map((el,index) =>{
                                        return(
                                            <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                                            <div className="items-del">    
                                                <div className="img">
                                                    <img src={el.IMG} alt="" />
                                                </div>
                                                <div className="date-view">
                                                    <span> <AiOutlineCalendar/>{el.date}</span>
                                                    <span><AiOutlineEye/> {el.view}Views</span>
                                                </div>
                                                <div className="txt">
                                                    <h4>{el.head}</h4>
                                                    <p>{el.para}</p>
                                                    <div className="read">
                                                    <a href="/Blogdetails" className='btn'>Read All</a>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                                    
                                        )
                                    })
                                }
                            
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <Pagination className='page pt-20'>
         <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
        </>
    )
}