const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

//!는 필수
const schema = buildSchema(`

    type Product{
        id : ID!
        name : String
        price : Int
        description : String
    }

    type Query{
        getProduct( id : ID! ) : Product
    }
`);

const products = [
    {
        id : 1,
        name : '첫번째 제품',
        price : 2000,
        description : '첫번째 제품입니다.'
    },
    {
        id : 2,
        name : '두번째 제품',
        price : 4000,
        description : '두번째 제품입니다.' 
    }
]

const root = {
    getProduct : ( { id } ) => products.find( product => product.id == parseInt(id) )
}

const app = express();

// graphiql => gui 제공
app.use( '/graphql' , graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphiql : true
}));

app.listen( 4000 , ()=>{
    console.log('running sever port 4000');
});