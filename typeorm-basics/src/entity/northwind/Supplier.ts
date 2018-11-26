import { Entity, PrimaryGeneratedColumn, Column, OneToMany, } from "typeorm";
import { Product } from "./Product";
import { Address } from "./Address";


@Entity("Suppliers")
export class Supplier {

    @PrimaryGeneratedColumn({ name: "SupplierID" })
    id: number;


    @Column({ name: "CompanyName" })
    companyName: string;


    @Column({ name: "ContactName" })
    contactName: string;


    @Column({ name: "ContactTitle" })
    contactTitle: string;

    // @Column(type => Address, { prefix: '' }) // Embedded entity object
    // address: Address;

    @Column({ name: 'Address' })
    streetAddress: string;
    @Column({ name: 'City' })
    city: string;
    @Column({ name: 'Region' })
    region: string;
    @Column({ name: 'PostalCode' })
    postalCode: string;
    @Column({ name: 'Country' })
    country: string;

    @Column({ name: "Phone" })
    phone: string;


    @Column({ name: "Fax" })
    fax: string;


    @Column({ name: "HomePage" })
    homePage: string;



    @OneToMany(type => Product, pr => pr.supplier)
    products: Promise<Product[]>;

}
