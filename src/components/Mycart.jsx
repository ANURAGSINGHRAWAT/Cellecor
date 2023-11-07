import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Proimg4 from "../assets/image/proimg4.png";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import pay1 from "../assets/image/pay1.png";
import pay2 from "../assets/image/pay2.png";
import pay3 from "../assets/image/pay3.png";
import pay4 from "../assets/image/pay4.png";
import pay5 from "../assets/image/pay5.png";
import { BiSolidLockAlt } from 'react-icons/bi';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { MdLocalShipping } from 'react-icons/md';
import p1 from "../assets/image/p1.png";
import p2 from "../assets/image/p2.png";
import p3 from "../assets/image/p3.png";
import p4 from "../assets/image/p4.png";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';



export default function Mycart() {


    const [show, setShow] = useState(false);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [addressId, setAddressId] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [coupon, setCoupon] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [couponObj, setCopounObj] = useState({
        name: "anurag100",
        type: "FLAT",
        value: 100,
    });
    const [info, setinfo] = useState([
        {
            icon: < BiSolidLockAlt />,
            txt: "Secure payment",
            txt2: "Have you ever finally just ",

        },
        {
            icon: <BsChatLeftTextFill />,
            txt: "Customer support",
            txt2: "Have you ever finally just ",
        },
        {
            icon: <MdLocalShipping />,
            txt: "MdLocalShipping",
            txt2: "Have you ever finally just",
        },
    ])


    const [cart, setprodcutArr] = useState([
        {
            img: p1,
            rate: 99.50,
            txt: "GoPro HERO6 4K Action Camera",
            txt2: " Black",
            icon: <AiOutlineShoppingCart />,
        },
        {
            img: p2,
            rate: 99.50,
            txt: "GoPro HERO6 4K Action Camera",
            txt2: "  Black",
            icon: <AiOutlineShoppingCart />,
        },
        {
            img: p3,
            rate: 99.50,
            txt: "GoPro HERO6 4K Action Camera",
            txt2: " Black",
            icon: <AiOutlineShoppingCart />,
        },
        {
            img: p4,
            rate: 99.50,
            txt: "GoPro HERO6 4K Action Camera",
            txt2: "Black",
            icon: <AiOutlineShoppingCart />,
        },
        {
            img: p1,
            rate: 99.50,
            txt: "GoPro HERO6 4K Action Camera",
            txt2: "Black",
            icon: <AiOutlineShoppingCart />,
        },
        {
            img: p2,
            rate: 99.50,
            txt: "GoPro HERO6 4K Action Camera",
            txt2: " Black",
            icon: <AiOutlineShoppingCart />,
        },
        {
            img: p3,
            rate: 99.50,
            txt: "GoPro HERO6 4K Action Camera",
            txt2: "Black",
            icon: <AiOutlineShoppingCart />,
        },
        {
            img: p4,
            rate: 99.50,
            txt: "GoPro HERO6 4K Action Camera",
            txt2: "Black",
            icon: <AiOutlineShoppingCart />,
            pricecut: 0,
        },
    ]);
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


    const handleCopy = (cartItem, index) => {
        const tempArr = [...cart]
        let obj = {
            img: cartItem.img,
            rate: cartItem.price,
            txt: cartItem.info,
            txt2: cartItem.code,
            icon: <AiOutlineShoppingCart />,

        }


        tempArr.push(obj)

        setprodcutArr(tempArr)

        removeMe(index)

    }


    const removeMe = (index) => {
        let temp = [...data]
        temp.splice(index, 1)
        setdataArr(temp)
    }
    const handleadd = (dataItem, index) => {




        const tempArr = [...data]
        let obj = {
            img: dataItem.img,
            info: dataItem.txt,
            code: dataItem.txt2,
            pricecut: 100,
            price: dataItem.rate,
            offer: "26%off 5 offers applied",
            count: 1,
        }
        tempArr.push(obj)
        setdataArr(tempArr)
        removeMee(index)


    }
    const removeMee = (index) => {
        let temp = [...cart]
        temp.splice(index, 1)
        setprodcutArr(temp)
    }


    const [tmrp, setTmrp] = useState(0);
    const [dmrp, setDmrp] = useState(0);
    const [dcoupn, setDcoupn] = useState(0);
    const [dcharge, setDcharge] = useState(0);
    const [tamnt, setTamnt] = useState(0);








    const [list, setlist] = useState([
        {
            txt: "Total MRP",
            price: 1403.97,
        },
        {
            txt: "Discount on MRP",
            price: 403.97,
        },
        {
            txt: "Coupon Discount",
            price: 200,
        },
        {
            txt: "Delivery Charge",
            price: 60,
        },
    ]);

   


    const handleTopCart = () => {
        let totalMrp = data.reduce(function (acc, obj) { return acc + obj.pricecut * obj.count; }, 0);
        let totalPrice = data.reduce(function (acc, obj) { return acc + obj.price * obj.count; }, 0);

        console.log(totalMrp, totalPrice)
        setTmrp(totalMrp);
        if (totalMrp > totalPrice) {
            setDmrp(totalMrp - totalPrice);

        } else {
            setDmrp(totalPrice);

        }
        let delcharge = 0;
        if (totalPrice > 0) {
            delcharge = 100;
            if (dcoupn > 0) {
                totalPrice = totalPrice - dcoupn;
    
            }
        } else {
            setDcoupn(0)
            setCouponCode("")
        }
        setDcharge(delcharge)
        totalPrice = totalPrice + delcharge;

        setTamnt(totalPrice)
    }
    useEffect(() => {

        handleTopCart()



    }, [data, dcoupn])



    const handleSubmit = (event) => {
            if (fname == "") {
                alert("Please Enter fname!!!");
                return 0;
            }
            if (lname =="" ) {
                alert("Please Enter fname!!!");
                return 0;
            }
            if (lname =="" ) {
                alert("Please Enter fname!!!");
                return 0;
            }
            if (lname =="" ) {
                alert("Please Enter fname!!!");
                return 0;
            }
            if (lname =="" ) {
                alert("Please Enter fname!!!");
                return 0;
            }
            if (lname =="" ) {
                alert("Please Enter fname!!!");
                return 0;
            }
    
            if (couponCode === couponObj.name) {
                alert(" Coupon Already Applied!!!");
                return 0;
            }
            setDcoupn(couponObj.value)
            setCouponCode(couponObj.name)
            alert("Congrats Coupon Applied Succfully!!!");
            return 0;
    
        }

    const handelAddressEdit = (item) => {
        setFname(item.fname);
        setLname(item.lname);
        setAddress(item.address);
        setPincode(item.pincode);
        setCity(item.city);
        setState(item.state);
        setAddressId(item.id)
        handleShow()
    }

    const handelAddressypdate = () => {

        let tempAddressIndex = addressArr.findIndex((el) => el.id == addressId);
        let tempAddressArr = [...addressArr];

        tempAddressArr[tempAddressIndex].fname = fname;
        tempAddressArr[tempAddressIndex].lname = lname;
        tempAddressArr[tempAddressIndex].address = address;
        tempAddressArr[tempAddressIndex].pincode = pincode;
        tempAddressArr[tempAddressIndex].city = city;
        tempAddressArr[tempAddressIndex].state = state;
        setaddressArr(tempAddressArr)

        setFname("");
        setLname("");
        setAddress("");
        setPincode("");
        setCity("");
        setState("");
        setAddressId("")
        handleClose()
    };
    const [addressArr, setaddressArr] = useState([
        {
            id: "1",
            fname: "Ankit",
            lname: "Sharma",
            city: "Delhi",
            pincode: "110094",
            state: "Delhi",
            address: "D MALL, 123, Wazirpur Flyover, Netaji Subhash Place, Pitam Pura",
        },
    ]);

   

   
    const [activeItem, setactiveItem] = useState(0)
    const click = (index) => {
        setactiveItem(index);
    };
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




    const handleApplyCoupon = () => {
        if (coupon == "") {
            alert("Please Enter Coupon!!!");
            return 0;
        }
        if (coupon !== couponObj.name) {
            alert("Invalid Coupon!!!");
            return 0;
        }

        if (couponCode === couponObj.name) {
            alert(" Coupon Already Applied!!!");
            return 0;
        }
        setDcoupn(couponObj.value)
        setCouponCode(couponObj.name)
        alert("Congrats Coupon Applied Succfully!!!");
        return 0;

    }




    return (
        <>
            <div className="mycart pt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-9">

                            {addressArr.map((el, index) => (
                                <div className="address">
                                    <div className="add_txt " key={index}>
                                        <p>Deliver to : {el.fname} {el.lname} </p>
                                        <p> {el.address} ,{el.state} , {el.city} , {el.pincode} </p>

                                    </div>
                                    <button className="btn" onClick={() => handelAddressEdit(el)}> Change Address</button>
                                </div>
                            ))}

                            {data.map((el, index) => (
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
                                            <button className="btn btn-outline-primary" onClick={() => handleCopy(el, index)}> <p>SAVE FOR LATER</p></button>
                                            <button className="btn btn-outline-danger" onClick={() => removeMe(index)}><p>REMOVE</p></button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="coupon">
                                <div className="txt">
                                    <h4>Have a coupon?</h4>
                                </div>
                                <div className="coupon_code">
                                    <InputGroup className="input">
                                        <Form.Control
                                            placeholder="Add coupon"
                                            value={coupon}
                                            onChange={(e) => setCoupon(e.target.value)}
                                        />
                                        <Button className='btn' onClick={() => handleApplyCoupon()}>Apply</Button>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="check_out">
                                <div className="txt">
                                    <span>Price Details</span>
                                    <span>(3 item)</span>
                                </div>


                                <ul className='list' >
                                    {

                                        tmrp > 0 ? (<>
                                            <li><span>Total MRP</span>
                                                <span>${tmrp}</span>
                                            </li>

                                            <li><span>Discount on MRP</span>
                                                <span style={{ color: "green" }}>- ${dmrp}</span>
                                            </li>
                                        </>) : (

                                            <li><span>Discount on MRP</span>
                                                <span>${dmrp}</span>
                                            </li>


                                        )
                                    }

                                    {
                                        dcoupn > 0 && (
                                            <li><span>Coupon Discount ({couponCode})</span>
                                                <span style={{ color: "green" }}>- ${dcoupn}</span>
                                            </li>
                                        )
                                    }


                                    <li><span>Delivery Charge</span>
                                        <span style={{ color: "red" }}>+ ${dcharge}</span>
                                    </li>
                                </ul>

                                <div className="total_price">
                                    <span className='txt'>Total Amount</span>
                                    <span className="price">${tamnt}</span>
                                </div>
                                <button className="btn btn-primary">Check Out</button>
                                <div className="pay">
                                    <img src={pay1} alt="" />
                                    <img src={pay2} alt="" />
                                    <img src={pay3} alt="" />
                                    <img src={pay4} alt="" />
                                    <img src={pay5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="inform">
                <div className="container">
                    <div className="info_box">
                        {info.map((el, index) => (
                            <div className="payment_box" key={index}>
                                <div className="icon">
                                    <p>{el.icon}</p>
                                </div>
                                <div className="txt">
                                    <h5>{el.txt}</h5>
                                    <p>{el.txt2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="saved_later">
                <div className="container">
                    <div className="save_pro">
                        <div className="txt">
                            <h4>Saved for later</h4>
                        </div>

                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[]}
                            className="mySwiper">

                            {cart.map((el, index) => (
                                <SwiperSlide>

                                    <div className="main_pro" key={index}>
                                        <div className="img">
                                            <img src={el.img} alt="" />
                                        </div>
                                        <div className="rate">
                                            {el.pricecut > 0 && (<p>${el.pricecut}</p>)}
                                            <h4>${el.rate}</h4>
                                            <p>{el.txt}</p>
                                            <p>color - {el.txt2}</p>
                                        </div>
                                        <button className="btn" onClick={() => handleadd(el, index)}>
                                            {el.icon}
                                            Add to cart
                                        </button>
                                    </div>

                                </SwiperSlide>
                            ))}

                        </Swiper>

                    </div>
                </div>
            </div>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    value={fname}
                                    required
                                    type="text"
                                    onChange={(el) => setFname(el.target.value)}
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    value={lname}
                                    required
                                    type="text"
                                    onChange={(el) => setLname(el.target.value)}
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    value={city}
                                    type="text"
                                    placeholder="City"
                                    onChange={(el) => setCity(el.target.value)}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    value={state}
                                    type="text"
                                    placeholder="State"
                                    onChange={(el) => setState(el.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom06">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    value={pincode}
                                    type="text"
                                    placeholder="Zip"
                                    onChange={(el) => setPincode(el.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} md="12" controlId="validationCustom07  ">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                value={address}
                                type="text"
                                placeholder="Address"
                                onChange={(el) => setAddress(el.target.value)}
                                required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Address.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handelAddressypdate()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}