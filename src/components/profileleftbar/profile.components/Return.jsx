import React from 'react'
import { useState , useEffect} from 'react';
import Proimg4 from "../../../assets/image/proimg4.png";
import style from "../../profileleftbar/profile.components/return.module.css"

export default function Return() {
    const [status, setStatus] = useState("Short by")
    const [dataArr, setdataArr] = useState([
        {
            img: Proimg4,
            info: "Cellecor BroPods CB03 Waterproof Earbuds With 30 Hours Playtime, Automatic Pairing, ENC Bluetooth Headset (Blue, True Wireless)",
            code: "black",
            pricecut: 95.00,
            price: 85.00,
            status: "Pending",
        },
        {
            img: Proimg4,
            info: "Cellecor BroPods CB03 Waterproof Earbuds With 30 Hours Playtime, Automatic Pairing, ENC Bluetooth Headset (Blue, True Wireless)",
            code: "black",
            pricecut: 95.00,
            price: 85.00,
            status: "Complete",
        },
        {
            img: Proimg4,
            info: "Cellecor BroPods CB03 Waterproof Earbuds With 30 Hours Playtime, Automatic Pairing, ENC Bluetooth Headset (Blue, True Wireless)",
            code: "black",
            pricecut: 95.00,
            price: 85.00,
            status: "Complete",
        },
    ])
    const [addressArr, setaddressArr] = useState([
        {
            id: "1",
            fname: "Ankit",
            lname: "Sharma",
            city: "Delhi",
            pincode: "110094",
            state: "Delhi",
            address: "D MALL, 123, Wazirpur Flyover, Netaji Subhash Place, Pitam Pura",
            num: 8766305539,
        },
    ]);

    useEffect(() => {
        if (status != 'Short by') {
            let tempArr = dataArr.filter((el) => el.status == status);
            setOrderArr(tempArr)
        } else {
            setOrderArr(dataArr)

        }

    }, [status])
    const [orderArr, setOrderArr] = useState(dataArr)


    return (
        <>
            <div className={style.head_txt}>
                <div className={style.txt}>
                    <h4>Refund Status</h4>
                </div>
                <div className={style.filter}>
                    <select className={style.fillter} value={status} onChange={(el) => setStatus(el.target.value)}>
                        <option value="Short by">Short by</option>
                        <option value="Pending">Pending</option>
                        <option value="Complete">Complete</option>
                    </select>
                </div>
            </div>
            {orderArr.map((el, index) => (
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

                                <div className={`${style.status} ${el.status == 'Pending' ? `${style.pending}` : `${style.complete}`}`}>
                                    <p>{el.status}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {
                        el.status == 'Pending'
                            ?
                            <div className={style.status_step}>
                                <div className={style.txt}>
                                    <h4>Return Status</h4>
                                </div>
                                <div className={style.stepper}>

                                    < div className={style.step}>
                                        <div className={style.txt1}>
                                            <p>Return</p>
                                            <p>Pic up</p>
                                        </div>
                                        <div className={style.prosess_barr}>
                                            <p className={style.return}></p>
                                            <p className={style.conect}></p>
                                            <p className={style.done}></p>
                                        </div>
                                        <div className={style.txt2}>
                                            <p>Wed 24</p>
                                            <p>Your return has been processed</p>
                                            <p>Friday 3</p>
                                        </div>
                                    </div>


                                </div>
                                <div className={style.user_address}>
                                    {addressArr.map((el, index) => (
                                        <div className={style.add_txt} key={index}>
                                            <p>Deliver to : {el.fname} {el.lname} </p>
                                            <p> {el.address} ,{el.state} , {el.city} , {el.pincode} </p>
                                            <p>mobile Number : {el.num}</p>
                                        </div>
                                    ))}

                                </div>
                            </div>


                            : ''
                    }

                </div>
            ))}

        </>
    )
}
