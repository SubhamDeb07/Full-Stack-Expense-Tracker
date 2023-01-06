const path = require('path')
const User = require('../models/userDetails')

const userController = require('../controllers/userDetails')


const express = require('express')
const router = express.Router();

router.get('/users/signup', userController.UserDetails)
router.post('/users/signup', userController.signUp)
router.get('/users/signup', userController.signedUser)
router.get('/users/getUser', userController.getUsers)

module.exports = router