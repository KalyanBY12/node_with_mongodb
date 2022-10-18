const req = require("express/lib/request")
const UserModel = require("../models/UserModel")
const { use } = require("../routes/routes")

// Adding NAme and all
exports.addUser = (req,res) => {
    const user = new UserModel({
        fname:req.body.fname,
        lname:req.body.lname,
        age:req.body.age
    })
    user.
        save().
        then((data) => {
            res.send(data)
        }).
        catch((error) => {
            res.send(error)
        })
}

// Get all customers
exports.getAll = (req,res) => {
    const user = UserModel.find()   
    user.
        then((data) => {
            res.send(data)
        }).
        catch((error) => {
            res.send(error)
        })
}

// Get by name 
exports.getByname = (req,res) => {
    const user =  UserModel.find({fname:req.params.fname})   
    user.
        then((data) => {
            res.send(data)
        }).
        catch((error) => {
            res.send(error)
        })
}

// Get by name and age

exports.getNameandAge = (req,res) => {
    const user = UserModel.find({},{fname:1,age:1})
    user.
        then((data) => {
            res.status(200).json({
                message:"Successfully got my name and age",
                data:data,
            })
        })
    
}


// udate Age by Name
exports.updateAgeByname=(req,res)=>{
    UserModel.findOne({fname:"Kalyan"},(error,user)=>{
        if(error) res.send(error)
        user.age=req.body.age ? req.body.age: user.age
        user.save((error)=>{
            if(error) res.send(error)
            res.status(200).json({
                message:"Successfully got the name and age",
                data:user
            })
        })
    })
}

// Increment Age by name
exports.updateAgeByName2 = (req,res) => {
    UserModel.updateOne({fname:"Maya"}, { $inc : {age : 25}}, (data) => {
        res.status(200).json({
            message : "successfully updated Maya's Age",
            data : data
        })
    })
}



// deleteUser by name
exports.deleteByName = (req,res) => {
    UserModel.deleteOne({fname:req.params.fname}, () => {
        res.status(200).json({
            message : "Successfully Deleted "+req.params.fname+"'s Data"
        })
    })
}



