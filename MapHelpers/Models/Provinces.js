const db = require("../Db");

const Provinces = db.sequelize.define('Provinces', {
    objectId:{
        type :db.Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    countryId:{
        type :db.Sequelize.STRING,
        allowNull: false
    },
    Country_Code:{
        type :db.Sequelize.STRING,
        allowNull: false
    },
    Subdivision_Code:{
        type :db.Sequelize.STRING,
        allowNull: false
    },
    Subdivision_Name:{
        type :db.Sequelize.STRING,
        allowNull: false
    },
    Subdivion_Type:{
        type :db.Sequelize.STRING,
        allowNull: true,
        defaultValue:null
    },
});

module.exports = Provinces;
