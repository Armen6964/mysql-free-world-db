const db = require("../Db");

const Country = db.sequelize.define('Country', {
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
    native :{
        type: db.Sequelize.STRING(250),
        allowNull: false,
    },
    phone:{
        type:db.Sequelize.STRING(255),
        allowNull:false
    },
    continentId : {
        type:db.Sequelize.STRING(255),
        allowNull:false,
    },
    capital:{
        type:db.Sequelize.STRING(255),
        allowNull:true,
        defaultValue:"No Capital"
    },
    currency:{
        type:db.Sequelize.STRING(150),
        allowNull:false
    },
    emoji:{
        type:db.Sequelize.STRING(255),
        allowNull:false
    },
    emojiU:{
        type:db.Sequelize.STRING(100),
        allowNull:false
    },
    geonameid:{
        type:db.Sequelize.INTEGER,
        allowNull:true,
        defaultValue: 0
    },
    shapeId:{
        type:db.Sequelize.STRING,
        allowNull:true,
        defaultValue:0
    },
});

module.exports = Country;
