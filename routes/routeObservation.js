const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerObservation');

router.post('/', controller.postObservation);
router.get('/', controller.getObservation);
router.put('/:id', controller.putObservation);
router.delete('/:id', controller.deleteObservation);


module.exports = router;
