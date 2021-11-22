const express = require('express');
const cors=require("cors");
const userRoutes = require('./src/users/routes');
const messageRoutes = require('./src/messages/routes');
const app = express();
const port = 3000;

const corsOptions ={
   origin:'*', 
   credentials:true,        
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello world");
});

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/messages', messageRoutes);


app.listen(port, () => console.log('app listening on port 3000'));