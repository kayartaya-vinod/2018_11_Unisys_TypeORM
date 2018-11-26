import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Supplier } from "./Supplier";
import { Category } from "./Category";


@Entity("Products")
export class Product {

    @PrimaryGeneratedColumn({ name: "ProductID" })
    id: number;


    @Column({ name: "ProductName" })
    name: string;



    @ManyToOne(type => Supplier, sup => sup.products, { eager: true })
    @JoinColumn({ name: 'SupplierID' })
    supplier: Supplier;



    @ManyToOne(type => Category, cat => cat.products, { eager: true })
    @JoinColumn({ name: 'CategoryID' })
    category: Category;


    @Column({ name: "QuantityPerUnit" })
    quantityPerUnit: string;


    @Column({ name: "UnitPrice" , type: "float"})
    unitPrice: number;


    @Column({ name: "UnitsInStock" })
    unitsInStock: number;


    @Column({ name: "UnitsOnOrder" })
    unitsOnOrder: number;


    @Column({ name: "ReorderLevel" })
    reorderLevel: number;


    @Column({ name: "Discontinued" })
    discontinued: boolean;


}
