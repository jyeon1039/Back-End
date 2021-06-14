/*
- fs.access(경로, 옵션, 콜백) : 폴더나 파일에 접근할 수 있는지 체크
    => F_OK: 파일 존재 여부, R_OK: 읽기 권한 여부 , W_OK: 쓰기 권한 여부
    => ENOENT : 파일/폴더가 없을 때의 에러 코드
- fs.mkdir(경로, 콜백) : 폴더를 만드는 메서드, 이미 폴더가 있으면 에러 발생하므로 access 메서드 호출해서 확인!!
- fs.open(경로, 옵션, 콜백) : 파일의 아이디(fd) 를 가져오는 메서드
    => 파일이 없다면 파일을 생성한 뒤 아이디를 가져옴 
    => 가져온 아이디를 사용해 fs.read 나 fs.wirte 로 읽거나 쓸 수 있다.
    => w: 쓰기, r: 읽기, a: 기존 파일에 추가
- fs.rename(기존 경로, 새 경로, 콜백) : 파일의 이름을 바꾸는 메서드
*/

const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
    .then(() => {
        return Promise.reject('이미 폴더 있음');
    })
    .catch((err) => {
        if(err.code === 'ENOENT'){
            console.log('폴더 없음');
            return fs.mkdir('./folder');
        }
    })
    .then(() => {
        console.log('폴더 만들기 성공');
        return fs.open('./folder/file.js', 'w');
    })
    .then((fd) => {
        console.log('빈 파일 만들기 성공', fd);
        return fs.rename('./folder/file.js', './folder/newfile.js');
    })
    .then(() => {
        console.log('이름 바꾸기 성공');
    })
    .catch((err) => {
        console.log(err);
    });
    