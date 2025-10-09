import { col, fn, literal, Op } from "sequelize";
import Plantao from "../../models/Plantao";
import Whatsapp from "../../models/Whatsapp";
import { getWbot } from "../../libs/wbot";
import Ticket from "../../models/Ticket";
import CompaniesSettings from "../../models/CompaniesSettings";

export const NotifyPlantaoService = async ({ companyId, ticket }): Promise<void> => {
  console.log(`🔔 [PLANTAO] Iniciando NotifyPlantaoService para companyId: ${companyId}, ticketId: ${ticket?.id}`);

  const now = new Date();
  // ✅ Usar zona horaria automática del servidor (Mexico_City) en formato 24 horas
  const currentTime = now.toLocaleTimeString(undefined, { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false  // ← ESTO FIJA EL PROBLEMA: formato 24 horas
  });
  const today = now.toLocaleDateString('en-US', { weekday: 'long' });
  
  console.log(`🕐 [PLANTAO] Hora actual: ${currentTime}, Día: ${today}`);

  const plantonistas = await Plantao.findAll({
    where: {
      companyId,
      [Op.and]: [
        literal(`EXISTS (
          SELECT 1
          FROM jsonb_array_elements(days) AS elem
          WHERE elem->>'weekdayEn' = '${today}'
            AND elem->>'startTime' IS NOT NULL
            AND elem->>'endTime' IS NOT NULL
        )`)
      ]
    },
    include: ['user']
  });

  console.log(`👥 [PLANTAO] Encontrados ${plantonistas.length} plantonistas activos para el día ${today}`);

  // ✅ Función helper para convertir hora "HH:MM" a minutos
  const parseTimeToMinutes = (timeStr: string): number => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const currentMinutes = parseTimeToMinutes(currentTime);
  console.log(`⏰ [PLANTAO] Hora actual en minutos: ${currentMinutes} (${currentTime})`);

  plantonistas.forEach((plantao, index) => {
    console.log(`📋 [PLANTAO] Procesando plantonista ${index + 1}/${plantonistas.length}: ${plantao.user?.name} (ID: ${plantao.id})`);
    
    const days = plantao.days;
    // @ts-ignore
    const currentDay = days.find(day => day.weekdayEn === today);
    
    if (!currentDay) {
      console.log(`⚠️  [PLANTAO] No hay configuración para el día ${today} - Plantonista: ${plantao.user?.name}`);
      return;
    }

    // @ts-ignore
    const startTime = currentDay.startTime;
    // @ts-ignore
    const endTime = currentDay.endTime;

    if (!startTime || !endTime) {
      console.log(`⚠️  [PLANTAO] Horarios incompletos - Plantonista: ${plantao.user?.name}, Start: ${startTime}, End: ${endTime}`);
      return;
    }

    const startMinutes = parseTimeToMinutes(startTime);
    const endMinutes = parseTimeToMinutes(endTime);
    
    console.log(`🔍 [PLANTAO] Verificando horarios - Plantonista: ${plantao.user?.name}`);
    console.log(`    ➤ Horario guardia: ${startTime} - ${endTime} (${startMinutes} - ${endMinutes} minutos)`);
    console.log(`    ➤ Teléfono: ${plantao.phone}, Intervalo: ${plantao.interval} min`);

    if (currentMinutes >= startMinutes && currentMinutes <= endMinutes) {
      console.log(`✅ [PLANTAO] ¡Plantonista está en horario de guardia! Enviando notificación...`);
      handleNotifyPlantao(companyId, plantao.phone, ticket, plantao.interval);
    } else {
      console.log(`❌ [PLANTAO] Plantonista fuera de horario de guardia`);
    }
  });


}


