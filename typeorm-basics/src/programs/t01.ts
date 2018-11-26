import { createConnection } from "typeorm";
import { Product } from "../entity/northwind/Product";

(async ()=>{
    const conn = await createConnection();
    const p1 = await conn.manager.findOne(Product, 1);
    console.log(p1);
    await conn.close();
})();