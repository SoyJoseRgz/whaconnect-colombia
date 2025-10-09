import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("CompaniesSettings", "plantaoMessage", {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: `🔔 *NUEVO MENSAJE DE GUARDIA*

📋 Ticket: #{ticketId}
👤 Cliente: {contactName}
📱 Teléfono: {contactNumber}
🕐 Hora: {currentTime}
📝 Status: {ticketStatus}

🎯 Responde rápidamente para brindar el mejor servicio

---
Variables disponibles: {ticketId}, {contactName}, {contactNumber}, {currentTime}, {ticketStatus}, {lastMessage}`
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("CompaniesSettings", "plantaoMessage");
  }
};
