const mongoose = require("mongoose")

// Createing a schema on type of data comminucated to mongodb

const UserSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:false
    },
    age:{
        type:Number,
        required:false
    }
})

// variable a = 10
// module.exports = a
module.exports = mongoose.model("user", UserSchema)

