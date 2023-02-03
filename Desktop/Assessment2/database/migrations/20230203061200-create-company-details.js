'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('company_details', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      ceo: {
        type: Sequelize.STRING
      },
      cpi: {
        type: Sequelize.FLOAT
      },
      cf: {
        type: Sequelize.FLOAT
      },
      mau:{
        type: Sequelize.FLOAT
      },
      roic:{
        type: Sequelize.FLOAT
      },
      score:{
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('company_details');
  }
};