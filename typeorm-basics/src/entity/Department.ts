import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Employee } from "./Employee";

@Entity({
    name: 'DEPTS'
})
export class Department {
    @PrimaryColumn({ name: 'DEPT_ID', type: 'int' })
    id: number;

    @Column({
        name: 'DEPT_NAME', type: 'varchar',
        length: 50, nullable: false, unique: true
    })
    name: string;

    @Column({ name: 'LOC' })
    location: string;

    // OneToMany exists only because of ManyToOne
    // Here, emp.department has the ManyToOne mapping
    @OneToMany(type => Employee, emp => emp.department)
    employees: Promise<Employee[]>; // for lazy associations, use Promise
}