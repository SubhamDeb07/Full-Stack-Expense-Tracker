const path = require('path')
const User = require('../models/userDetails')

exports.UserDetails =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'SignUp.html'));
  }
  

exports.signedUser = async(req, res, next)=>{
    console.log('Getting Signed User');
    try{
        const SignedUser = await User.findAll()
        res.status(201).json({data: 'Already Registered'})
        if(this.signedUser){
            alert('email already exist')
            return
        }
        
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error})
    }
}

exports.signUp = async(req, res, next)=>{
    console.log('Ready To Signup')

    try{
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password

        const data = await User.create({
            username: username,
            email: email,
            password: password
        })
        res.status(201).json({newUserDetails: data})
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error})
    }
}

exports.getUsers = async(req, res, next)=>{
    console.log('Getting Users');
    try{
        const SignedUser = await User.findAll()
        res.status(201).json(data)
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error})
    }
}