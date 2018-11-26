import { Column, PrimaryGeneratedColumn, Entity, AfterLoad, BeforeInsert, AfterInsert } from "typeorm";

@Entity({ name: 'Shippers' })
export class Shipper {

    @PrimaryGeneratedColumn({ name: 'ShipperID' })
    id: number;
    @Column({ name: 'CompanyName' })
    name: string;
    @Column()
    phone: string;

    toString(): string {
        return `Shipper [Id=${this.id}, Name=${this.name}, Phone=${this.phone}]`;
    }

    @AfterLoad()
    fn() {
        console.log('Event fired fired for: %s', this);
    }
}