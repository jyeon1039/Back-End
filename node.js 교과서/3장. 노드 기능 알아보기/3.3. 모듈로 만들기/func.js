/* 
모듈 불러오기 : require(경로)
- js 나 json 같은 확장자는 생략 가능
*/

const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if( num % 2 )
        return odd;
    return even;
}

// module.exports 에는 객체만 대입해야 하는 것이 아니라 함수나 변수도 대입 가능
module.exports = checkOddOrEven;