// ✅ Función corregida con manejo de errores y logs detallados
const handleNotifyPlantao = async (companyId: string, fone: string, ticket: Ticket, interval: number) => {
  console.log(`📱 [PLANTAO] Iniciando envío de notificación WhatsApp`);
  console.log(`    ➤ CompanyId: ${companyId}, Teléfono: ${fone}, Interval: ${interval}min`);

  try {
    // Buscar WhatsApp por defecto
    let wpp = await Whatsapp.findOne({
      where: {
        companyId,
        isDefault: true
      }
    });

    // Si no hay default, buscar cualquiera conectado
    if (!wpp) {
      console.log(`⚠️  [PLANTAO] No hay WhatsApp por defecto, buscando uno conectado...`);
      wpp = await Whatsapp.findOne({
        where: {
          companyId,
          status: 'CONNECTED'
        }
      });
    }

    if (!wpp) {
      console.log(`❌ [PLANTAO] ERROR: No hay WhatsApp conectado para companyId: ${companyId}`);
      return;
    }

    console.log(`📞 [PLANTAO] Usando WhatsApp: ${wpp.name} (ID: ${wpp.id}, Status: ${wpp.status})`);

    const wbot = getWbot(wpp.id);

    // ✅ Validar número (solo necesita el número local, no código de país)
    console.log(`🔍 [PLANTAO] Validando número: ${fone}@s.whatsapp.net`);
    const [validNumber] = await wbot.onWhatsApp(`${fone}@s.whatsapp.net`);

    if (!validNumber || !validNumber.exists) {
      console.log(`❌ [PLANTAO] ERROR: Número ${fone} no existe en WhatsApp`);
      return;
    }

    console.log(`✅ [PLANTAO] Número válido: ${validNumber.jid}`);

    const contactName = ticket.contact.name;
    const contactNumber = ticket.contact.number;

    console.log(`📝 [PLANTAO] Preparando mensaje para ticket #${ticket.id}`);
    console.log(`    ➤ Cliente: ${contactName} (${contactNumber})`);

    // Obtener mensaje personalizado de la configuración
    const companySettings = await CompaniesSettings.findOne({
      where: { companyId }
    });

    let messageTemplate = companySettings?.plantaoMessage || 
      `🔔 *NUEVO ATENDIMIENTO PLANTAO*

📋 *Ticket:* #{ticketId}
👤 *Cliente:* {contactName}
📱 *Teléfono:* {contactNumber}
🕐 *Hora:* {currentTime}
📝 *Status:* {ticketStatus}

💬 *Último mensaje:*
"{lastMessage}"

🎯 *Responde rápidamente para brindar el mejor servicio*

---
⚡ Notificación automática del sistema de guardias`;

    // Reemplazar variables en el mensaje
    const currentTime = new Date().toLocaleTimeString('es-MX', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const lastMessage = ticket.lastMessage || 'Sin mensaje previo';
    
    const personalizedMessage = messageTemplate
      .replace(/{ticketId}/g, ticket.id.toString())
      .replace(/{contactName}/g, contactName)
      .replace(/{contactNumber}/g, contactNumber)
      .replace(/{currentTime}/g, currentTime)
      .replace(/{ticketStatus}/g, ticket.status.toUpperCase())
      .replace(/{lastMessage}/g, lastMessage);

    console.log(`📨 [PLANTAO] Mensaje personalizado preparado`);
    const body = `\u200e${personalizedMessage}`;

    // Enviar mensaje
    await wbot.sendMessage(validNumber.jid, {
      text: body
    });

    console.log(`✅ [PLANTAO] ¡Mensaje enviado exitosamente a ${fone}!`);

    // Programar próxima notificación
    const now = new Date();
    now.setMinutes(now.getMinutes() + interval);
    
    await ticket.update({ nextNotify: now });
    
    console.log(`⏰ [PLANTAO] Próxima notificación programada para: ${now.toLocaleTimeString()} (en ${interval} minutos)`);

  } catch (error) {
    console.log(`❌ [PLANTAO] ERROR en handleNotifyPlantao:`, error);
    console.log(`    ➤ Teléfono: ${fone}, CompanyId: ${companyId}`);
    console.log(`    ➤ Error: ${error.message}`);
  }
};
