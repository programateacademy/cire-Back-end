const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerDiag');

router.post('/', controller.postDiag);
router.get('/', controller.getDiag);
router.put('/:id', controller.putDiag);
router.delete('/:id', controller.deleteDiag);


module.exports = router;
