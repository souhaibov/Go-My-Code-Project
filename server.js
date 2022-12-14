// importing express
const express = require('express')
const cors = require('cors')
// initialisation
const app = express()
// importing database
const connectDB = require('./config/dbConnect')
// importing passport

// importing dotenv
require('dotenv').config({path:'./config/.env'})
// connection to database
connectDB()

// convert json:middleware
app.use(express.json())
app.use(cors())
// routes
app.use('/user',require('./routes/user'))
app.use('/activities',require('./routes/activities'))
app.use('/events',require('./routes/events'))

// server
const port = process.env.PORT

app.listen(port,(err)=>err?console.log(err)
:console.log(`server is running on : ${port}`))