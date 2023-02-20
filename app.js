const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')
const url = require('url');
const { base_url } = require('./settings.js');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use('/info', require('./router/info.js'));
app.use('/public', require('./router/public.js'));
app.use('/bilisearch', createProxyMiddleware({ // bilibili-vue的请求设置出了问题，写了这个，然后又给解决了
    target: 'https://s.search.bilibili.com/',
    headers: {
        Referer: 'https://www.bilibili.com/'
    },
    changeOrigin: true, // Vue中默认打开
    pathRewrite: {
        '^/bilisearch':''
    }
}))


app.listen(url.parse(base_url).port, ()=>{
    console.log(`api server is running at ${base_url}`);
})