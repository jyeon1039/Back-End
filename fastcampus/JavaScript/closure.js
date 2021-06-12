console.log("\n\n----------클로저----------");

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