import { createConnection } from "typeorm";
import { Department } from "../entity/Department";

// src/programs/ex02
// Save Departments

// by default createConnection reads config info from
// ormconfig.json file, which can overridden by supplying
// the config object as parameter
createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'unisys_typeorm_db1',
    entities: [Department],
    synchronize: false
})
    .then(async conn => {
        const d1 = new Department()
        d1.id = 40;
        d1.name = 'SALES AND MARKETING';
        d1.location = 'Mumbai';

        // repo represents a logical schema/collection of all department objects
        // from which we can retrieve/delete or to which we can add/update
        const repo = await conn.getRepository(Department);
        await repo.save(d1); // Adds a new record if id is new, else updates
        console.log(d1, 'saved!')
        conn.close();
    })
    .catch(err => { 
        console.log('Error', err)
    })