import { getNorthwindConnection } from "../utils/DbUtil";
import { Product } from "../entity/northwind/Product";

(async () => {
    const conn = await getNorthwindConnection();
    const p1 = await conn.manager.findOne(Product, 1);
    await conn.close();
    console.log(p1);
})();