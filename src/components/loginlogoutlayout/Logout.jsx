import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { redirect,useNavigate } from 'react-router-dom';

export default function Logout(modalShow) {

    const navigate = useNavigate()

    console.log(modalShow,"modalShowmodalShowmodalShow")

    const handleLOgout = () => {
        localStorage.removeItem('loginData')
        navigate('/Login')
    }

    return (
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
                    <Button onClick={()=>handleLOgout()}>Logout</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}
