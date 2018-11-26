import { Employee } from "./Employee";
import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity({ name: 'LAPTOPS' })
export class Laptop {

    @PrimaryGeneratedColumn('uuid', { name: 'slno' })
    serialNumber: string;

    @Column()
    make: string;

    @Column()
    model: string;

    @OneToOne(type => Employee, { eager: true, nullable: true })
    @JoinColumn({ name: 'owned_by' })
    ownedBy: Employee; // one laptop is owned by one employee, and one employee owns one laptop

}