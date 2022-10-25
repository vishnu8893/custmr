import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/products.module.css'
import Script from 'next/script'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function buynow(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Customer Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  autoFocus
                />
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  autoFocus
                  type='number'
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                 type='email'
                 placeholder="abc@abc.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Label>No. of items</Form.Label>
                <Form.Control
                  autoFocus
                  type='number'
                />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Confirm Order
            </Button>
          </Modal.Footer>
        </Modal>



      <Button className='but' style={{background:'red'}}>vish</Button>
      </>
















        )
}