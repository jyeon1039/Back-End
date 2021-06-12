// spawn 은 새로운 프로세스를 띄우면서 명령어를 실행

const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);

process.stdout.on('data', function(data){
    console.log(data.toString());
});

process.stderr.on('data', function(data) {
    console.error(data.toString());
});