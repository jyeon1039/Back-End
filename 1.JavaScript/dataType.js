//동적 타입
/*
변수 선언 -> let
상수 선언 -> const 
var의 유효범위 => 함수 scope
let의 유효범위 => 블록 scope

typeof -> 자료형 반환
*/
let a = "Hello World";
let b = true;
let e; //undefined -> 에러가 아니고 자료형임
const PI = 3.14;
console.log("상수 PI: " + PI);
console.log("PI의 자료형: " + typeof PI); //number

(function () {
    console.log(a1); // undefined
})();

var a1 = "나는 var";

(function () {
    console.log(a1);
})();

{
    var a2 = 0;
    console.log("block 안: " + a2);
}

console.log("block 밖: " + a2); // var의 경우는 함수 scope이므로 block에서는 scope의 의미를 가지지 않음

console.log("\n\n----------Symbol----------");

//ES6부터 추가된 Symbol 자료형 => 만들어진 Symbol 각각은 고유한 것임
/*
c와 d의 Mark는 다른 'Mark'임
*/
const symbol1 = Symbol();
const symbol2 = Symbol(37);
const symbol3 = Symbol('Mark');
const symbol4 = Symbol('Mark');

console.log(symbol1, typeof symbol1);
console.log(symbol3, typeof symbol3);
console.log(symbol4, typeof symbol4);
console.log(symbol3 == symbol4);
console.log(symbol3 === symbol4);

console.log("\n\n----------호이스팅----------");

console.log(hoist1); //undefined

hoist1 = 'mark'

console.log(hoist1); //Mark

var hoist1;

hoist1 = 'Woongjae';

console.log(hoist1);

console.log("\n\n----------배열----------");

let arr = ['안녕', 'Node.js', 55, 'Hello']; //여러 타입이 같이 가능
let arr2 = new Array('안녕', 'Node.js', 55, 'Hello');
console.log("기본자료형 초기 배열: " + arr);
console.log("객체형 배열: " + arr2);
arr[4] = 66; //배열에 추가
console.log("4번째 원소 추가 후: " + arr);
arr[3] = 'Bye'; //배열 값 바꾸기
console.log("3번째 원소 수정 후: " + arr);
console.log("length: " + arr.length);
console.log("55의 인덱스: " + arr.indexOf(55));
console.log("\"Node.js\"의 인덱스: " + arr.indexOf('Node.js'));
