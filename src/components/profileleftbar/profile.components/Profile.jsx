import React from 'react'
import { useState } from 'react';
import { LiaEditSolid } from 'react-icons/lia';
import style from '../profile.components/address.module.css';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useEffect } from 'react';


export default function Profile({ data, setData }) {



    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [num, setNum] = useState("");
    const [infoId, setInfoId] = useState("");

    const handelAddressEdit = (item) => {
        setName(item.name);
        setEmail(item.email);
        setGender(item.gender);
        setNum(item.num);
        setInfoId(item.id)
        setIsEdit(!isEdit)
    }


    const handleSubmit = () => {

        if (name == "") {
            alert("Please Enter name!!!");
            return 0;
        }
        if (email == "") {
            alert("Please Enter email!!!");
            return 0;
        }
        if (gender == "") {
            alert("Please Enter gender!!!");
            return 0;
        }
        if (num == "") {
            alert("Please Enter num!!!");
            return 0;
        }

        let tempdataArr = data
        if (isEdit) {

            tempdataArr.name = name;
            tempdataArr.email = email;
            tempdataArr.gender = gender;
            tempdataArr.num = num;
        } else {

            let newdataobj = {};
            newdataobj.name = name;
            newdataobj.num = num;
            newdataobj.gender = gender;
            newdataobj.email = email;

            tempdataArr.push(newdataobj)

        }

        console.log(tempdataArr,"tempdataArrtempdataArrtempdataArr")
        setIsEdit(false)
        setName("")
        setNum("")
        setGender("")
        setEmail("")
        setData(tempdataArr)
        
      
    };

    return (
        <>
            <div className={style.profile_form}>
                <div className={style.persnol_info}>
                    <div className={style.txt}>
                        Personal Information
                    </div>
                    <div className={style.edit_link}>
                        <button className={`${style.edit} btn`} onClick={() => handelAddressEdit(data)}>Edit</button>
                        <button className={`${style.icon} btn`}><LiaEditSolid /></button>
                    </div>
                </div>
                {
                    isEdit ? (
                        <Form method="post">
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom01" >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        className={style.control}
                                        name="name"
                                        value={name}
                                        type="text"
                                        onChange={(el) => setName(el.target.value)}
                                        placeholder=" Full Name"
                                        required
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        className={style.control}
                                        value={email}
                                        type="Email"
                                        onChange={(el) => setEmail(el.target.value)}
                                        placeholder="Email"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please type correct information.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom04">
                                    <Form.Label>Mobile number</Form.Label>
                                    <Form.Control
                                        className={style.control}
                                        value={num}
                                        type="number"
                                        onChange={(el) => setNum(el.target.value)}
                                        placeholder="Mobile number"
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Please type correct information.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Label className={style.lab}>Your Gender</Form.Label>
                                <div className={style.check}>
                                    <Form.Check
                                        type="radio"
                                        value='Male'
                                        checked
                                        name="gender"
                                        label="Male"
                                        onChange={(el) => setGender('Male')} />
                                    <Form.Check
                                        type="radio"
                                        name="gender"
                                        value='Female'
                                        label="Female"
                                        onChange={(el) => setGender('Female')} />

                                </div>


                            </Row>
                            <div className={style.btn_box}>
                                <Button className={style.save} type="button" onClick={handleSubmit}> Save</Button>
                                <Button className={style.cancle} type="cancle" onClick={handleClose}>Cancle</Button>
                            </div>




                        </Form>
                    ) : (
                        <>

                            <div className={style.profile}>
                                <div className={style.add_txt} >
                                    <p> Name : {data.name}  </p>
                                    <p> Email : {data.email} </p>
                                    <p> Phone : {data.number}</p>
                                    <p> Gender : {data.gender}</p>
                                </div>
                            </div>

                        </>
                    )
                }



            </div>
        </>
    )
}
