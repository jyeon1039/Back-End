console.log('require가 가장 위에 오지 않아도 됩니다');

module.exports = '저를 찾아보세요';

require('./var');

/*
한 번 require 한 파일은 require.cache 에 저장되므로 다음 번에 require 할 때는 새로 불러오지 않고
require.cache 에 있는 것이 재사용된다. 만약 새로 require 하길 원한다면, require.cache 의 속성을 
제거하면 된다. 다만, 프로그램의 동작이 꼬일 수 있으므로 권장하지는 않는다.
*/

console.log('require.cache 입니다');
console.log(require.cache);

/*
require.main 은 노드 실행 시 첫 모듈을 가리킵니다. 
require.main 객체의 모양은 require.cache 모듈 객체와 같다.
*/

console.log('require.main 입니다');
console.log(require.main === module); // 현재 파일이 첫 모듈인 지확인
console.log(require.main.filename);