import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/login.module.css'






export default function login(){
    return(

        <>

            <div className={styles.login}>
                <Head>
                    <title>Log In</title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
                
                </Head>
                <div className={styles.main} >
                    <div className={styles.formclass}>
                    <Image src="/pexels-pixabay-261181.jpg"  height={250} width={250} alt="..."/>
                        <form className={styles.form}>
                            
                            <div class="mb-3" >
                                <label for="exampleInputEmail1" class="form-label" className={styles.email_label} >Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Log in</button>

                            <p>
                                forgot password?
                            </p>
                        </form>
                            
                            
                            
                        
                    </div>
                </div>


































            </div>
            {/* <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script> */}
        </>












)

}