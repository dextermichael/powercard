const mongoose = require('../db/connection')
const Schema = mongoose.Schema



const User = new Schema ({
    
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
       
    },
    password: {
        type: String,
        
    },

    skill:{

        type:String
    }

    
    // skill: [{ 
    //     ability:String,
        
    // }],
    
})


module.exports = mongoose.model ('User', User)