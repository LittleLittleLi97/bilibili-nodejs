const express = require('express');
const { getCarouselImage } = require('../router_handler/public.js');
const router = express.Router();

router.get('/carousel/*', getCarouselImage);

module.exports = router;