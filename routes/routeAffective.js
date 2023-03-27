const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerAffective');

router.post('/', controller.postAffective);
router.get('/', controller.getAffective);
router.put('/:id', controller.putAffective);
router.delete('/:id', controller.deleteAffective);


module.exports = router;
