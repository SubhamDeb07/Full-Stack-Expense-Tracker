const path = require('path')
const bcrypt = require('bcrypt')
const User = require('../models/userDetails')


exports.signupDetails =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'SignUp.html'));
  }

  exports.loginDetails =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
  }

  exports.expenseDetails =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'expense.html'));
  }
  



exports.signUp = async(req, res, next)=>{
    console.log('Ready To Signup')

    try{
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password

        bcrypt.hash(password, 10, async(err, hash)=>{
            console.log(err)
            const data = await User.create({
                username,
                email,
                password:hash
            })
            res.status(201).json({newUserDetails: data})
            
        })

    
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error})
    }
    
}


exports.loginUser = async(req, res, next)=>{
    try{
        const {email, password} = req.body
        const user = await User.findAll({where:{email}})
        
        if(user.length > 0){
            bcrypt.compare(password, user[0].password, (err, match)=>{
            if(match){
                return res.status(201).json({message: 'Login Successful!'})
            }
            else{
                return res.status(400).json({message: 'wrong password'})
            }
        })
        }
 
        else{
            return res.status(207).json({message: 'User not found'})
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