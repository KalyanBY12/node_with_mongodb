// Importing express module
const { response } = require("express")
const express = require("express")

// Initialing express app
const app = express()

app.listen(3000, () => {
        console.log("Server running on port 3000") 
    })

app.use("/", (req,res) => 
{
    res.send("Welcome to new node application here")
}
)

