const express = require('express');
const cors = require("cors");
const userRoutes = require('./src/users/routes');
const messageRoutes = require('./src/messages/routes');
const propertyRoutes = require('./src/properties/routes');
const app = express();
const port = 3000;

const corsOptions ={
   origin:'*', 
   credentials:true,        
   optionSuccessStatus:200,
}


//passa að hafa þetta cors inni annars virkar þetta ekki

app.use(cors())
app.use(cors(corsOptions))

app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello world");
});

//routes fyrir mismunandi endapunkta

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/messages', messageRoutes);

app.use('/api/v1/properties', propertyRoutes);


app.listen(port, () => console.log('app listening on port 3000'));