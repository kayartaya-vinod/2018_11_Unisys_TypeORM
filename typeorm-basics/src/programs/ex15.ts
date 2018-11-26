import { getNorthwindConnection } from "../utils/DbUtil";
import { Product } from "../entity/northwind/Product";

(async () => {
    const conn = await getNorthwindConnection();

    // const data = await conn.getRepository(Product)
    //     .createQueryBuilder('p')
    //     .leftJoin('p.category', 'c')
    //     .select(['p.id', 'p.name', 'p.unitPrice', 'c.name'])
    //     .where('c.name = :catName', { catName: 'Beverages' })
    //     .andWhere('p.unitPrice <= :minPrice', { minPrice: 15 })
    //     .getMany();
    const data = await conn.getRepository(Product)
        .createQueryBuilder('p')
        .innerJoin('p.category', 'c')
        .select('c.name, count(*)')
        .groupBy('c.name')
        .getMany();
    conn.close();

    // data.forEach(p => console.log('%d %s (%s) $%f',
    //     p.id, p.name, p.category.name, p.unitPrice));

    console.log(data)
})();