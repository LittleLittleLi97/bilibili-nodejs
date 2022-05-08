const express = require('express');
const cors = require('cors')
const url = require('url');
const { base_url } = require('./settings.js');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use('/info', require('./router/info.js'));
app.use('/public', require('./router/public.js'));


app.listen(url.parse(base_url).port, ()=>{
    console.log(`api server is running at ${base_url}`);
})