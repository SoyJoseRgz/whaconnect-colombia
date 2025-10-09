const messages = {
  en: {
    translations: {
      signup: {
        title: "Sign Up",
        toasts: {
          success: "User successfully created! Please log in!",
          disabled:
            "User registration is currently disabled. Please try again later.",
          fail: "Error creating user. Please check the provided data.",
        },
        form: {
          name: "Name",
          email: "Email",
          password: "Password",
          company: "Organization Name",
          phone: "WhatsApp (Area Code + Number)",
        },
        buttons: {
          submit: "Register",
          login: "Already have an account? Log in!",
        },
      },
      login: {
        title: "Login",
        welcome: "Welcome back",
        loginInstruction: "Enter your credentials to access your account",
        form: {
          email: "Email",
          password: "Password",
          button: "Access",
        },
        buttons: {
          submit: "Enter",
          register: "Don't have an account? Register!",
        },
      },
      companies: {
        title: "Register Company",
        form: {
          name: "Company Name",
          plan: "Plan",
          token: "Token",
          submit: "Register",
          success: "Company successfully created!",
        },
      },

      auth: {
        toasts: {
          success: "Login successful!",
        },
        dueDate: {
          expiration: "Your subscription expires in",
          days: "days!",
          day: "day!",
          expirationToday: "Your subscription expires today!",
        },
        token: "Token",
      },
      dashboard: {
        filters: "Filters",
        filter: "FILTER ",
        tabs: {
          indicators: "Indicators",
          assessments: "NPS",
          attendants: "Agents",
        },
        charts: {
          perDay: {
            title: "Attendances today: ",
          },
        },
        cards: {
          inAttendance: "In Attendance",
          waiting: "Waiting",
          activeAttendants: "Active Agents",
          finalized: "Finalized",
          newContacts: "New Contacts",
          totalReceivedMessages: "Received Messages",
          totalSentMessages: "Sent Messages",
          averageServiceTime: "Average Service Time",
          averageWaitingTime: "Average Waiting Time",
          status: "Status (Current)",
          activeTickets: "Active Tickets",
          passiveTickets: "Passive Tickets",
          groups: "Groups",
        },
        users: {
          name: "Name",
          numberAppointments: "Number of Attendances",
          statusNow: "Current Status",
          totalCallsUser: "Total Attendances per User",
          totalAttendances: "Total Attendances",
        },
        date: {
          initialDate: "Start Date",
          finalDate: "End Date",
        },
        licence: {
          available: "Available until",
        },
        assessments: {
          totalCalls: "Total Attendances",
          callsWaitRating: "Attendances Waiting for Rating",
          callsWithoutRating: "Attendances Without Rating",
          ratedCalls: "Rated Attendances",
          evaluationIndex: "Evaluation Index",
          score: "Score",
          promoters: "Promoters",
          neutral: "Neutral",
          detractors: "Detractors",
        },
      },
      reports: {
        title: "Research Reports",
        operator: "Operator",
        period: "Period",
        until: "Until",
        date: "Date",
        reportTitle: "Reports",
        calls: "Attendances",
        search: "Surveys",
        durationCalls: "Attendance Duration",
        grupoSessions: "Group Attendances",
        groupTicketsReports: {
          timezone: "America/Sao_Paulo",
          msgToast: "Generating compressed report, please wait.",
          errorToast: "Error generating report",
          back: "Back",
          groupServiceReport: "Group Attendance Report",
          loading: "Loading...",
          contact: "Contact",
          dateOpen: "Opening Date",
          dateLastUpdated: "Last Update Date",
          agent: "Agent",
          agentClosed: "Agent who closed",
          waitingAssistance: "Waiting for Service",
          process: "In Service",
        },
        researchReports: {
          response: "Response",
          active: "(Active)",
          inactive: "(Inactive)",
          quantity: "Quantity",
          percentage: "Percentage",
          title: "Research Reports",
          activeSearch: "Active Survey",
          inactiveSearch: "Inactive Survey",
        },
        ticketDurationDetail: {
          msgToast: "Generating compressed report, please wait.",
          title: "Attendance Duration Report",
          startService: "Start of Attendance",
          lastUpdated: "Last Updated",
          lastAgent: "Last Agent",
          durationFinished: "Duration After Closing",
        },
        ticketDuration: {
          title: "Attendance Duration Report",
          contact: "Contact",
          open: "Open",
          pending: "Pending",
          finished: "Finished",
          durationFinished: "Duration of Finished Attendances",
          durationAfterFinished: "Duration After Closing",
          actions: "Actions",
        },
        ticketReports: {
          msgToast: "Generating compressed report, please wait.",
          title: "Attendance Report",
        },
        exportExcel: {
          title: "Attendance Reports",
          startDate: "Start date",
          endDate: "End date",
          notInformed: "Not informed",
          columns: {
            id: "ID",
            connection: "Connection",
            contact: "Contact",
            user: "User",
            queue: "Queue",
            status: "Status",
            lastMessage: "Last Message",
            openDate: "Open Date",
            openTime: "Open Time",
            closeDate: "Close Date",
            closeTime: "Close Time",
            supportTime: "Support Time",
            nps: "NPS",
          },
        },
        pdf: {
          title: "List of Completed Attendances",
          exportTitle: "List of Completed Group Attendances",
        },
      },
      todo: {
        newTask: "New Task",
        add: "Add",
        task: "Tasks",
      },
      contactImportWpModal: {
        title: "Export Contacts to Excel",
        buttons: {
          downloadModel: "Download Excel template for import",
          closed: "Close",
          import: "Select Excel file to import Contacts",
        },
      },
      connections: {
        title: "Connections",
        waitConnection: "Please wait... Your connections will be restarted!",
        newConnection: "New Connection",
        restartConnections: "Restart Connections",
        callSupport: "Call Support",
        connectYourServiceChannelsToReceiveMessagesAndStartConversationsWithYourCustomers:
          " Connect your service channels to receive messages and start conversations with your customers.",
        client: "Client",
        connectedConnections: "Connected connections",
        disconnectedConnections: "Disconnected connections",
        totalConnections: "Total connections",
        total: "Total",
        connections: " Connections:",
        toasts: {
          deleted: "Connection successfully deleted!",
          closedimported:
            "Closing imported tickets, please wait a few moments.",
        },
        confirmationModal: {
          closedImportedTitle: "Close imported tickets",
          closedImportedMessage:
            "If you confirm, all imported tickets will be closed.",
          deleteTitle: "Delete",
          deleteMessage: "Are you sure? This action cannot be undone.",
          disconnectTitle: "Disconnect",
          disconnectMessage:
            "Are you sure? You will need to scan the QR Code again.",
        },
        buttons: {
          add: "Add Connection",
          disconnect: "Disconnect",
          tryAgain: "Try Again",
          qrcode: "QR CODE",
          newQr: "New QR CODE",
          closedImported: "Close all imported tickets",
          preparing: "Preparing messages for import",
          importing: "Importing WhatsApp Messages",
          processed: "Processed",
          in: "of",
          connecting: "Connecting",
        },
        typography: {
          processed: "Processed",
          in: "of",
          date: "Message Date",
        },
        toolTips: {
          disconnected: {
            title: "Failed to start WhatsApp session",
            content:
              "Make sure your phone is connected to the internet and try again, or request a new QR Code.",
          },
          qrcode: {
            title: "Waiting for QR Code scan",
            content:
              "Click the 'QR CODE' button and scan the QR Code with your phone to start the session.",
          },
          connected: {
            title: "Connection established!",
          },
          timeout: {
            title: "Connection with the phone was lost",
            content:
              "Make sure your phone is connected to the internet and WhatsApp is open, or click 'Disconnect' to get a new QR Code.",
          },
        },
        table: {
          name: "Name",
          status: "Status",
          lastUpdate: "Last Update",
          default: "Default",
          actions: "Actions",
          session: "Session",
          number: "WhatsApp Number",
          color: "Color",
        },
      },
      showTicketOpenModal: {
        title: {
          header: "Existing Attendance",
        },
        form: {
          message: "This contact is already being attended to:",
          user: "Agent",
          queue: "Queue",
          messageWait:
            "This contact is already waiting for service. Check the Waiting tab!",
        },
      },
      showTicketLogModal: {
        title: {
          header: "Logs",
        },
        options: {
          create: "Ticket created.",
          chatBot: "ChatBot started.",
          queue: " - Queue assigned.",
          open: " started the service.",
          access: "accessed the ticket.",
          transfered: "transferred the ticket.",
          receivedTransfer: "received the transferred ticket.",
          pending: "returned to the queue.",
          closed: "closed the ticket.",
          reopen: "reopened the ticket.",
          redirect: "- redirected",
          clientClosed: "Client closed the ticket.",
        },
      },
      whatsappModal: {
        title: {
          add: "Add Connection",
          edit: "Edit Connection",
        },
        tabs: {
          general: "General",
          messages: "Messages",
          assessments: "NPS",
          integrations: "Integrations",
          schedules: "Business Hours",
        },
        form: {
          importOldMessagesEnable: "Import messages from device",
          importOldMessages: "Start date of import",
          importRecentMessages: "End date of import",
          importOldMessagesGroups: "Import group messages",
          closedTicketsPostImported: "Close tickets after import",
          name: "Name",
          queueRedirection: "Queue Redirection",
          queueRedirectionDesc:
            "Select a queue for contacts without an assigned queue",
          default: "Default",
          group: "Allow groups",
          timeSendQueue: "Time in minutes to redirect to queue",
          importAlert:
            "WARNING: Saving will terminate your connection. You will need to scan the QR Code again to import messages.",
          groupAsTicket: "Treat groups as ticket",
          timeCreateNewTicket: "Create a new ticket after X minutes",
          maxUseBotQueues: "Send bot X times",
          maxUseInactiveTime: "Send inactivity flow X times",
          timeUseBotQueues: "Send bot in X minutes",
          timeToReturnQueue: "Time to return to queue in minutes",
          timeAwaitActiveFlow: "Time to wait for active flow",
          expiresTicket: "Close open chats after X minutes",
          expiresTicketNPS: "Close chats awaiting evaluation after X minutes",
          maxUseBotQueuesNPS: "Max times evaluation is sent",
          closeLastMessageOptions1: "From agent/client",
          closeLastMessageOptions2: "From agent only",
          outOfHoursMessage: "Out-of-hours message",
          greetingMessage: "Greeting message",
          complationMessage: "Completion message",
          lgpdLinkPrivacy: "Privacy policy link",
          lgpdMessage: "LGPD greeting message",
          lgpdDeletedMessages: "Obfuscate messages deleted by contact",
          lgpdSendMessage: "Always request contact confirmation",
          ratingMessage: "Evaluation message - Scale must be from 0 to 10",
          token: "Token for external integration",
          sendIdQueue: "Queue",
          inactiveMessage: "Inactivity warning message",
          timeInactiveMessage: "Time in minutes to send inactivity warning",
          flowInactiveTime: "Time in minutes to send inactivity flow",
          whenExpiresTicket: "Close chats when the last message is",
          expiresInactiveMessage: "Inactivity closure message",
          prompt: "Prompt",
          collectiveVacationEnd: "End date",
          collectiveVacationStart: "Start date",
          collectiveVacationMessage: "Collective vacation message",
          queueIdImportMessages: "Queue for message import",
          isOficial: "Official",
          phone_number_id: "Phone Number ID",
          waba_id: "WABA ID",
          send_token: "Sending token",
          business_id: "Business ID",
          phone_number: "Phone number",
          triggerIntegrationOnClose: "Trigger Integration on Ticket Close",
          enableIntegration: "Habilited Integration",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
        menuItem: {
          enabled: "Enabled",
          disabled: "Disabled",
          minutes: "minutes",
        },
        success: "Connection saved successfully.",
        errorSendQueue:
          "You set a redirection time but no queue was selected. Both fields are required.",
        errorExpiresNPS: "A timeout must be set for NPS evaluation.",
        errorRatingMessage: "An evaluation message must be provided for NPS.",
      },
      qrCode: {
        message: "Scan the QR Code to start the session",
      },
      contacts: {
        title: "Contacts",
        toasts: {
          deleted: "Contact successfully deleted!",
        },
        searchPlaceholder: "Search...",
        conversationFlows: "Conversation Flows",
        addFlow: "Add Flow",
        editFlow: "Edit Flow ",
        confirmationModal: {
          deleteTitle: "Delete",
          importTitlte: "Import Contacts",
          exportContact: "Export Contacts",
          deleteMessage:
            "Are you sure you want to delete this contact? All related attendances will be lost.",
          blockContact: "Are you sure you want to block this contact?",
          unblockContact: "Are you sure you want to unblock this contact?",
          importMessage: "Do you want to import all contacts from the phone?",
          importChat: "Import Chats",
          wantImport: "Do you want to import all chats from the phone?",
        },
        buttons: {
          import: "Import Contacts",
          add: "Add Contact",
          export: "Export Contact",
          downloadModel: "Download Model",
          close: "Close",
        },
        table: {
          name: "Name",
          whatsapp: "Connection",
          email: "Email",
          actions: "Actions",
          lastMessage: "Last Message",
        },
        table: {
          name: "Name",
          whatsapp: "Connection",
          email: "Email",
          actions: "Actions",
          lastMessage: "Last Message",
          status: "Status",
          unassigned: "Unassigned",
          userNotFound: "User not found"
        },
        buttons: {
          add: "Add Contact",
          deleteAll: "Delete All Contacts"
        },
        menu: {
          importYourPhone: "Import from default device",
          importToExcel: "Import/Export from Excel",
          importexport: "IMPORT / EXPORT ",
        },
      },
      forwardMessage: {
        text: "Forwarded",
      },
      forwardMessageModal: {
        title: "Forward Message",
        buttons: {
          ok: "Forward",
        },
      },
      dialog: {
        imageTitle: "Profile Picture - {contactName}",
        imageNotAvailable: "Image not available"
      },
      tooltips: {
        deleteAll: "Delete all contacts",
        deleteSelected: "Delete selected contacts",
        cancelSelection: "Cancel selection"
      },
      toolbar: {
        selectedAll: "{count} contact(s) selected (ALL CONTACTS)"
      },
      title: {
        selectedAll: "- {count} selected (ALL)"
      },
      promptModal: {
        form: {
          name: "Name",
          prompt: "Prompt",
          voice: "Voice",
          max_tokens: "Maximum Tokens in Response",
          temperature: "Temperature",
          apikey: "API Key",
          max_messages: "Maximum Messages in History",
          voiceKey: "Voice API Key",
          voiceRegion: "Voice Region",
        },
        success: "Prompt saved successfully!",
        title: {
          add: "Add Prompt",
          edit: "Edit Prompt",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Name",
          queue: "Sector/Queue",
          max_tokens: "Max Tokens in Response",
          actions: "Actions",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "Are you sure? This action cannot be undone!",
        },
        buttons: {
          add: "Add Prompt",
        },
      },
      contactModal: {
        title: {
          add: "Add Contact",
          edit: "Edit Contact",
        },
        form: {
          mainInfo: "Contact Data",
          extraInfo: "Additional Information",
			birthDate: "Birth Date",
			birthDateHelper: "Birth date for automatic birthday messages",
          name: "Name",
          number: "WhatsApp Number",
          email: "Email",
          extraName: "Field Name",
          extraValue: "Value",
          chatBotContact: "Disable Chatbot",
          termsLGDP: "LGPD Terms accepted on:",
          whatsapp: "Origin Connection:",
        },
        buttons: {
          addExtraInfo: "Add Information",
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
        success: "Contact saved successfully.",
        walletLinked: "Contact linked to your wallet successfully!",
        walletError: "User has no associated queues",
        saveFirst: "Contact must be saved first",
      },
	contactImport: {
		title: "Import contacts from file",
		validate: "Validate contacts on WhatsApp",
		importing: "Importing... Please wait",
		buttons: {
			import: "Import contacts",
			cancel: "Cancel",
			importMore: "Import more contacts",
			tryAgain: "Try again",
			back: "Back"
		},
		table: {
			name: "Name",
			number: "Number",
			email: "Email",
			tags: "Tags",
			wallet: "Wallet"
		},
		results: {
			title: "Import results",
			created: "{{count}} contacts created successfully",
			ignored: "{{count}} contacts ignored (invalid number or not marked for update)"
		},
		processing: "Processing file...",
		invalidFile: {
			title: "Invalid file!",
			message: "The file you tried to import is not valid. Please try again with a file in the correct format."
		},
		dropzone: {
			title: "Click or drag an Excel file",
			formats: "* Accepted formats: xls, xlsx, csv, txt",
			instructions: "To import contacts, you must have at least the name and phone number columns."
		},
		errors: {
			noNumber: "The contact number field was not selected",
			noName: "The contact name field was not selected",
			noContact: "No contact selected"
		},
		toasts: {
			success: "Import successful! {{count}} contacts imported.",
			warn: "Import complete: {{imported}} contacts imported and {{ignored}} ignored.",
			fail: "Import failed. No contacts were imported."
		}
	},
	contactImportWpModal: {
		status: {
			completed: "Import completed successfully",
			inProgress: "Import in progress {{current}} of {{total}}, do not leave this screen until the import is complete"
		},
		sheetName: "Contacts"
	},
	contactNotes: {
		toasts: {
			addSuccess: "Note added successfully!",
			deleteSuccess: "Note deleted successfully!"
		},
		confirmationModal: {
			deleteTitle: "Delete Record",
			deleteMessage: "Do you really want to delete this record?"
		},
		buttons: {
			cancel: "Cancel",
			save: "Save",
			close: "Close"
		},
		editModal: {
			title: "Edit Note",
			label: "Edit Note"
		}
	},
	contactDeleteConfirm: {
		expected: {
			all: "DELETE ALL",
			selected: "DELETE SELECTED"
		},
		error: "Type exactly: {{text}}",
		title: {
			all: "Delete ALL {{count}} contacts?",
			selected: "Delete {{count}} selected contacts?"
		},
		alert: {
			all: "⚠️ WARNING: This action will permanently delete ALL {{count}} contacts from the company!",
			selected: "This action will permanently delete {{count}} selected contacts."
		},
		message: {
			all: "This operation cannot be undone. All contacts, their message histories, tags, and relationships will be permanently lost.",
			selected: "The selected contacts and their related data will be permanently deleted."
		},
		instruction: "To confirm, type exactly: <strong>{{text}}</strong>",
		label: "Confirmation",
		buttons: {
			cancel: "Cancel",
			confirmAll: "Delete All",
			confirmSelected: "Delete Selected"
		}
	},
      wallets: {
        title: "Contact Wallets",
        searchPlaceholder: "Search contacts...",
        filterByUser: "Filter by User",
        allUsers: "All users",
        contact: "Contact",
        user: "User",
        queue: "Queue",
        phone: "Phone",
        email: "Email",
        actions: "Actions",
        editWallet: "Edit Wallet",
        selectUser: "Select User",
        selectQueue: "Select Queue",
        selectUserAndQueue: "Select a user and queue",
        cancel: "Cancel",
        save: "Save",
        confirmDeleteTitle: "Confirm Deletion",
        confirmDeleteMessage:
          "Are you sure you want to remove this contact from the wallet?",
        deleteSuccess: "Contact removed from wallet successfully!",
        updateSuccess: "Wallet updated successfully!",
      },
      queueModal: {
        title: {
          queueData: "Queue Data",
          text: "Business Hours",
          add: "Add Queue",
          edit: "Edit Queue",
          confirmationDelete:
            "Are you sure? All integration options will be deleted.",
        },
        form: {
          name: "Name",
          color: "Color",
          orderQueue: "Queue Order (Bot)",
          rotate: "Rotation",
          timeRotate: "Rotation Time",
          typeRandomMode: "Rotation Type",
          greetingMessage: "Greeting Message",
          complationMessage: "Completion Message",
          outOfHoursMessage: "Out-of-Hours Message",
          token: "Token",
          integrationId: "Integration",
          fileListId: "File List",
          closeTicket: "Close Ticket",
          queueType: "Menu Type",
          message: "Return Message",
          queue: "Transfer Queue",
          integration: "Integration",
          file: "File List",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
        bot: {
          title: "Options",
          toolTipTitle: "Add options to build a chatbot",
          toolTip:
            "If there is only one option, it will be automatically chosen, and the bot will respond with the message and proceed",
          selectOption: "Select an Option",
          text: "Text",
          attendent: "Agent",
          queue: "Queue",
          integration: "Integration",
          file: "File",
          toolTipMessageTitle:
            "Message is required to proceed to the next level",
          toolTipMessageContent:
            "Message is required to proceed to the next level",
          selectUser: "Select a User",
          selectQueue: "Select a Queue",
          selectIntegration: "Select an Integration",
          addOptions: "Add Options",
        },
        serviceHours: {
          dayWeek: "Day of the Week",
          startTimeA: "Start Time - Shift A",
          endTimeA: "End Time - Shift A",
          startTimeB: "Start Time - Shift B",
          endTimeB: "End Time - Shift B",
          monday: "Monday",
          tuesday: "Tuesday",
          wednesday: "Wednesday",
          thursday: "Thursday",
          friday: "Friday",
          saturday: "Saturday",
          sunday: "Sunday",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Add Project",
          edit: "Edit Project",
        },
        form: {
          id: "ID",
          type: "Type",
          name: "Name",
          projectName: "Project Name",
          language: "Language",
          jsonContent: "JSON Content",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Expiration time in minutes",
          typebotKeywordFinish: "Keyword to finish the ticket",
          typebotKeywordRestart: "Keyword to restart the flow",
          typebotRestartMessage: "Message when restarting the conversation",
          typebotUnknownMessage: "Invalid option message",
          typebotDelayMessage: "Delay (ms) between messages",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
          test: "Test Bot",
        },
        messages: {
          testSuccess: "Integration tested successfully!",
          addSuccess: "Integration added successfully.",
          editSuccess: "Integration edited successfully.",
        },
      },
      userModal: {
        warning: "To import messages, you must scan the QR Code again!",
        title: {
          add: "Add User",
          edit: "Edit User",
          updateImage: "Update Image",
          removeImage: "Delete Image",
        },
        form: {
          name: "Name",
          email: "Email",
          password: "Password",
          farewellMessage: "Farewell Message",
          profile: "Profile",
          startWork: "Work Start Time",
          endWork: "Work End Time",
          whatsapp: "Default Connection",
          allTicketEnable: "Enabled",
          allTicketDisable: "Disabled",
          allTicket: "View Tickets Without Queue",
          allowGroup: "Allow Groups",
          defaultMenuOpen: "Open",
          defaultMenuClosed: "Closed",
          defaultMenu: "Default Menu",
          defaultTheme: "Default Theme",
          defaultThemeDark: "Dark",
          defaultThemeLight: "Light",
          allHistoric: "View Conversations from Other Queues",
          allHistoricEnabled: "Enabled",
          allHistoricDisabled: "Disabled",
          allUserChat: "View Other Users' Conversations",
          userClosePendingTicket: "Allow Closing Pending Tickets",
          showDashboard: "View Dashboard",
          allowRealTime: "View Real-Time Panel",
          allowConnections: "Allow Actions on Connections",
          showContacts: "View Contacts",
          showCampaign: "View Campaigns",
        },
        tabs: {
          general: "General",
          permissions: "Permissions",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
          addImage: "Add Image",
          editImage: "Edit Image",
        },
        success: "User saved successfully.",
      },
      companyModal: {
        title: {
          add: "Add Company",
          edit: "Edit Company",
        },
        form: {
          name: "Name",
          email: "Email",
          passwordDefault: "Password",
          numberAttendants: "Users",
          numberConections: "Connections",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
        success: "Company saved successfully.",
      },
      scheduleModal: {
        title: {
          add: "New Schedule",
          edit: "Edit Schedule",
          message: "Message"
        },
        form: {
          body: "Message",
          contact: "Contact",
          sendAt: "Scheduled Date"
        },
        buttons: {
          addSchedule: "Add schedule",
          cancel: "Cancel",
          okAdd: "Add"
        }
      },
      scheduleModal: {
        title: {
          add: "New Schedule",
          edit: "Edit Schedule",
          message: "Message",
        },
        form: {
          body: "Message",
          contact: "Contact",
          sendAt: "Scheduled Date",
          sentAt: "Sent Date",
          assinar: "Send Signature",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
          addSchedule: "Add Schedule",
        },
        success: "Schedule saved successfully.",
      },
      tagModal: {
        title: {
          add: "New Tag",
          edit: "Edit Tag",
          addKanban: "New Lane",
          editKanban: "Edit Lane",
          backToKanban: "BACK TO KANBAN",
        },
        form: {
          name: "Name",
          color: "Color",
          timeLane: "Time in minutes to redirect to lane",
          nextLaneId: "Lane",
          greetingMessageLane: "Lane Greeting Message",
          rollbackLaneId: "Return to Lane after resuming attendance",
        },
        buttons: {
          okAdd: "Add",
          okEdit: "Save",
          cancel: "Cancel",
        },
        success: "Tag saved successfully.",
        successKanban: "Lane saved successfully.",
      },
      chatModal: {
        form: {
          name: "Name",
          description: "Description",
          groupDescription: "Group Description",
          users: "Users",
        },
      },
      fileModal: {
        title: {
          add: "Add File List",
          edit: "Edit File List",
        },
        buttons: {
          okAdd: "Save",
          okEdit: "Edit",
          cancel: "Cancel",
          fileOptions: "Add File",
        },
        form: {
          name: "File List Name",
          message: "List Details",
          fileOptions: "File List",
          extraName: "Message to send with file",
          extraValue: "Option Value",
        },
        success: "File list saved successfully!",
      },
      chat: {
        noTicketMessage: "Select a ticket to start chatting.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "⬇️ DRAG AND DROP FILES BELOW ⬇️",
          titleFileList: "File List",
        },
      },
      chatInternal: {
        new: "New group",
        modal: {
          conversation: "Conversation",
          title: "Title",
          filterUsers: "Filter by Users",
          cancel: "Close",
          save: "Save",
        },
        modalDelete: {
          title: "Delete Conversation",
          message: "This action cannot be undone, confirm?",
        },
      },
      ticketsManager: {
        questionCloseTicket: "DO YOU WANT TO CLOSE ALL TICKETS?",
        yes: "YES",
        not: "NO",
        buttons: {
          newTicket: "New",
          resolveAll: "Resolve All",
          close: "Close",
          new: "New",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Queues",
      },
      tickets: {
        inbox: {
          closedAllTickets: "Close all tickets?",
          closedAll: "Close All",
          newTicket: "New Ticket",
          yes: "YES",
          no: "NO",
          open: "Open",
          resolverd: "Resolved",
        },
        toasts: {
          deleted: "The attendance you were handling has been deleted.",
        },
        notification: {
          message: "Message from",
        },
        tabs: {
          open: { title: "Open" },
          closed: { title: "Resolved" },
          search: { title: "Search" },
        },
        search: {
          placeholder: "Search attendance and messages",
          filterConections: "Filter by Connection",
          filterConectionsOptions: {
            open: "Open",
            closed: "Closed",
            pending: "Pending",
          },
          filterUsers: "Filter by Users",
          filterContacts: "Filter by Contacts",
          ticketsPerPage: "Tickets per page",
        },
        buttons: {
          showAll: "All",
          returnQueue: "Return to Queue",
          scredule: "Schedule",
          deleteTicket: "Delete Ticket",
        },
        closedTicket: {
          closedMessage: "Close Ticket With Farewell Message",
          closedNotMessage: "Close Ticket Without Farewell Message",
        },
      },
      transferTicketModal: {
        title: "Transfer Ticket",
        fieldLabel: "Type to search for users",
        fieldQueueLabel: "Transfer to Queue",
        fieldQueuePlaceholder: "Select a queue",
        fieldWhatsapp: "Select a WhatsApp",
        noOptions: "No users found with that name",
        msgTransfer: "Notes - internal message, will not be sent to the client",
        buttons: {
          ok: "Transfer",
          cancel: "Cancel",
        },
      },
      chatInternal: {
        new: "New group",
        modal: {
          conversation: "Conversation",
          title: "Title",
          filterUsers: "Filter by Users",
          cancel: "Close",
          save: "Save",
        },
        modalDelete: {
          title: "Delete Conversation",
          message: "This action cannot be undone, confirm?",
        },
      },
      ticketsList: {
        called: "Call",
        today: "Today",
        missedCall: "Missed voice/video call at",
        pendingHeader: "Waiting",
        assignedHeader: "In Attendance",
        groupingHeader: "Groups",
        noTicketsTitle: "Nothing here!",
        noTicketsMessage:
          "No attendances found with this status or search term",
        noQueue: "No Queue",
        buttons: {
          accept: "Accept",
          cancel: "Cancel",
          start: "Start",
          closed: "Close",
          reopen: "Reopen",
          transfer: "Transfer",
          ignore: "Ignore",
          exportAsPDF: "Export to PDF",
          kanbanActions: "Kanban Options",
        },
        acceptModal: {
          title: "Accept Chat",
          queue: "Select Sector",
        },
      },
      newTicketModal: {
        title: "Create Ticket",
        fieldLabel: "Type to search for a contact",
        add: "Add",
        buttons: {
          ok: "Save",
          cancel: "Cancel",
        },
      },
      SendContactModal: {
        title: "Send Contact",
        fieldLabel: "Type to search for contact",
        add: "Add",
        buttons: {
          ok: "Send",
          cancel: "Cancel",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Connections",
          chatsTempoReal: "Real-Time Panel",
          tickets: "Attendances",
          quickMessages: "Quick Replies",
          contacts: "Contacts",
          wallets: "Wallets",
          queues: "Queues & Chatbot",
          tags: "Tags",
          administration: "Administration",
          companies: "Companies",
          users: "Users",
          settings: "Settings",
          files: "File Lists",
          helps: "Help Center",
          messagesAPI: "API",
          schedules: "Schedules",
          campaigns: "Campaigns",
          annoucements: "Announcements",
          chats: "Internal Chat",
          financeiro: "Financial",
          queueIntegration: "Integrations",
          version: "Version",
          kanban: "Kanban",
          prompts: "Talk.AI",
          allConnections: "Manage Connections",
          reports: "Reports",
          management: "Management",
        },
        appBar: {
          user: {
            profile: "Profile",
            logout: "Logout",
            message: "Hello",
            messageEnd: "welcome to",
            active: "Active until",
            goodMorning: "Hi,",
            myName: "my name is",
            continuity: "and I will continue your service.",
            virtualAssistant: "Virtual Assistant",
            token: "Invalid token, please contact the platform administrator.",
          },
          message: {
            location: "Location",
            contact: "Contact",
          },
          notRegister: "No records found",
          refresh: "Refresh",
        },
      },
      languages: {
        undefined: "Language",
        "pt-BR": "Portuguese",
        es: "Spanish",
        en: "English",
        tr: "Turkish",
      },
      messagesAPI: {
        title: "API",
        toSend: "TO SEND",
        textMessage: {
          number: "Number",
          body: "Message",
          token: "Registered Token",
          userId: "User/Agent ID",
          queueId: "Queue ID",
        },
        mediaMessage: {
          number: "Number",
          body: "File Name",
          media: "File",
          token: "Registered Token",
        },
        API: {
          title: "Message Sending Documentation",
          methods: {
            title: "Sending Methods",
            messagesText: "Text Messages",
            messagesMidia: "Media Messages",
          },
          instructions: {
            title: "Instructions",
            comments: "Important Notes",
            comments1:
              "Before sending messages, it is necessary to register the token linked to the connection that will send the messages. <br />To register, access the 'Connections' menu, click the edit button on the connection, and insert the token in the appropriate field.",
            comments2:
              "The sending number must not have a mask or special characters and must be composed of:",
            codeCountry: "Country Code",
            code: "Area Code (DDD)",
            number: "Phone Number",
          },
          text: {
            title: "1. Text Messages",
            instructions:
              "Below is the list of required information to send text messages:",
          },
          media: {
            title: "2. Media Messages",
            instructions:
              "Below is the list of required information to send media messages:",
          },
        },
      },
      notifications: {
        noTickets: "No notifications.",
      },
      quickMessages: {
        title: "Quick Replies",
        searchPlaceholder: "Search...",
        noAttachment: "No attachment",
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "This action is irreversible! Do you want to proceed?",
        },
        buttons: {
          add: "Add",
          attach: "Attach File",
          cancel: "Cancel",
          edit: "Edit",
        },
        toasts: {
          success: "Shortcut added successfully!",
          deleted: "Shortcut removed successfully!",
        },
        dialog: {
          title: "Quick Message",
          shortcode: "Shortcut",
          message: "Response",
          save: "Save",
          cancel: "Cancel",
          general: "General",
          geral: "Allow Editing",
          add: "Add",
          edit: "Edit",
          visao: "Allow Viewing",
          form: {
            shortcode: {
              required: "Required"
            }
          },
          tabs: {
            general: "General",
            official: "Official"
          },
          media: {
            title: "Attach Media",
            newFile: "New File",
            newAudio: "New Audio",
            newAudioRecorded: "New recorded audio",
            buttons: {
              attach: "Attach File",
              record: "Record Audio",
              cancelEdit: "Cancel Edit"
            },
            tooltips: {
              edit: "Edit media",
              remove: "Remove media"
            },
            preview: {
              audioNotSupported: "Your browser does not support the audio element.",
              videoNotSupported: "Your browser does not support the video element."
            },
            replace: "Choose a new media to replace:",
            choose: "Choose an option to attach media:"
          },
          components: {
            type: "Type",
            value: "Value"
          },
          status: "Status",
          language: "Language",
          category: "Category",
          metaID: "Meta ID",
        },
        table: {
          shortcode: "Shortcut",
          message: "Message",
          actions: "Actions",
          mediaName: "Media",
          status: "Status",
        },
      },
      contactLists: {
        title: "Contact Lists",
        table: {
          name: "Name",
          contacts: "Contacts",
          actions: "Actions",
        },
        buttons: {
          add: "New List",
        },
        dialog: {
          name: "Name",
          company: "Company",
          okEdit: "Edit",
          okAdd: "Add",
          add: "Add",
          edit: "Edit",
          cancel: "Cancel",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "This action cannot be undone.",
        },
        toasts: {
          deleted: "Record deleted successfully.",
        },
      },
      contactListItems: {
        title: "Contacts",
        searchPlaceholder: "Search",
        buttons: {
          add: "New",
          lists: "Lists",
          import: "Import",
        },
        dialog: {
          name: "Name",
          number: "Number",
          whatsapp: "WhatsApp",
          email: "Email",
          okEdit: "Edit",
          okAdd: "Add",
          add: "Add",
          edit: "Edit",
          cancel: "Cancel",
        },
        table: {
          name: "Name",
          number: "Number",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Actions",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "This action cannot be undone.",
          importMessage:
            "Do you want to import the contacts from this spreadsheet?",
          importTitlte: "Import",
        },
        toasts: {
          deleted: "Record deleted successfully.",
        },
      },
      kanban: {
        title: "Kanban",
        searchPlaceholder: "Search",
        subMenus: {
          list: "Board",
          tags: "Lanes",
        },
      },
      kanban: {
        title: "Kanban",
        sortBy: "Sort by",
        sortOptions: {
          ticketNumber: "Ticket Number",
          lastMessage: "Last Message",
          valueDesc: "Value (highest to lowest)"
        },
        startDate: "Start date",
        endDate: "End date",
        search: "Search",
        addColumn: "+ Add columns",
        total: "Total",
        value: "Value",
        assignValue: "Assign Value",
        removeValue: "Remove Value",
        viewTicket: "View Ticket",
        editOpportunityValue: "Edit Opportunity Value",
        assignOpportunityValue: "Assign Opportunity Value",
        valueLabel: "Value",
        cancel: "Cancel",
        save: "Save",
        ticketNumber: "Ticket #"
      },
      campaigns: {
        title: "Campaigns",
        details: "Details",
        searchPlaceholder: "Search",
        subMenus: {
          list: "Listing",
          listContacts: "Contact List",
          settings: "Settings",
        },
        settings: {
          randomInterval: "Random Sending Interval",
          noBreak: "No Interval",
          intervalGapAfter: "Longer interval after",
          undefined: "Undefined",
          messages: "messages",
          laggerTriggerRange: "Larger Sending Interval",
          addVar: "Add Variable",
          save: "Save",
          close: "Close",
          add: "Add",
          shortcut: "Shortcut",
          content: "Content",
        },
        buttons: {
          add: "New Campaign",
          contactLists: "Contact Lists",
        },
        table: {
          name: "Name",
          whatsapp: "Connection",
          contactList: "Contact List",
          option: "None",
          disabled: "Disabled",
          enabled: "Enabled",
          status: "Status",
          scheduledAt: "Scheduled At",
          completedAt: "Completed",
          confirmation: "Confirmation",
          actions: "Actions",
          details: "Details",
          recurrence: "Recurrence",
          nextExecution: "Next Execution",
        },
        filters: {
          status: "Filter by Status",
          recurrence: "Filter by Recurrence",
          all: "All",
          allStatuses: "All Statuses",
          allRecurrences: "All Recurrences",
          recurring: "Recurring",
          unique: "Unique",
          inactive: "Inactive",
          scheduled: "Scheduled",
          inProgress: "In Progress",
          cancelled: "Cancelled",
          completed: "Completed",
        },
        dialog: {
          new: "New Campaign",
          update: "Edit Campaign",
          readonly: "View Only",
          help: "Use variables like {name}, {number}, {email}, or define custom variables.",
          tabs: {
            message1: "Msg. 1",
            message2: "Msg. 2",
            message3: "Msg. 3",
            message4: "Msg. 4",
            message5: "Msg. 5",
            confirmationMessage1: "Confirmation Message 1",
            confirmationMessage2: "Confirmation Message 2",
            confirmationMessage3: "Confirmation Message 3",
            confirmationMessage4: "Confirmation Message 4",
            confirmationMessage5: "Confirmation Message 5",
            messagePlaceholder: "Write your message here...",
            whatsapp: "Connection",
            scheduledAt: "Scheduled At",
            confirmation: "Confirmation",
            messagePlaceholder: "Write your message here...",
            variables: "Variables",
          },
          help: "Use variables like {name}, {number}, {email}, or define custom variables.",
          form: {
            name: "Name",
            message1: "Message 1",
            message2: "Message 2",
            message3: "Message 3",
            message4: "Message 4",
            message5: "Message 5",
            confirmationMessage1: "Confirmation Message 1",
            confirmationMessage2: "Confirmation Message 2",
            confirmationMessage3: "Confirmation Message 3",
            confirmationMessage4: "Confirmation Message 4",
            confirmationMessage5: "Confirmation Message 5",
            messagePlaceholder: "Write your message here...",
            whatsapp: "Connection",
            scheduledAt: "Scheduled At",
            confirmation: "Confirmation",
            messagePlaceholder: "Write your message here...",
            variables: "Variables",
          },
          buttons: {
            add: "Add",
            edit: "Update",
            okadd: "Ok",
            cancel: "Cancel Sending",
            restart: "Restart Sending",
            close: "Close",
            attach: "Attach File",
            close: "Close",
            attach: "Attach File",
          },
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "This action cannot be undone.",
        },
        toasts: {
          success: "Operation completed successfully.",
          cancel: "Campaign canceled.",
          restart: "Campaign restarted.",
          deleted: "Record deleted successfully.",
        },
      },
      campaignReport: {
        title: "Campaign Report",
        inactive: "Inactive",
        scheduled: "Scheduled",
        process: "In Progress",
        cancelled: "Canceled",
        finished: "Completed",
        campaign: "Campaign",
        validContacts: "Valid Contacts",
        confirmationsRequested: "Confirmations Requested",
        confirmations: "Confirmations",
        deliver: "Delivered",
        connection: "Connection",
        contactLists: "Contact List",
        schedule: "Schedule",
        conclusion: "Conclusion",
      },
      announcements: {
        title: "Announcements",
        searchPlaceholder: "Search",
        active: "Active",
        inactive: "Inactive",
        buttons: {
          add: "New Announcement",
          contactLists: "Announcement Lists",
        },
        table: {
          priority: "Priority",
          title: "Title",
          text: "Text",
          mediaName: "File",
          status: "Status",
          actions: "Actions",
        },
        dialog: {
          edit: "Edit Announcement",
          add: "New Announcement",
          update: "Edit Announcement",
          readonly: "View Only",
          form: {
            priority: "Priority",
            title: "Title",
            text: "Text",
            mediaPath: "File",
            status: "Status",
            high: "High",
            medium: "Medium",
            low: "Low",
            active: "Active",
            inactive: "Inactive",
          },
          buttons: {
            add: "Add",
            edit: "Update",
            okadd: "Ok",
            cancel: "Cancel",
            close: "Close",
            attach: "Attach File",
          },
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage: "This action cannot be undone.",
        },
        toasts: {
          success: "Operation completed successfully.",
          deleted: "Record deleted successfully.",
        },
      },
      campaignsConfig: {
        title: "Campaign Settings",
      },
      queues: {
        title: "Queues & Chatbot",
        table: {
          name: "Name",
          color: "Color",
          greeting: "Greeting Message",
          orderQueue: "Queue Order (Bot)",
          actions: "Actions",
          ID: "ID",
        },
        buttons: {
          add: "Add Queue",
        },
        toasts: {
          success: "Queue saved successfully.",
          deleted: "Queue deleted successfully.",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage:
            "Are you sure? This action cannot be undone! Attendances from this queue will still exist but will no longer be assigned to a queue.",
        },
      },
      queue: {
        queueData: "Queue Data",
      },
      queueSelect: {
        inputLabel: "Queues",
        inputLabelRO: "Read-Only Queues",
        withoutQueue: "No Queue",
      },
      reports: {
        title: "Attendance Reports",
        startDate: "Start date ",
        endDate: "End date",

        table: {
          id: "Ticket",
          user: "User",
          dateOpen: "Opening Date",
          dateClose: "Closing Date",
          NPS: "NPS",
          status: "Status",
          whatsapp: "Connection",
          queue: "Queue",
          actions: "Actions",
          lastMessage: "Last Message",
          contact: "Customer",
          supportTime: "Attendance Time",
        },
        buttons: {
          filter: "Apply Filter",
          onlyRated: "Only Rated",
        },
        searchPlaceholder: "Search...",
      },
      queueIntegration: {
        title: "Integrations",
        table: {
          id: "ID",
          type: "Type",
          name: "Name",
          projectName: "Project Name",
          language: "Language",
          lastUpdate: "Last Update",
          actions: "Actions",
        },
        buttons: {
          add: "Add Project",
        },
        searchPlaceholder: "Search...",
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage:
            "Are you sure? This action cannot be undone and will be removed from linked queues and connections.",
        },
      },
      users: {
        title: "Users",
        table: {
          status: "Status",
          name: "Name",
          email: "Email",
          profile: "Profile",
          startWork: "Work Start Time",
          endWork: "Work End Time",
          actions: "Actions",
          ID: "ID",
        },
        buttons: {
          add: "Add User",
        },
        toasts: {
          deleted: "User deleted successfully.",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage:
            "All user data will be lost. Open tickets for this user will be moved to the queue.",
        },
      },
      compaies: {
        title: "Companies",
        table: {
          ID: "ID",
          status: "Active",
          name: "Name",
          email: "Email",
          password: "Password",
          phone: "Phone",
          plan: "Plan",
          active: "Active",
          numberAttendants: "Agents",
          numberConections: "Connections",
          value: "Value",
          namePlan: "Plan Name",
          numberQueues: "Queues",
          useCampaigns: "Campaigns",
          useExternalApi: "REST API",
          useFacebook: "Facebook",
          useInstagram: "Instagram",
          useWhatsapp: "WhatsApp",
          useInternalChat: "Internal Chat",
          useSchedules: "Scheduling",
          createdAt: "Created At",
          dueDate: "Expiration Date",
          lastLogin: "Last Login",
          folderSize: "Folder size ",
          totalFiles: " Total Files",
          lastUpdate: "Last update",
          actions: "Actions",
          money: "$",
          yes: "Yes",
          no: "No",
          document: "CNPJ/CPF",
          recurrence: "Recurrence",
          monthly: "Monthly",
          bimonthly: "Bimonthly",
          quarterly: "Quarterly",
          semester: "Semiannual",
          yearly: "Annual",
          clear: "Clear",
          delete: "Delete",
          user: "User",
          save: "Save",
        },
        buttons: {
          add: "Add Company",
        },
        toasts: {
          deleted: "Company deleted successfully.",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteMessage:
            "All company data will be lost. Open tickets for users in this company will be moved to the queue.",
        },
      },
      plans: {
        form: {
          name: "Name",
          users: "Users",
          connections: "Connections",
          campaigns: "Campaigns",
          schedules: "Schedules",
          enabled: "Enabled",
          disabled: "Disabled",
          clear: "Cancel",
          delete: "Delete",
          save: "Save",
          yes: "Yes",
          no: "No",
          money: "$",
          public: "Public",
          trial: "Trial",
          trialDays: "Trial Days",
        },
      },
      helps: {
        title: "Help Center",
        settings: {
          codeVideo: "Video Code",
          description: "Description",
          clear: "Clear",
          delete: "Delete",
          save: "Save",
        },
      },
      schedules: {
        title: "Business Hours",
        date: "Date",
        time: "Time",
        event: "Event",
        allDay: "All Day",
        week: "Week",
        work_week: "Work Week",
        day: "Day",
        month: "Month",
        previous: "Previous",
        next: "Next",
        yesterday: "Yesterday",
        tomorrow: "Tomorrow",
        today: "Today",
        agenda: "Agenda",
        noEventsInRange: "No events in this range.",
        confirmationModal: {
          deleteTitle: "Are you sure you want to delete this Schedule?",
          deleteMessage: "This action cannot be undone.",
        },
        table: {
          contact: "Contact",
          body: "Message",
          sendAt: "Scheduled Date",
          sentAt: "Sent Date",
          status: "Status",
          actions: "Actions",
        },
        buttons: {
          add: "New Schedule",
        },
        toasts: {
          deleted: "Schedule deleted successfully.",
        },
      },
      tags: {
        title: "Tags",
        addColumns: "+ ADD COLUMNS",
        search: "SEARCH",
        seeTicket: "SEE TICKET",
        confirmationModal: {
          deleteTitle: "Are you sure you want to delete this Tag?",
          deleteMessage: "This action cannot be undone.",
        },
        table: {
          id: "ID",
          name: "Name",
          kanban: "Kanban",
          color: "Color",
          tickets: "Tag Records",
          contacts: "Contacts",
          actions: "Actions",
        },
        buttons: {
          add: "New Tag",
        },
        toasts: {
          deleted: "Tag deleted successfully.",
        },
      },
      tagsKanban: {
        title: "Lanes",
        laneDefault: "Open",
        backToKanban: "BACK TO KANBAN",
        confirmationModal: {
          deleteTitle: "Are you sure you want to delete this Lane?",
          deleteMessage: "This action cannot be undone.",
        },
        table: {
          name: "Name",
          color: "Color",
          tickets: "Tickets",
          actions: "Actions",
        },
        buttons: {
          add: "New Lane",
        },
        toasts: {
          deleted: "Lane deleted successfully.",
        },
      },
      files: {
        title: "File Lists",
        table: {
          name: "Name",
          contacts: "Contacts",
          actions: "Action",
        },
        toasts: {
          deleted: "File list deleted successfully!",
          deletedAll: "All file lists were deleted successfully!",
        },
        buttons: {
          add: "Add",
          deleteAll: "Delete All",
        },
        confirmationModal: {
          deleteTitle: "Delete",
          deleteAllTitle: "Delete All",
          deleteMessage: "Are you sure you want to delete this list?",
          deleteAllMessage: "Are you sure you want to delete all lists?",
        },
      },
      settings: {
        success: "Settings saved successfully.",
        title: "Settings",
        tabs: {
          options: "Options",
          plans: "Plans",
          helps: "Help",
          companies: "Companies",
        },
        settings: {
          userCreation: {
            name: "User Creation",
            options: {
              enabled: "Enabled",
              disabled: "Disabled",
            },
          },
          tabs: {
            options: "Options",
            schedules: "Schedules",
            plans: "Plans",
            help: "Help",
          },
          options: {
            disabled: "Disabled",
            enabled: "Enabled",
            updating: "Updating...",
            creationCompanyUser: "Company/User Creation",
            evaluations: "Evaluations",
            officeScheduling: "Office Hour Scheduling",
            queueManagement: "Queue Management",
            companyManagement: "Company Management",
            connectionManagement: "Connection Management",
            sendGreetingAccepted: "Send Greeting on Accepting Ticket",
            sendMsgTransfTicket:
              "Send Transfer Message between Departments/Agents",
            checkMsgIsGroup: "Ignore Group Messages",
            chatBotType: "Bot Type",
            userRandom: "Random Agent Selection",
            buttons: "Buttons",
            acceptCallWhatsapp: "Notify that WhatsApp call is not accepted?",
            sendSignMessage: "Allow agent to choose to send Signature",
            sendGreetingMessageOneQueues:
              "Send Greeting when only one queue exists",
            sendQueuePosition: "Send Queue Position Message",
            sendFarewellWaitingTicket: "Send farewell message on wait",
            acceptAudioMessageContact: "Accept audio message",
            enableLGPD: "Enable LGPD",
            requiredTag: "Required Tag",
            closeTicketOnTransfer: "Close ticket on transfer",
            showNotificationPending: "Show notification for pending tickets",
            DirectTicketsToWallets: "Direct tickets to customer wallets",
            copyContactPrefix: "Prefix for copying contacts",
            copyContactPrefixPlaceholder: "Eg: +44 for Great Britain",
            copyContactAcronymConfiguration: "Acronym Configuration for Contact Copy",
            efiPixConfiguration: "Efí Pix Configuration (GerenciaNet)",
            clientID: "Client ID",
            clientSecret: "Client Secret",
            pixKey: "PIX Key",
            mercadoPago: "Mercado Pago",
            accessToken: "Access Token",
            stripe: "Stripe",
            stripePrivateKey: "Stripe Private Key",
            asaas: "ASAAS",
            asaasToken: "Asaas Token"
          },
          customMessages: {
            sendQueuePositionMessage: "Queue Position Message",
            AcceptCallWhatsappMessage: "Message to Inform Call Not Accepted",
            greetingAcceptedMessage: "Greeting Message When Accepting Ticket",
            transferMessage:
              "Transfer Message - ${queue.name} = destination queue",
          },
          LGPD: {
            title: "LGPD",
            welcome: "Welcome Message (LGPD)",
            linkLGPD: "Privacy Policy Link",
            obfuscateMessageDelete: "Obfuscate Deleted Message",
            alwaysConsent: "Always Request Consent",
            obfuscatePhoneUser: "Obfuscate User Phone Number",
            enabled: "Enabled",
            disabled: "Disabled",
          },
          acronyms: {
            title: "Acronym Configuration for Contact Copy"
          },
          payment: {
            efi: "Efí Pix Configuration (GerenciaNet)",
            efiClientId: "Client ID",
            efiClientSecret: "Client Secret",
            efiPixKey: "PIX Key",
            mercadoPago: "Mercado Pago",
            mercadoPagoAccessToken: "Access Token",
            stripe: "Stripe",
            stripePrivateKey: "Stripe Private Key",
            asaas: "ASAAS",
            asaasToken: "Asaas Token"
          },
        },
              },
        messagesList: {
        header: {
          assignedTo: "Assigned to:",
          dialogRatingTitle:
            "Would you like to leave a service rating for the client?",
          dialogClosingTitle: "Closing the service with the client!",
          dialogRatingCancel: "Resolve WITH Farewell Message",
          dialogRatingSuccess: "Resolve and Send Rating",
          dialogRatingWithoutFarewellMsg: "Resolve WITHOUT Farewell Message",
          ratingTitle: "Choose a rating menu",
          notMessage: "No message selected",
          amount: "Prospecting Value",
          buttons: {
            return: "Return",
            resolve: "Resolve",
            reopen: "Reopen",
            accept: "Accept",
            rating: "Send Rating",
            enableIntegration: "Enable Integration",
            disableIntegration: "Disable Integration",
            logTicket: "Ticket Logs",
            requiredTag: "You must assign a tag before closing the ticket.",
            greetingAcceptedMessage:
              "You must configure a greeting message when accepting the ticket.",
          },
        },
      },
      messagesInput: {
        placeholderPrivateMessage:
          "Type a message or press / for quick replies",
        placeholderOpen: "Type a message or press / for quick replies",
        placeholderClosed: "Reopen or accept this ticket to send a message.",
        signMessage: "Sign",
        privateMessage: "Private Message",
        placeholderPending: "Internal message (ticket awaiting acceptance)...",
        pendingTicket: {
          title: "Ticket Awaiting:",
          message: "Only internal messages are allowed at this time."
        },
        internalMessage: "Internal Message",
      },
      contactDrawer: {
        header: "Contact Details",
        searchPlaceholder: "Search in messages...",
        buttons: {
          edit: "Edit Contact",
          block: "Block",
          unblock: "Unblock",
        },
        extraInfo: "Additional Information",
        tabs: {
          info: "Information",
          images: "Images",
          videos: "Videos",
          audios: "Audios",
          documents: "Documents",
          links: "Links",
          participants: "Participants"
        },
        participants: {
          title: "Group Participants",
          noParticipants: "No participants found",
          superAdmin: "Super Admin",
          admin: "Admin"
        },
        media: {
          noImages: "No images found",
          noVideos: "No videos found",
          noAudios: "No audios found",
          noDocuments: "No documents found",
          noLinks: "No links found",
          document: "Document"
        },
        search: {
          searching: "Searching...",
          noMessages: "No messages found",
          found: "Message found",
          you: "You"
        },
        toasts: {
          contactBlocked: "Contact blocked",
          contactUnblocked: "Contact unblocked"
        }
      },
      messageVariablesPicker: {
        label: "Available Variables",
        vars: {
          contactFirstName: "First Name",
          contactName: "Name",
          user: "Agent",
          greeting: "Greeting",
          protocolNumber: "Protocol Number",
          date: "Date",
          hour: "Hour",
          ticket_id: "Ticket Number",
          queue: "Sector",
          connection: "Connection",
        },
      },
      ticketOptionsMenu: {
        schedule: "Schedule",
        delete: "Delete",
        transfer: "Transfer",
        registerAppointment: "Contact Notes",
        resolveWithNoFarewell: "Resolve without Farewell",
        acceptAudioMessage: "Accept audio messages from contact?",
        appointmentsModal: {
          title: "Ticket Notes",
          textarea: "Note",
          placeholder: "Enter the information you want to register here",
        },
        confirmationModal: {
          title: "Delete the contact's ticket",
          titleFrom: "from contact",
          message:
            "Attention! All messages related to this ticket will be lost.",
        },
        buttons: {
          delete: "Delete",
          cancel: "Cancel",
        },
      },
      messageInput: {
        tooltip: {
          signature: "Enable/Disable Signature",
          privateMessage: "Enable/Disable Private Message",
          meet: "Send video conference link",
        },
        type: {
          imageVideo: "Photos and Videos",
          cam: "Camera",
          contact: "Contact",
          meet: "Video Call",
          template: "Meta Template",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancel",
        },
      },
      messageOptionsMenu: {
        delete: "Delete",
        reply: "Reply",
        edit: "Edit",
        forward: "Forward",
        toForward: "Forward",
        talkTo: "Talk To",
        confirmationModal: {
          title: "Delete message?",
          message: "This action cannot be undone.",
        },
      },
      invoices: {
        table: {
          invoices: "Invoices",
          details: "Details",
          users: "Users",
          connections: "Connections",
          queue: "Queues",
          value: "Value",
          expirationDate: "Expiration Date",
          action: "Action",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP:
          "There must be at lest one default WhatsApp connection.",
        ERR_NO_DEF_WAPP_FOUND:
          "No default WhatsApp found. Check connections page.",
        ERR_WAPP_NOT_INITIALIZED:
          "This WhatsApp session is not initialized. Check connections page.",
        ERR_WAPP_CHECK_CONTACT:
          "Could not check WhatsApp contact. Check connections page.",
        ERR_WAPP_INVALID_CONTACT: "This is not a valid whatsapp number.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "Could not download media from WhatsApp. Check connections page.",
        ERR_INVALID_CREDENTIALS: "Authentication error. Please try again.",
        ERR_SENDING_WAPP_MSG:
          "Error sending WhatsApp message. Check connections page.",
        ERR_DELETE_WAPP_MSG: "Couldn't delete message from WhatsApp.",
        ERR_OTHER_OPEN_TICKET:
          "There's already an open ticket for this contact.",
        ERR_SESSION_EXPIRED: "Session expired. Please login.",
        ERR_USER_CREATION_DISABLED:
          "User creation was disabled by administrator.",
        ERR_NO_PERMISSION: "You don't have permission to access this resource.",
        ERR_DUPLICATED_CONTACT: "A contact with this number already exists.",
        ERR_NO_SETTING_FOUND: "No setting found with this ID.",
        ERR_NO_CONTACT_FOUND: "No contact found with this ID.",
        ERR_NO_TICKET_FOUND: "No ticket found with this ID.",
        ERR_NO_USER_FOUND: "No user found with this ID.",
        ERR_NO_WAPP_FOUND: "No WhatsApp found with this ID.",
        ERR_CREATING_MESSAGE: "Error while creating message on database.",
        ERR_CREATING_TICKET: "Error while creating ticket on database.",
        ERR_FETCH_WAPP_MSG:
          "Error fetching the message in WhtasApp, maybe it is too old.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "This color is already in use, pick another one.",
        ERR_WAPP_GREETING_REQUIRED:
          "Greeting message is required if there is more than one queue.",
        ERR_OUT_OF_HOURS: "Outside Business Hours!",
      },
      messagesAPIInstructions: {
        endpoint: "Endpoint:",
        method: "Method:",
        post: "POST",
        headers: "Headers:",
        headerAuthorization:
          "Authorization Bearer (registered token) and Content-Type (application/json)",
        body: "Body:",
        fieldNumber: '"number": "558599999999"',
        fieldBody: '"body": "Message"',
        fieldUserId: '"userId": User ID or ""',
        fieldQueueId: '"queueId": Queue ID or ""',
        fieldSendSignature: '"sendSignature": Sign message - true/false',
        fieldCloseTicket: '"closeTicket": Close the ticket - true/false',
        singMessage: "Sign message - true/false",
        closeTicket: "Close the ticket - true/false",
        testSend: "The Test Send",
      },
      recurrenceSection: {
        title: "Recurrence",
        recurrence: "Recurrence Configuration",
        enable: "Enable Recurrence",
        type: "Recurrence Type",
        interval: "Interval",
        daysOfWeek: "Days of Week",
        dayOfMonth: "Day of Month",
        endDate: "End Date",
        maxExecutions: "Maximum Executions",
        preview: {
          title: "Execution Preview",
          buttonShow: "Show Preview",
          buttonHide: "Hide Preview",
          execution: "Execution {{index}}"
        },
        options: {
          daily: "Daily",
          weekly: "Weekly",
          biweekly: "Biweekly",
          monthly: "Monthly",
          yearly: "Yearly",
          days: "days",
          weeks: "weeks",
          months: "months"
        },
        weekDays: {
          sunday: "Sunday",
          monday: "Monday",
          tuesday: "Tuesday",
          wednesday: "Wednesday",
          thursday: "Thursday",
          friday: "Friday",
          saturday: "Saturday"
        },
        helpers: {
          interval: "Every {{count}} {{type}}",
          endDate: "Optional end date for recurrence",
          maxExecutions: "Maximum number of executions (optional)",
          dayOfMonth: "Day of the month (1-31)"
        },
        validation: {
          type: "Recurrence type is required",
          interval: "Interval is required",
          intervalMin: "Interval must be at least 1",
          daysOfWeek: "At least one day must be selected",
          dayOfMonth: "Day of month is required",
          dayOfMonthMinMax: "Day must be between 1 and 31",
          endDate: "End date must be in the future",
          maxExecutions: "Maximum executions must be at least 1"
        }
      },
      servicePanel: {
        allowRealTime: "Service Panel  ",
      },
      financial: {
        invoices: "Invoices",
        details: "Details",
        users: "Users",
        connections: "Connections",
        queues: "Queues",
        value: "Value",
        expirationDate: "Due Date",
        status: "Status",
        action: "Action",
      },
      statusFilter: {
        statusFilter: "Filter by Status",
      },
      momentsUser: {
        services: "Services:",
        pending: "Pending",
        noqueue: "NO QUEUE",
      },
      campaignsPhrase: {
        campaignsFlow: "Campaigns Flow",
        campaigns: "Campaign",
        name: "Name",
        status: "Status",
        newCampaignWithFlowByPhrase: "New campaign with flow by phrase",
        editCampaignWithFlowByPhrase: "Edit campaign with flow by phrase",
        phraseTriggerName: "Phrase trigger name",
        chooseAStream: "Choose a stream",
        whichPhraseTriggersTheFlow: " Which phrase triggers the flow?",
        selectAConnection: "Select a Connection",
        chooseAStream: "Choose a stream",
        status: "Status",
        cancel: "CANCEL",
        createCampaign: "CREATE CAMPAIGN",
        saveCampaign: "Save Campaign",
        title: "Flow Campaigns",
        newCampaign: "New Campaign",
        connections: "Connections",
        noCampaignsFound: "No campaign found",
        createFirstCampaign: "Click on \"New Campaign\" to create your first flow campaign",
        campaignName: "Campaign name",
        selectFlow: "Select a flow",
        whatsappConnections: "WhatsApp Connections",
        multipleConnections: "Multiple",
        noConnection: "No connection",
        moreConnections: "More {{count}} connection(s)",
        active: "Active",
        inactive: "Inactive",
        editCampaign: "Edit campaign",
        deleteCampaign: "Delete campaign",
        phrasesTriggerFlow: "Phrases/Words that trigger the flow",
        exactMatch: "Exact Match: The message must be identical to the configured phrase.",
        partialMatch: "Partial Match: The phrase can be contained anywhere in the message.",
        phrase: "Phrase {{number}}",
        type: "Type",
        exact: "Exact",
        partial: "Partial",
        addPhrase: "Add Phrase",
        atLeastOneConnection: "At least one connection must be selected",
        connectionsSelected: "{{count}} connection(s) selected:",
        campaignWillExecute: "The campaign will be executed when any of these connections receive messages that match the configured phrases.",
        saving: "Saving...",
        update: "Update",
        create: "Create",
        campaignDeleted: "Campaign deleted successfully",
        campaignUpdated: "Campaign updated successfully",
        campaignCreated: "Campaign created successfully",
        errorLoadingFlows: "Error loading flows",
        errorLoadingConnections: "Error loading connections",
        errorLoadingCampaign: "Error loading campaign data",
        errorSavingCampaign: "Error saving campaign",
        fillRequiredFields: "Please fill in all required fields",
        flowNotFound: "Selected flow not found",
        phrasesConfigured: "{{count}} phrase(s) configured",
        nameRequired: "Name is required",
        flowRequired: "Flow is required",
        phraseRequired: "Phrase is required",
      },
      chatList: {
        noMessages: "No messages",
        admin: "Admin",
        member: "Member",
        searchChat: "Search chat...",
        createNewChat: "Create new chat",
        searchUser: "Search user...",
        noUserFound: "No user found",
        noUserAvailable: "No user available",
        cancel: "Cancel",
        details: "Details",
        deleteChat: "Delete Chat",
        deleteChatConfirm: "This action cannot be undone, confirm?",
        detailsTitle: "Details",
        edit: "Edit",
        delete: "Delete",
        now: "now",
        minutesAgo: "{{count}}m ago",
        hoursAgo: "{{count}}h ago",
      },
      chatMessages: {
        deleted: "This message was deleted",
        deletedAdmin: "Deleted message - visible only to administrators",
        reply: "Reply",
        edit: "Edit",
        delete: "Delete",
        forward: "Forward",
        editMessage: "Edit Message",
        save: "Save",
        cancel: "Cancel",
        deleteMessage: "Delete Message",
        deleteMessageConfirm: "Are you sure you want to delete this message?",
        forwardMessage: "Forward Message",
        selectChat: "Select chat",
        doubleClickToReply: "Double click to reply",
        edited: "(edited)",
        forwarded: "(forwarded)",
        typeMessage: "Type a message...",
        send: "Send",
        noMessages: "No messages",
        loading: "Loading...",
        replyingTo: "Replying to",
        clickToGoToOriginal: "Click to go to original message",
        today: "Today",
        loadingOldMessages: "Loading old messages...",
        viewDocument: "View Document",
        doubleClickToReply: "Double click to reply",
        messageNotFound: "[message not found]",
      },
      chatShared: {
        audio: "Audio",
        image: "Image",
        video: "Video",
        file: "File",
      },
      chatPopover: {
        reply: "Reply",
        edit: "Edit",
        delete: "Delete",
        forward: "Forward",
        cancel: "Cancel",
        confirmDelete: "Confirm Delete",
        confirm: "Confirm",
        deleteMessage: "Are you sure you want to delete this message?",
        editMessage: "Edit Message",
        save: "Save",
        forwardMessage: "Forward Message",
        selectChat: "Select chat",
        forward: "Forward",
        noChats: "No chat available",
        internalChat: "Internal chat #",
        noMessages: "No messages",
      },
      chatIndex: {
        chats: "Chats",
        groups: "Groups",
        new: "New",
        messages: "Messages",
        search: "Search...",
        noChats: "No chat found",
        noGroups: "No group found",
        noMessages: "No messages",
        loading: "Loading...",
        error: "Error loading data",
        addGroupPhoto: "Add Group Photo",
        changeGroupPhoto: "Change Group Photo",
        groupName: "Group Name",
        groupDescription: "Group Description",
        save: "Save",
        cancel: "Cancel",
        createGroup: "Create Group",
        editGroup: "Edit Group",
        deleteGroup: "Delete Group",
        deleteGroupConfirm: "Are you sure you want to delete this group?",
        edit: "Edit",
        delete: "Delete",
        details: "Details",
        groupDetails: "Group Details",
        title: "Title",
        description: "Description",
        modal: {
          title: "Create Group",
          editTitle: "Edit Group",
          save: "Save",
          cancel: "Cancel",
          name: "Group Name",
          description: "Group Description",
          create: "Create",
          edit: "Edit",
        },
      },
      whitelabel: {
        primaryColorLight: "Primary Color (Light Theme)",
        primaryColorDark: "Primary Color (Dark Theme)",
        appName: "Application Name",
        logoLight: "Logo (Light Theme)",
        logoDark: "Logo (Dark Theme)",
        favicon: "Favicon",
        backgroundLight: "Background Image (Light Theme)",
        backgroundDark: "Background Image (Dark Theme)",
        preview: "Preview",
        delete: "Delete",
        upload: "Upload",
        availableLanguages: "Available Languages",
        atLeastOneLanguage: "At least one language must be enabled",

        sections: {
          general: "General Settings",
          generalDescription: "Configure the application name and basic information",
          colors: "Colors and Themes",
          colorsDescription: "Customize primary colors for light and dark themes",
          logos: "Logos and Images",
          logosDescription: "Upload application logos and background images",
          languages: "Available Languages",
          languagesDescription: "Select which languages will be available in the system"
        }
      },
      flowBuilderSingleBlockModal: {
        labels: {
          title: "Add content to flow",
          btn: "Add",
          editTitle: "Edit content",
          btnSave: "Save",
          addMenuTitle: "Add menu to flow"
        },
        toasts: {
          emptyMessageFields: "Empty message fields!",
          invalidInterval: "Interval cannot be 0 or greater than 120!",
          fileTooLarge2mb: "File is too large! Maximum 2MB",
          fileTooLarge5mb: "File is too large! Maximum 5MB",
          fileTooLarge10mb: "File is too large! Maximum 10MB",
          fileTooLarge20mb: "File is too large! Maximum 20MB",
          contentSuccessAdded: "Content added successfully!",
          deleteEmptyCards: "Delete empty cards (Image, Audio, and Video)"
        },
        misc: {
          browserNotSupportHTML5: "your browser does not support HTML5",
          uploadingAndCreating: "Uploading files and creating content..."
        },
        buttons: {
          text: "Text",
          interval: "Interval",
          image: "Image",
          audio: "Audio",
          video: "Video",
          document: "Document",
          sendImage: "Send image",
          sendAudio: "Send audio",
          sendVideo: "Send video",
          sendDocument: "Send Document"
        },
        textFieldLabels: {
          message: "Message",
          timeInSeconds: "Time in seconds"
        },
        checkboxLabels: {
          sendAsRecordedAudio: "Send as recorded audio on the spot"
        },
        headings: {
          variables: "Variables",
          text: "Text",
          interval: "Interval",
          image: "Image",
          audio: "Audio",
          video: "Video",
          document: "Document"
        }
      },
      flowBuilderMenuModal: {
        labels: {
          addMenuTitle: "Add menu to flow",
          editMenuTitle: "Edit menu",
          btn: "Add",
          btnSave: "Save",
          menuExplanationMessage: "Menu explanation message",
          addOption: "Add Option",
          type: "Type",
          typeOption: "Type option"
        },
        radio: {
          number: "Number",
          list: "List",
          button: "Button"
        }
      },
      flowBuilderInputModal: {
        labels: {
          title: "Add input to flow",
          btn: "Add",
          editTitle: "Edit flow input",
          btnSave: "Save changes",
          question: "Question",
          typeQuestion: "Type the question",
          availableVariables: "Available variables (click to insert):",
          variableName: "Variable name",
          helperText: "The user's response will be stored in this variable",
          howItWorks: "How it works"
        },
        tooltips: {
          question: "The question that will be sent to the user. You can include variables using ${variableName}",
          variableName: "Name of the variable where the response will be stored. Do not use spaces or special characters."
        },
        placeholders: {
          question: "Ex: Hello ${name}, what is your age?",
          variableName: "Ex: client_age"
        },
        info: {
          howItWorks: "This node will send the question to the user and wait for a response. When the user replies, the value will be stored in the specified variable and the flow will continue to the next node."
        }
      },
      flowBuilderIntervalModal: {
        title: {
          add: "Add an interval to the flow",
          edit: "Edit interval"
        },
        labels: {
          timeInSeconds: "Time in seconds"
        },
        buttons: {
          add: "Add",
          edit: "Edit"
        },
        toasts: {
          addIntervalValue: "Add the interval value",
          maxTimeReached: "Maximum time of 120 seconds reached"
        }
      },
      flowBuilderRandomizerModal: {
        title: {
          add: "Add a randomizer to the flow",
          edit: "Edit randomizer"
        },
        buttons: {
          add: "Add",
          edit: "Edit"
        },
        toasts: {
          addIntervalValue: "Add the interval value",
          maxTimeReached: "Maximum time of 120 seconds reached"
        }
      },
      flowBuilderAddTicketModal: {
        title: {
          add: "Add a queue to the flow",
          edit: "Edit queue"
        },
        labels: {
          selectQueue: "Choose the queue you want to transfer to",
          selectConnection: "Select a Connection"
        },
        buttons: {
          add: "Add",
          edit: "Edit"
        },
        toasts: {
          addQueue: "Add a queue"
        }
      },
      flowBuilderAddTagModal: {
        title: {
          add: "Add a tag to the flow",
          edit: "Edit tag"
        },
        labels: {
          selectTag: "Choose a tag",
          noTagSelected: "No tag selected"
        },
        buttons: {
          add: "Add",
          edit: "Edit"
        },
        toasts: {
          addTag: "Add a tag"
        }
      },
      flowBuilderRemoveTagModal: {
        title: {
          add: "Remove a tag from the flow",
          edit: "Edit tag removal"
        },
        labels: {
          selectTag: "Choose a tag to remove from the contact",
          selectTagToRemove: "Select a tag to remove",
          noTagSelected: "No tag selected",
          info: "This action will remove the selected tag from the contact when the flow is executed"
        },
        buttons: {
          add: "Add Removal",
          edit: "Edit"
        },
        toasts: {
          selectTag: "Select a tag to remove"
        }
      },
      flowBuilderAddSwitchFlowModal: {
        title: {
          add: "Add Flow Switch",
          edit: "Edit Flow Switch"
        },
        buttons: {
          add: "Add",
          edit: "Edit"
        },
        placeholders: {
          chooseFlow: "Choose a flow"
        }
      },
      flowBuilderAddAttendantModal: {
        title: {
          add: "Add an attendant to the flow",
          edit: "Edit attendant"
        },
        labels: {
          selectAttendant: "Choose an attendant",
          selectUser: "Select a user"
        },
        buttons: {
          add: "Add",
          edit: "Edit"
        },
        toasts: {
          addAttendant: "Add an attendant"
        }
      },
      flowBuilderHttpRequestNode: {
        title: "HTTP Request",
        preset: {
          title: "Pre-configured Webhooks",
          label: "Select preset",
          placeholder: "Choose a ready-made configuration...",
          using: "Using preset:",
          remove: "Remove Preset",
          system: "SYSTEM",
          toasts: {
            errorLoading: "Error loading presets:",
            errorApplying: "Error applying preset configuration"
          }
        },
        url: {
          label: "URL",
          labelPreset: "Preset URL (Read-Only)",
          placeholder: "https://your-domain.com/webhook",
          helperText: "The URL is managed by the preset. To change it, remove the preset."
        },
        method: "Method",
        buttons: {
          test: "Test Request",
          showAdvanced: "Show Advanced",
          hideAdvanced: "Hide Advanced",
          addQueryParam: "Add Query Parameter",
          addHeader: "Add Header",
          editBody: "Edit Request Body",
          mapVariables: "Map Response Variables",
          hideVariables: "Hide Response Variables",
          addVariable: "Add Variable",
          close: "Close"
        },
        response: {
          title: "Response",
          fullResponse: "View Full Response",
          fullResponseTitle: "Full Request Response"
        },
        advanced: {
          alert: "Advanced settings are managed by the preset and cannot be edited.",
          timeout: "Request Timeout (seconds)",
          queryParams: "Query Parameters",
          key: "Key",
          value: "Value",
          headers: "Headers",
          headersPlaceholder: '{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer your_token"\n}',
          body: "Request Body (JSON)",
          editBody: "Advanced Body Editor"
        },
        mapping: {
          title: "Map response data to variables",
          path: "Data path in response",
          pathPlaceholder: "e.g., data.id",
          variableName: "Variable Name",
          variablePlaceholder: "e.g., customerId"
        },
        misc: {
          requestError: "Error making the request",
          usefulTips: "Useful tips:",
          tip1: "The full API response is automatically saved in the global variable <strong>apiResponse</strong>",
          tip2: "You can use ${variableName} in the URL and request body to include variable values.",
          configSaved: "Configuration saved!"
        },
        providers: {
          kiwify: "Kiwify"
        },
        presets: {
          subscription_late: {
            name: "Kiwify - Late Subscription",
            description: "Webhook for when a subscription is late on Kiwify"
          },
          subscription_canceled: {
            name: "Kiwify - Canceled Subscription",
            description: "Webhook for when a subscription is canceled on Kiwify"
          },
          subscription_renewed: {
            name: "Kiwify - Renewed Subscription",
            description: "Webhook for when a subscription is renewed on Kiwify"
          }
        }
      },
      flowBuilderVariableNode: {
        title: "Global Variable",
        labels: {
          name: "Variable name",
          value: "Value",
          helperText: "You can use static values or references like ${anotherVariable}"
        },
        buttons: {
          save: "Save variable"
        },
        toasts: {
          saved: "Saved!",
          savedSuccess: "Variable saved successfully!"
        }
      },
      flowBuilderGeminiModal: {
        title: {
          add: "Add Gemini to flow",
          edit: "Edit Gemini in flow"
        },
        buttons: {
          add: "Add",
          save: "Save",
          cancel: "Cancel"
        },
        basicSettings: {
          title: "Basic Settings - Google Gemini",
          assistantName: "Assistant Name",
          apiKey: "Google AI API Key",
          model: "Gemini Model",
          systemPrompt: "System Prompt",
          promptPlaceholder: "Describe how the AI should behave, what information it should collect, how it should respond...",
          temperature: "Temperature",
          temperatureHelper: "0 = conservative, 2 = creative",
          maxTokens: "Max Tokens",
          maxTokensHelper: "Maximum response size",
          maxMessages: "Max Messages",
          maxMessagesHelper: "Context history"
        },
        flowBehavior: {
          title: "Flow Behavior",
          tooltip: "Configure how Gemini should behave in the flow",
          mode: "Operating Mode",
          permanent: {
            title: "Permanent - End flow here",
            description: "The user will chat with the AI until they request a transfer or end the conversation"
          },
          temporary: {
            title: "Temporary - Returns to the flow later",
            description: "The AI performs a specific task and then returns to the normal flow"
          }
        },
        temporarySettings: {
          title: "⏱️ Temporary Mode Settings",
          description: "Configure when the AI should stop and return to the flow",
          maxInteractions: "Maximum Interactions",
          maxInteractionsHelper: "Maximum number of messages before returning to the flow (0 = unlimited)",
          timeout: "Timeout (minutes)",
          timeoutHelper: "Time limit before returning to the flow (0 = no limit)",
          continueKeywords: "Keywords to Continue Flow",
          keywordPlaceholder: "Enter a keyword",
          addKeyword: "Add",
          keywordsHelper: "When the user sends one of these words, the flow will automatically continue",
          objective: "AI Objective",
          objectiveHelper: "Describe what the AI should accomplish (e.g., 'Collect name, email, and phone')",
          objectivePlaceholder: "E.g., Collect customer data, Qualify interest, Diagnose problem...",
          autoComplete: {
            label: "Autocomplete upon reaching objective",
            description: "The AI will automatically analyze if it has completed the objective and will return to the flow"
          },
          queueId: "Queue ID (for transfer)",
          queueIdHelper: "ID of the queue to transfer to if the user requests an agent (0 = do not transfer)"
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
          add: "Add OpenAI to flow",
          edit: "Edit OpenAI in flow"
        },
        buttons: {
          add: "Add",
          save: "Save",
          cancel: "Cancel"
        },
        basicSettings: {
          title: "Basic Settings - OpenAI",
          assistantName: "Assistant Name",
          apiKey: "OpenAI API Key",
          model: "OpenAI Model",
          systemPrompt: "System Prompt",
          promptPlaceholder: "Describe how the AI should behave, what information it should collect, how it should respond...",
          temperature: "Temperature",
          temperatureHelper: "0 = conservative, 2 = creative",
          maxTokens: "Max Tokens",
          maxTokensHelper: "Maximum response size",
          maxMessages: "Max Messages",
          maxMessagesHelper: "Context history"
        },
        voiceSettings: {
          title: "Voice Settings (Optional)",
          responseType: "Response Type",
          voiceKey: "Voice Key (Azure)",
          voiceKeyPlaceholder: "Azure Speech Service Key",
          voiceRegion: "Voice Region (Azure)",
          voiceRegionPlaceholder: "e.g., brazilsouth",
          textOnly: "Text Only"
        },
        flowBehavior: {
          title: "Flow Behavior",
          tooltip: "Configure how OpenAI should behave in the flow",
          mode: "Operating Mode",
          permanent: {
            title: "Permanent - End flow here",
            description: "The user will chat with the AI until they request a transfer or end the conversation"
          },
          temporary: {
            title: "Temporary - Returns to the flow later",
            description: "The AI performs a specific task and then returns to the normal flow"
          }
        },
        temporarySettings: {
          title: "⏱️ Temporary Mode Settings",
          description: "Configure when the AI should stop and return to the flow",
          maxInteractions: "Maximum Interactions",
          maxInteractionsHelper: "Maximum number of messages before returning to the flow (0 = unlimited)",
          timeout: "Timeout (minutes)",
          timeoutHelper: "Time limit before returning to the flow (0 = no limit)",
          continueKeywords: "Keywords to Continue Flow",
          keywordPlaceholder: "Enter a keyword",
          addKeyword: "Add",
          keywordsHelper: "When the user sends one of these words, the flow will automatically continue",
          objective: "AI Objective",
          objectiveHelper: "Describe what the AI should accomplish (e.g., 'Collect name, email, and phone')",
          objectivePlaceholder: "E.g., Collect customer data, Qualify interest, Diagnose problem...",
          autoComplete: {
            label: "Autocomplete upon reaching objective",
            description: "The AI will automatically analyze if it has completed the objective and will return to the flow"
          },
          queueId: "Queue ID (for transfer)",
          queueIdHelper: "ID of the queue to transfer to if the user requests an agent (0 = do not transfer)"
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
        title: "Flow Start",
        description: "This block marks the beginning of your flow!"
      },
      plantao: {
        title: "On-Call Duty",
        buttons: {
          add: "Add On-Call Duty"
        },
        confirmationModal: {
          deleteTitle: "Remove On-Call Person",
          deleteMessage: "Are you sure you want to delete this on-call person?"
        },
        toasts: {
          deleted: "On-call duty successfully removed"
        },
        table: {
          id: "ID",
          onCall: "On-Call Person",
          phone: "Phone",
          schedules: "Schedules",
          actions: "Actions"
        },
        modal: {
          title: {
            add: "Add On-Call Person",
            edit: "Edit On-Call Person"
          },
          form: {
            phone: "Phone",
            interval: "Interval",
            daysOfWeek: "Days of the week",
            dayOfWeek: "Day of the Week",
            startOnCall: "Start of shift",
            endOnCall: "End of shift",
            user: "User",
            helperTextInterval: "Interval between notifications (in minutes)"
          },
          validation: {
            user: "Please provide the user",
            phone: "Please provide the phone number",
            interval: "Please provide the notification interval",
            startOnCall: "Please provide the shift start time",
            endOnCall: "Please provide the shift end time",
            atLeastOneDay: "At least one day of the week must have the start and end times filled out"
          },
          weekDays: {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday"
          }
        }
      },
      financeiro: {
        title: "Financial",
        subTitle: "Invoices",
        dueWarning: "Attention: Your subscription has expired. Please contact support to resolve this issue.",
        table: {
          details: "Details",
          users: "Users",
          connections: "Connections",
          queues: "Queues",
          value: "Value",
          dueDate: "Due Date",
          status: "Status",
          action: "Action"
        },
        status: {
          paid: "Paid",
          expired: "Expired",
          open: "Open"
        },
        boolean: {
          yes: "Yes",
          no: "No"
        },
        buttons: {
          pay: "PAY",
          paid: "PAID"
        },
        checkout: {
          title: "Almost there!",
          steps: {
            data: "Data",
            customize: "Customize",
            review: "Review"
          },
          buttons: {
            back: "BACK",
            pay: "PAY",
            next: "NEXT"
          },
          toasts: {
            success: "Subscription successful! Awaiting payment confirmation."
          },
          notFound: "Not Found",
          form: {
            fullName: "Full name*",
            address: "Address*",
            city: "City*",
            state: "State/Province*",
            document: "Tax ID*",
            country: "Country*"
          },
          errors: {
            fullName: "Full name is required",
            address: "Address is required",
            city: "City is required",
            state: "State/Province is required",
            document: "Tax ID is required",
            documentInvalid: "Invalid Tax ID format",
            country: "Country is required"
          },
          payment: {
            planDescription: {
              users: "Users",
              connections: "Connection",
              queues: "Queues"
            },
            selectButton: "SELECT",
            priceSuffix: "/month"
          },
          review: {
            title: "Subscription Summary",
            planDetails: "Plan Details",
            users: "Users:",
            connections: "Connection:",
            queues: "Queues:",
            billing: "Billing:",
            billingValue: "Monthly",
            paymentInfo: "Payment Information",
            email: "Email:",
            name: "Name:",
            document: "Tax ID:",
            total: "Total:"
          },
          success: {
            total: "TOTAL",
            copied: "Copied",
            copyButton: "Copy PIX QR Code",
            instructions: "To complete, simply make the payment by scanning or pasting the Pix code above, or choose to Pay with Credit Card below.",
            payWithCard: "Pay with Credit Card",
            payWithMercadoPago: "Pay with MercadoPago",
            payWithAsaas: "Pay with Asaas",
            toast: "Your license has been renewed until {dueDate}!"
          }
        }
      }
    },
    whatsappModalRel: {
      form: {
        isOficial: "Support Report",
        ticketId: "Ticket ID",
        client: "Customer",
        number: "Number",
        agent: "Agent",
        date: "Date",
        lastMessage: "Last Message",
        fullReport: "The full report is attached above",
        resolveAndTriggerIntegration: "Resolve and Trigger Integration",
        elementNotFoundForExport: "Element not found for export.",
        reportFilename: "support_report",
      },
      conversationFlows: {
    title: "Conversation Flows",
    searchPlaceholder: "Search flows...",
    newFlow: "New Flow",
    createFirstFlow: "Create First Flow",
    noFlowsCreated: "No flow created yet",
    noFlowsFound: "No flow found",
    createFirstFlowDescription: "Create your first conversation flow to automate attendances",
    tryOtherSearchTerms: "Try using other search terms",
    active: "Active",
    inactive: "Inactive",
    editFlow: "Edit flow",
    deleteFlow: "Delete flow",
    duplicateFlow: "Duplicate flow",
    flowDeleted: "Flow deleted successfully",
    flowDuplicated: "Flow duplicated successfully",
    deleteFlowTitle: "Delete flow",
    duplicateFlowTitle: "Duplicate flow",
    deleteFlowMessage: "This action cannot be undone. All related integrations will be lost.",
    duplicateFlowMessage: "A copy of the flow will be created for you to edit.",
    createFlow: "Create flow",
    ariaLabel: "Create flow"
  },
  flowDefault: {
    title: "Default Flow",
    save: "Save",
    welcomeFlow: "Welcome Flow",
    welcomeFlowDescription: "This flow is triggered only for new contacts, people you don't have in your contact list and who sent a message",
    defaultResponseFlow: "Default Response Flow",
    defaultResponseFlowDescription: "Default Response is sent with any character different from a keyword. ATTENTION! It will be triggered if the service is already closed and 6 hours have passed since its closure.",
    chooseFlow: "Choose a flow",
    defaultFlowsUpdated: "Default flows updated"
  },
  validation: {
    required: "Required",
    tooShort: "Too short",
    tooLong: "Too long",
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    phoneRequired: "Phone is required",
    invalidEmail: "Invalid email",
    invalidPhone: "Invalid phone",
    minLength: "Must be at least {{count}} characters",
    maxLength: "Must be at most {{count}} characters",
    promptRequired: "Describe the training for Artificial Intelligence",
    invalidModel: "Invalid model",
    modelRequired: "Inform the model",
    minTokens: "Minimum 10 tokens",
    maxTokens: "Maximum 4000 tokens",
    maxTokensGemini: "Maximum 8000 tokens",
    maxTokensRequired: "Inform the maximum number of tokens",
    minTemperature: "Minimum 0",
    maxTemperature: "Maximum 2",
    temperatureRequired: "Inform the temperature",
    apiKeyRequired: "Inform the API Key",
    minMessages: "Minimum 1 message",
    maxMessages: "Maximum 100 messages",
    maxMessagesRequired: "Inform the maximum number of messages",
    voiceRequired: "Inform the mode for Voice",
    voiceKeyRequired: "Voice Key is required for voice synthesis",
    voiceRegionRequired: "Voice Region is required for voice synthesis",
    invalidFlowMode: "Invalid flow mode",
    flowModeRequired: "Select the flow mode",
    minInteractions: "Minimum 1 interaction",
    maxInteractions: "Maximum 50 interactions",
    minTimeout: "Minimum 1 minute",
    maxTimeout: "Maximum 60 minutes",
    keywordRequired: "Keyword cannot be empty",
    minKeywordsRequired: "At least one keyword is required in temporary mode",
    objectiveRequired: "Objective is required when auto complete is active"
  }
    },
  },
};

const finalizacaoVendaModal = {
  title: "Service Finalization - Sale Value",
  loading: "Loading settings...",
  form: {
    saleCompletedLabel: "Was the sale completed?",
    saleCompletedYes: "Yes, sale completed",
    saleCompletedNo: "No, sale not completed",
    saleValue: "Sale Value",
    noSaleReason: "Reason for No Sale",
    finalizationReason: "Finalization Reason",
    selectReason: "Select a reason"
  },
  buttons: {
    cancel: "Cancel",
    finalize: "Finalize Service",
    finalizing: "Finalizing..."
  },
  toasts: {
    saleValueRequired: "Please inform the sale value.",
    noSaleReasonRequired: "Please select the reason for the no-sale.",
    finalizationReasonRequired: "Please select the finalization reason."
  }
};
const signup = {
  title: "Sign Up",
  toasts: {
    disabled: "User registration is disabled by the administrator.",
    success: "User registered successfully!",
    cpfValid: "Valid CPF!",
    cpfInvalid: "Invalid CPF!",
    cnpjValid: "Valid CNPJ! Company name auto-filled.",
    documentInvalid: "Invalid document or not found.",
    documentValidationError: "Error validating document. Please try again."
  },
  form: {
    document: "CPF or CNPJ",
    documentHelper: "Enter CPF (11 digits) or CNPJ (14 digits)",
    company: "Company Name",
    name: "Name",
    email: "Email",
    password: "Password",
    phone: "Phone",
    plan: "Plan"
  },
  planDetails: {
    users: "Users",
    connections: "Connections",
    queues: "Queues"
  },
  buttons: {
    submit: "Sign Up",
    login: "Already have an account? Sign in"
  },
  errors: {
    nameTooShort: "Too short!",
    nameTooLong: "Too long!",
    nameRequired: "Required",
    companyTooShort: "Too short!",
    companyTooLong: "Too long!",
    companyRequired: "Required",
    documentInvalid: "CPF must be 11 digits or CNPJ must be 14 digits",
    documentRequired: "CPF or CNPJ is required",
    passwordTooShort: "Too short!",
    passwordTooLong: "Too long!",
    emailInvalid: "Invalid email",
    emailRequired: "Required",
    phoneRequired: "Required",
    documentValidation: "Error validating document:"
  }
};


export { messages };
