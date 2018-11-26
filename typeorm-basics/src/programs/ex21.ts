import { getNorthwindConnection } from "../utils/DbUtil";
import { Shipper } from "../entity/northwind/Shipper";


(async () => {
    const conn = await getNorthwindConnection();
    const repo = await conn.getRepository(Shipper);
    await repo.find();

    conn.close();
})();