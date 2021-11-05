const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'rootUser',
    database: 'zakariasfridriksson'
})

module.exports = pool;

/*  
pool.connect();

pool.query('SELECT * FROM svapp_user',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err)
    }
    client.end();

})
*/