import { Department } from "./Department";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Laptop } from "./Laptop";

@Entity({ name: 'EMPS' })
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ name: 'hire_date', type: 'date' })
    hireDate: any;

    @Column({ type: 'decimal' })
    salary: number;

    @ManyToOne(type => Department, { eager: true })
    @JoinColumn({ name: 'DEPT_ID' })
    department: Department; // many employees belong to a department

    // lt.ownedBy has the JOIN COLUMN information
    @OneToOne(type => Laptop, lt => lt.ownedBy)
    laptop: Promise<Laptop>; // lazy fetch
}