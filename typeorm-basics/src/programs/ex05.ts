import { createConnection } from "typeorm";
import { Department } from "../entity/Department";

(async () => {
    const conn = await createConnection();
    const repo = await conn.getRepository(Department);
    await repo.delete([20, 40]);
    console.log('Department 20, 40 deleted');

    // insert() always fires SQL 'INSERT' command
    // may fail if primary keys exists already.
    // use save() instead
    await repo.insert([
        { id: 25, name: 'ADMINISTRATION', location: 'Bangalore' },
        { id: 35, name: 'SALES', location: 'Mangalore' },
    ]);
    console.log('2 departments inserted');

    conn.close();

})();
