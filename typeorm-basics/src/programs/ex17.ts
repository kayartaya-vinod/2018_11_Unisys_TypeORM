import { getNorthwindConnection } from "../utils/DbUtil";
import { Product } from "../entity/northwind/Product";
import { Supplier } from "../entity/northwind/Supplier";

(async () => {
    const conn = await getNorthwindConnection();

    const s1 = await conn.getRepository(Supplier).findOne(4);
    console.log(s1);
    console.log('Products supplied by this supplier: ');
    (await s1.products).forEach(p => 
        console.log('%s $%f', p.name, p.unitPrice))
    conn.close();


})();