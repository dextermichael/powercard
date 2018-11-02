let express = require('express')
let router = express.Router()


const applicationController = {
    
    index: (req, res) => {
        
        res.render('app/index', "YOOOO")
        // connecting to the index.hbs so that the client will see something on the screen
    }
    
    
}






module.exports = applicationController