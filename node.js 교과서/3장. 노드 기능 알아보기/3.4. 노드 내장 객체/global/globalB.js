const A = require('./globalA');

// global 이 전역 객체 라는 점을 이용하여 파일 간에 간단한 데이터를 공유할 때 사용
global.message = '안녕하세요';
console.log(A());