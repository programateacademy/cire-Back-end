const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerSegForm');

router.post('/', controller.postSegForm);
router.get('/', controller.getSegForm);
router.put('/:id', controller.putSegForm);
router.delete('/:id', controller.deleteSegForm);


module.exports = router;
