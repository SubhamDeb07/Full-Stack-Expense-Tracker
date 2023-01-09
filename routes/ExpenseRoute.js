const path = require('path');
const User = require('../models/expenseDetails');

const expenseController = require('../controllers/Expense');
const userAuthentication = require('../middleware/auth')

const express = require('express');
const router = express.Router();



router.get('/get-user', userAuthentication.authentication, expenseController.getExpenses);

router.post('/add-user',  userAuthentication.authentication, expenseController.postAddExpenses);

router.delete('/delete-user/:userId', expenseController.deleteExpense);


module.exports = router;