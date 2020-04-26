const config    = require("../config/index").db;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const logger = require("inologger");

logger.init("dblog.log");

sequelize.authenticate().then(() => {
    logger.info('Connection has been established successfully.');
}).catch(err => {
    logger.info("Make sure that you'r db information in config/importer.js file is right",true);
    logger.fatal('Unable to connect to the database:', true);
    logger.fatal(err.message, true);
    process.exit(1);
});

sequelize.sync();

let db = { sequelize: sequelize, Sequelize: Sequelize };

module.exports = db;
