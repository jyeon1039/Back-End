/*const fs = require('fs');

// 파일 경로는 현재 파일 기준이 아니라 node 명령어를 실행하는 콘솔 기준
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data); // readFile 의 결과물은 버퍼 형식으로 제공됨
    console.log(data.toString());
});
*/

//위의 콜백을 promise 형식으로 바꾸기
const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });