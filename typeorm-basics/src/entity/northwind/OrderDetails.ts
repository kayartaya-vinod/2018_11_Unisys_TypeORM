import 'reflect-metadata';

import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity({ name: 'Order Details' })
export class OrderDetails {

    // foreign key fields are defined using respective entities
    // and mapped with ManyToOne association.

    // (order, product) represent a composite primary key as well.

    @ManyToOne(type => Order, { eager: true, primary: true })
    @JoinColumn({ name: 'OrderID' })
    order: Order;

    @ManyToOne(type => Product, { eager: true, primary: true })
    @JoinColumn({ name: 'ProductID' })
    product: Product;

    @Column()
    unitPrice: number;
    @Column()
    quantity: number;
    @Column()
    discount: number;
}