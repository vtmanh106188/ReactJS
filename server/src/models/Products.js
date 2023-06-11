const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connect");

const Products = sequelize.define("products", {
    idSP: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nameSP: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    priceSP: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imageSP: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    detailSP: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cat_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

},
    {
        timestamps: false
    }
);
Products.sync({ alter: true });

module.exports = Products;
