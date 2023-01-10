const mongoose = require('mongoose')

var mongoURL = "mongodb+srv://gmendon:12345@cluster0.ifqlzwl.mongodb.net/nodejstask"

mongoose.set('strictQuery', true)
mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser: true})

let connection = mongoose.connection

connection.on("error", ()=>{
    console.log("mongodb connectgion failed")
})

connection.on("connected", ()=>{
    console.log("mongodb connected");
})

module.exports = mongoose