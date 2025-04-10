"use strict";
const { DataTypes, fn } = require("sequelize");

module.exports = (sequelize) => {
    const SumApiLogHistory = sequelize.define(
        "SumApiLogHistory",
        {
            Id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            ApiInput: {
                type: DataTypes.JSONB,
                allowNull: false,
            },
            ApiResponse: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            CreatedDate: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: fn("NOW"),
            },
        },

        {
            freezeTableName: true,
            timestamps: false,
        }
    );

    return SumApiLogHistory;
};
