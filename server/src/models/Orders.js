const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connect");

const Orders = sequelize.define("orders", {
    idOR: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    cus_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cus_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cus_address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cus_phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    note: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
},
    {
        timestamps: true
    },
);
Orders.sync({ alter: true });

module.exports = Orders;
