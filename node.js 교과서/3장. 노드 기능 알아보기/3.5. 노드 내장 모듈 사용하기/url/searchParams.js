const { URL } = require('url');

const myURL = new URL('https://www.gilbut.co.kr/book/view?bookcode=BN002827&bookcode=123456&keyword=node.js%20%EA%B5%90%EA%B3%BC%EC%84%9C&collection=GB_BOOK');
console.log('searchParams: ', myURL.searchParams);
console.log('searchParams.getAll(): ', myURL.searchParams.getAll('bookcode'));
console.log('searchParams.get(): ', myURL.searchParams.get('keyword'));
console.log('searchParams.has(): ', myURL.searchParams.has('page'));
console.log('searchParams.has(): ', myURL.searchParams.has('keyword'));

console.log('searchParams.keys(): ', myURL.searchParams.keys());
console.log('searchParams.values(): ', myURL.searchParams.values());

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));

console.log('\nadd filter - searchParams.toString(): ', myURL.searchParams.toString());

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('\norigin searchParams - searchParams.toString(): ', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
