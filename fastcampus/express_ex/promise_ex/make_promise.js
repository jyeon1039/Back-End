/* 
[Promise 만들기]
1. resolve와 reject를 인자로 가지는 함수를 만든다. (reject => 에러처리)
2. 내가 원하는 시점을 resolve로 받아온다.
*/

const wait1seconds = new Promise(( resolve, reject ) => {
    console.log('시작!');
    setTimeout( ()=>{
        resolve( console.log('1초 뒤에 찍습니다!') );
    }, 1000);
    reject( console.log('에러!!!') ); //ex) 사용자 인증 에러
});

wait1seconds.then(() => {
    console.log('프로미스 이행 완료!');
}).catch( (err) => {
    console.log(err);
});