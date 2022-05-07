const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use('/node', require('./router/index.js'));

app.listen('3030', ()=>{
    console.log('api server is running at http://localhost:3030/');
})