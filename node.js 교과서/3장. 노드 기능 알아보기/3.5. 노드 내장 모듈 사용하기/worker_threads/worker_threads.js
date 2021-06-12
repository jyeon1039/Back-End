// 노드에서 멀티 스레드 방식으로 작업하는 방법
/*
기존에 동작하던 싱글 스레드를 메인 스레드 또는 부모 스레드라고 부른다.
isMainTrhead 를 통해 현재 코드가 메인 스레드에서 실행되는지, 아니면 생성한 워크 스레드에서 실행되는지 구분한다.
메인 스레드에서는 new Worker 를 통해 현재 파일(__filename) 을 워커 스레드에서 실행시킨다. (물론 현재 파일의 else 부분만)

부모에서는 워커 생성 후 workder.postMessage 로 워커에 데이터를 보낼 수 있다. 
워커는 parentPort.on('message') 이벤트 리스너로 부모로부터 메시지를 받고, parentPort.postMessage 로 부모에게 메시지 보낸다.
부모는 worker.on('message') 로 메시지를 받는다. (한 번만 받고 싶다면 once('message') 를 사용)
*** 워커에서 on 메서드를 사용할 때는 직접 워커를 종료해야 한다!!! ***

parentPort.close() 를 하면 부모와의 연결이 종료되고, 종료될 때는 worker.on('exit') 이 실행된다.
*/
const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');


if( isMainThread ){ // 부모일 때
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');
} else { // 워커일 때
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    })
}