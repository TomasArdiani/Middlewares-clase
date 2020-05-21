var express = require('express');
var router = express.Router();


let registroController = require ("../controllers/registroController");

let profileController = require ("../controllers/userController");


router.app

router.get('/', registroController.registro);



router.get('/', profileController.profile);



module.exports = router;
