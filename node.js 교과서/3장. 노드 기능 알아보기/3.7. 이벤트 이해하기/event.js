const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});

myEvent.on('event2', () => {
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});

myEvent.on('event3', () => {
    console.log('이벤트 3');
}); // 한 번만 실행됨

myEvent.emit('event1'); // 이벤트 호출
myEvent.emit('event2');

myEvent.emit('event3'); // 이벤트 호출
myEvent.emit('event3'); // 실행 안 됨

myEvent.on('event4', () => {
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('이벤트5');
}
myEvent.on('event5', listener);
myEvent.removeAllListeners('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));