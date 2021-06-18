/*
쿠키는 key=value 쌍이다. (ex) mycookie=test)
쿠키 간에는 세미콜론으로 구분된다. (name=zerocho;year=1994)
*/

const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cookie' : 'mycookie=test'});
    res.end('Hello Cookie');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다!');
    });