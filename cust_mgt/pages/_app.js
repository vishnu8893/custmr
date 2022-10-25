import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  React from 'react'
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'




function MyApp({ Component, pageProps }) {

  



  const client = new ApolloClient({
    uri:"http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });


  return(
  <> 
  <ApolloProvider client={client}>
    <Component {...pageProps}/>
    
  </ApolloProvider>
  </>
  )
}

export default MyApp
