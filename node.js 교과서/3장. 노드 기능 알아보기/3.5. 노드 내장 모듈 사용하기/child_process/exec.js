// exewc 은 셸을 실행해서 명령어를 실행

const exec = require('child_process').exec;

const process = exec('dir'); // 명령 프롬프트 명렁어인 dir 실행

process.stdout.on('data', function(data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); // 실행 에러



