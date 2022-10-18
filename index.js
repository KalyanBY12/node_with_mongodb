///Importing Express modules (as a constant)

const { response } = require("express")

const express=require("express")
const { route } = require("express/lib/application")
const mongoose=require("mongoose")

const routes = require("./routes/routes")
//Initializing Express app
const app=express()

//
app.listen(3000,() => {

    console.log("Server running on port 3000")
})

app.use(express.json())

//default route first


app.use("/Welcome",(req,res)=>{

    res.send("Welcome to Node Application here please it")

})


app.use("/user", routes)

const uri = "mongodb+srv://Chowdhurykalyan96:Welcome%40518@cluster0.r8mzlej.mongodb.net/EmployeeNodejs?retryWrites=true&w=majority"
mongoose.
    connect(uri,{useNewUrlParser:true}).
    then(() => {console.log("Database Connected")}).
    catch((error) =>{console.log(error)})

