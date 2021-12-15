const Sequelize = require('sequelize');
const config = require('./config');

global.db = new Sequelize(config.database, config.userName, config.password, config.options);

module.exports = async function() {
    db.sync();
    await db.authenticate();
}
