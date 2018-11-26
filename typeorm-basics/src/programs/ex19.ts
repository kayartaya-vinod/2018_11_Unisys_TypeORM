import { getNorthwindConnection } from "../utils/DbUtil";
import { Product } from "../entity/northwind/Product";
import { Category } from "../entity/northwind/Category";

import * as fs from 'fs';

(async () => {
    const conn = await getNorthwindConnection();

    // const cat = new Category();
    // cat.name = 'Electronics Spares';
    // cat.description = 'Electronics spares like wires etc..';
    // cat.picture = null; // new Buffer(fs.readFileSync('electronics.jpg')); 

    // await conn.createQueryBuilder()
    //     .insert()
    //     .into(Category)
    //     .values([cat])
    //     .execute();
    
    await conn.createQueryBuilder()
        .update(Product)
        .set({unitPrice: 22.22, unitsInStock: 32})
        .where({id: 1})
        .execute();

    console.log('Product price updated');
    conn.close();


})();