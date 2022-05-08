const carouselInfo = require('../public/carousel.js')

exports.getCarouselInfo = (req, res)=>{
    res.send(carouselInfo);
}