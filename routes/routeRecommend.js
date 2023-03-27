const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerRecommend');

router.post('/', controller.postRecommendations);
router.get('/', controller.getRecommendations);
router.put('/:id', controller.putRecommendations);
router.delete('/:id', controller.deleteRecommendations);


module.exports = router;
