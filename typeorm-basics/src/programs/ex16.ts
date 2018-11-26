import { getNorthwindConnection } from "../utils/DbUtil";
import { Product } from "../entity/northwind/Product";

(async () => {
    const conn = await getNorthwindConnection();

    const data = await conn.getRepository(Product)
        .createQueryBuilder('p')
        .leftJoin('p.category', 'c')
        .select(['p.id', 'p.name', 'p.unitPrice', 'c.name'])
        .where('c.name = :catName', { catName: 'Beverages' })
        .getRawOne();

    conn.close();

    console.log(data)

})();