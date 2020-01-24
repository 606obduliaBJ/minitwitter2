var express = require('express')
var router = express.Router()
var userController = require('../api/controllers/UserController')



//Public access services
router.post('/login', userController.login)


router.get('/*', function(req, res, err){
  res.status(400).send({message: "Servicio inválido"})
})

module.exports = router;