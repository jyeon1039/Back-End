const util = require('util');
const crypto = require('crypto');

// 함수가 deprecated 처리되었음을 알린다
const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated 되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

// 콜백 패턴을 프로미스 패턴으로 바꾼다 
// => 이렇게 바꿔두면 async/await 패턴가지 사용할 수 있다. 
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.log(error);
    });
