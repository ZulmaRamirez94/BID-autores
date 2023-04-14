require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const puerto = process.env.PUERTO;

require('./config/mongoose.config')

app.use(express.json()); 
app.use(cors())
app.use(express.urlencoded({ extended: true })); 

//routes
require('./routes/autor.routes')(app); 

app.listen(puerto, () => {
    console.log("Listening at Port "+ puerto)
});