import { createConnection } from "typeorm";
import { Department } from "../entity/Department";

// createConnection()
//     .then(conn => conn.getRepository(Department))
//     .then(repo => repo.findOne(20))
//     .then(d1 => console.log(d1))
//     .catch(err => { console.log(err) })

async function main() {
    const conn = await createConnection();
    const repo = await conn.getRepository(Department);
    // const d1 = await repo.findOne(20); // department where id = 20
    // const d1 = await repo.findOne(); // first department record
    const d1 = await repo.findOne({ location: 'Mumbai' }) // first matching record where location='Mumbai'

    console.log(d1);
    conn.close();
}

main();