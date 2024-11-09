// STEPS TO DEFINE EXPRESS SERVER

// "import" external package
// --------------------------

//loads .env file contents into process.env
require('dotenv').config()
const express = require('express')
const cors = require('cors')
// create express server using express package
const pfServer = express()
// import router
const router = require('./routes/router')
// import connection.js file
require('./database/dbConnection')



// enabling data sharing using cors
pfServer.use(cors())
// for parsing json data from client request
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))


// create port for server application
const PORT = 3000 || process.env.PORT

// run server app in specified port
pfServer.listen(PORT,()=>{
    console.log(`pfServer started at port ${PORT} and waiting for client request !!!`);
    
})

// type command : node index.js in terminal of server to run the server app in the specified port

// to resolve get request using express server to http://localhost:3000/
pfServer.get('/',(req,res)=>{
    // using response object share server response to client
    res.status(200).send(`<h1 style="color:green;">pfServer Started at port and waiting for client request!!!</h1>`)
})

