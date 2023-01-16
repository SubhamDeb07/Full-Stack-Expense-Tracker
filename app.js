const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const sequelize = require('./Util/database')
const userRoute = require('./routes/UserRoute')
const expenseRoute = require('./routes/ExpenseRoute');
const purchaseRoute = require('./routes/purchaseRoute')

const User = require('./models/userDetails')
const Expense = require('./models/expenseDetails')
const Order = require('./models/order')


const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use(userRoute)
app.use('/users', expenseRoute)
app.use('/purchase', purchaseRoute)

User.hasMany(Expense)
Expense.belongsTo(User)

User.hasMany(Order);
Order.belongsTo(User);

sequelize.sync({force: false}).then(result =>{
    console.log('Server started at 3000');
    app.listen(3000); 
}).catch(err=>{
    console.log(err);
}); 