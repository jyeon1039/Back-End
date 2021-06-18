/*
[쿠키 옵션]
Expires=날짜 : 만료 기한, 기본값은 클라이언트가 종료될 때까지
Max-age=초 : Expires와 비슷하지만 날짜 대신 초를 입력
Domain=도메인명 : 쿠키가 전송될 도메인. 기본값은 현재 도메인
Path=URL : 쿠키가 전송될 ULR. 기본값은 '/' 이고, 이 경우 모든 URL에서 쿠키 전송 가능
Secure : HTTPS 일 경우에만 쿠키 전송
HttpOnly : 자바스크립트에서 쿠키에 접근 불가능. 쿠키 조작 방지를 위해 설정하는 것이 좋음
*/
 
const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
  
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    console.log("query: ", query);
    const { name } = qs.parse(query);    // queryparsing 모듈로 query를 분석해서 name을 가져옴
    console.log("name: ", name);
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });    // 헤더에는 한글을 설정할 수 없으므로 encodeURIComponent 메서드로 인코딩, 줄바꿈 금지
    res.end();
  } else if (cookies.name) {    // name이라는 쿠키가 있는 경우
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {    //name 이라는 쿠키가 없는 경우
      try {
        const data = await fs.readFile('./cookie2.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(err.message);
      }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });