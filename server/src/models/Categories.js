const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connect");

const Categories = sequelize.define("categories", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false
    },
);
Categories.sync({ alter: true });

module.exports = Categories;
