console.log("\n\n----------프로토타입----------");
/*
자바스크립트는 프로토타입 기반 언어
프로토타입은 Java 언어로 치면 클래스
*/
//Car라는 것의 프로토타입을 하나 추가함
Car.prototype.move = function () {
    console.log(this.name + "차이고 " + this.name + "색입니다.");
}

car1.move();
car2.move();

console.log("\n\n----------리터럴 객체----------");

//var list = new Object() 라는게 생략이 되어있음. 따라서 new가 없음.
var list = {
    'a': 100,
    'b': 'hello',
    'c': function () {
        console.log('ggg');
    },
    'd': function () {
        console.log("a 호출=> " + this.a);
    }
}

Object.prototype.sum = function () {
    console.log(this.a + 20);
}

console.log(list.a);
list.c();
list.d();
console.log("type: " + typeof list);
list.sum();