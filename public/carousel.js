const url = require('url');
const { base_url } = require('../settings.js');

module.exports = [
    {
        image_url: url.resolve(base_url, "/public/carousel/01.webp"),
        RGB: "#3e342f",
        title: "如果真的是你请你打招呼",
        bvid: "BV1DT4y1r7c9"
    },
    {
        image_url: url.resolve(base_url, "/public/carousel/02.webp"),
        RGB: "#67553f",
        title: "猫：你有事吗？",
        bvid: "BV1Z44y1M7SL"
    },
    {
        image_url: url.resolve(base_url, "/public/carousel/03.webp"),
        RGB: "#312929",
        title: "参与「万物皆可纪录」活动，赢18万奖励金",
        bvid: "BV1dK4y1r7jX"
    },
    {
        image_url: url.resolve(base_url, "/public/carousel/04.webp"),
        RGB: "#4b5d5d",
        title: "打了MOD，游戏还能这么玩？",
        bvid: "BV1FY4y1C7A2"
    }
]