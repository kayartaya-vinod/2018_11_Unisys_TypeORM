import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, OneToMany } from "typeorm";
import { Customer } from "./Customer";
import { OrderDetails } from "./OrderDetails";

@Entity({ name: 'Orders' })
export class Order {
    @PrimaryGeneratedColumn({ name: 'OrderID' })
    id: number;

    @ManyToOne(type => Customer, { eager: true })
    @JoinColumn({ name: 'CustomerID' })
    customer: Customer;

    @Column()
    employeeId: number;

    @Column()
    orderDate: Date;

    @Column()
    requiredDate: Date;

    @Column()
    shippedDate: Date;

    @Column()
    shipVia: number;

    @Column()
    freight: number;

    @Column()
    shipName: string;

    @Column()
    shipAddress: string;

    @Column()
    shipCity: string;

    @Column()
    shipRegion: string;

    @Column()
    shipPostalCode: string;

    @Column()
    shipCountry: string;

    // od.order has the JOIN COLUMN information, where
    // od is an instanceof OrderDetails. Since the data type
    // of orderDetails is a Promise, it is lazily initialized.
    @OneToMany(type => OrderDetails, od => od.order)
    orderDetails: Promise<OrderDetails[]>
}