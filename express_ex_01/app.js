const express = require('express');
const nunjucks = require('nunjucks'); //template engine 사용
const logger = require('morgan');
const bodyParser = require('body-parser'); //express의 내장 모듈이기 때문에 npm install 안 해줘도 됨

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

// template 폴더는 'template'이다.
/* autoescape : 보안상 넣는 것 
    -> true => html 테그 그대로 출력됨
    -> false => 렌더링 해 줌
*/
nunjucks.configure('template', {
    autoescape : true,
    express : app
}); 

//미들웨어 셋팅
app.use( logger('dev') );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
// body-parser 만들기
/*app.use( (req, res, next) => {
    req.body = {
        //동작
    }
});*/

//express.static => express에서 uploads 파일에서 정적 파일을 추적해달라
app.use('/uploads', express.static('uploads'));

//global view variable
app.use( (req, res, next) => {
    app.locals.isLogin = true; //로그인 되어있음
    next();
});

// 404 error handling
// 사용하지 않는 변수는 _로 처리하면 됨
app.use( ( req , res, _ ) => {
    res.status(404).render('common/404.html')
});

// 500 error handling
app.use( (err, req, res,  _ ) => {
    res.status(500).render('common/500.html')
});

//이렇게 경로를 설정하면 경로가 많아졌을 때 비효율적임 
app.get('/', (req, res)=>{
    res.send('hello express');
});

app.get('/class', (req, res)=>{
    res.send('welcome our class!!');
});

function vipMiddleware(req, res, next){
    console.log('최우선 미들웨어');
    next();
}

//라우팅을 이런 식으로 구현함
//app.use('/contacts', contacts);
app.use('/admin', vipMiddleware, admin);

app.listen( port , () => {
    console.log('Express listening on port', port);
} );

