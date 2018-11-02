var express = require('express');
var router = express.Router();
const applicationController = require("../controller/application")
const bodyparser = require('body-parser')





/* GET home page. */
router.get('/', applicationController.index)

module.exports = router;
