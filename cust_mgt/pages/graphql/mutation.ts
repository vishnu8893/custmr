import { gql } from "@apollo/client";


export const CREATE_USER = gql`

    mutation createUser(
        $name: String!
        $phone: String!
        $username: String!
        $password: String!
        $address: String!
        ){
            createUser(
                name: $name
                phone:  $phone
                username: $username
                password: $password
                address: $address
                ){
                    
                    name
                    phone
                    username
                    password
                    address
                }

        
            }


`;


export const DELETE_USER = gql`

    mutation deleteUser(
            $id:ID!
        ){
            deleteUser(
                id:$id
                ){
                    id
                }

        
            }


`;

export const UPDATE_USER = gql`

    mutation updateUser(
        $id: ID!
        $newName: String!
        $newPhone: String!
        $newUsername: String!
        $newPassword: String!
        $newAddress: String!
        ){
            updateUser(
                id:$id
                newName: $newName
                newPhone:  $newPhone
                newUsername: $newUsername
                newPassword: $newPassword
                newAddress: $newAddress
                ){
                    id
                    name
                    phone
                    username
                    password
                    address

                }

        
            }


`;


export const CREATE_ORDER = gql`

    mutation createOrder(
        $Customer_name: String!
        $Customer_username: String!
        $Customer_phone: String!
        $Product_category: String!
        $Product: String!
        $Address: String!
        ){
            createOrder(
                Customer_name: $Customer_name
                Customer_username:  $Customer_username
                Customer_phone: $Customer_phone
                Product_category: $Product_category
                Product:  $Product
                Address: $Address
                ){
                    
                    Customer_name
                    Customer_username
                    Customer_phone
                    Product_category
                    Product
                    Address
                    
                }
            }
        
`;