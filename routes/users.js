var express = require('express');
var router = express.Router();
let userController = require ("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile/:email', userController.profile);

router.get('/register', userController.mostrarRegistro);

/*router.post('/register', function(req,res, next){
  res
}
);
*/


module.exports = router;
