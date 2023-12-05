import React, { useEffect } from 'react';
import { useState } from "react";
import { Link, useParams, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import style from "../profileleftbar/page.module.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import anupng from "../../assets/image/anupng.jpg";
import { SlLocationPin } from "react-icons/sl";
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
import Return from "./profile.components/Return";
import Refund from "./profile.components/Refund";
import Notification from "./profile.components/Notification";
import Logout from "../loginlogoutlayout/Logout";



export default function Page() {





    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [modalShow, setModalShow] = useState(false);
    const [selectMenu, setSelectMenu] = useState()
    const [userObj, setuserObj] = useState("")


    const handleLOgout = () => {
        localStorage.removeItem('loginData')
        navigate('/Login')
    }

    const [profileList, setProfileList] = useState([
        {
            icon: <SlLocationPin />,
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
            img: null,
            name:null,
            email: null,
            gender: null,
            num: null,
        },
    ]);
    const handleUpdaprofile = async (data) => {



        let updateData = {
            name:data.name,
            email:data.email,
            num:data.num,
            gender:data.gender,
        }
        console.log(data,"updatedaata")
        // setuserObj(data)
      await  updateDataById(data._id,updateData)
      await  getuserDataById(data._id,updateData)
      
        

    }

    const updateDataById = async (userId,data) => {
        try {
                
            const response = await fetch('http://localhost:8080/updateUser/'+userId, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/JSON'
                },
                body: JSON.stringify(data),
            })
            const data = await response.json();
       

            console.log(data)
        } catch (error) {
            console.log(error)
        }
        
    }

    const getuserDataById = async (userId) => {
        try {
                
            const response = await fetch('http://localhost:8080/getById/'+userId, {
                method: "GET",
                headers: {
                    'content-type': 'application/JSON'
                }
            })
            const data = await response.json();
            console.log(data,"datadatadata")
            
            setuserObj(data.data)


            console.log(data)
        } catch (error) {
            console.log(error)
        }
        
    }


    useEffect(() => {

        let useData = localStorage.getItem('loginData');
        useData = JSON.parse(useData)
        if (useData && useData?._id) {
            getuserDataById(useData?._id)
        };

        
    }, [])
    



    useEffect(() => {
        if (searchParams.get('page')) {
            if (searchParams.get('page') == 'edit') {
                setSelectMenu()

            } else {

                setSelectMenu(searchParams.get('page'))

            }
        }

    }, [searchParams])
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
                                                <h4>{userObj.name} {e.lname}</h4>
                                                <h4>{userObj?.email ? 'Login' : 'not login    '}</h4>
                                            </div>
                                            <button className={style.icon} onClick={() => {
                                                const params = {
                                                    page: "edit",
                                                };
                                                const options = {
                                                    pathname: '/Page',
                                                    search: `?${createSearchParams(params)}`,
                                                };
                                                navigate(options, { replace: true });

                                                setSelectMenu()
                                            }}><LiaEditSolid /></button>

                                        </div>
                                    </div>
                                ))}

                                <div className={style.profile_list}>
                                    <ul className={style.list}>
                                        {profileList.map((el, index) => (

                                            < li key={index} className={`${style.items} ${el.link == selectMenu ? `${style.active}` : ''}`} onClick={() => {


                                                const params = {
                                                    page: el.link,
                                                };
                                                const options = {
                                                    pathname: '/Page',
                                                    search: `?${createSearchParams(params)}`,
                                                };
                                                navigate(options, { replace: true });
                                                setSelectMenu(el.link);
                                                if (el.link == 'logout') {
                                                    setModalShow(true)
                                                }
                                            }} >  {el.icon} <p>{el.txt  } </p>  </li>


                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-9 col-md-9 col-sm-9">
                            <>
                                <Modal
                                    {...modalShow}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                >
                                    <Modal.Body closeButton>
                                        <h4>Are you sure you want to logout?</h4>
                                        <Button onClick={modalShow.onHide}>Cancel</Button>
                                        <Button onClick={() => handleLOgout()}>Logout</Button>
                                    </Modal.Body>
                                </Modal>
                            </>

                            {
                                !selectMenu && (
                                    <Profile data={userObj} setData={handleUpdaprofile} />

                                )
                            }
                            {

                                selectMenu == "address" && (


                                    <Address />

                                )
                            }
                            {
                                selectMenu == "order" && (


                                    < Order />

                                )
                            }
                            {
                                selectMenu == "wishlist" && (

                                    <Wishlist />

                                )
                            }
                            {
                                selectMenu == "Return" && (

                                    <Return />

                                )
                            }
                            {
                                selectMenu == "refund" && (

                                    <Refund />

                                )
                            }
                            {
                                selectMenu == "notification" && (

                                    <Notification />

                                )
                            }
                            {
                                selectMenu == "logout" && (


                                    <Logout onHide={() => setModalShow(false)} show={modalShow} />

                                )
                            }


                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}