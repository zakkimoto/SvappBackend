const pool = require('../../databasepg');
const queries = require('./queries');

// ná í öll skilaboð

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

// ná í öll skilaboð sem eiga eftir að fá svar við

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

// ná í skilaboð með ID, þetta notum við í framendanum til þess að hafa "focus" skilaboð

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

// patch message sem þýðir að við bætum við svari hérna í gagnagruninn, og merkjum það sem ekki active

const patchMessage = (req, res) => {
    const id = parseInt(req.params.id);
    const answer = req.body.answer;
    pool.query(queries.patchMessage,[id, answer],(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error)
        }
    })
}






module.exports = {
    getMessages,
    patchMessage,
    getMessageById,
    getActiveMessages
}