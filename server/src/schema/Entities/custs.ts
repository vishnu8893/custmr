import {BaseEntity,Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
 
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    phone!: string;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @Column()
    address!: string;


}

@Entity()

export class Orders extends BaseEntity{

    @PrimaryGeneratedColumn()
    Id! : number;

    @Column()
    Customer_name! : string;


    @Column()
    Customer_username! : string;


    @Column()
    Customer_phone! : string;


    @Column()
    Product_category! : string;

    @Column()
    Product! : string;

    @Column()
    Address! : string;

}


