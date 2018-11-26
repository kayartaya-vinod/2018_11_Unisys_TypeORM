import { getNorthwindConnection } from "../utils/DbUtil";
import { Product } from "../entity/northwind/Product";

(async () => {
    const conn = await getNorthwindConnection();

    const products = await conn.getRepository(Product)
        .createQueryBuilder('p')
        .where('p.UnitPrice >= :price', { price: 75.0 })
        .orderBy('p.unitPrice', 'DESC')
        .getMany();

    conn.close();

    products.forEach(p => console.log('%s costs $%f', p.name, p.unitPrice));

})();