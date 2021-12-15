const Sequelize = require ('sequelize');
/**
 * Модель нужна для работы с фотографиями слайдера
 */
module.exports = MainSlider = db.define("main_slider", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    is_use:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
});
