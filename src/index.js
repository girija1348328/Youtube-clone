const express = require('express');
const route = require('./routes/routes.js');

const auth = require("./routes/Auth");
const admin = require("./routes/Admin");
const video = require("./routes/Video");
const user = require("./routes/User");
const multer = require("multer");

const { default: mongoose } = require('mongoose'); 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any());

mongoose.connect("mongodb+srv://Girija:Qj1HpjGqTHhbq3VF@cluster0.knxfv81.mongodb.net/YouTube_clone",{
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch ( err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT|| 3000))
});
