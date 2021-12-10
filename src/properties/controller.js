const pool = require('../../databasepg');
const queries = require('./queries');

// ná í allar fasteignir, við notum þetta í feisteingaglugganum okkar

const getProperties = (req, res) => {
    pool.query(queries.getProperties,(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error)
        }
    })
};

//náum í addressu eftir ID

const getAdressById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getAdressById,[id],(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error)
        }
    })
};

//ná í fasteign með addressu

const getPropertiesWithAddress = (req, res) => {
    pool.query(queries.getPropertiesWithAddress,(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error)
        }
    })
};

module.exports = {
    getProperties,
    getAdressById,
    getPropertiesWithAddress,

    
}