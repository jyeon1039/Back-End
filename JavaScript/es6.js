console.log("\n\n----------ES6----------");

class Car1{
    constructor(a, b){
        this.name = a;
        this.color = b;
    }

    move(){
        console.log(this.name + "차이고 " + this.color + "색입니다." );
    }
}

var classCar1 = new Car1("현대", "노랑");
classCar1.move();
var classCar2 = new Car1("기아", "빨강");
classCar2.move();

const str = 'hello';
console.log(`str은 ${str}`);

var func = function(a, b){
    return a+b;
}

//한 줄료 표현 가능
const func1 = (a, b) => a+b;

console.log(func(1, 2));
console.log(func1(1, 2));

let [ee, ee2, ee3] = [1, 2, 3];
console.log(ee2);

/*
스프레드 연산자 : ...
=> 배열 결합
*/
const arrr1 = [1, 2];
const arrr2 = [3, 4, 5];
const arrr3 = [...arrr1, ...arrr2];
console.log(arrr3);

function abc(a, ...b){
    console.log(arguments[0]);
    console.log(a);
    console.log(b);
    console.log(b[1]);
}

abc('nodejs', 'hello', 1)