"use strict";
const { DataTypes, fn } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("SumApiLogHistory", {
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
        });
        await queryInterface.addIndex("SumApiLogHistory", ["CreatedDate"], {
            name: "idx_SumApiLogHistory_CreatedDate",
            using: "btree",
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("SumApiLogHistory");
    },
};
