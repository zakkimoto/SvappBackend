const pool = require('../../databasepg');
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers,(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error)
        }
    })
};

const getPendingUsers = (req, res) => {
    pool.query(queries.getPendingUsers,(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error);
        }
    })
};
const putUserActive = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.putUserActive,[id],(error,results)=>{
        if(!error){
            res.status(200).send("User now Active");
            console.log("User now Active");
        }else{
            console.log(error);
        }
    })
};
const putUserNotActive = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.putUserNotActive,[id],(error,results)=>{
        if(!error){
            res.status(200).send("User now not Active");
            console.log("User now not Active");
        }else{
            console.log(error);
        }
    })
};

const putUserVerified = (req, res) => {
    const id = parseInt(req.params.id);
    console.log("verifyrequest");
    pool.query(queries.putUserVerified,[id],(error,results)=>{
        if(!error){
            res.status(200).send("User now verified");
            console.log("User now verified. ");
        }else{
            console.log(error);
        }
        
    })
};
const putUserPendingVerified = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.putUserPendingVerified,[id],(error,results)=>{
        if(!error){
            res.status(200).send("User now pening with verification");
            console.log("User now pening. ");
        }else{
            console.log(error);
        }
        
    })
};
const putUserNotVerified = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.putUserNotVerified,[id],(error,results)=>{
        if(!error){
            res.status(200).send("User now with not Authenticated Status");
            console.log("User not verified. ");
        }else{
            console.log(error);
        }
        
    })
};

const getUserById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById,[id],(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error)
        }
    })
};

const getUserName  =(req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getUserName,[id],(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error);
        }
    })
};

const getUserImage  =(req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getUserImage,[id],(error,results)=>{
        if(!error){
            res.status(200).json(results.rows);
            console.log(results.rows);
        }else{
            console.log(error);
        }
    })
}


const addUser = (req,res)=>{
    const { image_id, name_id, usr_ssn, email, phone, guest_points, active, verified, is_admin} =req.body;

    //check if email exists alreaady
    pool.query(queries.checkEmailExists, [email], (error, results)=>{
        if (results.rows.length){
            res.send("Email already exists. ");
        }

        // add user to databasepg
        pool.query(queries.addUser, [image_id, name_id, usr_ssn, email, phone, guest_points, active, verified, is_admin], (error, results)=>{
            if (error) throw error;
            res.status(201).send("User Created Successfully")
            console.log("User Created");
        })
    });

}


const putUserPaid = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.putUserPaid,[id],(error,results)=>{
        if(!error){
            res.status(200).send("User has Paid");
            console.log("User has Paid");
        }else{
            console.log(error);
        }
    })
};


module.exports = {
    getUsers,
    getUserById,
    addUser,
    getUserName,
    getUserImage,
    putUserNotVerified,
    putUserPendingVerified,
    putUserVerified,
    putUserActive,
    putUserNotActive,
    getPendingUsers,
    putUserPaid,
}