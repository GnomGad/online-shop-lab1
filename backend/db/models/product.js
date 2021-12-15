const Sequelize = require ('sequelize');
/**
 * Модель нужна для работы с продуктами
 */
module.exports = Product = db.define("product", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    title:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    is_use:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0,
    }
});
