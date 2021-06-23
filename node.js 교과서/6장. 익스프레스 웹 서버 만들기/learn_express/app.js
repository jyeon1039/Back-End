const express = require('express');
const path = require('path');

const app = express();

/* 서버가 실행될 포트 설정
process.env 객체에 PORT 속성이 있다면 그 값ㅇ르 사용하고, 없다면 기본값으로 3000 포트를 이용
set 으로 설정한 데이터는 key값(ex) port) 을 이용하여 가져올 수 있음 */
app.set('port', process.env.PORT || 3000);      

app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next(); // 다른 미들웨어 작업을 실행하거나, 라우팅 작업을 실행
});

app.get('/', (req, res, next) => {
    console.log('GET / 요청에서만 실행됩니다.');
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});

// 에러 처리 미들웨어는 특별한 경우가 아니면 가장 아래에 위치
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);      // HTTP 상태 코드 지정, default는 200(성공)
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});