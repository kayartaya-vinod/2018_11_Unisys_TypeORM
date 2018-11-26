import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity({ name: "Categories" })
export class Category {

    @PrimaryGeneratedColumn({ name: "CategoryID" })
    id: number;


    @Column({ name: "CategoryName" })
    name: string;


    @Column({ name: "Description" })
    description: string;


    @Column({ name: "Picture" })
    picture: Buffer;


    @OneToMany(type => Product, pr => pr.category)
    products: Promise<Product[]>;

}
