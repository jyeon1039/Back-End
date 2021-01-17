//js - 구조 분해 할당
const { Router } = require('express');
const router = Router(); //express.Router()
console.log(router.constructor.name);
router.use('/admin', require('./admin'));

module.exports = router;