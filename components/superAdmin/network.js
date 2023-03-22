const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');
const  sendMail  = require("./email");
const encrypt  = require ('../../helpers/handleBycrpt');
const { Promise } = require('mongoose');



router.post('/', function (req, res){
  const {email, password} = req.body
  controller.add(email, password)
    .then((admin) =>{
         sendMail({
         to: email,
          body: `Su correo es: ${email} y su contraseña: ${password}`,
          subject: 'Subject from email',


        });
        new Promise((resolve, reject)=>{
          const h = encrypt.encrypt(password)
          if (!h){
            reject('can not do it')
          }
          console.log(h);
          resolve(h)

        })


      response.success(req
        , res, admin, 200);
    })
    .catch(err => {
      response.error(req, res, 'INVALID DATA', 400,err);
    });
});

router.put('/:id', function(req, res){
  const {password} = req.body
  controller.update(req.params.id, password)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'INVALID INFORMATION', 400, err);
    });
})

router.delete('/:id', function(req,res){
  let id = req.params.id;
  controller.delete(id)
    .then((deletedAdmin) => {
      if (deletedAdmin !== null){
        response.success(req, res, `Admin ${deletedAdmin} deleted`)
      } else{
        response.error(req, res, `The professional with id: ${id} was already deleted or does not exist`);
      }
    })
    .catch(err => {
      response.error(req, res, 'INTERN ERROR', 500, err);
    });
});

router.post('/login', function(req, res){
  const {email, password} = req.body
  controller.login(email, password)
    .then((token) =>{
      response.success(req, res, {token}, 200);
    })
    .catch(err => {
      response.error(req, res, 'INVALID CREDENTIALS', 400, err);
    });
});

module.exports = router;
