const path = require('path');
const { project_dir } = require('../settings');

exports.getCarouselImage = (req, res)=>{
    res.sendFile(path.join(project_dir, 'public', req.url));
}