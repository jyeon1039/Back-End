const express = require('express');
const router = express.Router();

function testMiddleWare( res, res, next ){
    console.log('첫 번째 미들웨어');
    next();
}

function testMiddleWare2( res, res, next ){
    console.log('두 번째 미들웨어');
    next();
}

//admin 이후 url들은 /를 보고, 미들웨어 2개를 하나씩 거치고, req, res를 한다
router.get('/', testMiddleWare, testMiddleWare2, (req, res) => {
    res.send('admin 이후 url');
});

router.get('/products', (req, res) => {
    //res.send('admin products url');
    res.render('admin/products.html', {
        message : '<h1> 태그가 출력됩니다. </h1>',
        online : 'express'
    })
});

router.get('/products/write', (req, res) => {
    //res.send('admin products url');
    res.render('admin/write.html');
});

router.post('/products/write', (req, res) => {
    res.send(req.body.name + req.body.price);
});

module.exports = router;
