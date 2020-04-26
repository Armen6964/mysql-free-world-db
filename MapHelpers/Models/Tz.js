const db = require("../Db");

const Tz = db.sequelize.define('Tz', {
    objectId: {
        type :db.Sequelize.STRING,
        allowNull: false,
        primaryKey:true
    },
    CountryCode: {
        type: db.Sequelize.JSON,
        allowNull:false,
    },
    TimeZone: {
        type: db.Sequelize.STRING(250),
        allowNull: false,
    },
    tzHours : {
        type: db.Sequelize.STRING(10),
        allowNull: true,
        defaultValue:0,
    },
    tzMinutes : {
        type: db.Sequelize.STRING(10),
        allowNull: true,
        defaultValue:0,
    },
    countryId : {
        type: db.Sequelize.STRING(250),
        allowNull: false,
    },
});

module.exports = Tz;
