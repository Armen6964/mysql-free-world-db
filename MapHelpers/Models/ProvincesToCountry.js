const db = require("../Db");

const ProvincesToCountry = db.sequelize.define('ProvincesToCountry', {
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

module.exports = ProvincesToCountry;
