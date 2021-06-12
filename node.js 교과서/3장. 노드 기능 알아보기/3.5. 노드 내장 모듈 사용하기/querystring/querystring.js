// WHATWG 방식의 url 대신 기존 노드의 url 을 사용할 때, search 부분을 사용하기 쉽게 객체로 만드는 모듈

const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse(): ', query);                                    // url 의 query 부분을 자바스크립트 객체로 분해
console.log('querystring.stringify(): ', querystring.stringify(query));         // 분해된 query 객체를 문자열로 다시 조립
