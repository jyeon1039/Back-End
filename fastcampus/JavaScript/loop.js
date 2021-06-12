console.log("\n\n----------반복문----------");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
/* 
while -> 조건문을 보고 반복문 실행
do-while -> 반복문 실행 후에 조건문 본다
*/
let i = 0;
console.log("while문 시작");
while (i < 0) {
    console.log("콘솔에 찍어주세요");
    i++;
}

i = 0;
console.log("do-while문 시작");
do {
    console.log("콘솔에 찍어주세요");
} while (i < 0)

console.log("\n\n----------함수----------");

function test(a) {
    console.log(a);
}

test(10);

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));

function print() {
    return "출력";
}

console.log(print());

function Car(a, b, c) {
    this.name = a;
    this.color = b;
}

let car1 = new Car("현대", "노란");
let car2 = new Car("기아", "노란");
console.log(car1.name + " 자동차");
console.log(car1.color + "색");
console.log(car1.move); //undefined