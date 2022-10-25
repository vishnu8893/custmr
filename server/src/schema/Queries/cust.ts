import {customertype} from '../Typedef/cust'
import {GraphQLList} from 'graphql'
import { Users } from '../../schema/Entities/custs'

export const GET_ALL_USERS = {
    type: new GraphQLList(customertype),
    resolve(){
        return Users.find();

    },
} 


