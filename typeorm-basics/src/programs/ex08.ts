import { createConnection } from "typeorm";
import { Laptop } from "../entity/Laptop";

(async ()=>{
    const conn = await createConnection();
    const repo = await conn.getRepository(Laptop);

    await repo.save([
        {make: 'Apple', model: 'Macbook Pro'},
        {make: 'Lenovo', model: 'Z560'},
        {make: 'Apple', model: 'Macbook Pro'},
        {make: 'Acer', model: 'Travelmate'}
    ]);

    await conn.close();
    console.log('4 laptops were added!');
})();