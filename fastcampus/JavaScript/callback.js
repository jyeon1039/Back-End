console.log("\n\n----------콜백 함수----------");
//함수 안의 인자를 함수로 받음
function callbackTest(num, callback){
    callback(); //콜백 함수를 실행
    console.log(num);
}

callbackTest(1, function(){
    console.log('콜백함수가 실행됩니다');
})