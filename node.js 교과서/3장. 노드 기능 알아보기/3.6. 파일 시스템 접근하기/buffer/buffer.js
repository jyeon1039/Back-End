const buffer = Buffer.from('저를 버퍼로 바꿔보세요');   // 문자열을 버퍼로 변환

console.log('from(): ', buffer);
console.log('length: ', buffer.length); 
console.log('toString(): ', buffer.toString());        // 버퍼를 문자열로 변환

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);                 // 배열 안에 들은 버퍼들을 하나로 합치기
console.log('concat(): ', buffer2.toString());

const buffer3 = Buffer.alloc(5);                      // 빈 버퍼 생성
console.log('alloc(): ', buffer3);