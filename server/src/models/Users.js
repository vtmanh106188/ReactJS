const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connect");

const Users = sequelize.define("users", {
    idUS: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nameUS: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rule: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2,
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false,
    },

},
    {
        timestamps: false
    },
);
Users.sync({ alter: true });

module.exports = Users;
