const path = require('path')
const User = require('../models/userDetails')

exports.signupDetails =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'SignUp.html'));
  }

  exports.loginDetails =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
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


exports.loginUser = async(req, res, next)=>{
    try{
        const {email, password} = req.body
        const user = await User.findAll({where:{email, password}})
        
        if(user.length > 0){
            res.status(201).json({message: 'Login Successful!'})
        }
        else{
            res.status(207).json({message: 'Invalid Credentials'})
        }
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