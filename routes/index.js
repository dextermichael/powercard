var express = require('express');
var router = express.Router();
const applicationController = require("../controller/application")
// const usersController = require('../controller/users')
// const bodyparser = require('body-parser')





/* GET home page. */
router.get('/', applicationController.index)


//User controller 

// router.get('/users', userController.index)

// create 

// router.get("/users/new", usersController.new)
 




module.exports = router;
