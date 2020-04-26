const db = require("../Db");

const Continent = db.sequelize.define('Continent', {
    objectId:{
       type :db.Sequelize.STRING,
       allowNull: false,
       primaryKey: true,
    },
    code : {
        type: db.Sequelize.STRING(4),
        allowNull:false,
    },
    name : {
        type: db.Sequelize.STRING(250),
        allowNull: false,
    },
});

module.exports = Continent;
