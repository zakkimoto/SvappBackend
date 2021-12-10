const pool = require('../../databasepg');
const queries = require('./queries');

// gott að taka fram að ég er ekki að nota alla þessa controller, en þetta er svona fyrir framtíðarsýnina

// ná í alla notendur

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

//ná í alla pending users, þetta eru notendur sem eru búnir að setja inn skjöl en vantar að auðkenna þá í gagnagrunni

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

//breyta user í active, sem þýðir í raun að hann er með eign inni á síðunni, búinn að borga og búið að auðkenna.

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

// öfugt við hér að ofan, þetta myndi vera notað þegar notandi tekur út eignina sína eða borgar ekki gjaldið.

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

//setja notanda sem auðkenndan í gagnagruni

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

//setja notanda að hann sé að bíða eftir auðkenningu, þetta ætti að vera notað bara í smáforritinu, þegar notandi hefur sett inn skjölin sín.

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

//setja notanda ekki auðkenndan

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

// ná í notanda eftir ID

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

// ná í nafn notanda

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

//ná í mynd notanda

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

// bæta við notanda

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

// setja notanda að hann sé búinn að borga

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