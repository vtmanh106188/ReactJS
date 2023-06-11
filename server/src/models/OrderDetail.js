const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connect");


const OrderDetail = sequelize.define("order_details", {
    idDetail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idOR: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idSP: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
},
    {
        timestamps: true
    },);
OrderDetail.sync({ alter: true });

module.exports = OrderDetail;
