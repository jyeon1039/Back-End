const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();        // .env 파일을 읽어서 process.env 로 만듦
const app = express();
app.set('port', process.env.PORT || 3000);      

/*
dotenv 제외하고는 다 미들웨어
설치했던 패키지들을 불러와서 app.use에 연결
req, res, next 같은 것을은 미들웨어 내부에 들어있음. next도 내부적으로 호출하기에 다음 미들웨어로 넘어갈 수 있음
*/
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUnitinitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

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