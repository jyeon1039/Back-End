const express = require('express');

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

//이렇게 경로를 설정하면 경로가 많아졌을 때 비효율적임 
app.get('/', (req, res)=>{
    res.send('hello express');
});

app.get('/class', (req, res)=>{
    res.send('welcome our class!!');
});

//따라서 이런 식으로 구현함
app.use('/contacts', contacts);
app.use('/admin', admin);

app.listen( port , () => {
    console.log('Express listening on port', port);
} );