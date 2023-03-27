const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerPrincipalForm');

router.post('/', controller.postPrincipal);
router.get('/', controller.getPrincipal);
router.put('/:id', controller.putPrincipal);
router.delete('/:id', controller.deletePrincipal);


module.exports = router;
