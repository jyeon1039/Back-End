/*
- fs.readdir(경로, 콜백) : 폴더 안의 내용물 확인
- fs.unlink(경로, 콜백) : 파일 삭제
    => 파일 없다면 에러 발생
- fs.rmdir(경로, 콜백) : 폴더 삭제
    => 폴더 안에 파일들이 있다면 에러 발생
*/

const fs = require('fs').promises;

fs.readdir('./folder')
    .then((dir) => {
        console.log('폴더 내용 확인', dir);
        return fs.unlink('./folder/newFile.js');
    })
    .then(() => {
        console.log('파일 삭제 성공');
        return fs.rmdir('./folder');
    })
    .then(() => {
        console.log('폴더 삭제 성공');
    })
    .catch((err) => {
        console.error(err);
    });