import { createConnection } from 'typeorm';
import { Department } from '../entity/Department';

const main = async () => {
    const conn = await createConnection();
    const d1 = await conn.manager.findOne(Department, 40);
    console.log(d1);
    console.log('-------------------------------')

    const depts = await conn.manager.find(Department);
    console.log('There area %d departments', depts.length);
    depts.forEach(d => console.log(d));
    
    conn.close();
};

main();