const fs = require('fs');

// highWaterMak 는 옵션 객체인데, 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션이다. 기본값은 64KB
const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
const data = [];

/*
 data, end, error 이벤트를 사용
- 파일 읽는 도중 에러 발생 => error 이벤트
- 파일 읽기 시작 => data 이벤트
- 파일을 다 읽음 => end 이벤트 

=> 이 예제에서는 미리 data 배열을 만들어놓고 들어오는 chunk 들을 하나씩 push 한 뒤 마지막에 Buffer.concat() 으로 합침
*/

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data: ', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end: ', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error: ', err);
});