import { createConnection } from "typeorm";
import { Employee } from "../entity/Employee";

(async ()=>{
    const conn = await createConnection();
    const e1 = await conn.manager.findOne(Employee, 1);
    await conn.close();
    console.log(e1);
})();