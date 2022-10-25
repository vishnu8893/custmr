import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import { GET_ALL_USERS } from './Queries/cust'
import { CREATE_USER, DELETE_USER,UPDATE_USER,CREATE_ORDER } from './Mutations/cust'

const RootQuery = new GraphQLObjectType({
    name:"Rootquery",
    fields:{
        getAllUsers: GET_ALL_USERS,
    },
})

const Mutation = new GraphQLObjectType({ 
    name:"Mutation",
    fields:{
        createUser: CREATE_USER,
        deleteUser:DELETE_USER,
        updateUser:UPDATE_USER,
        createOrder:CREATE_ORDER,
    },
})


export const schema = new GraphQLSchema({
    query:RootQuery ,
    mutation: Mutation,
})