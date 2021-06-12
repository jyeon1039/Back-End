console.log("\n\n----------Class----------");
class classA{}

console.log(new classA());

const classB = class {};

//class 표현식을 변수에 할당
console.log(new classB());

//호이스팅 되지 않음
/*new C(); //C is not defined

class C{}*/

//constructor
class classD{
    constructor(){
        console.log('constructor');
    }
}

console.log(new classD());

class classE{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const instanceOfClassE = new classE('jyeon', 23);
console.log(instanceOfClassE);
console.log(instanceOfClassE.name);

// 이렇게 사용할 때는 런타임 에러 조심해야 함
class classF{
    name;
    age;
}

console.log(new classF());

class classG{
    _name = 'no name';
    _age = 0;
    static cnt = 0;

    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name + '@@@';
    }


    set name(name){
        this._name = name + '!!!';
    }

    hello1(){
        console.log('hello1', this);
    }

    hello2 = () => {
        console.log('hello2');
    }

    static print(msg){
        console.log(msg);
    }
}

console.log(new classG());
console.log(new classG('Mark', 28));

new classG().hello1();
new classG().hello2();

const instanceOfClassG = new classG();
console.log(instanceOfClassG);
console.log(instanceOfClassG.name);
instanceOfClassG.name = 'Mark';
console.log(instanceOfClassG.name);
console.log(instanceOfClassG._name);

classG.print('hihi');

class classH{
    static name = '이 클래스의 이름은 C가 아니다';
}

console.log(classH);

console.log("\n\n----------상속----------");
class Parent{
    name = 'Lee';

    hello = () => {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 37;
    
    hello = () => {
        console.log('hello', this.name, this.age); 
    }
}

const p = new Parent();
const c = new Child();
console.log(p, c);

c.hello();
c.name = 'Anna';
c.hello();

console.log(c.age);
p.hello();
c.hello();

class Child2 extends Parent {
    age = 37;
    
    constructor(name, age){
        super(name);
        this.age = age;
    }

    hello = () => {
        console.log('hello', this.name, this.age); 
    }
}

const c2 = new Child2('jyeon');

c2.hello();
p.hello();