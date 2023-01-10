const express = require('express')
const app = express()
require('./db')
const cors = require('cors')
const ToRegisterRoute = require('./routes/toRegister')

const PORT = process.env.PORT || 6000

app.use(cors())
app.use(express.json())
app.use('/api/', ToRegisterRoute)

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.listen(PORT, ()=>{
    console.log(`app is running at ${PORT}`)
})