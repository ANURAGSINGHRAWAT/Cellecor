import React, { useState } from 'react';
import style from "./notification.module.css";
import { Pagination } from 'flowbite-react';

export default function Notification() {



    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page)


    const [notifiArry, setNotifiArry] = useState([
        {
            Date: "01/03/2023",
            orderstatus: "Order Delivered!",
            statustxt: "Your order has been successfully delivered.",
            txt2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
            Date: "1 / 3 / 2023",
            orderstatus: "Order Cancelled!",
            statustxt: "Your order has been successfully delivered.",
            txt2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
            Date: "1 / 3 / 2023",
            orderstatus: "Order Delivered!",
            statustxt: "Your order has been successfully delivered.",
            txt2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
            Date: "1 / 3 / 2023",
            orderstatus: "Order Cancelled!",
            statustxt: "Your order has been successfully delivered.",
            txt2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
    ])

    return (
        <>
            <div className={style.head_notif}>
                <h4>Notification</h4>
            </div>
            {notifiArry.map((el, index) => (
                <div className={style.notifi} key={index}>
                    <p>{el.Date}</p>
                    <p className={`${el.orderstatus == 'Order Delivered!' ? `${style.Delivered}` : `${style.Cancelled}`}`}>{el.orderstatus}</p>
                    <div className={style.notif_del}>
                        <p>{el.statustxt}</p>
                        <p>{el.txt2}</p>
                    </div>
                </div>
            ))}
            <div className={style.pagenate}>
                <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
            </div>

        </>
    )
}
