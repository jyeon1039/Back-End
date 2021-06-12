const models = require('../../models');

exports.get_products = async ( _ , res) => {
    try{
        const products = await models.Products.findAll();
        res.render('admin/products.html', { products });
    }catch(err){
        console.log(err);
    }
    
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = async ( req , res ) => {
    console.log(req.body); //json 파일임

    //DB 입력
    /*await models.Products.create({
        name : req.body.name ,
        price : req.body.price ,
        description : req.body.description
    });*/

    //어차피 req.body와 구조가 똑같으니까 내용에 그냥 req.body를 넣기
    await models.Products.create( req.body );
    res.redirect('/admin/products');
}

exports.get_products_detail = async ( req , res ) => {
    const product = await models.Products.findByPk(req.params.id);
    res.render('admin/detail.html', { product }); 
}; 

exports.get_products_edit = async (req, res) => {
    const product = await models.Products.findByPk(req.params.id);
    res.render('admin/write.html', { product }); 
}

//DB 수정
exports.post_products_edit = async (req, res) => {
    await models.Products.update( req.body , {
        where : { id: req.params.id } 
    });

    res.redirect( '/admin/products/detail/' + req.params.id );
}

//DB 삭제
exports.get_products_delete = async (req, res) => {
    await models.Products.destroy({
        where : {
            id : req.params.id
        }
    });

    res.redirect('/admin/products');
}

/*
[CRUD]
select, insert, update, delete

models.테이블명.create(데이터)
models.테이블명.findAll(조회조건)
models.테이블명.findByPk(primary key)
models.테이블명.findOne(조회조건)
models.테이블명.update(데이터, 조회조건)
models.테이블명.destroy(조회조건)
*/