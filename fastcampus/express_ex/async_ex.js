const models = require('./models');

async function getProducts(){

    try{
        //const product1 = await models.Products.findByPk(1); //1로 하면 1번이 없기 때문에 에러 남
        const product1 = await models.Products.findByPk(2);
        console.log(product1.dataValues.name);
        console.log(product1.dataValues.price);
    
        const product3 = await models.Products.findByPk(3);
        console.log(product3.dataValues);
    }catch(err){
        console.log(err);
    }
    

}

getProducts();