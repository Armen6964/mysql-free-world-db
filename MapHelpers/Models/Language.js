const db = require("../Db");

const Language = db.sequelize.define('Language', {
    objectId:{
        type :db.Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    code : {
        type: db.Sequelize.STRING(10),
        allowNull:false,
    },
    name : {
        type: db.Sequelize.STRING(250),
        allowNull: false,
    },
    native:{
        type: db.Sequelize.STRING(250),
        allowNull: false,
    }
});

module.exports = Language;
