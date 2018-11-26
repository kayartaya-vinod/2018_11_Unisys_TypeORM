import { createConnection } from "typeorm";
import { Department } from "../entity/Department";

(async () => {
    const conn = await createConnection();
    const d1 = await conn.manager.findOne(Department, 10);
    console.log(d1);
    
    const emps = await d1.employees;
    emps.forEach(e => console.log(e))
    // emps.forEach(function (e) { console.log(e) });
    
    conn.close();
})();