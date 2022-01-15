connectToMongo = require('./db')
const express = require("express");
//const bodyparser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;
var cors = require('cors')

//db connection
require("./db");

//handdle cores
app.use(cors())
//  handle json requiest from body
app.use(express.json());//json data deal

//app.use(bodyparser.urlencoded({ extended: false }))
//app.use(bodyparser.json())

//calling routes function
app.use('/api/auth', require('./routes/auth'));
app.listen(PORT, () => {
    console.log(` Backend server is listening on ${PORT}`);
});
