console.log("\n\n----------Object----------");
function A(){}

const objectOfA = new A(); //객체가 만들어짐
console.log(a, typeof A);
console.log(A()); //undefined

function B(name, age){
    console.log(name, age);
}

const objectOfB1 = new B(); //undefined undefined
const objectOfB2 = new B('Mark', 37); //Mark 37
console.log(B());

console.log("\n\n----------객체에 속성 추가----------");
//=> 속성은 this.~
function C(){
    this.name = 'Mark';
}

const objectOfC = new C();
console.log(objectOfC); //A{ name: 'Mark' }

console.log("\n\n----------함수를 속성으로----------");
function D(){
    this.hello = function(){
        console.log('hello');
    }
}

new D().hello();

console.log("\n\n----------new Object()----------");
//=> 권장되지는 않음
const objectOfOject1 = new Object(true);
console.log(objectOfOject1, typeof objectOfOject1);

const objectOfOject2 = new Object({name: 'Mark'});
console.log(objectOfOject2, typeof objectOfOject2);