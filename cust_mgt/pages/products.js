import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/products.module.css'
import Script from 'next/script'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { render } from "react-dom";

// {/* <button className={styles.butter} onClick={handleShow} >Edit</button><br/><button className={styles.but} onClick={()=>{deleteUser({ variables: {id:customer.id} })}} >Delete</button> */}

export default function login(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [count, setCount]=useState(100);


    return(

        

        <>
        
      {count}
      




            <div className={styles.products}>
                <div className={styles.header}>
                    <Head>
                        <title>Order</title>
                        <meta name="description" content="" />
                        <link rel="icon" href="/favicon.ico" />
                        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link> */}
                    
                    </Head>
                </div>
                <div className={styles.search} >
                    
                    <input className={styles.search_input} type={'search'} placeholder='Search'></input>
                    <div className={styles.div_button}>
                    <button type='search' className={styles.search_button} ><FontAwesomeIcon icon={faMagnifyingGlass} style={{width:'25px'}} /></button>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles.fullcard} > 
                        <div className={styles.image}>
                            <Image src="/pexels-pixabay-261181.jpg"  height={250} width={250} alt="..."/>
                        </div>
                        <div className={styles.desc} >
                                <h2>Product Name</h2>
                                <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <h4>Price</h4>
                                
                        </div>
                        <div className={styles.buy}>
                            <input className={styles.buybutton} onClick={handleShow} type={'button'} value='Order Now'>
                                </input>
                        </div>
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
                    </div>
                </div>

            

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        



















            </div>
            {/* <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script> */}
        </>

    )

}