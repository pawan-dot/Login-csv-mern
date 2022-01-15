const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Login_csv";
mongoose.connect(url, {}).then(() => {
    console.log("connection done");
})