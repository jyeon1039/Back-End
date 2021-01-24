const request = require('request');

// 네이버 주소 가져오기
const url = "https://www.naver.com";

request(url, (error, response, body) => {  
    console.log(body);
});
    