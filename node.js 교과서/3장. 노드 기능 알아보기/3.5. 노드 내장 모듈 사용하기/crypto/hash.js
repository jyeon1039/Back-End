/*
단방향 암호화 : 복호화할 수 없는 암호화 방식
=> 해시 함수 사용
-> 비밀번호를 복호화하지 않아도 되는 이유 : 입력받은 비밀번호를 같은 암호화 알고리즘으로 암호화한 후 DB 와 비교
*/

/*
createHash(알고리즘) : 사용할 해시 알고리즘을 넣는다
update(문자열) : 변환할 문자열
digest(인코딩) : 인코딩할 알고리즘. base64, hex, latin1 이 주로 사용되는데, base64가 결과 문자열이 가장 짧아 애용됨 
*/

const crypto = require('crypto');

console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64: ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));