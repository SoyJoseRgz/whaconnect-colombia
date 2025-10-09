import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("CompaniesSettings", "plantaoMessage", {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: `🔔 *NUEVO ATENDIMIENTO PLANTAO*

📋 *Ticket:* #{ticketId}
👤 *Cliente:* {contactName}
📱 *Teléfono:* {contactNumber}
🕐 *Hora:* {currentTime}
📝 *Status:* {ticketStatus}

💬 *Último mensaje:*
"{lastMessage}"

🎯 *Responde rápidamente para brindar el mejor servicio*

---
⚡ Notificación automática del sistema de guardias`
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("CompaniesSettings", "plantaoMessage");
  }
};
