import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("CompaniesSettings", "audioMessage", {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: `🤖 *Asistente Virtual*

🎧 Lo siento, no podemos procesar mensajes de audio en este canal.

📝 Por favor, envía tu mensaje en *texto* para poder ayudarte mejor.

---
Gracias por tu comprensión 😊`
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("CompaniesSettings", "audioMessage");
  }
};
