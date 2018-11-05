var express = require('express');
var router = express.Router();
const applicationController = require("../controller/Application")
const usersController = require('../controller/Users')
const skillsController = require('../controller/Skills')
const tasksController = require('../controller/Tasks')
// const bodyparser = require('body-parser')





/* GET home page. */
router.get('/', applicationController.index)
// router.get('/users',usersController.index)


//User controller 
router.get('/users',usersController.index)
// 
router.get('/users/new',usersController.new)
//show
router.get('/users/:id',usersController.show)
//
router.get('/users/:id/edit',usersController.edit)
//create
router.post('/users',usersController.create)
// delete
router.delete('/users/:id',usersController.delete)
// update
router.patch('/users/:id',usersController.update)


// //Skill

router.get ('/skills',skillsController.index)
router.get ('/skills/new',skillsController.new)
router.get ('/skills/:id',skillsController.show)
router.get('/skills/:id/edit',skillsController.edit) 
router.post('/skills',skillsController.create) 
router.patch('/skills/:id',skillsController.update)
router.delete('/skills/:id',skillsController.delete)


// //task

router.get('/tasks',tasksController.index)
router.get ('/tasks/new',tasksController.new)
router.get ('/tasks/:id',tasksController.show)
router.post('/tasks',tasksController.create) 
router.get('/tasks/:id/edit',tasksController.edit) 
router.patch('/tasks/:id',tasksController.update)



module.exports = router;
