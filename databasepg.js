const {Pool} = require('pg')

// ný uppsetning krefst þess að breyta þessu! nema auðvitað að gagnagrunirinn á postgres sé sá sami!

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