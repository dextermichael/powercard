
const mongoose = require('../db/connection')
const Schema = mongoose.Schema




const Skill = new Schema({
    name: String,
    task: [
        {
          type :Schema.Types.ObjectId,
          ref: "Task"
          
        }
      ]
})




module.exports = mongoose.model ('Skill', Skill)