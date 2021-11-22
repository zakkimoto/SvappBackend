const pool = require('../../databasepg');
const queries = require('./queries');

const getMessages = (req, res) => {
    pool.query(queries.getMessages,(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error)
        }
    })
};

const getActiveMessages = (req, res) => {
    pool.query(queries.getActiveMessages,(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error)
        }
    })
};

const getMessageById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getMessageById,[id],(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error)
        }
    })
};


//TODO
const putMessage = (req, res) => {
    pool.query(queries.putMessage,[id],(error,results)=>{
        if(!error){
            res.status(200)
        }else{
            console.log(error)
        }
    })
}






module.exports = {
    getMessages,
    putMessage,
    getMessageById,
    getActiveMessages
}