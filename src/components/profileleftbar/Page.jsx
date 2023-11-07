import React from 'react';
import { useState } from "react";
import style from "../profileleftbar/page.module.css";

import anupng from "../../assets/image/anupng.jpg";
import { GrLocation } from "react-icons/gr";
import { HiOutlineWallet } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowReturnLeft } from "react-icons/bs";
import { RiRefund2Line } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { LiaEditSolid } from "react-icons/lia";
import Profile from './profile.components/Profile';
import Address from './profile.components/Address';
import Order from './profile.components/order';
import Wishlist from './profile.components/wishlist';


export default function Page() {

    const [selectMenu, setSelectMenu] = useState("")
    const [aciveClass , setActiveClass] = useState(1)

    const [profileList, setProfileList] = useState([
        {
            icon: <GrLocation />,
            txt: "Your addres",
            link: "address",


        },
        {
            icon: <HiOutlineWallet />,
            txt: "Your Order",
            link: "order",
        },
        {
            icon: <AiOutlineHeart />,
            txt: "Your Wishlist",
            link: "wishlist",
        },
        {
            icon: <BsArrowReturnLeft />,
            txt: "Return Status",
            link: "Return",
        },
        {
            icon: <RiRefund2Line />,
            txt: "Refund Status",
            link: "refund",
        },
        {
            icon: <BsBell />,
            txt: "Notification",
            link: "notification",

        },
        {
            icon: <BiLogOutCircle />,
            txt: "Logout",
            link: "logout",
        },
    ])

    const [profile, setProfile] = useState([
        {
            id: "1",
            img: anupng,
            fname: "Anurag",
            lname: "rawat",
            email: 'anurag1432@gmail.com',
            gender: 'Male',
            num: 8766305539,
        },
    ]);
    const handleUpdaprofile = (data) => {
        setProfile([...data])
    }
    return (
        <>
            <div className={style.profile}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className={style.main_profile}>
                                {profile.map((e, i) => (
                                    <div className={style.profile_head} key={i}>
                                        <div className={style.img}>
                                            <img src={e.img} alt="" />
                                        </div>
                                        <div className={style.txt}>
                                            <div className={style.greet}>
                                                <h4>Hi,</h4>
                                                <h4>{e.fname} {e.lname}</h4>
                                            </div>
                                            <button className={style.icon} onClick={() => setSelectMenu()}><LiaEditSolid /></button>

                                        </div>
                                    </div>
                                ))}

                                <div className={style.profile_list}>
                                <ul className={style.list}>
                                    {profileList.map((el, index) => (
                                       
                                            <li key={index} className={`${style.items}${index === aciveClass ?`active`:''}`}  onClick={() => setSelectMenu(el.link )} >  {el.icon} {el.txt}  </li>
                                           
                                       
                                    ))}
                                     </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-9 col-md-9 col-sm-9">


                            {
                                !selectMenu && (
                                    <div className={style.Profile}>
                                         <h4>Your Profile</h4>
                                    <Profile data={profile} setData={handleUpdaprofile} />
                                    </div>
                                )
                            }
                            {

                                selectMenu == "address" && (
                                    <div className={style.Address}>
                                        <h4>Your Address</h4>
                                    <Address />
                                    </div>
                                )
                            }
                            {
                                selectMenu == "order" && (
                                    <div className={style.Order}>
                                        <h4>Your Order</h4>
                                    <Order />
                                    </div>
                                )
                            }
                             {
                                selectMenu == "wishlist" && (
                                    <div className={style.wishlist}>
                                        <h4>Your wishlist</h4>
                                    <Wishlist />
                                    </div>
                                )
                            }


                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}