import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import { schema } from './schema';
import cors from 'cors';
import { createConnection } from 'typeorm'; 
import {Orders, Users} from '../src/schema/Entities/custs'


const main = async () => {

    await createConnection({
        type: "mysql",
        database: "graphqlcrud",
        username:"root",
        password: "Sachin@10",
        logging: true,
        synchronize: false,
        entities: [Orders,Users],

    })

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql:true
    }))

    app.listen(3001,()=>{
        console.log("server running on portal 3001")
    })


}; 

main().catch((err)=>{
    console.log(err);

});