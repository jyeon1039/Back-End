const moment = require('moment');

module.exports = function(sequelize, DataTypes){
    const Products = sequelize.define('Products',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name : { type: DataTypes.STRING },
            price : { type: DataTypes.INTEGER },
            description : { type: DataTypes.TEXT }
        }
    );

    Products.prototype.dateFormat = (date) => {
        return moment(date).format('YYYY년 MM월 DD일');
    }
    
    return Products;
}