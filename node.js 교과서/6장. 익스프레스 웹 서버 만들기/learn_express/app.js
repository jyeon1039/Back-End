const express = require('express');
const path = require('path');

const app = express();

/* 서버가 실행될 포트 설정
process.env 객체에 PORT 속성이 있다면 그 값ㅇ르 사용하고, 없다면 기본값으로 3000 포트를 이용
set 으로 설정한 데이터는 key값(ex) port) 을 이용하여 가져올 수 있음 */
app.set('port', process.env.PORT || 3000);      

app.get('/', (req, res) => {
    //res.send('Hello Express'); 
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});