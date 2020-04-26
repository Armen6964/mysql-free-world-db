const db = require("../Db");

const Shape = db.sequelize.define('Shape', {
    objectId: {
        type :db.Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    geoJson: {
        type: db.Sequelize.JSON,
        allowNull:false,
    },
    countryId: {
        type: db.Sequelize.STRING(250),
        allowNull: false,
    }
});

module.exports = Shape;
