const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Odd = sequelize.define("odd", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    date: {type: DataTypes.STRING},
    user: {type: DataTypes.STRING},
    area: {type: DataTypes.STRING},
    uik: {type: DataTypes.STRING},
    fullName: {type: DataTypes.STRING},
    age: {type: DataTypes.STRING},
    street: {type: DataTypes.STRING},
    house: {type: DataTypes.STRING},
    apartment: {type: DataTypes.STRING},
    phoneNumber: {type: DataTypes.STRING},
    userPhoneNumber: {type: DataTypes.STRING}
});

module.exports = Odd;