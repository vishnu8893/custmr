import {GraphQLObjectType,GraphQLID,GraphQLString} from 'graphql' 



export const customertype = new GraphQLObjectType({
    name: "cutomers",
    fields: ()=>({
        id: {type:GraphQLID},
        name:{type:GraphQLString},
        phone:{type:GraphQLString},
        username:{type:GraphQLString},
        password:{type:GraphQLString},
        address:{type:GraphQLString}


    })
})


export const ordertype = new GraphQLObjectType({
    name: "orders",
    fields :  () =>({
        Id : {type:GraphQLID},
        Customer_name:{type:GraphQLString},
        Customer_username:{type:GraphQLString},
        Customer_phone:{type:GraphQLString},
        Product_category:{type:GraphQLString},
        Product:{type:GraphQLString},
        Address:{type:GraphQLString},
    }

    )

})





