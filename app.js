const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const sequelize = require('./Util/database')
const userRoute = require('./routes/UserRoute')


const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use(userRoute)

sequelize.sync({force: true}).then(result =>{
    console.log('Server started at 3000');
    app.listen(3000); 
}).catch(err=>{
    console.log(err);
}); 