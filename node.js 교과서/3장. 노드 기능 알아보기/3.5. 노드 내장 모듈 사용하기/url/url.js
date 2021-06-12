/*
[WHATWG 방식]
URL 생성자에 주소소를 넣어 객체로 만들면 주소가 부분별로 정리된다.
여기에는 username, password, origin, searchParams 속성이 존재한다.

[기존 노드 방식]
url.parse(주소) : 주소를 분해한다. username, password 대신에 auth 속성이 있고, searchParams 대신 query 가 있다.
url.format(객체) : 분해되었던 url 객체를 다시 원래 상태로 조립한다.

*** host 부분 없이 pathname 부분만 오는 주소인 경우에는 WHATWG 방식이 처리할 수 없다. ***
*/

const url = require('url');

console.log('\n-------------------------------- WHATWG 형식 --------------------------------\n');
const { URL } = url;
const myURL = new URL('https://www.gilbut.co.kr/book/view?bookcode=BN002827&keyword=node.js%20%EA%B5%90%EA%B3%BC%EC%84%9C&collection=GB_BOOK');
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));
console.log('\n-------------------------------- 기존 노드 방식 ------------------------------\n');
const parsedUrl = url.parse('https://www.gilbut.co.kr/book/view?bookcode=BN002827&keyword=node.js%20%EA%B5%90%EA%B3%BC%EC%84%9C&collection=GB_BOOK');
console.log('url.parse(): ', parsedUrl);
console.log('url.format(): ', url.format(parsedUrl));
