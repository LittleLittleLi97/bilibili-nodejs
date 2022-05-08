const express = require('express');
const { getCarouselInfo } = require('../router_handler/info.js');

const router = express.Router();

router.get('/carousel', getCarouselInfo);

module.exports = router;