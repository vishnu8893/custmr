import { customertype, ordertype } from "../Typedef/cust";
import {GraphQLID,GraphQLString} from 'graphql';
import {Users,Orders} from '../../schema/Entities/custs';




export const CREATE_USER = {
    type: customertype,
    args: {
        name:{type:GraphQLString},
        phone:{type:GraphQLString},
        username:{type:GraphQLString},
        password:{type:GraphQLString},
        address:{type:GraphQLString}
    }, 

    resolve(parent:any, args:any) {
        const {name,phone, username,password,address}=args;
        Users.insert({name,phone,username,password,address});
        return args
    },
}

export  const DELETE_USER = {
    type: customertype,
    args: {
        id:{type:GraphQLID}
    }, 

    async resolve(parent:any, args:any) {
        const {id}=args;
        await Users.delete(id)
    },
}


export const UPDATE_USER = {
    type: customertype,
    args: {
        id:{type:GraphQLID},
        newName:{type:GraphQLString},
        newPhone:{type:GraphQLString},
        newUsername:{type:GraphQLString},
        newPassword:{type:GraphQLString},
        newAddress:{type:GraphQLString}
        
    },

    async resolve(parent:any, args:any){
        const {id,newName,newPhone, newUsername,newPassword,newAddress}=args;
        const user=await Users.findOne({where:{id:id}});
        await Users.update({id:id},{name:newName});
        await Users.update({id:id},{phone:newPhone});
        await Users.update({id:id},{username:newUsername});
        await Users.update({id:id},{password:newPassword});
        await Users.update({id:id},{address:newAddress});
        
    }
}


export const CREATE_ORDER = {
    type: ordertype,
    args:{ 
    Customer_name:{type:GraphQLString},
    Customer_username:{type:GraphQLString},
    Customer_phone:{type:GraphQLString},
    Product_category:{type:GraphQLString},
    Product:{type:GraphQLString},
    Address:{type:GraphQLString},
    },

    async resolve(parent:any, args:any) {
        const {Customer_name,Customer_username, Customer_phone,Product_category,Product,Address}=args;
        await Orders.insert({Customer_name,Customer_username, Customer_phone,Product_category,Product,Address});
        return args
    },
}


