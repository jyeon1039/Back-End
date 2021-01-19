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

exports.post_products_write = ( req , res ) => {
    //res.send(req.body);
    console.log(req.body);
    models.Products.create({
        name : req.body.name ,
        price : req.body.price ,
        description : req.body.description
    }).then( () => {
        res.redirect('/admin/products');
    });
}