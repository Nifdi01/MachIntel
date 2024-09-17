const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password:'1331',
    host:'host',
    port:'5432',
    database:'machintel',
});


client.connect().then(()=>{
    console.log('Conntected to PostgreSQL Database');
}).catch((err) => {
    console.error('Failed to Connect to Database: ', err);
});