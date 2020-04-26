const db = require("../Db");

const City = db.sequelize.define('City', {
    objectId:{
        type :db.Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    cityId:{
        type : db.Sequelize.INTEGER,
        allowNull:false,
    },
    countryId:{
        type: db.Sequelize.STRING(250),
        allowNull: false,
    },
    name : {
        type: db.Sequelize.STRING(250),
        allowNull: false,
    },
    latitude:{
        type : db.Sequelize.DOUBLE,
        allowNull:false,
    },
    longitude:{
        type : db.Sequelize.DOUBLE,
        allowNull:false,
    },
    altName:{
        type : db.Sequelize.STRING,
        allowNull:false,
    },
    population:{
        type : db.Sequelize.INTEGER,
        allowNull:false,
    }
});

module.exports = City;
