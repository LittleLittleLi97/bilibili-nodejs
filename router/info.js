const express = require('express');
const { getCarouselInfo, getDanmakuInfo } = require('../router_handler/info.js');

const router = express.Router();

router.get('/carousel', getCarouselInfo);
router.get('/danmaku', getDanmakuInfo);

module.exports = router;