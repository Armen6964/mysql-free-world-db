const db = require("../Db");

const CityToCountry = db.sequelize.define('CityToCountry', {
    objectId: {
        type :db.Sequelize.STRING,
        allowNull: false
    },
    owningId: {
        type: db.Sequelize.STRING,
        allowNull:false,
    },
    relatedId: {
        type: db.Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = CityToCountry;
