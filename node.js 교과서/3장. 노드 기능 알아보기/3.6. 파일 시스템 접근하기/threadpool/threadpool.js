/*
스레드풀이 작업을 동시에 처리하므로 여덟 개의 작업 중에서 어느 것이 먼저 처리될지 모른다.
기본적으로 스레드풀의 개수가 네 개이기 때문에 5~8이 1~4보다 시간이 더 소요된다.

스레드풀을 직접 컨트롤할 수는 없지만, 개수를 조절할 수는 있다. 아래와 같이 설정한 후 다시 node threadpool 실행
[윈도우]
명렁 프롬프트에 SET UV_THREADPOOL_SIZE = 1

[맥]
터미널에 UV_THREADPOOL_SIZE = 1
*/

const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('1: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('2: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('3: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('4: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('5: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('6: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('7: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('8: ', Date.now() - start);
});
