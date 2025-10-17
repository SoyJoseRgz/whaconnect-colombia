import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.addColumn("Contacts", "companyName", {
        type: DataTypes.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Contacts", "userName", {
        type: DataTypes.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Contacts", "password", {
        type: DataTypes.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Contacts", "plates", {
        type: DataTypes.STRING,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn("Contacts", "companyName"),
      queryInterface.removeColumn("Contacts", "userName"),
      queryInterface.removeColumn("Contacts", "password"),
      queryInterface.removeColumn("Contacts", "plates"),
    ]);
  }
};
