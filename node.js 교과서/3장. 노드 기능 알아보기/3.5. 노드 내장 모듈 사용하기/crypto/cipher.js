// 양방향 암호화 : 암호화할 때 사용한 키로 복호화한다

/*
crypto.createCipheriv(알고리즘, 키, iv) : 암호화 알고리즘과 키, iv 를 넣는다.
ctypto.getCiphers() : 암호화 알고리즘 목록 출력
cipher.update(문자열, 인코딩, 출력 인코딩) : 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣는다.
cipher(final) : 출력 결과물의 인코딩을 넣으면 암호화가 완료
crypto.createDecipheriv(알고리즘, 키, iv) : 복호화 할 때 사용되는데, 암호화할 때 사용했던 알고리즘과 키, iv 를 넣는다
decipher.update(문자열, 인코딩, 출력 인코딩) : 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣는다
decipher.final(출력 인코딩) : 복호화 결과물의 인코딩을 넣는다
*/
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
console.log('암호화 전 result: ', result);
result += cipher.final('base64');
console.log('암호화: ', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화: ', result2);