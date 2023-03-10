const path = require('path')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

require('dotenv').config()

// const sequelize = require('./Util/database')
const userRoute = require('./routes/UserRoute')
const expenseRoute = require('./routes/ExpenseRoute');
const purchaseRoute = require('./routes/purchaseRoute')
const leaderboardRoute = require('./routes/leaderboardRoute')
const forgotPasswordRoute = require('./routes/forgetpassRoute')

// const User = require('./models/userDetails')
// const Expense = require('./models/expenseDetails')
// const Order = require('./models/order')
// const Forgotpassword = require('./models/resetPassDetails')
// const URL = require('./models/URL')


const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use(userRoute)
app.use('/users', expenseRoute)
app.use('/purchase', purchaseRoute)
app.use(leaderboardRoute)
app.use(forgotPasswordRoute)
app.use((req,res)=>{
    res.sendFile(path.join(__dirname, `/views/${req.url}`))
})

// User.hasMany(Expense)
// Expense.belongsTo(User)

// User.hasMany(Order);
// Order.belongsTo(User);

// User.hasMany(Forgotpassword);
// Forgotpassword.belongsTo(User);

// User.hasMany(URL);
// URL.belongsTo(User);

mongoose.connect(
    'mongodb+srv://subha:Pika.123@expensetracker.vwzsbis.mongodb.net/?retryWrites=true&w=majority')
    .then(result =>{
      app.listen(3000)
      console.log("APP STARTED")
    })
    .catch(err =>{
      console.log(err)
    })