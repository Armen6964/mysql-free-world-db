const db = require("../Db");

const LanguagesToCountry = db.sequelize.define('LanguagesToCountry', {
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

module.exports = LanguagesToCountry;
