const db = require("../Db");

const TimezonesToCountry = db.sequelize.define('TimezonesToCountry', {
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

module.exports = TimezonesToCountry;
