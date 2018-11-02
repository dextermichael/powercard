var express = require('express');
var router = express.Router();
const applicationController = require("../controller/application")
const usersController = require('../controller/users')
const skillsController = require('../controller/skills')
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


//Skill

router.get ('/skills', skillsController.index)
router.get ('/skills/new', skillsController.new)
router.get ('/skills/:id', skillsController.show)
router.get('/skills/:id/edit', skillsController.edit) 
router.post('/skills', skillsController.create) 
router.patch('/skills/:id', skillsController.update)
router.delete('/skills/:id', skillsController.delete)


//task



module.exports = router;
