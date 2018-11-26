import { Column } from "typeorm";

// this class by itself is not an entity and has not been
// mapped to any table in the db. But, this can be part of
// an actual entity class (and hence called as Embeddable)
export class Address {
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
}