// 파일/폴더의 변경 사항을 감시
// => change 이벤트가 2번씩 발생하기도 하므로 실무에서 사용할 때는 주의가 필요함

const fs = require('fs');

fs.watch('./target.txt', (eventType, filename) => {
    console.log(eventType, filename);
});