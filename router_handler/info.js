const carouselInfo = require('../public/carousel.js')
const danmakuInfo = require('../public/danmaku.js')

exports.getCarouselInfo = (req, res)=>{
    res.send(carouselInfo);
}

exports.getDanmakuInfo = (req, res)=>{
    res.send(danmakuInfo);
}