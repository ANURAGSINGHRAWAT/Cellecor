import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import style from '../profile.components/address.module.css'
import { LiaEditSolid } from "react-icons/lia";
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';



export default function Address() {
  const [fname, setFname] = useState("");
  const [num, setNum] = useState("");
  const [altp, setAltp] = useState("");
  const [loct, setLoct] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [btn, setBtn] = useState("");
  const [icon, setIcon] = useState("");
  const [txt, setTxt] = useState("");
  const [addressId, setAddressId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [addressArr, setAddressArr] = useState([
    {
      id: "1",
      fname: "Anurag Singh Rawat",
      num: 8766305539,
      city: "Delhi",
      pincode: "110094",
      state: "Delhi",
      address: "D MALL, 123, Wazirpur Flyover, Netaji Subhash Place, Pitam Pura",
      btn: "Home",
      loct: "rkPuram",
      altp: 9891924717,
      icon: < LiaEditSolid />,
      txt: "Edit",

    },
    {
      id: "2",
      fname: "Ankit",
      num: 8766305539,
      city: "haryana",
      pincode: "110094",
      state: "gurugram",
      address: "Dlf MALL, 123, gurugram",
      btn: "Office",
      loct: "rkPuram",
      altp: 9891924717,
      icon: < LiaEditSolid />,
      txt: "Edit",
    },
  ]);



  const handelAddressEdit = (item) => {
    setFname(item.fname);
    setNum(item.num);
    setAddress(item.address);
    setPincode(item.pincode);
    setCity(item.city);
    setState(item.state);
    setBtn(item.btn)
    setLoct(item.btn)
    setAltp(item.btn)
    setIcon(item.icon)
    setTxt(item.txt)
    setAddressId(item.id)
    setIsEdit(!isEdit)


  }
  const handleSubmit = (event) => {

    if (fname == "") {
      alert("Please Enter fname!!!");
      return 0;
    }
    if (num == "") {
      alert("Please Enter number!!!");
      return 0;
    }
    if (city == "") {
      alert("Please Enter city!!!");
      return 0;
    }
    if (pincode == "") {
      alert("Please Enter pincode!!!");
      return 0;
    }
    if (state == "") {
      alert("Please Enter state!!!");
      return 0;
    }
    if (address == "") {
      alert("Please Enter address!!!");
      return 0;
    }
    if (altp == "") {
      alert("Please Enter alt number!!!");
      return 0;
    }
    if (loct == "") {
      alert("Please Enter locality!!!");
      return 0;
    }


    let tempaddressArr = [...addressArr];

    if (addressId != "") {
      let tempIndex = tempaddressArr.findIndex((el) => el.id == addressId)

      tempaddressArr[tempIndex].fname = fname;
      tempaddressArr[tempIndex].num = num;
      tempaddressArr[tempIndex].city = city;
      tempaddressArr[tempIndex].pincode = pincode;
      tempaddressArr[tempIndex].state = state;
      tempaddressArr[tempIndex].address = address;
      tempaddressArr[tempIndex].btn = btn;
      tempaddressArr[tempIndex].icon = icon;
      tempaddressArr[tempIndex].altp = altp;
      tempaddressArr[tempIndex].loct = loct;
      tempaddressArr[tempIndex].txt = txt;
    } else {

      let newAddressobj = {};
      newAddressobj.fname = fname;
      newAddressobj.num = num;
      newAddressobj.city = city;
      newAddressobj.pincode = pincode;
      newAddressobj.state = state;
      newAddressobj.address = address;
      newAddressobj.btn = btn;
      newAddressobj.icon = icon;
      newAddressobj.altp = altp;
      newAddressobj.loct = loct;
      newAddressobj.txt = txt;




      console.log(newAddressobj)
      tempaddressArr.push(newAddressobj)
    }

    setAddressArr(tempaddressArr)
    setIsEdit(false)
    setFname("")
    setNum("")
    setAddress("")
    setPincode("")
    setCity("")
    setState("")
    setBtn("")
    setLoct("")
    setAltp("")
    setIcon("")
    setTxt("")
    setAddressId("")

  };


  return (
    <>
      <div className={style.address_page} >
        {addressArr.length < 4 && (
          <div className={style.add_address} >
            <Button className={style.btn} onClick={() => setIsEdit(!isEdit)} >+ Add A New Address</Button>
          </div>
        )}

        {
          isEdit ? (
            <Form onSubmit={handleSubmit} method="post">
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
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
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    value={num}
                    required
                    type="text"
                    onChange={(el) => setNum(el.target.value)}
                    placeholder="Last name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="6" controlId="validationCustom06">
                  <Form.Label>Pincode</Form.Label>
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
                <Form.Group as={Col} md="6" controlId="validationCustom06">
                  <Form.Label>Locality</Form.Label>
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
              <Row className="mb-3 lg" >
                <Form.Group as={Col} md="12" controlId="validationCustom07  ">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    value={address}
                    type="text"
                    placeholder="Address"
                    onChange={(el) => setAddress(el.target.value)}
                    required
                    as="textarea"
                    style={{ height: '100px' }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Address.
                  </Form.Control.Feedback>
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
                <Form.Group as={Col} md="6" controlId="validationCustom05">
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


              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Label>Land Mark</Form.Label>
                  <Form.Control
                    value={loct}
                    type="text"
                    placeholder="Land Mark"
                    onChange={(el) => setLoct(el.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <Form.Label>Akternate Phone</Form.Label>
                  <Form.Control
                    value={altp}
                    type="text"
                    placeholder="Akternate Phone"
                    onChange={(el) => setAltp(el.target.value)}
                    required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>


              </Row>
              <Form.Label className={style.lab}> Address Type  </Form.Label>
              <div className={style.check}>
                <div className={style.input}>
                  <input
                    type="radio"
                    value={btn}
                    name="address"
                    label="Home"
                    checked
                    onChange={(el) => setBtn("Home")} />
                  <label htmlFor="Home ">Home</label>
                </div>
                <div className={style.input}>
                  <input
                    type="radio"
                    name="address"
                    value={btn}
                    label="Office"
                    onChange={(el) => setBtn("Office")} />
                  <label htmlFor="Office">Office</label>
                </div>
              </div>

              <div className={style.btn_box}>
                <Button className={style.save} type="submit"> Save</Button>
                <Button className={style.cancle} type="cancle" onClick={handleClose}>Cancle</Button>
              </div>




            </Form>
          ) : (
            <>
              {addressArr.map((el, index) => (
                <div className={style.address}>
                  <div className={style.add_txt} key={index}>
                    <p>Deliver to : {el.fname} </p>
                    <p>{el.num} , {el.altp}</p>
                    <p> {el.address} , {el.loct} ,{el.state} , {el.city} , </p>
                    <p></p>
                    <p> {el.pincode}</p>
                  </div>

                  <div className={style.edit_link}>
                    <div className={style.btnn}>
                      < button className={`${style.btn} btn disabled`}>{el.btn}</button>
                    </div>
                    <div className={style.form_page}>
                      <button className={`${style.edit} btn`} onClick={() => handelAddressEdit(el)}>Edit</button>
                      <button className={`${style.icon} btn`} onClick={() => handelAddressEdit(el)}><LiaEditSolid /></button>
                    </div>
                  </div>

                </div>
              ))}
            </>
          )
        }

      </div>
    </>
  )
}
