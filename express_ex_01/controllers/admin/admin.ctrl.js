const models = require('../../models');

exports.get_products = ( _ , res) => {
    /*res.render( 'admin/products.html' , 
        { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );*/

    models.Products.findAll({

    }).then( (productList) => {
        res.render('admin/products.html', { productList : productList});
    });
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
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

exports.post_products_write = ( req , res ) => {
    //res.send(req.body);
    console.log(req.body);

    //DB 입력
    models.Products.create({
        name : req.body.name ,
        price : req.body.price ,
        description : req.body.description
    }).then( () => {
        res.redirect('/admin/products');
    });
}

exports.get_products_detail = (req, res) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render( 'admin/detail.html', { product });
    });
}

exports.get_products_edit = (req, res) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render( 'admin/write.html', { product });
    });
}

//DB 수정
exports.get_products_edit = (req, res) => {
    models.Products.update({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    }, {
        where : { id : req.params.id }
    }).then( () => {
        res.redirect( '/admin/products/detail' + req.params.id );
    })
}

//DB 삭제
exports.get_products_delete = (req, res) => {
    models.Products.destroy({
        where : {
            id : req.params.id
        }
    }).then( () => {
        res.redirect('/admin/products');
    })
}