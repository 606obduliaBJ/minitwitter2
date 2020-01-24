var authService = require('../services/AuthService')
var Profile = require('../models/Profile')
var bcrypt = require('bcryptjs')

var configuration = require('../../config')
var jwt = require('jsonwebtoken')




function login(req, res, err){
  Profile.findOne({userName: req.body.username.toLowerCase()})
  .then(profile => {
    if(profile==null){
      res.send({
        ok:false,
        message: "Usuario y contraseña inválida"
      })
      return
    }

    bcrypt.compare(req.body.password, profile.password, function(err,valid){
      if (!valid) {
        return res.send({
          ok: false,
          message: 'Usuario y password inválidos'
        });
      }

      let user = {
        username: req.body.username,
        id: profile._id
      }

      let token = authService.generateToken(user)

      res.send({
        ok:true,
        profile: {
          id: profile.id,
          name: profile.name,
          userName: profile.userName,
          avatar: profile.avatar || '/public/resources/avatars/0.png',
            // base64Img.base64Sync('./public/resources/avatars/0.png'),
          banner: profile.banner || '/public/resources/banners/4.png',
            // base64Img.base64Sync('./public/resources/banners/4.png'),
          tweetCount: profile.tweetCount,
          following: profile.following,
          followers: profile.followers
        },
        token: token
       })
    });
  }).catch(err => {
    res.send({
      ok: false,
      message: "Error al validar el usuario"
    })
  })
}



module.exports = {
  login
}