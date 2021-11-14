const connectDB = require('./db/connect')
const express = require('express');
require('dotenv').config()
const app = express();
const port = 3000;
const routes = require('./routes/tasks')

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('server listing on port '+port))
    } catch (error) {
        console.error(error)
    }
}
start()
//middleware
app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks', routes)
