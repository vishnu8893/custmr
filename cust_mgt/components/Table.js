import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import React ,{ useState } from 'react';
import {GET_ALL_USERS} from '../pages/graphql/queries'
import { useQuery } from '@apollo/client';
import ReadOnlyRow from './ReadOnly';


export default function Tab(){

    const[searchterm, setSearchTerm]= useState("");
    const {data} =useQuery(GET_ALL_USERS);
    
    return( 
        <>
        <div className='container'>
                    <div className={styles.search}> 
                      <input className={styles.search_input} type={'search'} placeholder='Search....' onChange={(event)=>{setSearchTerm(event.target.value)}} ></input>
                      <div className={styles.div_button}>
                        <button type='search' className={styles.search_button} ><FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faMagnifyingGlass} /></button>
                      </div>
                    </div>
                    <div className={styles.scrollbar}>
                      <form>
                            <table className='table table-dark table-striped' id='vish'>
                              <thead>
                                <tr>
                                  <th className={styles.thid} scope="col">#</th>
                                  <th className={styles.thdt} scope="col">Name</th>
                                  <th className={styles.thdt} scope="col">Phone</th>
                                  <th className={styles.thdt} scope="col">Username</th>
                                  <th className={styles.thdt} scope="col">Password</th>
                                  <th className={styles.thdt} scope="col">Address</th>
                                  <th className={styles.thdt} scope="col">Image</th>
                                  <th></th> 
                                </tr>
                              </thead> 
                              <tbody> 
                                {data &&
                                  data.getAllUsers.filter((customer)=>{
                                    if (searchterm==""){
                                      return customer
                                    }
                                    else if (customer.name.toLowerCase().includes(searchterm.toLocaleLowerCase())){
                                      return customer
                                    }
          
                                  }).map((customer, index)=>{
                                    return(     
                                      <ReadOnlyRow customer={customer} /> 
                                  )
                                })}
                              </tbody> 
                            </table>
                        </form>
                    </div>
                  </div>
        </>
    )
}