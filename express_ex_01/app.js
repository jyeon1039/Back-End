const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('hello express');
});

app.get('/class', (req, res)=>{
    res.send('welcome our class!!');
});

app.listen( port , () => {
    console.log('Express listening on port', port);
} );