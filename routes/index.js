var express = require('express');
var router = express.Router();
const applicationController = require("../controller/application")
const usersController = require('../controller/users')
// const bodyparser = require('body-parser')





/* GET home page. */
router.get('/', applicationController.index)


//User controller 
router.get('/users', usersController.index)
// 
router.get('/users/new',usersController.new)
//show
router.get('users/:id',usersController.show)
//
router.get('users/:id/edit', usersController.edit)
//create
router.get('/users', usersController.create)
// delete
router.delete('/users/:id', usersController.delete)
// update
router.patch('/users/:id', usersController.update)











 




module.exports = router;
