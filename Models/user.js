const mongoose = require('../db/connection')
const Schema = mongoose.Schema



const User = new Schema ({
    
    name:String,
    email:String,
    password:String,
    skills:[{
        type :Schema.Types.ObjectId,
        ref: "Skill"
    }]
    
})


module.exports = mongoose.model ('User', User)