const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerPsychoMotor');

router.post('/', controller.postPsychoMotor);
router.get('/', controller.getPsychoMotor);
router.put('/:id', controller.putPsychoMotor);
router.delete('/:id', controller.deletePsychoMotor);


module.exports = router;
