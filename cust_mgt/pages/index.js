import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React ,{ useState,useForm } from 'react'
import {useMutation} from '@apollo/client'
import { CREATE_USER } from './graphql/mutation'
import Tab from '../components/Table'

export default function Home() {

  const[name, setName] = useState("")
  const[phone, setPhone] = useState("")
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[address, setAddress] = useState("")
  const[createUser,{error}]=useMutation(CREATE_USER);
  

  return (
    <>
      <div className={styles.container}>
          <Head>
            <title>Customer management</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@900&family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet"/>
          </Head>
            
          <div className={styles.main_div}>
              <div className={styles.foot}>
                <div className={styles.add_cus}>
                  <h2>Add Customer</h2> 
                </div>
              </div>
                <div className={styles.fields}>
                  <form>
                      <div className={styles.divline1}>
                        <div className={styles.name}>
                          <label className={styles.label1}><b>Name</b> </label>
                          <span>*</span><br/>
                          <input className={styles.input1}  required='required' onChange={(event)=>{
                            setName(event.target.value);
                          }} ></input>
                        </div>
                        <div className={styles.phone} id='phn'>
                          <label className={styles.label2}><b>Phone</b> </label>
                          <span>*</span><br/>
                          <input className={styles.input2} type='number' required='required' onChange={(event)=>{
                            setPhone(event.target.value);
                          }}></input>
                        </div>
                        <div className={styles.username}>
                          <label className={styles.label3}><b>Username</b> </label>
                          <span>*</span><br/>
                          <input className={styles.input3}  required='required' onChange={(event)=>{
                            setUsername(event.target.value);
                          }} ></input>
                        </div>
                        <div className={styles.password}>
                          <label className={styles.label4}><b>Password</b></label>
                          <span>*</span><br/>
                          <input className={styles.input4} type={'password'}  required='required' onChange={(event)=>{
                            setPassword(event.target.value);
                          }} ></input>
                        </div>
                        <div className={styles.address}>
                          <label className={styles.label5}><b>Address</b> </label>
                          <span>*</span><br/>
                          <textarea className={styles.input5} required='required' onChange={(event)=>{
                            setAddress(event.target.value);
                          }} ></textarea>
                        </div>
                        <div className={styles.image}>
                          <label className={styles.label6}><b>Upload Image</b> </label>
                          <span>*</span><br/>
                          <input className={styles.input6}  type={'file'} accept="image.png, image/jpeg" required='required'></input>
                        </div>
                      </div>
                      <div className={styles.sub}>
                          <button className={styles.submit}   onClick={()=>{
                            createUser({
                              variables:{ name:name, phone:phone, username: username, password: password, address:address }
                            });
                          }}>Submit</button>
                      </div>    
                  </form>
                </div>
                <hr className={styles.hr}/>
                <Tab/>
          </div>
      </div>
    </>
  )
}
