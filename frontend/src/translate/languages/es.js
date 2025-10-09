const messages = {
  es: {
    translations: {
      signup: {
        title: "Registro",
        toasts: {
          success:
            "¡El usuario ha sido creado satisfactoriamente! ¡Ahora inicia sesión!",
          fail: "Error creando el usuario. Verifica la data reportada.",
        },
        form: {
          name: "Nombre",
          email: "Correo Electrónico",
          password: "Contraseña",
          company: "Nombre de la Empresa",
          phone: "Whatsapp (COD + NÚMERO)",
        },
        buttons: {
          submit: "Regístrate",
          login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
        },
      },
      login: {
        title: "Inicio de Sesión",
        welcome: "Bienvenido de nuevo",
        loginInstruction: "Introduce tus datos para acceder a tu cuenta",
        form: {
          email: "Correo Electrónico",
          password: "Contraseña",
          button: "Ingresar",
        },
        buttons: {
          submit: "Ingresa",
          register: "¿No tienes cuenta? ¡Regístrate!",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de la Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "Empresa creada con éxito!",
        },
      },
      auth: {
        toasts: {
          success: "¡Inicio de sesión exitoso!",
        },
        dueDate: {
          expiration: "Suscripción caducará en",
          days: "días!",
          day: "día!",
          expirationToday: "Su suscripción termina hoy!",
        },
        token: "Token",
      },
      dashboard: {
        buttons: {
          hideFilters: "Ocultar Filtros",
          showFilters: "Mostrar Filtros",
        },
        filters: "Filtros",
        filter: "FILTRAR ",
        tabs: {
          indicators: "Indicadores",
          assessments: "Evaluaciones",
          attendants: "Agentes",
        },
        charts: {
          perDay: {
            title: "Tickets hoy: ",
          },
        },
        cards: {
          inAttendance: "Atención actual",
          waiting: "Esperando",
          activeAttendants: "Agentes Activos",
          finalized: "Finalizados",
          newContacts: "Nuevos Contactos",
          totalReceivedMessages: "Total de Mensajes Recibidas",
          totalSentMessages: "Total de Mensajes Enviadas",
          averageServiceTime: "T.P. de Atención",
          averageWaitingTime: "T.P. de Espera",
          status: "Estatus (Actual)",
          activeTickets: "Tickets Activos",
          passiveTickets: "Tickets Pasivos",
          groups: "Grupos",
        },
        users: {
          name: "Nombre",
          numberAppointments: "Total de tickets",
          statusNow: "Actual",
          totalCallsUser: "Total de atención por usuario",
          totalAttendances: "Total de atenciones",
        },
        date: {
          initialDate: "Fecha Inicial",
          finalDate: "Fecha Final",
        },
        licence: {
          available: "Disponíble hasta",
        },
        assessments: {
          totalCalls: "Total de Tickets",
          callsWaitRating: "Tickets aguardando evaluación",
          callsWithoutRating: "Ticket sin evaluación",
          ratedCalls: "Tickets evaluados",
          evaluationIndex: "Índice de evaluación",
          score: "Puntaje",
          promoters: "Promotores",
          neutral: "Neutrales",
          detractors: "Detractores",
          title: "Encuesta de Satisfacción"
        },
        attendances: {
          title: "Atenciones",
          total: "Total de Atenciones",
          waitingEvaluation: "Atenciones esperando evaluación",
          withoutEvaluation: "Atenciones sin evaluación",
          evaluated: "Atenciones evaluadas"
        }
      },
      reports: {
        title: "Reporte de Encuestas Realizadas",
        operator: "Agente",
        period: "Período",
        until: "Hasta",
        date: "Fecha",
        reportTitle: "Relatorios",
        calls: "Atenciones",
        search: "Pesquisas",
        durationCalls: "Duración de la atención",
        grupoSessions: "Atención en grupos grupos",
        startDate: "Fecha de inicio",
        endDate: "Fecha de finalización",
        table: {
          id: "Ticket",
          user: "Usuario",
          dateOpen: "Fecha de Apertura",
          dateClose: "Fecha de Cierre",
          NPS: "NPS",
          status: "Estado",
          whatsapp: "Conexión",
          queue: "Fila",
          actions: "Acciones",
          lastMessage: "Últ. Mensaje",
          contact: "Cliente",
          supportTime: "Tiempo de Atención",
        },
        buttons: {
          filter: "Aplicar Filtro",
          onlyRated: "Solo Evaluados",
        },
        groupTicketsReports: {
          timezone: "America/Monterrey",
          msgToast: "Generando relatorio compactado, por favor espere.",
          errorToast: "Erro ao generar relatorio",
          back: "Volver",
          groupServiceReport: "Relatorio de Atención en Grupos",
          loading: "Cargando...",
          contact: "Contacto",
          dateOpen: "Fecha de Apertura",
          dateLastUpdated: "Fecha Ultima Actualización",
          agent: "Agente",
          agentClosed: "Agente(cerró)",
          waitingAssistance: "Esperando atención",
          process: "En proceso",
        },
        researchReports: {
          response: "respuesta",
          active: "(Activa)",
          inactive: "(Inactiva)",
          quantity: "Cantidade",
          percentage: "porcentaje",
          title: "Relatorio de Pesquisas Realizadas",
          activeSearch: "Pesquisa activa",
          inactiveSearch: "Pesquisa inactiva",
        },
        ticketDurationDetail: {
          msgToast: "Generando relatorio compactado, por favor espere.",
          title: "Relatorio de Duración de la Atención",
          startService: "Início de la Atención",
          lastUpdated: "Última actualización",
          lastAgent: "Último agente",
          durationFinished: "Duración después de finalizado",
        },
        ticketDuration: {
          title: "Relatorio de Duración de Atención",
          contact: "Contacto",
          open: "Abiertos",
          pending: "Pendientes",
          finished: "Finalizados",
          durationFinished: "Duración de los finalizados",
          durationAfterFinished: "Duración después de finalizado",
          actions: "Acciones",
        },
        ticketReports: {
          msgToast: "Generando relatorio compactado, por favor aguarde.",
          title: "Relatrio de Atención",
        },
        exportExcel: {
          title: "Reportes de Atención",
          startDate: "Fecha inicial",
          endDate: "Fecha final",
          notInformed: "No informado",
          columns: {
            id: "ID",
            connection: "Conexión",
            contact: "Contacto",
            user: "Usuario",
            queue: "Fila",
            status: "Estado",
            lastMessage: "Último Mensaje",
            openDate: "Fecha Apertura",
            openTime: "Hora Apertura",
            closeDate: "Fecha Cierre",
            closeTime: "Hora Cierre",
            supportTime: "Tiempo de Atención",
            nps: "NPS",
          },
        },
        pdf: {
          title: "Relación de Atenciones Realizadas",
          exportTitle: "Relación de Atenciones en Grupos Realizadas",
        },
      },
      todo: {
        newTask: "Nueva Tarea",
        add: "Agregar",
        task: "Tareas",
      },
      contactImportWpModal: {
        title: "Exportar/Importar Contactos",
        buttons: {
          downloadModel: "Descargar plantilla de importación",
          close: "Cerrar",
          import: "Importar Contactos (desde archivo)",
        },
        status: {
          completed: "Importación completada con éxito",
          inProgress: "Importación en curso {{current}} de {{total}}, no salga de esta pantalla hasta que se complete la importación"
        },
        sheetName: "Contactos"
      },
      connections: {
        title: "Conexiones",
        waitConnection: "Espere... Las conexiones serán reiniciadas!",
        restartConnections: "Reiniciar Conexiones",
        callSupport: "Soporte",
        newConnection: "Nueva Conexión",
        connectYourServiceChannelsToReceiveMessagesAndStartConversationsWithYourCustomers:
          " Conecta tus canales de atención para recibir mensajes e iniciar conversaciones con tus clientes.",
        client: "Cliente",
        connectedConnections: "Conexiones conectadas",
        disconnectedConnections: "Conexiones desconectadas",
        totalConnections: "Total de conexiones",
        total: "Total",
        connections: " Conexiones:",
        toasts: {
          deleted:
            "¡La conexión de WhatsApp ha sido borrada satisfactoriamente!",
          closedimported:
            "Estamos cerrando los tickets importados, por favor espere.",
        },
        confirmationModal: {
          closedImportedTitle: "Cerrar tickets importados",
          closedImportedMessage:
            "¿Seguro? Todos los tickets importados seran cerrados.",
          deleteTitle: "Borrar",
          deleteMessage: "¿Estás seguro? Este proceso no puede ser revertido.",
          disconnectTitle: "Desconectar",
          disconnectMessage: "Estás seguro? Deberá volver a leer el código QR",
        },
        buttons: {
          add: "Agrega WhatsApp",
          disconnect: "Desconectar",
          tryAgain: "Inténtalo de nuevo",
          qrcode: "QR CODE",
          newQr: "Nuevo QR CODE",
          closedImported: "Cerrar todos los tickets Importados",
          preparing: "Preparando mensajes para importación",
          importing: "Importando Mensajes del WhatsApp",
          processed: "Processado",
          in: "de",
          connecting: "Conectando",
        },
        typography: {
          processed: "Processado",
          in: "de",
          date: "Fecha del mensaje",
        },
        toolTips: {
          disconnected: {
            title: "No se pudo iniciar la sesión de WhatsApp",
            content:
              "Asegúrese de que su teléfono celular esté conectado a Internet y vuelva a intentarlo o solicite un nuevo código QR",
          },
          qrcode: {
            title: "Esperando la lectura del código QR",
            content:
              "Haga clic en el botón 'CÓDIGO QR' y lea el Código QR con su teléfono celular para iniciar la sesión",
          },
          connected: {
            title: "Conexión establecida",
          },
          timeout: {
            title: "Se perdió la conexión con el teléfono celular",
            content:
              "Asegúrese de que su teléfono celular esté conectado a Internet y que WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
        table: {
          name: "Nombre",
          status: "Estado",
          lastUpdate: "Última Actualización",
          default: "Por Defecto",
          actions: "Acciones",
          session: "Sesión",
          number: "Número de Whatsapp",
        },
      },
      showTicketOpenModal: {
        title: {
          header: "Servicio existente",
        },
        form: {
          message: "Hay un ticket abierto para este contacto:",
          user: "Agente",
          queue: "Fila",
          messageWait: "Este contacto ya está en espera.",
        },
      },
      showTicketLogModal: {
        title: {
          header: "Historico",
        },
        options: {
          create: "Ticket creado.",
          chatBot: "ChatBot iniciado.",
          queue: " - Fila definida.",
          open: "iniciou la atención.",
          access: "accesó el ticket.",
          transfered: "transferió el ticket.",
          receivedTransfer: "recibió el ticket transferido.",
          pending: "regresó a la fila.",
          closed: "cerró el ticket",
          reopen: "abrió el ticket",
        },
      },
      whatsappModal: {
        title: {
          add: "Agrega WhatsApp",
          edit: "Edita WhatsApp",
        },
        tabs: {
          general: "General",
          messages: "Mensajes",
          assessments: "Evaluaciones",
          integrations: "Integraciones",
          schedules: "Horario de trabajo",
          flowbuilder: "Flujo de trabajo",
        },
        form: {
          importOldMessagesEnable: "Importar mensajes del celular",
          importOldMessages: "Fecha de inicio",
          importRecentMessages: "Fecha Final",
          importOldMessagesGroups: "Importar mensajes de grupo",
          closedTicketsPostImported: "Cerrar tickets después de la importación",
          name: "Nombre",
          queueRedirection: "Redirección de Fila",
          queueRedirectionDesc:
            "Seleccione una fila para los contactos que no tienen una fila para redirigir",
          default: "Por Defecto",
          group: "Permitir grupos",
          timeSendQueue: "Tiempo en minutos para redireccionar a la fila",
          importAlert:
            "ATENCIÓN: Guardando, su conexión será cerrada, usted tendrá que volver a leer el QR Code para importar los mensajes",
          groupAsTicket: "Grupos como Ticket",
          timeCreateNewTicket: "Iniciar un nuevo ticket en *n* minutos",
          maxUseBotQueues:
            "Cantidad máxima de veces que el chatbot va a ser enviado",
          timeUseBotQueues: "Tiempo en minutos para nuevo envío del chatbot",
          expiresTicket: "Cerrar chats abiertos após *n* horas",
          expiresTicketNPS:
            "Cerrar chats aguardando la evaluacion luego de x minutos",
          maxUseBotQueuesNPS:
            "Cantidad máxima de veces que la evaluación será enviada",
          closeLastMessageOptions1: "Del Agente/Cliente",
          closeLastMessageOptions2: "Del Agente",
          outOfHoursMessage: "Mensaje fuera de horario de atención",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de conclusión",
          lgpdLinkPrivacy: "Link para políticas de privacidad",
          lgpdMessage: "Mensaje inicial de LPD",
          lgpdDeletedMessages: "Ofuscar mensaje borrada por el contacto",
          lgpdSendMessage: "Siempre solicitar confirmación del contacto",
          ratingMessage: "Mensaje de evaluación - Rango de 0 a 10",
          token: "Token para integración externa",
          sendIdQueue: "Fila",
          inactiveMessage: "Mensaje de inactividad",
          timeInactiveMessage:
            "Tiempo em minutos para el envío del aviso de inactividad",
          whenExpiresTicket:
            "Cerrar chats abiertos cuando el último mensaje sea",
          expiresInactiveMessage: "Mensaje al cerrar por inactividade",
          prompt: "Prompt",
          triggerIntegrationOnClose:
            "Integración de activadores al cerrar un ticket",
          enableIntegration: "Activadore Integración",
          flowbuilder: {
            welcomeFlow: {
              title: "Flujo de bienvenida",
              description: "Este flujo se activa solo para nuevos contactos, personas que no tienes en tu lista de contactos y que enviaron un mensaje",
            },
            defaultResponseFlow: {
              title: "Flujo de respuesta predeterminado",
              description: "La respuesta predeterminada se envía con cualquier carácter diferente de una palabra clave. ¡ATENCIÓN! Se activará si el servicio ya está cerrado.",
            },
            disabled: "Deshabilitado",
          },
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        menuItem: {
          enabled: "Activado",
          disabled: "Desactivado",
          minutes: "minutos",
        },
        success: "WhatsApp guardado satisfactoriamente.",
        errorSendQueue:
          "Además del tiempo debes seleccinar una fila para redirecionar. Se necesitan los dos campos.",
        errorExpiresNPS:
          "Es necesario llenar el tiempo para la evaluación para el NPS.",
      },
      qrCode: {
        message: "Lée el código QR para empezar la sesión.",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto borrado satisfactoriamente!",
        },
        searchPlaceholder: "Buscar...",
        conversationFlows: "Flujos de Conversación",
        addFlow: "Agregar Flujo",
        editFlow: "Editar Flujo ",
        confirmationModal: {
          deleteTitle: "Borrar",
          importTitlte: "Importar contactos",
          exportContact: "Exportar contactos",
          deleteMessage:
            "¿Estás seguro que deseas borrar este contacto? Todos los tickets relacionados se perderán.",
          blockContact: "¿Estás seguro que quieres bloquear este contacto?",
          unblockContact:
            "¿Estás seguro que quieres desbloquear este contacto?",
          importMessage: "¿Quieres importar todos los contactos del teléfono?",
          importChat: "Importar Conversaciones",
          wantImport:
            "¿Quieres importar todas las conversaciones del teléfono?",
        },
        buttons: {
          import: "Importar Contactos",
          add: "Agregar Contacto",
          export: "Exportar Contacto",
          downloadModel: "Descargar Modelo",
          close: "Cerrar",
          deleteAll: "Eliminar Todos los Contactos"
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Correo Electrónico",
          actions: "Acciones",
          lastMessage: "Ultimo Mensaje",
          status: "Estado",
          unassigned: "No asignado",
          userNotFound: "Usuario no encontrado"
        },
        menu: {
          importYourPhone: "Importar del celular por default",
          importToExcel: "Importar / Exportar del Excel",
          importexport: "IMPORTAR / EXPORTAR",
        },
      },
      forwardMessage: {
        text: "Reenviada",
      },
      forwardMessageModal: {
        title: "Reenviar mensaje",
        buttons: {
          ok: "Reenviar",
        },
      },
      dialog: {
        imageTitle: "Foto de Perfil - {contactName}",
        imageNotAvailable: "Imagen no disponible"
      },
      tooltips: {
        deleteAll: "Eliminar todos los contactos",
        deleteSelected: "Eliminar contactos seleccionados",
        cancelSelection: "Cancelar selección"
      },
      toolbar: {
        selectedAll: "{count} contacto(s) seleccionado(s) (TODOS LOS CONTACTOS)"
      },
      title: {
        selectedAll: "- {count} seleccionado(s) (TODOS)"
      },
      promptModal: {
        form: {
          name: "Nombre",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Máximo de Tokens en la respuesta",
          temperature: "Temperatura",
          apikey: "API Key",
          max_messages: "Máximo de mensajes del Historico",
          voiceKey: "Llave de la API de la Voz",
          voiceRegion: "Región de la Voz",
        },
        success: "Prompt guardado",
        title: {
          add: "Agregar Prompt",
          edit: "Editar Prompt",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nombre",
          queue: "Sector/Fila",
          max_tokens: "Máximo Tokens Respuestas",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir!",
        },
        buttons: {
          add: "Agregar Prompt",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Detalles del contacto",
          extraInfo: "Información adicional",
          birthDate: "Fecha de Nacimiento",
          birthDateHelper: "Fecha de nacimiento para mensajes automáticos de cumpleaños",
          name: "Nombre",
          number: "Número de Whatsapp",
          email: "Correo Electrónico",
          extraName: "Nombre del Campo",
          extraValue: "Valor",
          whatsapp: "Conexión Origen:",
          assignWallet: "Cartera de Cliente",
          chatBotContact: "Desactivar chatbot para este contacto",
          termsLGDP: "Términos P.P. aceptados en:",
          allTicket: "Visualizar tickets sin fila",
          allowGroup: "Permitir grupos",
        },
        buttons: {
          addExtraInfo: "Agregar información",
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado satisfactoriamente.",
        walletLinked: "¡Contacto vinculado a su billetera exitosamente!",
        walletError: "El usuario no tiene filas asociadas",
        saveFirst: "El contacto debe guardarse primero",
      },
      contactImport: {
        title: "Importar contactos desde archivo",
        validate: "Validar contactos en WhatsApp",
        importing: "Importando... Por favor, espere",
        buttons: {
          import: "Importar contactos",
          cancel: "Cancelar",
          importMore: "Importar más contactos",
          tryAgain: "Intentar de nuevo",
          back: "Volver"
        },
        table: {
          name: "Nombre",
          number: "Número",
          email: "Correo Electrónico",
          tags: "Etiquetas",
          wallet: "Cartera"
        },
        results: {
          title: "Resultados de la importación",
          created: "{{count}} contactos creados con éxito",
          ignored: "{{count}} contactos ignorados (número inválido o no marcados para actualizar)"
        },
        processing: "Procesando archivo...",
        invalidFile: {
          title: "¡Archivo inválido!",
          message: "El archivo que intentó importar no es válido. Por favor, inténtelo de nuevo con un archivo en el formato correcto."
        },
        dropzone: {
          title: "Haga clic o arrastre un archivo de Excel",
          formats: "* Formatos aceptados: xls, xlsx, csv, txt",
          instructions: "Para importar contactos, debe tener al menos las columnas de nombre y número de teléfono."
        },
        errors: {
          noNumber: "No se seleccionó el campo de número de contacto",
          noName: "No se seleccionó el campo de nombre de contacto",
          noContact: "Ningún contacto seleccionado"
        },
        toasts: {
          success: "¡Importación exitosa! {{count}} contactos importados.",
          warn: "Importación completa: {{imported}} contactos importados y {{ignored}} ignorados.",
          fail: "Falló la importación. No se importaron contactos."
        }
      },
      contactImportWpModal: {
        status: {
          completed: "Importación completada con éxito",
          inProgress: "Importación en curso {{current}} de {{total}}, no salga de esta pantalla hasta que se complete la importación"
        },
        sheetName: "Contactos"
      },
      contactNotes: {
        toasts: {
          addSuccess: "¡Nota agregada con éxito!",
          deleteSuccess: "¡Nota eliminada con éxito!"
        },
        confirmationModal: {
          deleteTitle: "Eliminar Registro",
          deleteMessage: "¿Realmente desea eliminar este registro?"
        },
        buttons: {
          cancel: "Cancelar",
          save: "Guardar",
          close: "Cerrar"
        },
        editModal: {
          title: "Editar Nota",
          label: "Editar Nota"
        }
      },
      contactDeleteConfirm: {
        expected: {
          all: "ELIMINAR TODOS",
          selected: "ELIMINAR SELECCIONADOS"
        },
        error: "Escriba exactamente: {{text}}",
        title: {
          all: "¿Eliminar TODOS los {{count}} contactos?",
          selected: "¿Eliminar {{count}} contactos seleccionados?"
        },
        alert: {
          all: "⚠️ ¡ATENCIÓN! ¡Esta acción eliminará permanentemente TODOS los {{count}} contactos de la empresa!",
          selected: "Esta acción eliminará permanentemente {{count}} contactos seleccionados."
        },
        message: {
          all: "Esta operación no se puede deshacer. Todos los contactos, sus historiales de mensajes, etiquetas y relaciones se perderán permanentemente.",
          selected: "Los contactos seleccionados y sus datos relacionados se eliminarán permanentemente."
        },
        instruction: "Para confirmar, escriba exactamente: <strong>{{text}}</strong>",
        label: "Confirmación",
        buttons: {
          cancel: "Cancelar",
          confirmAll: "Eliminar Todos",
          confirmSelected: "Eliminar Seleccionados"
        }
      },
      wallets: {
        title: "Billeteras de Contactos",
        searchPlaceholder: "Buscar contactos...",
        filterByUser: "Filtrar por Usuario",
        allUsers: "Todos los usuarios",
        contact: "Contacto",
        user: "Usuario",
        queue: "",
        phone: "Teléfono",
        email: "Email",
        actions: "Acciones",
        editWallet: "Editar Billetera",
        selectUser: "Seleccionar Usuario",
        selectQueue: "Seleccionar Fila",
        selectUserAndQueue: "Seleccione un usuario y una fila",
        cancel: "Cancelar",
        save: "Guardar",
        confirmDeleteTitle: "Confirmar Eliminación",
        confirmDeleteMessage:
          "¿Está seguro de que desea eliminar este contacto de la billetera?",
        deleteSuccess: "¡Contacto eliminado de la billetera exitosamente!",
        updateSuccess: "¡Billetera actualizada exitosamente!",
      },
      queueModal: {
        title: {
          queueData: "Datos de la fila",
          text: "Horarios de atención",
          add: "Agregar fila",
          edit: "Editar fila",
          confirmationDelete:
            "¿Está seguro? Todas las opciones integradas también se eliminarán.",
        },
        form: {
          name: "Nombre",
          color: "Color",
          orderQueue: "Orden de la fila (Bot)",
          rotate: "Rotativo",
          timeRotate: "Tiempo de Rotación",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de cierre",
          outOfHoursMessage: "Mensaje fuera de horario de atención",
          token: "Token",
          integrationId: "Integración",
          fileListId: "Listado de archivos",
          closeTicket: "Cerrar ticket",
          queueType: "Tipo de menu",
          message: "Mensaje de respuesta",
          queue: "Fila para transferencia",
          integration: "Integración",
          file: "Listado de archivos",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Editar",
          cancel: "Cancelar",
        },
        bot: {
          title: "Opciones",
          toolTipTitle: "Agregue las opciones para construir un chatbot",
          toolTip:
            "Si solo hay una opción, se elegirá automáticamente, lo que hará que el bot responda con el mensaje de la opción y avance.",
          selectOption: "Seleccione una opción",
          text: "Texto",
          attendent: "Agente",
          queue: "Fila",
          integration: "Integranción",
          file: "Archivo",
          toolTipMessageTitle:
            "El mensaje es obligatorio para pasar al siguiente nivel",
          toolTipMessageContent:
            "El mensaje es obligatorio para pasar al siguiente nivel",
          selectUser: "Seleccione un Usuario",
          selectQueue: "Seleccione una Fila",
          selectIntegration: "Seleccione um Integración",
          addOptions: "Agregar opciones",
        },
        serviceHours: {
          dayWeek: "Día",
          startTimeA: "Hora de Inicio",
          endTimeA: "Hora del término",
          startTimeB: "Hora de Inicio",
          endTimeB: "Hora del término",
          monday: "Lunes",
          tuesday: "Martes",
          wednesday: "Miércoles",
          thursday: "Jueves",
          friday: "Viernes",
          saturday: "Sabado",
          sunday: "Domingo",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Agregar proyecto",
          edit: "Editar proyecto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          jsonContent: "JsonContent",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tiempo en minutos para expirar una conversación",
          typebotKeywordFinish: "Palabra para finalizar la conversación",
          typebotUnknownMessage: "Mensaje de opción invalida",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          test: "Probar Bot",
        },
        messages: {
          testSuccess: "¡Integración testada con éxito!",
          addSuccess: "¡Integración agregada con éxito!",
          editSuccess: "¡Integración editada con éxito!",
        },
      },
      userModal: {
        warning:
          "Para importar los mensajes por favor vuelva a leer el QRCode.",
        title: {
          add: "Agregar usuario",
          edit: "Editar usuario",
          updateImage: "Actualizar Imagen",
          removeImage: "Excluir Imagen",
        },
        form: {
          name: "Nombre",
          email: "Correo Electrónico",
          password: "Contraseña",
          farewellMessage: "Mensaje de despedida",
          profile: "Perfil",
          startWork: "Inicio del Horario",
          endWork: "Final del Horario",
          whatsapp: "Conexión Default",
          allTicketEnable: "Activado",
          allTicketDisable: "Desactivado",
          allTicket: "Visualizar mensajes sin fila",
          allowGroup: "Permitir Grupos",
          defaultMenuOpen: "Abierto",
          defaultMenuClosed: "Cerrado",
          defaultMenu: "Menú Estándar",
          defaultTheme: "Tema Estándar",
          defaultThemeDark: "Oscuro",
          defaultThemeLight: "Claro",
          allHistoric: "Ver históricos",
          allHistoricEnabled: "Activado",
          allHistoricDisabled: "Desactivado",
          allUserChat: "Ver conversación de otros usuarios",
          userClosePendingTicket: "Permitir cerrar tickets pendientes",
          showDashboard: "Ver Dashboard",
          allowConnections: "Permitir acciones en las conexiones",
          showContacts: "Ver contactos",
          showCampaign: "Ver campañas",
          showFlow: "Ver flujos",
          allowSeeMessagesInPendingTickets: "Permitir ver tickets pendientes",
          finalizacaoComValorVendaAtiva: "Finalización con Valor de Venta",
          allowRealTime: "Ver Panel de Atenciones",
        },
        tabs: {
          general: "General",
          permissions: "Permisos",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          addImage: "Subir Avatar",
          editImage: "Cambiar Avatar",
        },
        success: "Usuario guardado satisfactoriamente.",
      },
      companyModal: {
        title: {
          add: "Agregar empresa",
          edit: "Editar empresa",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          passwordDefault: "Contraseña",
          numberAttendants: "Usuarios",
          numberConections: "Conexiones",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "La Empresa fue guardada satisfactoriamente.",
      },
      scheduleModal: {
        title: {
          add: "Nuevo Programa",
          edit: "Editar Programa",
          message: "Mensaje",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha del Programa",
          sentAt: "Fecha de Envío",
          addSchedule: "Añadir programa",
          sendSignature: "Enviar Firma",
          recurrence: "Recurrencia",
          recurrenceHelp:
            "Puedes elegir enviar el mensaje de forma recurrente y escoger el intervalo. Si es un mensaje para ser enviado una única vez, no alteres nada en esta sección.",
          interval: "Intervalo",
          intervalValue: "Valor del Intervalo",
          sendCount: "Enviar cuantas veces",
          sendOnWeekends: "Enviar normalmente en días no hábiles",
          sendBeforeWeekend: "Enviar un día hábil antes",
          sendAfterWeekend: "Enviar un día hábil después",
        },
        yup: {
          shortMessage: "Mensaje muy corto",
          required: "Obligatorio",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Programa guardado satisfactoriamente.",
      },
      tagModal: {
        title: {
          add: "Nueva Etiqueta",
          edit: "Editar Etiqueta",
          addKanban: "Nueva Lane",
          backToKanban: "VOLVER A KANBAN",
          editKanban: "Editar Lane",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Tag guardada satisfactoriamente.",
        successKanban: "Lane guardada satisfactoriamente.",
      },
      chatModal: {
        form: {
          name: "Nombre",
          description: "Descripción",
          groupDescription: "Descripción del grupo",
          users: "Usuarios",
        },
      },
      fileModal: {
        title: {
          add: "Agregar menú de evaluación",
          edit: "Editar menú de evaluación",
        },
        buttons: {
          okAdd: "Guardar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Agregar archivo",
        },
        form: {
          name: "Nombre",
          message: "Mensaje de Evaluación",
          options: "Opciones de Evaluación",
          extraName: "Nombre de la opción",
          extraValue: "Valor de la opción",
        },
        success: "Evaluación guardada satisfactoriamente.",
      },
      chat: {
        noTicketMessage: "Selecciona un ticket para empezar a chatear.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop:
            "⬇️ ARRASTRE Y SUELTE LOS ARCHIVOS EN EL CAMPO ⬇️",
          titleFileList: "Listado de archivo(s)",
        },
      },
      ticketsManager: {
        questionCloseTicket: "¿Quieres cerrar todos los tickets?",
        yes: "SI",
        not: "NO",
        buttons: {
          newTicket: "Nuevo",
          resolvAll: "Resolver Todos",
          close: "Cerrar",
          new: "Nuevo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Filas",
      },
      tickets: {
        inbox: {
          closedAllTickets: "¿Cerrar todos los tickets?",
          closedAll: "Cerrar Todos",
          newTicket: "Nuevo Ticket",
          yes: "SI",
          no: "NO",
          open: "Abiertos",
          resolverd: "Resueltos",
        },
        toasts: {
          deleted: "El ticket en el que estabas ha sido borrado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Bandeja" },
          closed: { title: "Resueltos" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Buscar tickets y mensajes.",
          filterConections: "Filtro por Conexión",
          filterConectionsOptions: {
            open: "Abierto",
            closed: "Cerrado",
            pending: "Pendiente",
          },
          filterUsers: "Filtro por usuarios",
          filterContacts: "Filtrar por Contactos",
          ticketsPerPage: "Entradas por página",
        },
        buttons: {
          showAll: "Todos",
          returnQueue: "Regresar a la Fila",
          scredule: "Programar",
          deleteTicket: "Borrar Ticket",
        },
        closedTicket: {
          closedMessage: "Cerrar CON un mensaje de despedida",
          closedNotMessage: "Cerrar SIN un mensaje de despedida",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escriba para buscar usuarios",
        fieldQueueLabel: "Transferir para fila",
        fieldQueuePlaceholder: "Seleccione una fila",
        fieldWhatsapp: "Seleccione un whatsapp",
        noOptions: "No se encontraron usuarios con ese nombre",
        msgTransfer:
          "Observación - los mensajes internos, no serán visualizados por el cliente.",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        called: "Entradas",
        today: "Hoy",
        missedCall: "Llamada de voz/vídeo perdida a las",
        pendingHeader: "Esperando",
        assignedHeader: "Trabajando en",
        groupingHeader: "Grupos",
        noTicketsTitle: "¡Nada acá!",
        noTicketsMessage:
          "No se encontraron tickets con este estado o término de búsqueda",
        noQueue: "Sin Fila",
        buttons: {
          accept: "Aceptar",
          cancel: "Cancelar",
          start: "Iniciar",
          closed: "Cerrar",
          reopen: "Reabrir",
          transfer: "Transferir",
          ignore: "Ignorar",
          exportAsPDF: "Exportar para PDF",
          kanbanActions: "Opciones de Kanban",
        },
        acceptModal: {
          title: "Aceptar Chat",
          queue: "Seleccionar tag",
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escribe para buscar un contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      SendContactModal: {
        title: "Enviar contacto",
        fieldLabel: "Buscar contacto",
        add: "Agregar",
        buttons: {
          ok: "Enviar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          tickets: "Tickets",
          quickMessages: "Respuestas Rápidas",
          kanban: "Kanban",
          contacts: "Contactos",
          schedules: "Agendamientos",
          tags: "Etiquetas",
          chats: "Chats Internos",
          helps: "Ayuda",
          campaigns: "Campañas",
          administration: "Administración",
          annoucements: "Anuncios",
          users: "Usuarios",
          queues: "Filas & Chatbot",
          connections: "Conexiones",
          settings: "Configuraciones",
          financeiro: "Financiero",
          companies: "Empresas",
          messagesAPI: "API de Mensajes",
          flowBuilder: "Creador de Flujos",
          campaignFlow: "Flujo de Campaña",
          conversationFlow: "Flujo de Conversación",
          management: "Gestión",
          onDuty: "Guardia",
          prompts: "Prompts",
          queueIntegration: "Integraciones",
          allConnections: "Todas las Conexiones",
          files: "Archivos",
          reports: "Reportes",
          chatsTempoReal: "Chats en Tiempo Real",
          wallets: "Carteras"
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Cerrar Sesión",
            message: "Hola",
            messageEnd: "¡Bienvenido(a) a",
            active: "Activo hasta"
          },
          refresh: "Actualizar"
        },
        announcements: {
          title: "Informativos",
          attachment: "Anexo",
          back: "Volver a la lista",
          priority: "Prioridad",
          high: "Alta",
          medium: "Media",
          low: "Baja",
          close: "Cerrar"
        },
        toast: {
          account: "Su cuenta fue accedida en otro computador."
        }
      },
      campaigns: {
        subMenus: {
          list: "Listas",
          listContacts: "Listas de Contactos",
          settings: "Configuraciones"
        },
      },
      languages: {
        undefined: "Idioma",
        "es-Mx": "Español",
        es: "Español",
        en: "English",
        tr: "Türkçe",
        ar: "عربي",
      },
      messagesAPI: {
        title: "API",
        toSend: "ENVIAR",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "Token registrado",
          userId: "ID usuario/agente",
          queueId: "ID Fila",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre del archivo",
          media: "Archivo",
          token: "Token registrado",
        },
        API: {
          title: "Documentación para envío de mensajes",
          methods: {
            title: "Métodos de Envío",
            messagesText: "Mensajes de Texto",
            messagesMidia: "Mensajes de Midia",
          },
          instructions: {
            title: "Instrucciones",
            comments: "Observaciones Importantes",
            comments1:
              "Antes de enviar mensajes, es necesario registrar el token vinculado a la conexión que enviará los mensajes. <br />Para registrarse, acceda al menú 'Conexiones', haga clic en el botón de edición de la conexión e inserte el token en el campo correspondiente.",
            comments2:
              "El número de envío no debe tener máscara ni caracteres especiales y debe constar de:",
            codeCountry: "Código del País",
            code: "Código del Estado",
            number: "Numero",
          },
          text: {
            title: "1. Mensajes de Texto",
            instructions:
              "A continuación se muestra la lista de información necesaria para enviar mensajes de texto:",
          },
          media: {
            title: "2. Mensagens de Media",
            instructions:
              "A continuación se muestra la lista de información necesaria para enviar mensajes con archivos:",
          },
        },
      },
      notifications: {
        noTickets: "Sin notificaciones.",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        searchPlaceholder: "Buscar...",
        noAttachment: "No hay",
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir. ¿Continuar?",
        },
        buttons: {
          add: "Agregar",
          attach: "Adjuntar Archivo",
          cancel: "Cancelar",
          edit: "Editar",
        },
        toasts: {
          success: "Atajo agregado satisfactoriamente.",
          deleted: "Atajo excluido satisfactoriamente.",
        },
        dialog: {
          title: "Mensaje Rápida",
          shortcode: "Atajo",
          message: "Respuesta",
          save: "Guardar",
          cancel: "Cancelar",
          general: "General",
          geral: "Global",
          add: "Agregar",
          edit: "Editar",
          visao: "Permitir visión",
          form: {
            shortcode: {
              required: "Obligatorio"
            }
          },
          tabs: {
            general: "General",
            official: "Oficial"
          },
          media: {
            title: "Adjuntar Archivo",
            newFile: "Nuevo Archivo",
            newAudio: "Nuevo Audio",
            newAudioRecorded: "Nuevo audio grabado",
            buttons: {
              attach: "Adjuntar Archivo",
              record: "Grabar Audio",
              cancelEdit: "Cancelar Edición"
            },
            tooltips: {
              edit: "Editar archivo",
              remove: "Remover archivo"
            },
            preview: {
              audioNotSupported: "Su navegador no soporta el elemento de audio.",
              videoNotSupported: "Su navegador no soporta el elemento de video."
            },
            replace: "Elija un nuevo archivo para reemplazar:",
            choose: "Elija una opción para adjuntar un archivo:"
          },
          components: {
            type: "Tipo",
            value: "Valor"
          },
          status: "Estado",
          language: "Idioma",
          category: "Categoría",
          metaID: "Meta ID",
        },
        table: {
          shortcode: "Atajo",
          message: "Mensaje",
          actions: "Acciones",
          mediaName: "Media",
          status: "Estado",
        },
      },
      contactLists: {
        title: "Listado de Contactos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Listado",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Búsqueda",
        buttons: {
          add: "Nuevo",
          lists: "Listados",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "Correo electrónico",
          okEdit: "Editar",
          okAdd: "Agregar",
          add: "Agregar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "Correo electrónico",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir.",
          importMessage: "¿Quieres importar esta plantilla? ",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      kanban: {
        title: "Kanban",
        sortBy: "Ordenar por",
        sortOptions: {
          ticketNumber: "Número de Ticket",
          lastMessage: "Último Mensaje",
          valueDesc: "Valor (mayor a menor)"
        },
        startDate: "Fecha de inicio",
        endDate: "Fecha de fin",
        search: "Buscar",
        addColumn: "+ Añadir columnas",
        total: "Total",
        value: "Valor",
        assignValue: "Asignar Valor",
        removeValue: "Remover Valor",
        viewTicket: "Ver Ticket",
        editOpportunityValue: "Editar Valor de Oportunidad",
        assignOpportunityValue: "Asignar Valor de Oportunidad",
        valueLabel: "Valor",
        cancel: "Cancelar",
        save: "Guardar",
        ticketNumber: "Ticket nº"
      },
      campaigns: {
        subMenus: {
          list: "Listados",
          listContacts: "Listados de contatos",
          settings: "Configuraciones",
        },
        settings: {
          randomInterval: "Intervalo de disparo aleatorio",
          noBreak: "Sin Intervalo",
          intervalGapAfter: "Intervalo mayor después de",
          undefined: "No definido",
          messages: "mensajes",
          laggerTriggerRange: "Intervalo de envío más grande",
          addVar: "Agregar variable",
          save: "Guardar",
          close: "Cerrar",
          add: "Agregar",
          shortcut: "Atajo",
          content: "Contenido",
        },
        title: "Campañas",
        details: "Detalles",
        searchPlaceholder: "Búsqueda",
        buttons: {
          add: "Nueva Campaña",
          contactLists: "Listado de Contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Listado de Contactos",
          option: "Ninguna",
          disabled: "Activada",
          enabled: "Desactivada",
          status: "Estatus",
          scheduledAt: "Fecha de Programación",
          completedAt: "Finalizada",
          confirmation: "Confirmación",
          actions: "Acciones",
          details: "Detalles",
          recurrence: "Recurrencia",
          nextExecution: "Próxima Ejecución",
        },
        filters: {
          status: "Filtrar por Estado",
          recurrence: "Filtrar por Recurrencia",
          all: "Todos",
          allStatuses: "Todos los Estados",
          allRecurrences: "Todas las Recurrencias",
          recurring: "Recurrentes",
          unique: "Únicas",
          inactive: "Inactiva",
          scheduled: "Programada",
          inProgress: "En Progreso",
          cancelled: "Cancelada",
          completed: "Completada",
        },
        dialog: {
          new: "Nueva Campaña",
          update: "Editar Campaña",
          readonly: "Solo Visualizar",
          help: "Haga clic en las variables de abajo para insertarlas en su mensaje.",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de Confirmación 1",
            confirmationMessage2: "Mensaje de Confirmación 2",
            confirmationMessage3: "Mensaje de Confirmación 3",
            confirmationMessage4: "Mensaje de Confirmación 4",
            confirmationMessage5: "Mensaje de Confirmación 5",
            messagePlaceholder: "Escribe aquí tu mensaje...",
            whatsapp: "Conexión",
            noContactList: "Ninguna",
            disabled: "Deshabilitada",
            enabled: "Habilitada",
            short: "¡Muy corto!",
            long: "¡Muy largo!",
            required: "Obligatorio",
            status: "Estatus",
            scheduledAt: "Programa",
            confirmation: "Confirmación",
            contactList: "Listado de Contacto",
            tagList: "Etiquetas",
            noTagList: "Ninguna",
            statusTicket: "Estatus del Ticket",
            openTicketStatus: "Abierto",
            closedTicketStatus: "Cerrado",
            enabledOpenTicket: "Activado",
            disabledOpenTicket: "Desactivado",
            openTicket: "Abrir ticket",
            variables: "Variables Disponibles:",
            variable_list: {
              name: "{nombre}",
              number: "{numero}",
              email: "{correo}",
            },
          },
          tabs: {
            message1: "Msg. 1",
            message2: "Msg. 2",
            message3: "Msg. 3",
            message4: "Msg. 4",
            message5: "Msg. 5",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar Envíos",
            close: "Cerrar",
            attach: "Anexar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Acción realizada satisfactoriamente",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro excluido",
        },
      },
      campaignReport: {
        title: "Reporte de",
        inactive: "Inactiva",
        scheduled: "Programada",
        process: "En Proceso",
        cancelled: "Cancelada",
        finished: "Finalizada",
        campaign: "Campaña",
        validContacts: "Contactos Válidos",
        confirmationsRequested: "Confirmaciones Solicitadas",
        confirmations: "Confirmaciones",
        deliver: "Entregadas",
        connection: "Conexión",
        contactLists: "Listado de Contactos",
        schedule: "Programados",
        conclusion: "Conclusión",
      },
      announcements: {
        title: "Boletines",
        searchPlaceholder: "Búsqueda",
        active: "Activo",
        inactive: "Inactivo",
        buttons: {
          add: "Nuevo Boletin",
          contactLists: "Listados de Boletines",
        },
        table: {
          priority: "Prioridad",
          title: "Título",
          text: "Texto",
          mediaName: "Archivo",
          status: "Estatus",
          actions: "Acciones",
        },
        dialog: {
          edit: "Editar Boletin",
          add: "Nuevo Boletin",
          update: "Editar Boletin",
          readonly: "Solo visualizar",
          form: {
            priority: "Prioridad",
            title: "Título",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Estatus",
            high: "Alta",
            medium: "Mediana",
            low: "Baja",
            active: "Activo",
            inactive: "Inactivo",
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Anexar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          success: "Acción realizada satisfactoriamente",
          deleted: "Registro excluido",
        },
      },
      campaignsConfig: {
        title: "Configuraciones de Campañas",
      },
      queues: {
        title: "Filas",
        table: {
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de saludo",
          orderQueue: "Orden de la fila (bot)",
          actions: "Acciones",
          ID: "ID",
        },
        buttons: {
          add: "Agregar fila",
        },
        toasts: {
          success: "Fila guardada",
          deleted: "Fila excluida",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Los tickets en esa fila seguirán existiendo, pero ya no tendrán ninguna fila asignada.",
        },
      },
      queue: {
        queueData: "Datos de la Fila",
      },
      queueSelect: {
        inputLabel: "Filas",
        inputLabelRO: "Filas solo para lectura",
        withoutQueue: "Sin Fila",
      },
      queueIntegration: {
        title: "Integraciones",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          lastUpdate: "Ultima actualización",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar Proyecto",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Se eliminarán las filas y conexiones enlazadas",
        },
      },
      users: {
        title: "Usuarios",
        table: {
          status: "Estatus",
          name: "Nombre",
          email: "Correo Electrónico",
          profile: "Perfil",
          startWork: "Inicio del trabajo",
          endWork: "Final de trabajo",
          actions: "Acciones",
          ID: "ID",
        },
        buttons: {
          add: "Agregar usuario",
        },
        toasts: {
          deleted: "Usuario borrado satisfactoriamente.",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "Toda la información del usuario se perderá. Los tickets abiertos de los usuarios se moverán a la fila.",
        },
      },
      compaies: {
        title: "Empresas",
        table: {
          ID: "ID",
          status: "Activo",
          name: "Nombre",
          email: "Correo",
          password: "Contraseña",
          phone: "Teléfono",
          plan: "Plan",
          active: "Activo",
          numberAttendants: "Agentes",
          numberConections: "Conexiones",
          value: "Valor",
          namePlan: "Nombre del Plan",
          numberQueues: "Filas",
          useCampaigns: "Campañas",
          useExternalApi: "Rest API",
          useFacebook: "Facebook",
          useInstagram: "Instagram",
          useWhatsapp: "Whatsapp",
          useInternalChat: "Chat Interno",
          useSchedules: "Programa",
          createdAt: "F.Creación",
          dueDate: "Caducidad",
          lastLogin: "Ult. Login",
          folderSize: " Tamaño de carpeta ",
          totalFiles: "  Archivos totales",
          lastUpdate: "Última actualización",
          actions: "Acciones",
          money: "MXN",
          yes: "Si",
          no: "No",
          document: "CURP/RFC",
          recurrence: "Recurencia",
          monthly: "Mensual",
          bimonthly: "Bimestral",
          quarterly: "Trimestral",
          semester: "Semestral",
          yearly: "Anual",
          clear: "Limpiar",
          delete: "Eliminar",
          user: "Usuario",
          save: "Guardar",
        },
        buttons: {
          add: "Agregar empresa",
        },
        toasts: {
          deleted: "Empresa excluida satisfactoriamente.",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Todas las informaciones de la empresa serán eliminadas. Los tickets abiertos de este usuário serán movidos a la fila.",
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuarios",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Programas",
          enabled: "Activada",
          disabled: "Desactivada",
          clear: "Limpiar",
          delete: "Eliminar",
          save: "Guardar",
          yes: "Si",
          no: "No",
          money: "MXN",
        },
      },
      helps: {
        title: "Ayuda",
        settings: {
          codeVideo: "Código del Video",
          description: "Descripción",
          clear: "Limpiar",
          delete: "Eliminar",
          save: "Guardar",
        },
      },
      schedules: {
        title: "Programas",
        date: "Fecha",
        time: "Hora",
        event: "Evento",
        allDay: "Todo el Día",
        week: "Semana",
        work_week: "Programaciones",
        day: "Día",
        month: "Mes",
        previous: "Anterior",
        next: "Siguiente",
        yesterday: "Ayer",
        tomorrow: "Mañana",
        today: "Hoy",
        agenda: "Agenda",
        noEventsInRange: "No hay eventos en este período.",
        confirmationModal: {
          deleteTitle: "¿Seguro que quieres excluir este Programa?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha del Programa",
          sentAt: "Fecha de Envío",
          status: "Estatus",
          actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Programa",
        },
        toasts: {
          deleted: "Programa eliminado satisfactoriamente.",
        },
      },
      tags: {
        title: "Etiquetas",
        addColumns: "+ AGREGAR COLUMMAS",
        search: "BUSCAR",
        seeTicket: "VER BILLETE",
        confirmationModal: {
          deleteTitle: "¿Seguro que quieres excluir esta Etiqueta?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          name: "Nombre",
          kanban: "Kanban",
          color: "Color",
          tickets: "Registros Tags",
          contacts: "Contactos",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Etiqueta",
        },
        toasts: {
          deleted: "Etiqueta eliminada satisfactoriamente.",
        },
      },
      tagsKanban: {
        title: "Lanes",
        laneDefault: "Abierto(s)",
        backToKanban: "VOLVER A KANBAN",
        confirmationModal: {
          deleteTitle: "¿Seguro que quieres excluir esta Lane?",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Tickets",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Lane",
        },
        toasts: {
          deleted: "Lane eliminada satisfactoriamente.",
        },
      },
      files: {
        title: "Listado de archivos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acción",
        },
        toasts: {
          deleted: "Listado borrado satisfactoriamente!",
          deletedAll: "Todos los listados fueron borrados satisfactoriamente!",
        },
        buttons: {
          add: "Agregar",
          deleteAll: "Borrar Todos",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteAllTitle: "Borrar Todos",
          deleteMessage: "Estás seguro de borrar este listado?",
          deleteAllMessage: "Estás seguro de borrar todos los listado?",
        },
      },
      settings: {
        success: "Configuración guardada satisfactoriamente.",
        title: "Configuración",
        tabs: {
          options: "Opciones",
          schedules: "Horarios",
          plans: "Planes",
          help: "Ayuda",
        },
        settings: {
          userCreation: {
            name: "Creación de usuarios",
            options: {
              enabled: "Habilitado",
              disabled: "Deshabilitado",
            },
          },
          tabs: {
            options: "Opciones",
            schedules: "Horarios",
            plans: "Planes",
            help: "Ayuda",
          },
          options: {
            disabled: "Deshabilitado",
            enabled: "Habilitado",
            updating: "Actualizando...",
            creationCompanyUser: "Creación de Empresa/Usuario",
            evaluations: "Evaluaciones",
            officeScheduling: "Programación de Horario",
            queueManagement: "Gestión por Fila",
            companyManagement: "Gestión por Empresa",
            connectionManagement: "Gestión por Conexión",
            sendGreetingAccepted: "Enviar saludo al aceptar el ticket",
            sendMsgTransfTicket:
              "Enviar mensaje de transferencia de sector/agente",
            checkMsgIsGroup: "Ignorar mensajes de grupos",
            chatBotType: "Tipo de Bot",
            chatBotTypeValues: {
              text: "Texto",
              buttons: "Botones"
            },
            userRandom: "Elegir agente aleatorio",
            buttons: "Botones",
            acceptCallWhatsapp:
              "¿Informar que no se aceptan llamadas por WhatsApp?",
            sendSignMessage: "Permitir al agente elegir ENVIAR firma",
            sendGreetingMessageOneQueues:
              "Enviar saludo cuando haya solo una fila",
            sendQueuePosition: "Enviar mensaje con la posición en la fila",
            sendFarewellWaitingTicket:
              "Enviar mensaje de despedida al estar en espera",
            acceptAudioMessageContact:
              "¿Aceptar audios de todos los contactos?",
            enableLGPD: "Habilitar tratamiento de datos (LGPD)",
            requiredTag: "Etiqueta obligatoria para cerrar el ticket",
            closeTicketOnTransfer: "Cerrar ticket al transferir a otra fila",
            DirectTicketsToWallets:
              "Mover automáticamente al cliente a la cartera",
            showNotificationPending:
              "Mostrar notificación para tickets pendientes",
            copyContactPrefix: "Prefijo para copiar contactos",
            copyContactPrefixPlaceholder: "Ej: +52 para Mexico",
          },
          customMessages: {
            sendQueuePositionMessage: "Mensaje de posición en la fila",
            AcceptCallWhatsappMessage: "Mensaje para informar que no acepta llamadas",
            greetingAcceptedMessage: "Mensaje de saludo al aceptar ticket",
            transferMessage: "Mensaje de transferencia - ${queue.name} = fila destino",
          },
        },
        schedules: {
          days: {
            monday: "Lunes",
            tuesday: "Martes",
            wednesday: "Miércoles",
            thursday: "Jueves",
            friday: "Viernes",
            saturday: "Sábado",
            sunday: "Domingo"
          },
          table: {
            dayOfWeek: "Día de la Semana",
            startTime1: "Hora de Inicio 1",
            endTime1: "Hora de Fin 1", 
            startTime2: "Hora de Inicio 2",
            endTime2: "Hora de Fin 2"
          },
          buttons: {
            save: "Guardar"
          }
        },
        acronyms: {
          title: "Configuración de Siglas para Copia de Contactos"
        },
        payment: {
          efi: "EFI",
          efiClientId: "ID del Cliente EFI",
          efiClientSecret: "Secreto del Cliente EFI",
          efiPixKey: "Clave PIX EFI",
          mercadoPago: "Mercado Pago",
          mercadoPagoAccessToken: "Token de Acceso Mercado Pago",
          stripe: "Stripe",
          stripePrivateKey: "Clave Privada Stripe",
          asaas: "ASAAS",
          asaasToken: "Token ASAAS"
        },
      },
      ticketOptionsMenu: {
        schedule: "Programa",
        delete: "Borrar",
        transfer: "Transferir",
        registerAppointment: "Observaciones del Contacto",
        resolveWithNoFarewell: "Cerrar sin despedida",
        acceptAudioMessage: "¿Aceptar audios del contacto?",
        appointmentsModal: {
          title: "Observaciones del Contacto",
          textarea: "Observación",
          placeholder: "Agregue aqui la información",
        },
        confirmationModal: {
          title: "¿Borrar ticket #",
          titleFrom: "del contacto ",
          message:
            "¡Atención! Todos los mensajes Todos los mensajes relacionados con el ticket se perderán.",
        },
        buttons: {
          delete: "Borrar",
          cancel: "Cancelar",
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a:",
          dialogRatingTitle:
            "¿Quieres dejar un mensaje de evaluación para el cliente?",
          dialogClosingTitle: "Finalizando la atención al cliente!",
          dialogRatingCancel: "Cerrar CON Mensaje de Despedida",
          dialogRatingSuccess: "Cerrar y Enviar Evaluación",
          dialogRatingWithoutFarewellMsg: "Cerrar SIN Mensaje de Despedida",
          ratingTitle: "Elegir menú de evaluación",
          notMessage: "No hay mensaje seleccionado",
          buttons: {
            return: "Devolver",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
            rating: "Enviar Evaluación",
            enableIntegration: "Activar/Desactivar integración",
            logTicket: "Logs del Ticket",
            requiredTag:
              "Opps! Debes asignar una tag antes de cerrar el ticket.",
          },
        },
      },
      messagesInput: {
        placeholderPrivateMessage:
          "Entre como un mensaje o con / para respuestas rápidas",
        placeholderOpen:
          "Entre como un mensaje o con / para respuestas rápidas",
        placeholderClosed:
          "Vuelva a abrir o acepte este ticket para enviar un mensaje.",
        signMessage: "Firmar",
        privateMessage: "Mensaje Privada",
        placeholderPending: "Mensaje interno (ticket esperando aceptación)...",
        pendingTicket: {
          title: "Ticket en Espera:",
          message: "Solo se permiten mensajes internos en este momento."
        },
        internalMessage: "Mensaje Interno",
      },
      contactDrawer: {
        header: "Detalles del contacto",
        searchPlaceholder: "Buscar en mensajes...",
        buttons: {
          edit: "Editar contacto",
          block: "Bloquear",
          unblock: "Desbloquear",
        },
        extraInfo: "Otras informaciones",
        tabs: {
          info: "Información",
          images: "Imágenes",
          videos: "Videos",
          audios: "Audios",
          documents: "Documentos",
          links: "Enlaces",
          participants: "Participantes"
        },
        participants: {
          title: "Participantes del Grupo",
          noParticipants: "No se encontraron participantes",
          superAdmin: "Super Admin",
          admin: "Admin"
        },
        media: {
          noImages: "No se encontraron imágenes",
          noVideos: "No se encontraron videos",
          noAudios: "No se encontraron audios",
          noDocuments: "No se encontraron documentos",
          noLinks: "No se encontraron enlaces",
          document: "Documento"
        },
        search: {
          searching: "Buscando...",
          noMessages: "No se encontraron mensajes",
          found: "Mensaje encontrado",
          you: "Tú"
        },
        toasts: {
          contactBlocked: "Contacto bloqueado",
          contactUnblocked: "Contacto desbloqueado"
        }
      },
      messageVariablesPicker: {
        label: "Variables disponibles",
        vars: {
          contactFirstName: "Primer Nombre",
          contactName: "Nombre",
          user: "Agente",
          greeting: "Saludos",
          protocolNumber: "Protocolo",
          date: "Fecha",
          hour: "Hora",
          ticket_id: "Nº del Ticket",
          queue: "Sector",
          connection: "Conexión",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageInput: {
        tooltip: {
          signature: "Activar/Desactivar firma",
          privateMessage: "Activar/Desactivar mensaje privado",
          meet: "Enviar link para videollamada",
        },
        type: {
          imageVideo: "Fotos y videos",
          cam: "Cámara",
          contact: "Contacto",
          meet: "Link Jitsi Meet",
        },
      },
      messageOptionsMenu: {
        delete: "Borrar",
        reply: "Responder",
        edit: "Editar",
        forward: "Enviar",
        toForward: "Enviar",
        talkTo: "Platicar Con",
        confirmationModal: {
          title: "¿Borrar mensaje?",
          message: "Esta acción no puede ser revertida.",
        },
      },
      invoices: {
        table: {
          invoices: "Facturas",
          details: "Detalles",
          users: "Usuarios",
          connections: "Conexiones",
          queues: "Filas",
          value: "Valor",
          expirationDate: "Fecha Venc.",
          action: "Acción",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP:
          "Debe haber al menos una conexión de WhatsApp predeterminada.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró WhatsApp predeterminado. Verifique la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ​​está inicializada. Verifique la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de whatsapp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pudieron descargar los medios de WhatsApp. Verifique la página de conexiones.",
        ERR_INVALID_CREDENTIALS: "Error de autenticación. Vuelva a intentarlo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se pudo borrar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión caducada. Inicie sesión.",
        ERR_USER_CREATION_DISABLED:
          "La creación de usuarios fue deshabilitada por el administrador.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND:
          "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
        ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al obtener el mensaje en WhtasApp, tal vez sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elija otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una fila.",
        ERR_OUT_OF_HOURS: "¡Fuera del horario de oficina!",
      },
      messagesAPIInstructions: {
        endpoint: "Endpoint:",
        method: "Método:",
        post: "POST",
        headers: "Headers:",
        headerAuthorization:
          "Authorization Bearer (token registrado) y Content-Type (application/json)",
        body: "Body:",
        fieldNumber: '"number": "558599999999"',
        fieldBody: '"body": "Mensaje"',
        fieldUserId: '"userId": ID de usuario o ""',
        fieldQueueId: '"queueId": ID de la fila o ""',
        fieldSendSignature: '"sendSignature": Firmar mensaje - true/false',
        fieldCloseTicket: '"closeTicket": Cerrar el ticket - true/false',
        singMessage: "Firmar mensaje - true/false",
        closeTicket: "Cerrar el ticket - true/false",
        testSend: "la test del envio",
      },
      recurrenceSection: {
        title: "Recurrencia",
        recurrence: "Configuración de Recurrencia",
        enable: "Habilitar Recurrencia",
        type: "Tipo de Recurrencia",
        interval: "Intervalo",
        daysOfWeek: "Días de la Semana",
        dayOfMonth: "Día del Mes",
        endDate: "Fecha de Fin",
        maxExecutions: "Máximo de Ejecuciones",
        preview: {
          title: "Vista Previa de Ejecuciones",
          buttonShow: "Mostrar Vista Previa",
          buttonHide: "Ocultar Vista Previa",
          execution: "Ejecución {{index}}"
        },
        options: {
          daily: "Diario",
          weekly: "Semanal",
          biweekly: "Quincenal",
          monthly: "Mensual",
          yearly: "Anual",
          days: "días",
          weeks: "semanas",
          months: "meses"
        },
        weekDays: {
          sunday: "Domingo",
          monday: "Lunes",
          tuesday: "Martes",
          wednesday: "Miércoles",
          thursday: "Jueves",
          friday: "Viernes",
          saturday: "Sábado"
        },
        helpers: {
          interval: "Cada {{count}} {{type}}",
          endDate: "Fecha de fin opcional para la recurrencia",
          maxExecutions: "Número máximo de ejecuciones (opcional)",
          dayOfMonth: "Día del mes (1-31)"
        },
        validation: {
          type: "El tipo de recurrencia es requerido",
          interval: "El intervalo es requerido",
          intervalMin: "El intervalo debe ser al menos 1",
          daysOfWeek: "Debe seleccionar al menos un día",
          dayOfMonth: "El día del mes es requerido",
          dayOfMonthMinMax: "El día debe estar entre 1 y 31",
          endDate: "La fecha de fin debe ser en el futuro",
          maxExecutions: "Las ejecuciones máximas deben ser al menos 1"
        }
      },
      servicePanel: {
        allowRealTime: "Panel de servicio",
      },
      financial: {
        invoices: "Facturas",
        details: "Detalles",
        users: "Usuarios",
        connections: "Conexiones",
        queues: "Filas",
        value: "Valor",
        expirationDate: "Fecha de Vencimiento",
        status: "Estado",
        action: "Acción",
      },
      statusFilter: {
        statusFilter: "Filtrar por estado",
      },
      momentsUser: {
        services: "Servicios:",
        pending: "Pendiente",
        noqueue: "SIN FILA",
      },
      campaignsPhrase: {
        campaignsFlow: "Flujo de Campaña",
        campaigns: "Campaña",
        name: "Nombre",
        status: "Estado",
        newCampaignWithFlowByPhrase: "Nueva campaña con flujo por frase",
        editCampaignWithFlowByPhrase: "Editar campaña con flujo por frase",
        phraseTriggerName: "Nombre del disparador de frase",
        chooseAStream: "Elige una transmisión",
        whichPhraseTriggersTheFlow: " ¿Qué frase desencadena el flujo?",
        selectAConnection: "Seleccione una conexión",
        chooseAStream: "Elige una transmisión",
        status: "Estado",
        cancel: "CANCELAR",
        createCampaign: "CREAR CAMPAÑA",
        saveCampaign: "Guardar Campaña",
        title: "Campañas de Flujo",
        newCampaign: "Nueva Campaña",
        connections: "Conexiones",
        noCampaignsFound: "Ninguna campaña encontrada",
        createFirstCampaign: "Haga clic en \"Nueva Campaña\" para crear su primera campaña de flujo",
        campaignName: "Nombre de la campaña",
        selectFlow: "Seleccione un flujo",
        whatsappConnections: "Conexiones WhatsApp",
        multipleConnections: "Múltiples",
        noConnection: "Sin conexión",
        moreConnections: "Más {{count}} conexión(es)",
        active: "Activa",
        inactive: "Inactiva",
        editCampaign: "Editar campaña",
        deleteCampaign: "Eliminar campaña",
        phrasesTriggerFlow: "Frases/Palabras que activan el flujo",
        exactMatch: "Coincidencia Exacta: El mensaje debe ser idéntico a la frase configurada.",
        partialMatch: "Coincidencia Parcial: La frase puede estar contenida en cualquier parte del mensaje.",
        phrase: "Frase {{number}}",
        type: "Tipo",
        exact: "Exacta",
        partial: "Parcial",
        addPhrase: "Agregar Frase",
        atLeastOneConnection: "Al menos una conexión debe ser seleccionada",
        connectionsSelected: "{{count}} conexión(es) seleccionada(s):",
        campaignWillExecute: "La campaña se ejecutará cuando cualquiera de estas conexiones reciba mensajes que coincidan con las frases configuradas.",
        saving: "Guardando...",
        update: "Actualizar",
        create: "Crear",
        campaignDeleted: "Campaña eliminada exitosamente",
        campaignUpdated: "Campaña actualizada exitosamente",
        campaignCreated: "Campaña creada exitosamente",
        errorLoadingFlows: "Error al cargar flujos",
        errorLoadingConnections: "Error al cargar conexiones",
        errorLoadingCampaign: "Error al cargar datos de la campaña",
        errorSavingCampaign: "Error al guardar campaña",
        fillRequiredFields: "Por favor complete todos los campos obligatorios",
        flowNotFound: "Flujo seleccionado no encontrado",
        phrasesConfigured: "{{count}} frase(s) configurada(s)",
        nameRequired: "El nombre es obligatorio",
        flowRequired: "El flujo es obligatorio",
        phraseRequired: "La frase es obligatoria",
      },
      ticketOptionsMenu: {
        schedule: "Programa",
        delete: "Borrar",
        transfer: "Transferir",
        registerAppointment: "Observaciones del Contacto",
        resolveWithNoFarewell: "Cerrar sin despedida",
        acceptAudioMessage: "¿Aceptar audios del contacto?",
        appointmentsModal: {
          title: "Observaciones del Contacto",
          textarea: "Observación",
          placeholder: "Agregue aqui la información",
        },
        confirmationModal: {
          title: "¿Borrar ticket #",
          titleFrom: "del contacto ",
          message:
            "¡Atención! Todos los mensajes Todos los mensajes relacionados con el ticket se perderán.",
        },
        buttons: {
          delete: "Borrar",
          cancel: "Cancelar",
        },
      },
      conversationFlows: {
        title: "Flujos de Conversación",
        searchPlaceholder: "Buscar flujos...",
        newFlow: "Nuevo Flujo",
        createFirstFlow: "Crear Primer Flujo",
        noFlowsCreated: "Ningún flujo creado aún",
        noFlowsFound: "Ningún flujo encontrado",
        createFirstFlowDescription: "Crea tu primer flujo de conversación para automatizar atenciones",
        tryOtherSearchTerms: "Intenta usar otros términos de búsqueda",
        active: "Activo",
        inactive: "Inactivo",
        table: {
          name: "Nombre",
          status: "Estado",
          actions: "Acciones"
        },
        buttons: {
          add: "Nuevo Flujo",
          edit: "Editar",
          delete: "Eliminar",
          duplicate: "Duplicar"
        },
        confirmationModal: {
          deleteTitle: "Eliminar Flujo",
          deleteMessage: "¿Estás seguro de que deseas eliminar este flujo?"
        },
        toasts: {
          deleted: "Flujo eliminado exitosamente",
          duplicated: "Flujo duplicado exitosamente"
        },
        validation: {
          nameRequired: "El nombre es obligatorio",
          flowRequired: "El flujo es obligatorio",
          phraseRequired: "La frase es obligatoria",
        },
      },
      whatsappModalRel: {
        form: {
          isOficial: "Informe de Soporte",
          ticketId: "ID del Ticket",
          client: "Cliente",
          number: "Número",
          agent: "Agente",
          date: "Fecha",
          lastMessage: "Último Mensaje",
          fullReport: "El informe completo está adjunto arriba",
          resolveAndTriggerIntegration: "Resolver y Disparar Integración",
          elementNotFoundForExport: "Elemento no encontrado para exportar.",
          reportFilename: "informe_soporte",
        },
      },
      chatList: {
        noMessages: "Sin mensajes",
        admin: "Administrador",
        member: "Miembro",
        searchChat: "Buscar chat...",
        createNewChat: "Crear nuevo chat",
        searchUser: "Buscar usuario...",
        noUserFound: "No se encontró usuario",
        noUserAvailable: "No hay usuarios disponibles",
        cancel: "Cancelar",
        details: "Detalles",
        deleteChat: "Eliminar Chat",
        deleteChatConfirm: "Esta acción no se puede deshacer, ¿confirmar?",
        detailsTitle: "Detalles",
        edit: "Editar",
        delete: "Eliminar",
        now: "ahora",
        minutesAgo: "hace {{count}}m",
        hoursAgo: "hace {{count}}h",
      },
      chatMessages: {
        deleted: "Este mensaje fue eliminado",
        deletedAdmin: "Mensaje eliminado - visible solo para administradores",
        reply: "Responder",
        edit: "Editar",
        delete: "Eliminar",
        forward: "Reenviar",
        editMessage: "Editar Mensaje",
        save: "Guardar",
        cancel: "Cancelar",
        deleteMessage: "Eliminar Mensaje",
        deleteMessageConfirm:
          "¿Está seguro de que desea eliminar este mensaje?",
        forwardMessage: "Reenviar Mensaje",
        selectChat: "Seleccione el chat",
        doubleClickToReply: "Doble clic para responder",
        edited: "(editado)",
        forwarded: "(reenviado)",
        typeMessage: "Escribe un mensaje...",
        send: "Enviar",
        noMessages: "Sin mensajes",
        loading: "Cargando...",
        replyingTo: "Respondiendo a",
        clickToGoToOriginal: "Haga clic para ir al mensaje original",
        today: "HOY",
        loadingOldMessages: "Cargando mensajes antiguos...",
        viewDocument: "Ver Documento",
        messageNotFound: "[mensaje no encontrado]",
      },
      chatShared: {
        audio: "Audio",
        image: "Imagen",
        video: "Video",
        file: "Archivo",
      },
      chatPopover: {
        reply: "Responder",
        edit: "Editar",
        delete: "Eliminar",
        forward: "Reenviar",
        cancel: "Cancelar",
        confirmDelete: "Confirmar Eliminación",
        confirm: "Confirmar",
        editMessage: "Editar Mensaje",
        save: "Guardar",
        forwardMessage: "Reenviar Mensaje",
        selectChat: "Seleccione el chat",
        forward: "Reenviar",
        noChats: "No hay chats disponibles",
        internalChat: "Chat interno #",
        noMessages: "Sin mensajes",
      },
      chatIndex: {
        chats: "Chats",
        groups: "Grupos",
        new: "Nuevo",
        messages: "Mensajes",
        search: "Buscar...",
        noChats: "No se encontraron chats",
        noGroups: "No se encontraron grupos",
        noMessages: "Sin mensajes",
        loading: "Cargando...",
        error: "Error al cargar los datos",
        addGroupPhoto: "Agregar Foto de Grupo",
        changeGroupPhoto: "Cambiar Foto de Grupo",
        groupName: "Nombre del Grupo",
        groupDescription: "Descripción del Grupo",
        save: "Guardar",
        cancel: "Cancelar",
        createGroup: "Crear Grupo",
        editGroup: "Editar Grupo",
        deleteGroup: "Eliminar Grupo",
        deleteGroupConfirm: "¿Está seguro de que desea eliminar este grupo?",
        edit: "Editar",
        delete: "Eliminar",
        details: "Detalles",
        modal: {
          title: "Crear Grupo",
          editTitle: "Editar Grupo",
          save: "Guardar",
          cancel: "Cancelar",
        },
      },
      whitelabel: {
        title: "Marca Blanca",
        primaryColorLight: "Color Primario (Tema Claro)",
        primaryColorDark: "Color Primario (Tema Oscuro)",
        appName: "Nombre de la Aplicación",
        logoLight: "Logo (Tema Claro)",
        logoDark: "Logo (Tema Oscuro)",
        favicon: "Favicon",
        backgroundLight: "Imagen de Fondo (Tema Claro)",
        backgroundDark: "Imagen de Fondo (Tema Oscuro)",
        preview: "Visualizar",
        delete: "Eliminar",
        upload: "Subir",
        availableLanguages: "Idiomas Disponibles",
        atLeastOneLanguage: "Al menos un idioma debe estar habilitado",
        sections: {
          general: "Configuraciones Generales",
          generalDescription: "Configura el nombre y la información básica de la aplicación",
          colors: "Colores y Temas",
          colorsDescription: "Personaliza los colores primarios para los temas claro y oscuro",
          logos: "Logos e Imágenes",
          logosDescription: "Sube los logos e imágenes de fondo de la aplicación",
          languages: "Idiomas Disponibles",
          languagesDescription: "Selecciona qué idiomas estarán disponibles en el sistema"
        }
      },
      transcribe: {
        failed: "La conversión a texto falló"
      },
      conversationFlows: {
        title: "Flujos de Conversación",
        searchPlaceholder: "Buscar flujos...",
        newFlow: "Nuevo Flujo",
        createFirstFlow: "Crear Primer Flujo",
        noFlowsCreated: "Ningún flujo creado aún",
        noFlowsFound: "Ningún flujo encontrado",
        createFirstFlowDescription: "Crea tu primer flujo de conversación para automatizar atenciones",
        tryOtherSearchTerms: "Intenta usar otros términos de búsqueda",
        active: "Activo",
        inactive: "Inactivo",
        editFlow: "Editar flujo",
        deleteFlow: "Eliminar flujo",
        duplicateFlow: "Duplicar flujo",
        flowDeleted: "Flujo eliminado con éxito",
        flowDuplicated: "Flujo duplicado con éxito",
        deleteFlowTitle: "Eliminar flujo",
        duplicateFlowTitle: "Duplicar flujo",
        deleteFlowMessage: "Esta acción no se puede deshacer. Todas las integraciones relacionadas se perderán.",
        duplicateFlowMessage: "Se creará una copia del flujo para que puedas editarlo.",
        createFlow: "Crear flujo",
        ariaLabel: "Crear flujo"
      },
      flowBuilder: {
        header: {
          title: "Editor de Flujos",
          save: "Guardar Flujo"
        },
        sidebar: {
          title: "Añadir Nodos"
        },
        quickActions: {
          text: "Texto",
          menu: "Menú",
          interval: "Intervalo",
          content: "Contenido"
        },
        nodeCategories: {
          basic: "Básicos",
          content: "Contenido",
          interaction: "Interacción",
          logic: "Lógica",
          system: "Sistema",
          integrations: "Integraciones"
        },
        nodes: {
          start: {
            name: "Inicio",
            description: "Punto inicial del flujo",
            nodeLabel: "Inicio del flujo"
          },
          content: {
            name: "Contenido",
            description: "Enviar texto, imagen, audio o video"
          },
          text: {
            name: "Texto",
            description: "Mensaje de texto simple"
          },
          menu: {
            name: "Menú",
            description: "Menú de opciones para el usuario"
          },
          input: {
            name: "Entrada",
            description: "Recolectar entrada del usuario"
          },
          interval: {
            name: "Intervalo",
            description: "Pausar ejecución por tiempo"
          },
          randomizer: {
            name: "Aleatorizador",
            description: "Elección aleatoria de caminos"
          },
          queues: {
            name: "Filas",
            description: "Gestionar filas de atención"
          },
          tags: {
            name: "Etiquetas",
            description: "Añadir etiquetas al contacto"
          },
          removeTag: {
            name: "Eliminar Etiqueta",
            description: "Eliminar etiquetas del contacto"
          },
          switchFlow: {
            name: "Cambiar Flujo",
            description: "Dirigir a otro flujo"
          },
          attendant: {
            name: "Asistente",
            description: "Transferir a asistente"
          },
          httpRequest: {
            name: "Solicitud HTTP",
            description: "Solicitud HTTP externa"
          },
          variable: {
            name: "Variable",
            description: "Definir variables globales"
          },
          gemini: {
            name: "Gemini",
            description: "Integración con Gemini"
          },
          openai: {
            name: "OpenAI",
            description: "Integración con OpenAI"
          }
        },
        addTextModal: {
          title: {
            add: "Añadir mensaje al flujo",
            edit: "Editar mensaje del flujo"
          },
          buttons: {
            add: "Añadir",
            save: "Guardar"
          },
          form: {
            message: "Mensaje"
          },
          validation: {
            messageRequired: "¡Escribe un mensaje!"
          }


        }
      },
      flowDefault: {
        title: "Flujo Predeterminado",
        save: "Guardar",
        welcomeFlow: "Flujo de Bienvenida",
        welcomeFlowDescription: "Este flujo se activa solo para nuevos contactos, personas que no tienes en tu lista de contactos y que enviaron un mensaje",
        defaultResponseFlow: "Flujo de Respuesta Predeterminada",
        defaultResponseFlowDescription: "La Respuesta Predeterminada se envía con cualquier carácter diferente de una palabra clave. ¡ATENCIÓN! Se activará si el servicio ya está cerrado y han pasado 6 horas desde su cierre.",
        chooseFlow: "Elegir un flujo",
        defaultFlowsUpdated: "Flujos predeterminados actualizados"
      },
      triggerFlowModal: {
        title: "Disparar Flujo",
        description: "Seleccione un flujo para ejecutar en este ticket. El ticket será alterado para estado 'chatbot' durante la ejecución.",
        selectFlow: "Elija un flujo",
        selectedFlow: "Flujo seleccionado",
        flowId: "ID del flujo",
        noFlows: "Ningún flujo activo encontrado",
        cancel: "Cancelar",
        trigger: "Disparar Flujo",
        triggering: "Disparando...",
        processingMessage: "Disparando flujo... Campo de mensaje temporalmente deshabilitado.",
        success: "¡Flujo disparado con éxito!",
        error: "Error al disparar flujo"
      },
      validation: {
        required: "Requerido",
        tooShort: "Muy corto",
        tooLong: "Muy largo",
        nameRequired: "El nombre es requerido",
        emailRequired: "El email es requerido",
        phoneRequired: "El teléfono es requerido",
        invalidEmail: "Email inválido",
        invalidPhone: "Teléfono inválido",
        minLength: "Debe tener al menos {{count}} caracteres",
        maxLength: "Debe tener máximo {{count}} caracteres",
        promptRequired: "Describe el entrenamiento para Inteligencia Artificial",
        invalidModel: "Modelo inválido",
        modelRequired: "Informa el modelo",
        minTokens: "Mínimo 10 tokens",
        maxTokens: "Máximo 4000 tokens",
        maxTokensGemini: "Máximo 8000 tokens",
        maxTokensRequired: "Informa el número máximo de tokens",
        minTemperature: "Mínimo 0",
        maxTemperature: "Máximo 2",
        temperatureRequired: "Informa la temperatura",
        apiKeyRequired: "Informa la API Key",
        minMessages: "Mínimo 1 mensaje",
        maxMessages: "Máximo 100 mensajes",
        maxMessagesRequired: "Informa el número máximo de mensajes",
        voiceRequired: "Informa el modo para Voz",
        voiceKeyRequired: "Voice Key es obligatoria para síntesis de voz",
        voiceRegionRequired: "Voice Region es obligatoria para síntesis de voz",
        invalidFlowMode: "Modo de flujo inválido",
        flowModeRequired: "Selecciona el modo de flujo",
        minInteractions: "Mínimo 1 interacción",
        maxInteractions: "Máximo 50 interacciones",
        minTimeout: "Mínimo 1 minuto",
        maxTimeout: "Máximo 60 minutos",
        keywordRequired: "Palabra-clave no puede estar vacía",
        minKeywordsRequired: "Se requiere al menos una palabra clave en modo temporal",
        objectiveRequired: "El objetivo es obligatorio cuando el autocompletado está activo"
      },
      flowBuilderSingleBlockModal: {
        labels: {
          title: "Añadir contenido al flujo",
          btn: "Añadir",
          editTitle: "Editar contenido",
          btnSave: "Guardar",
          addMenuTitle: "Añadir menú al flujo"
        },
        toasts: {
          emptyMessageFields: "¡Campos de mensaje vacíos!",
          invalidInterval: "¡El intervalo no puede ser 0 ni mayor que 120!",
          fileTooLarge2mb: "¡El archivo es demasiado grande! Máximo 2MB",
          fileTooLarge5mb: "¡El archivo es demasiado grande! Máximo 5MB",
          fileTooLarge10mb: "¡El archivo es demasiado grande! Máximo 10MB",
          fileTooLarge20mb: "¡El archivo es demasiado grande! Máximo 20MB",
          contentSuccessAdded: "¡Contenido añadido con éxito!",
          deleteEmptyCards: "Elimina las tarjetas vacías (Imagen, Audio y Video)"
        },
        misc: {
          browserNotSupportHTML5: "tu navegador no soporta HTML5",
          uploadingAndCreating: "Subiendo los archivos y creando el contenido..."
        },
        buttons: {
          text: "Texto",
          interval: "Intervalo",
          image: "Imagen",
          audio: "Audio",
          video: "Vídeo",
          document: "Documento",
          sendImage: "Enviar imagen",
          sendAudio: "Enviar audio",
          sendVideo: "Enviar vídeo",
          sendDocument: "Enviar Documento"
        },
        textFieldLabels: {
          message: "Mensaje",
          timeInSeconds: "Tiempo en segundos"
        },
        checkboxLabels: {
          sendAsRecordedAudio: "Enviar como audio grabado en el momento"
        },
        headings: {
          variables: "Variables",
          text: "Texto",
          interval: "Intervalo",
          image: "Imagen",
          audio: "Audio",
          video: "Vídeo",
          document: "Documento"
        }
      },
      flowBuilderMenuModal: {
        labels: {
          addMenuTitle: "Añadir menú al flujo",
          editMenuTitle: "Editar menú",
          btn: "Añadir",
          btnSave: "Guardar",
          menuExplanationMessage: "Mensaje de explicación del menú",
          addOption: "Añadir Opción",
          type: "Escriba",
          typeOption: "Escriba una opción"
        },
        radio: {
          number: "Número",
          list: "Lista",
          button: "Botón"
        }
      },
      flowBuilderInputModal: {
        labels: {
          title: "Añadir entrada al flujo",
          btn: "Añadir",
          editTitle: "Editar entrada del flujo",
          btnSave: "Guardar cambios",
          question: "Pregunta",
          typeQuestion: "Escriba la pregunta",
          availableVariables: "Variables disponibles (haga clic para insertar):",
          variableName: "Nombre de la variable",
          helperText: "La respuesta del usuario se almacenará en esta variable",
          howItWorks: "Cómo funciona"
        },
        tooltips: {
          question: "La pregunta que se enviará al usuario. Puede incluir variables usando ${nombreVariable}",
          variableName: "Nombre de la variable donde se almacenará la respuesta. No utilice espacios ni caracteres especiales."
        },
        placeholders: {
          question: "Ej: Hola ${nombre}, ¿cuál es tu edad?",
          variableName: "Ej: edad_cliente"
        },
        info: {
          howItWorks: "Este nodo enviará la pregunta al usuario y esperará una respuesta. Cuando el usuario responda, el valor se almacenará en la variable especificada y el flujo continuará hacia el siguiente nodo."
        }
      },
      flowBuilderIntervalModal: {
        title: {
          add: "Añadir un intervalo al flujo",
          edit: "Editar intervalo"
        },
        labels: {
          timeInSeconds: "Tiempo en segundos"
        },
        buttons: {
          add: "Añadir",
          edit: "Editar"
        },
        toasts: {
          addIntervalValue: "Añada el valor del intervalo",
          maxTimeReached: "Tiempo máximo alcanzado 120 segundos"
        }
      },
      flowBuilderRandomizerModal: {
        title: {
          add: "Añadir un aleatorizador al flujo",
          edit: "Editar aleatorizador"
        },
        buttons: {
          add: "Añadir",
          edit: "Editar"
        },
        toasts: {
          addIntervalValue: "Añada el valor del intervalo",
          maxTimeReached: "Tiempo máximo alcanzado 120 segundos"
        }
      },
      flowBuilderAddTicketModal: {
        title: {
          add: "Añadir una cola al flujo",
          edit: "Editar cola"
        },
        labels: {
          selectQueue: "Elija la cola a la que desea transferir",
          selectConnection: "Seleccione una Conexión"
        },
        buttons: {
          add: "Añadir",
          edit: "Editar"
        },
        toasts: {
          addQueue: "Añada una cola"
        }
      },
      flowBuilderAddTagModal: {
        title: {
          add: "Añadir una etiqueta al flujo",
          edit: "Editar etiqueta"
        },
        labels: {
          selectTag: "Elija una etiqueta",
          noTagSelected: "Ninguna etiqueta seleccionada"
        },
        buttons: {
          add: "Añadir",
          edit: "Editar"
        },
        toasts: {
          addTag: "Añada una etiqueta"
        }
      },
      flowBuilderRemoveTagModal: {
        title: {
          add: "Eliminar una etiqueta del flujo",
          edit: "Editar eliminación de etiqueta"
        },
        labels: {
          selectTag: "Elija una etiqueta para eliminar del contacto",
          selectTagToRemove: "Seleccione una etiqueta para eliminar",
          noTagSelected: "Ninguna etiqueta seleccionada",
          info: "Esta acción eliminará la etiqueta seleccionada del contacto cuando se ejecute el flujo"
        },
        buttons: {
          add: "Añadir Eliminación",
          edit: "Editar"
        },
        toasts: {
          selectTag: "Seleccione una etiqueta para eliminar"
        }
      },
      flowBuilderAddSwitchFlowModal: {
        title: {
          add: "Añadir Cambio de Flujo",
          edit: "Editar Cambio de Flujo"
        },
        buttons: {
          add: "Añadir",
          edit: "Editar"
        },
        placeholders: {
          chooseFlow: "Elija un flujo"
        }
      },
      flowBuilderAddAttendantModal: {
        title: {
          add: "Añadir un asistente al flujo",
          edit: "Editar asistente"
        },
        labels: {
          selectAttendant: "Elija un asistente",
          selectUser: "Seleccione un usuario"
        },
        buttons: {
          add: "Añadir",
          edit: "Editar"
        },
        toasts: {
          addAttendant: "Añada un asistente"
        }
      },
      flowBuilderHttpRequestNode: {
        title: "Solicitud HTTP",
        preset: {
          title: "Webhooks Preconfigurados",
          label: "Seleccionar preajuste",
          placeholder: "Elija una configuración lista...",
          using: "Usando preajuste:",
          remove: "Quitar Preset",
          system: "SISTEMA",
          toasts: {
            errorLoading: "Error al cargar los preajustes:",
            errorApplying: "Error al aplicar la configuración del preajuste"
          }
        },
        url: {
          label: "URL",
          labelPreset: "URL del Preset (Solo Lectura)",
          placeholder: "https://tu-dominio.com/webhook",
          helperText: "La URL es gestionada por el preset. Para cambiar, quita el preset."
        },
        method: "Método",
        buttons: {
          test: "Probar Petición",
          showAdvanced: "Mostrar avanzado",
          hideAdvanced: "Ocultar avanzado",
          addQueryParam: "Añadir Parámetro de Consulta",
          addHeader: "Añadir Cabecera",
          editBody: "Editar Cuerpo de la Petición",
          mapVariables: "Mapear Variables de Respuesta",
          hideVariables: "Ocultar Variables de Respuesta",
          addVariable: "Añadir Variable",
          close: "Cerrar"
        },
        response: {
          title: "Respuesta",
          fullResponse: "Ver Respuesta Completa",
          fullResponseTitle: "Respuesta Completa de la Petición"
        },
        advanced: {
          alert: "La configuración avanzada es gestionada por el preset y no puede ser editada.",
          timeout: "Timeout de la Petición (segundos)",
          queryParams: "Parámetros de Consulta",
          key: "Clave",
          value: "Valor",
          headers: "Cabeceras",
          headersPlaceholder: '{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer tu_token"\n}',
          body: "Cuerpo de la Petición (JSON)",
          editBody: "Editor Avanzado del Cuerpo"
        },
        mapping: {
          title: "Mapear datos de la respuesta a variables",
          path: "Ruta del dato en la respuesta",
          pathPlaceholder: "ej: data.id",
          variableName: "Nombre de la Variable",
          variablePlaceholder: "ej: idDelCliente"
        },
        misc: {
          requestError: "Error al realizar la petición",
          usefulTips: "Consejos útiles:",
          tip1: "La respuesta completa de la API se guarda automáticamente en la variable global <strong>apiResponse</strong>",
          tip2: "Puedes usar ${nombreDeLaVariable} en la URL y en el cuerpo de la petición para incluir valores de variables.",
          configSaved: "¡Configuración guardada!"
        },
        providers: {
          kiwify: "Kiwify"
        },
        presets: {
          subscription_late: {
            name: "Kiwify - Suscripción Atrasada",
            description: "Webhook para cuando una suscripción está atrasada en Kiwify"
          },
          subscription_canceled: {
            name: "Kiwify - Suscripción Cancelada",
            description: "Webhook para cuando una suscripción es cancelada en Kiwify"
          },
          subscription_renewed: {
            name: "Kiwify - Suscripción Renovada",
            description: "Webhook para cuando una suscripción es renovada en Kiwify"
          }
        }
      },
      flowBuilderVariableNode: {
        title: "Variable Global",
        labels: {
          name: "Nombre de la variable",
          value: "Valor",
          helperText: "Puede usar valores estáticos o referencias como ${otraVariable}"
        },
        buttons: {
          save: "Guardar variable"
        },
        toasts: {
          saved: "¡Guardado!",
          savedSuccess: "¡Variable guardada con éxito!"
        }
      },
      flowBuilderGeminiModal: {
        title: {
          add: "Añadir Gemini al flujo",
          edit: "Editar Gemini del flujo"
        },
        buttons: {
          add: "Añadir",
          save: "Guardar",
          cancel: "Cancelar"
        },
        basicSettings: {
          title: "Configuración Básica - Google Gemini",
          assistantName: "Nombre del Asistente",
          apiKey: "Clave de API de Google AI",
          model: "Modelo Gemini",
          systemPrompt: "Prompt del Sistema",
          promptPlaceholder: "Describe cómo debe comportarse la IA, qué información debe recopilar, cómo debe responder...",
          temperature: "Temperatura",
          temperatureHelper: "0 = conservador, 2 = creativo",
          maxTokens: "Máx. de Tokens",
          maxTokensHelper: "Tamaño máximo de la respuesta",
          maxMessages: "Máx. de Mensajes",
          maxMessagesHelper: "Historial de contexto"
        },
        flowBehavior: {
          title: "Comportamiento del Flujo",
          tooltip: "Configura cómo debe comportarse Gemini en el flujo",
          mode: "Modo de Funcionamiento",
          permanent: {
            title: "Permanente - Finalizar flujo aquí",
            description: "El usuario conversará con la IA hasta que solicite ser transferido o finalice la conversación"
          },
          temporary: {
            title: "Temporal - Vuelve al flujo después",
            description: "La IA realiza una tarea específica y luego regresa al flujo normal"
          }
        },
        temporarySettings: {
          title: "⏱️ Configuración del Modo Temporal",
          description: "Configura cuándo debe detenerse la IA y regresar al flujo",
          maxInteractions: "Máximo de Interacciones",
          maxInteractionsHelper: "Número máximo de mensajes antes de volver al flujo (0 = ilimitado)",
          timeout: "Tiempo de espera (minutos)",
          timeoutHelper: "Tiempo límite antes de volver al flujo (0 = sin límite)",
          continueKeywords: "Palabras Clave para Continuar el Flujo",
          keywordPlaceholder: "Escribe una palabra clave",
          addKeyword: "Añadir",
          keywordsHelper: "Cuando el usuario envíe una de estas palabras, el flujo continuará automáticamente",
          objective: "Objetivo de la IA",
          objectiveHelper: "Describe lo que la IA debe completar (ej: 'Recopilar nombre, correo electrónico y teléfono')",
          objectivePlaceholder: "Ej: Recopilar datos del cliente, Calificar interés, Diagnosticar problema...",
          autoComplete: {
            label: "Autocompletar al alcanzar el objetivo",
            description: "La IA analizará automáticamente si ha completado el objetivo y volverá al flujo"
          },
          queueId: "ID de la Cola (para transferencia)",
          queueIdHelper: "ID de la cola a la que se transferirá si el usuario solicita un agente (0 = no transferir)"
        },
        models: {
          "gemini-pro": "Gemini Pro",
          "gemini-1.5-pro": "Gemini 1.5 Pro",
          "gemini-1.5-flash": "Gemini 1.5 Flash",
          "gemini-2.0-flash": "Gemini 2.0 Flash",
          "gemini-2.0-pro": "Gemini 2.0 Pro"
        }
      },
      flowBuilderOpenAIModal: {
        title: {
          add: "Añadir OpenAI al flujo",
          edit: "Editar OpenAI del flujo"
        },
        buttons: {
          add: "Añadir",
          save: "Guardar",
          cancel: "Cancelar"
        },
        basicSettings: {
          title: "Configuración Básica - OpenAI",
          assistantName: "Nombre del Asistente",
          apiKey: "Clave de API de OpenAI",
          model: "Modelo OpenAI",
          systemPrompt: "Prompt del Sistema",
          promptPlaceholder: "Describe cómo debe comportarse la IA, qué información debe recopilar, cómo debe responder...",
          temperature: "Temperatura",
          temperatureHelper: "0 = conservador, 2 = creativo",
          maxTokens: "Máx. de Tokens",
          maxTokensHelper: "Tamaño máximo de la respuesta",
          maxMessages: "Máx. de Mensajes",
          maxMessagesHelper: "Historial de contexto"
        },
        voiceSettings: {
          title: "Configuración de Voz (Opcional)",
          responseType: "Tipo de Respuesta",
          voiceKey: "Clave de Voz (Azure)",
          voiceKeyPlaceholder: "Clave del Servicio de Voz de Azure",
          voiceRegion: "Región de Voz (Azure)",
          voiceRegionPlaceholder: "ej: brazilsouth",
          textOnly: "Solo Texto"
        },
        flowBehavior: {
          title: "Comportamiento del Flujo",
          tooltip: "Configura cómo debe comportarse OpenAI en el flujo",
          mode: "Modo de Funcionamiento",
          permanent: {
            title: "Permanente - Finalizar flujo aquí",
            description: "El usuario conversará con la IA hasta que solicite ser transferido o finalice la conversación"
          },
          temporary: {
            title: "Temporal - Vuelve al flujo después",
            description: "La IA realiza una tarea específica y luego regresa al flujo normal"
          }
        },
        temporarySettings: {
          title: "⏱️ Configuración del Modo Temporal",
          description: "Configura cuándo debe detenerse la IA y regresar al flujo",
          maxInteractions: "Máximo de Interacciones",
          maxInteractionsHelper: "Número máximo de mensajes antes de volver al flujo (0 = ilimitado)",
          timeout: "Tiempo de espera (minutos)",
          timeoutHelper: "Tiempo límite antes de volver al flujo (0 = sin límite)",
          continueKeywords: "Palabras Clave para Continuar el Flujo",
          keywordPlaceholder: "Escribe una palabra clave",
          addKeyword: "Añadir",
          keywordsHelper: "Cuando el usuario envíe una de estas palabras, el flujo continuará automáticamente",
          objective: "Objetivo de la IA",
          objectiveHelper: "Describe lo que la IA debe completar (ej: 'Recopilar nombre, correo electrónico y teléfono')",
          objectivePlaceholder: "Ej: Recopilar datos del cliente, Calificar interés, Diagnosticar problema...",
          autoComplete: {
            label: "Autocompletar al alcanzar el objetivo",
            description: "La IA analizará automáticamente si ha completado el objetivo y volverá al flujo"
          },
          queueId: "ID de la Cola (para transferencia)",
          queueIdHelper: "ID de la cola a la que se transferirá si el usuario solicita un agente (0 = no transferir)"
        },
        models: {
          "gpt-3.5-turbo": "GPT 3.5 Turbo",
          "gpt-3.5-turbo-1106": "GPT 3.5 Turbo (1106)",
          "gpt-3.5-turbo-16k": "GPT 3.5 Turbo 16K",
          "gpt-4": "GPT 4",
          "gpt-4-turbo": "GPT 4 Turbo",
          "gpt-4o": "GPT 4o",
          "gpt-4o-mini": "GPT 4o Mini"
        }
      },
      flowBuilderStartNode: {
        title: "Inicio del flujo",
        description: "¡Este bloque marca el inicio de tu flujo!"
      },
      plantao: {
        title: "Guardia",
        buttons: {
          add: "Añadir Guardia"
        },
        confirmationModal: {
          deleteTitle: "Eliminar personal de guardia",
          deleteMessage: "¿Realmente deseas eliminar a este personal de guardia?"
        },
        toasts: {
          deleted: "Guardia eliminada con éxito"
        },
        table: {
          id: "ID",
          onCall: "Personal de Guardia",
          phone: "Teléfono",
          schedules: "Horarios",
          actions: "Acciones"
        },
        modal: {
          title: {
            add: "Añadir Personal de Guardia",
            edit: "Editar Personal de Guardia"
          },
          form: {
            phone: "Teléfono",
            interval: "Intervalo",
            daysOfWeek: "Días de la semana",
            dayOfWeek: "Día de la Semana",
            startOnCall: "Inicio de la guardia",
            endOnCall: "Fin de la guardia",
            user: "Usuario",
            helperTextInterval: "Intervalo entre notificaciones (en minutos)"
          },
          validation: {
            user: "Informa el usuario",
            phone: "Informa el teléfono",
            interval: "Informa el intervalo entre notificaciones",
            startOnCall: "Informa el inicio de la guardia",
            endOnCall: "Informa el fin de la guardia",
            atLeastOneDay: "Al menos un día de la semana debe tener el horario de inicio y fin completado"
          },
          weekDays: {
            monday: "Lunes",
            tuesday: "Martes",
            wednesday: "Miércoles",
            thursday: "Jueves",
            friday: "Viernes",
            saturday: "Sábado",
            sunday: "Domingo"
          }
        }
      },
      financeiro: {
        title: "Financiero",
        subTitle: "Facturas",
        dueWarning: "Atención: Su suscripción ha vencido. Póngase en contacto con el soporte para regularizar su situación.",
        table: {
          details: "Detalles",
          users: "Usuarios",
          connections: "Conexiones",
          queues: "Colas",
          value: "Valor",
          dueDate: "Fecha Venc.",
          status: "Estado",
          action: "Acción"
        },
        status: {
          paid: "Pagado",
          expired: "Vencido",
          open: "Pendiente"
        },
        boolean: {
          yes: "Sí",
          no: "No"
        },
        buttons: {
          pay: "PAGAR",
          paid: "PAGADO"
        },
        checkout: {
          title: "¡Ya casi!",
          steps: {
            data: "Datos",
            customize: "Personalizar",
            review: "Revisar"
          },
          buttons: {
            back: "VOLVER",
            pay: "PAGAR",
            next: "SIGUIENTE"
          },
          toasts: {
            success: "¡Suscripción realizada con éxito! Esperando la confirmación del pago."
          },
          notFound: "No encontrado",
          form: {
            fullName: "Nombre completo*",
            address: "Dirección*",
            city: "Ciudad*",
            state: "Estado/Provincia*",
            document: "ID Fiscal (CPF/CNPJ)*",
            country: "País*"
          },
          errors: {
            fullName: "El nombre completo es obligatorio",
            address: "La dirección es obligatoria",
            city: "La ciudad es obligatoria",
            state: "El estado/provincia es obligatorio",
            document: "El ID fiscal es obligatorio",
            documentInvalid: "Formato de ID fiscal inválido",
            country: "El país es obligatorio"
          },
          payment: {
            planDescription: {
              users: "Usuarios",
              connections: "Conexión",
              queues: "Colas"
            },
            selectButton: "SELECCIONAR",
            priceSuffix: "/mes"
          },
          review: {
            title: "Resumen de la suscripción",
            planDetails: "Detalles del plan",
            users: "Usuarios:",
            connections: "Conexión:",
            queues: "Colas:",
            billing: "Facturación:",
            billingValue: "Mensual",
            paymentInfo: "Información de pago",
            email: "Correo electrónico:",
            name: "Nombre:",
            document: "ID Fiscal:",
            total: "Total:"
          },
          success: {
            total: "TOTAL",
            copied: "Copiado",
            copyButton: "Copiar código QR PIX",
            instructions: "Para finalizar, simplemente realice el pago escaneando o pegando el código Pix de arriba o elija Pagar con Tarjeta de Crédito a continuación.",
            payWithCard: "Pagar con Tarjeta de Crédito",
            payWithMercadoPago: "Pagar con MercadoPago",
            payWithAsaas: "Pagar con Asaas",
            toast: "¡Su licencia ha sido renovada hasta el {dueDate}!"
          }
        }
      }
    },
  },
};

export { messages };
