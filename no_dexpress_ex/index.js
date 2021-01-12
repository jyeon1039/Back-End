const http = require('http'); //내장 모듈임

http.createServer( (request, response) => {  
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Server');
    response.end();
}).listen(3000);
//port가 3000번인 것으로 서버를 띄워달라