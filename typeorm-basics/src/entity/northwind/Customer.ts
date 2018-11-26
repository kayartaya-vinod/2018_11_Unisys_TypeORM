import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: 'Customers' })
export class Customer {
    @PrimaryColumn({name: 'CustomerID'})
    id: string;
    @Column()
    companyName: string;
    @Column()
    contactName: string;
    @Column()
    contactTitle: string;
    @Column()
    address: string;
    @Column()
    city: string;
    @Column()
    region: string;
    @Column()
    postalCode: string;
    @Column()
    country: string;
    @Column()
    phone: string;
    @Column()
    fax: string;
}