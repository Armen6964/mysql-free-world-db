const db = require("../Db");

const CountriesToContinent = db.sequelize.define('CountriesToContinent', {
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

module.exports = CountriesToContinent;
