import { DELETE_USER } from '../pages/graphql/mutation';
import { useMutation } from '@apollo/client';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { UPDATE_USER, CREATE_ORDER } from '../pages/graphql/mutation';



const ReadOnlyRow = ({ customer, index }) => {
    const [show, setShow] = useState(false);
    const [order, setOrder] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOrder = () => setOrder(true);
    const handleCloseOrder = () => setOrder(false);
    const [deleteUser] = useMutation(DELETE_USER);
    const [updateUser]= useMutation(UPDATE_USER)
    const [createOrder] =useMutation(CREATE_ORDER)
    const[id, setId] = useState("")
    const[name, setName] = useState("")
    const[phone, setPhone] = useState("")
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[address, setAddress] = useState("")
    const [orderCustName,setOrderCustName] = useState("")
    const [orderCustUsername,setOrderCustUsername] = useState("")
    const [orderCustPhone,setOrderCustPhone] = useState("")
    const [prodCategory, setProdCategory] =  useState("")
    const [product, setProduct] =  useState("")
    const [orderAddress,setOrderAddress] =  useState("")
    // const [status,setStatus] = useState("")


    if (!id){
        id=customer.id
    }

    if (!name){
        name=customer.name
    }
    if (!phone){
        phone=customer.phone
    }
    if (!username){
        username=customer.username
    }
    if (!password){
        password=customer.password
    }
    if (!address){
        address=customer.address
    }
    

    return (
        <>
            <tr key={index}>
                <td className={styles.thid}>{customer.id}</td>
                <td className={styles.thdt}>{customer.name}</td>
                <td className={styles.thdt}>{customer.phone}</td>
                <td className={styles.thdt}>{customer.username}</td>
                <td className={styles.thdt}>{customer.password}</td>
                <td className={styles.thdt}>{customer.address}</td>
                <td className={styles.thdt}>-----</td>
                <td><Button className={styles.butter} onClick={handleShow}>Edit</Button>&nbsp;
                    <a href='./'><Button className={styles.but} onClick={() => { deleteUser({ variables: { id: customer.id } }) }}>Delete</Button></a>&nbsp;
                    <Button className={styles.placeorder} onClick={handleOrder}>Place Order</Button>
                </td>
            </tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                            <Form.Label>Name hg</Form.Label>
                            <Form.Control
                                autoFocus
                                defaultValue={customer.name}
                                onChange={(event)=>{
                                    setName(event.target.value);}}
                            />
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                autoFocus
                                defaultValue={customer.phone}
                                type='number'
                                onChange={(event)=>{
                                    setPhone(event.target.value);}}
                            />
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                defaultValue={customer.username}
                                onChange={(event)=>{
                                    setUsername(event.target.value);}}
                            />
                        </Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            autoFocus
                            defaultValue={customer.password}
                            type='password'
                            onChange={(event)=>{
                                setPassword(event.target.value);}}
                        />
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3}
                            defaultValue={customer.address}
                            onChange={(event)=>{
                                setAddress(event.target.value);}} />
                        </Form.Group>
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control
                            autoFocus
                            type='file'
                            accept='image.png, image/jpeg'
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <a href='./'><Button variant="primary" onClick={() => {
                        updateUser({
                            variables:{id:id,newName:name, newPhone:phone, newUsername: username, newPassword: password, newAddress:address}}) }}>
                        Submit
                    </Button></a>
                </Modal.Footer>
            </Modal>
            <Modal show={order} onHide={handleCloseOrder}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                        <Form.Label>ID</Form.Label>
                            <Form.Control
                                autoFocus
                                defaultValue={customer.id}
                                disabled='disabled'
                            />
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                autoFocus   
                                defaultValue={customer.name}
                                onChange={(event)=>{
                                    setOrderCustName(event.target.value);}}
                            />
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                autoFocus
                                type='number'
                                defaultValue={customer.phone}
                                onChange={(event)=>{
                                    setOrderCustPhone(event.target.value);}}
                            />
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                defaultValue={customer.username}
                                onChange={(event)=>{
                                    setOrderCustUsername(event.target.value);}}
                            />
                            <Form.Label>Categories</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(event)=>{
                                    setProdCategory(event.target.value);}} >
                                <option>Select one</option>
                                <option>Wire</option>
                                <option>Fan</option>
                                <option>Plugs</option>
                            </Form.Select>
                            <Form.Label>Products</Form.Label>
                            <Form.Select  onChange={(event)=>{
                                    setProduct(event.target.value);}} >
                                <option>Select one</option>
                                <option> norm wire 256</option>
                                <option>philips tb fan</option>
                                <option>plasma Plug</option>
                            </Form.Select>

                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label> Shipping Address</Form.Label>
                            <Form.Control as="textarea" rows={2}
                            defaultValue={customer.address}
                            onChange={(event)=>{
                                setOrderAddress(event.target.value);}}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseOrder}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        createOrder({
                            variables:{Customer_name:orderCustName,Customer_username:orderCustUsername,Customer_phone:orderCustPhone,Product_category:prodCategory,Product:product,Address:orderAddress}
                        })
                    }} >
                        Confirm Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ReadOnlyRow