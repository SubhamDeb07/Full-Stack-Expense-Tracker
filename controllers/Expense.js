const path = require('path')
const jwt = require('jsonwebtoken')
const User = require('../models/expenseDetails')




exports.getExpenses = async (req,res,next)=>{
    console.log("Getting Expenses");

    try{
      
     const data =  await User.findAll({where: {UserId: req.user.id}})
     res.status(201).json(data);
    }
    catch(error) {
      console.log(error);
      res.status(500).json({error:error});
    }
    
   
}

exports.postAddExpenses = async(req, res, next) => {
  console.log('adding a user');
  try{
    const Number = req.body.Number;
    const Description = req.body.Description;
    const Categories = req.body.Categories;

    if(!Categories){
      throw new Error('please enter phone number');
    }

    const data = await User.create({
      Number: Number,
      Description: Description,
      Categories: Categories,
      UserId: req.user.id
    })
    res.status(201).json({newExpenseDetails: data});
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:error});
  }
}


exports.deleteExpense = async (req,res,next)=>{
  
  try{
    let userId = req.params.userId;
    if(!userId){
      res.status(400).json({error:'id missing'});
    }
    await User.destroy({where:{id:userId}});
    res.sendStatus(200);
    
  }
  catch(error){
    console.log(error);
    res.status(500).json('error occured');
  };



}

