const a = "hello a";

function Myvar(){
    this.name = "myvar instance";
}

module.exports.b = a; //모듈 내보내기
module.exports.Myvar = Myvar;