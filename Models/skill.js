
const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const Skill = new Schema ({
name : String,
task: [
    // array of objects 
    
    {
        ref: 'Task'
        // tells us what the class is
    }
]
})


    


module.exports = mongoose.model ('Skill', Skill)