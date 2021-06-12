const { graphql, buildSchema } = require('graphql');

// hello는 응답을 String으로 함
// 타입은 Int, Float, String, Boolean
const schema = buildSchema(`
    type Query{
        hello : String,
        nodejs : Int
    }
`);

const root = {
    hello : () => 'hello world',
    nodejs : () => 20
}

graphql( schema , '{ nodejs }' , root ).then( (response) => {
    console.log(response);
});