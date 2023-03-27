const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerKid');

router.post('/', controller.postKid);
router.get('/', controller.getKid);
router.put('/:id', controller.putKid);
router.delete('/:id', controller.deleteKid);
router.get('/:id', controller.getKidId);


module.exports = router;
