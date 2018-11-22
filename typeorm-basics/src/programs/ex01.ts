import { createConnection } from "typeorm";

createConnection()
    .then(conn => { 
        console.log('Got a connection...!');
        conn.close();
    })
    .catch(err => { 
        console.log('Error while connecting to db...!');
        console.log(err);
    });