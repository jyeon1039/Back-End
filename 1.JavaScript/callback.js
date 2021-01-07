console.log("\n\n----------콜백 함수----------");
//함수 안의 인자를 함수로 받음
/*function callbackTest(num, callback){
    callback(); //콜백 함수를 실행
    console.log(num);
}

callbackTest(1, function(){
    console.log('콜백함수가 실행됩니다');
})*/

//클로저 -> 함수 내에서 변수를 메모리처럼 사용함
function ex_closure() {
    var num = 0;
    return function(){
        num++;
        console.log(num);
    }
}

var test = ex_closure();
test();
test();