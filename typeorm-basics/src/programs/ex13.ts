import { getNorthwindConnection } from "../utils/DbUtil";
import { Product } from "../entity/northwind/Product";

(async () => {
    const conn = await getNorthwindConnection();

    const products = await conn.getRepository(Product)
        .createQueryBuilder('p')
        .limit(10) // take(10)
        .offset(10) // skip(10)
        .getMany();

    conn.close();

    products.forEach(p => console.log('%d. %s costs $%f', p.id, p.name, p.unitPrice));

})();