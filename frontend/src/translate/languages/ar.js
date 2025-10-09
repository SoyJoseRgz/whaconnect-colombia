const messages = {
  ar: {
    translations: {
      signup: {
        title: "إنشاء حساب",
        toasts: {
          success: "تم إنشاء المستخدم بنجاح! قم بتسجيل الدخول!!!.",
          disabled:
            "تسجيل المستخدمين معطل حالياً. يرجى المحاولة مرة أخرى لاحقاً.",
          fail: "خطأ في إنشاء المستخدم. تحقق من البيانات المدخلة.",
        },
        form: {
          name: "الاسم",
          email: "البريد الإلكتروني",
          password: "كلمة المرور",
          company: "اسم المنظمة",
          phone: "واتس اب (كود الدولة + الرقم)",
        },
        buttons: {
          submit: "تسجيل",
          login: "لديك حساب بالفعل؟ ادخل!",
        },
      },
      ticketInfo: {
        copyPhone: "نسخ الهاتف",
        quickMessages: "الردود السريعة",
        phonecopied: "تم نسخ الهاتف إلى الحافظة!",
        noPhone: "لا يوجد هاتف متاح للنسخ",
        copyError: "خطأ في نسخ الهاتف",
      },
      login: {
        title: "تسجيل الدخول",
        form: {
          email: "البريد الإلكتروني",
          password: "كلمة المرور",
          button: "الوصول",
        },
        buttons: {
          submit: "دخول",
          register: "ليس لديك حساب؟ أنشئ حساباً!",
        },
      },
      companies: {
        title: "تسجيل الشركة",
        form: {
          name: "اسم الشركة",
          plan: "الخطة",
          token: "الرمز المميز",
          submit: "تسجيل",
          success: "تم إنشاء الشركة بنجاح!",
        },
      },
      auth: {
        toasts: {
          success: "تم تسجيل الدخول بنجاح!",
        },
        dueDate: {
          expiration: "ينتهي اشتراكك في",
          days: "أيام!",
          day: "يوم!",
          expirationToday: "ينتهي اشتراكك اليوم!",
        },
        token: "الرمز المميز",
      },
      dashboard: {
        filters: "المرشحات",
        filter: "تصفية ",
        tabs: {
          indicators: "المؤشرات",
          assessments: "NPS",
          attendants: "المشغلين",
        },
        charts: {
          perDay: {
            title: "المحادثات اليوم: ",
          },
        },
        cards: {
          inAttendance: "في المحادثة",
          waiting: "في الانتظار",
          activeAttendants: "المشغلين النشطين",
          finalized: "منتهية",
          newContacts: "جهات اتصال جديدة",
          totalReceivedMessages: "الرسائل المستلمة",
          totalSentMessages: "الرسائل المرسلة",
          averageServiceTime: "متوسط وقت المحادثة",
          averageWaitingTime: "متوسط وقت الانتظار",
          status: "الحالة (الحالية)",
          activeTickets: "المحادثات النشطة",
          passiveTickets: "المحادثات غير النشطة",
          groups: "المجموعات",
        },
        users: {
          name: "الاسم",
          numberAppointments: "عدد المحادثات",
          statusNow: "الحالية",
          totalCallsUser: "إجمالي المحادثات لكل مستخدم",
          totalAttendances: "إجمالي المحادثات",
        },
        date: {
          initialDate: "التاريخ الأولي",
          finalDate: "التاريخ النهائي",
        },
        licence: {
          available: "متاح حتى",
        },
        assessments: {
          totalCalls: "إجمالي المحادثات",
          callsWaitRating: "محادثات تنتظر التقييم",
          callsWithoutRating: "محادثات بدون تقييم",
          ratedCalls: "محادثات مقيمة",
          evaluationIndex: "مؤشر التقييم",
          score: "النتيجة",
          promoters: "الداعمين",
          neutral: "المحايدين",
          detractors: "المنتقدين",
        },
      },
      reports: {
        title: "تقرير الاستطلاعات المنجزة",

        operator: "المشغل",
        period: "الفترة",
        until: "حتى",
        date: "التاريخ",
        reportTitle: "التقارير",
        calls: "المحادثات",
        search: "الاستطلاعات",
        durationCalls: "مدة المحادثات",
        grupoSessions: "محادثات المجموعات",
        groupTicketsReports: {
          timezone: "Asia/Riyadh",
          msgToast: "جاري إنشاء التقرير المضغوط، يرجى الانتظار.",
          errorToast: "خطأ في إنشاء التقرير",
          back: "العودة",
          groupServiceReport: "تقرير محادثات المجموعات",
          loading: "جاري التحميل...",
          contact: "جهة الاتصال",
          dateOpen: "تاريخ الفتح",
          dateLastUpdated: "تاريخ آخر تحديث",
          agent: "من قام بالمحادثة",
          agentClosed: "من أغلق المحادثة",
          waitingAssistance: "في انتظار المحادثة",
          process: "في المحادثة",
        },
        researchReports: {
          response: "إجابة",
          active: "(نشط)",
          inactive: "(غير نشط)",
          quantity: "الكمية",
          percentage: "نسبة مئوية",
          title: "تقرير الاستطلاعات المنجزة",
          activeSearch: "بحث نشط",
          inactiveSearch: "بحث غير نشط",
        },
        ticketDurationDetail: {
          msgToast: "جاري إنشاء التقرير المضغوط، يرجى الانتظار.",
          title: "تقرير مدة المحادثة",
          startService: "بداية المحادثة",
          lastUpdated: "آخر تحديث",
          lastAgent: "آخر مشغل",
          durationFinished: "المدة بعد الانتهاء",
        },
        ticketDuration: {
          title: "تقرير مدة المحادثات",
          contact: "جهة الاتصال",
          open: "مفتوحة",
          pending: "معلقة",
          finished: "منتهية",
          durationFinished: "مدة المنتهية",
          durationAfterFinished: "المدة بعد الانتهاء",
          actions: "الإجراءات",
        },
        ticketReports: {
          msgToast: "جاري إنشاء التقرير المضغوط، يرجى الانتظار.",
          title: "تقرير المحادثات",
        },
        exportExcel: {
          title: "تقارير المحادثات",
          startDate: "التاريخ الأولي",
          endDate: "التاريخ النهائي",
          notInformed: "غير محدد",
          columns: {
            id: "المعرف",
            connection: "الاتصال",
            contact: "جهة الاتصال",
            user: "المستخدم",
            queue: "الطابور",
            status: "الحالة",
            lastMessage: "آخر رسالة",
            openDate: "تاريخ الفتح",
            openTime: "وقت الفتح",
            closeDate: "تاريخ الإغلاق",
            closeTime: "وقت الإغلاق",
            supportTime: "وقت المحادثة",
            nps: "NPS",
          },
        },
        pdf: {
          title: "قائمة المحادثات المنجزة",
          exportTitle: "قائمة محادثات المجموعات المنجزة",
        },
      },
      todo: {
        newTask: "مهمة جديدة",
        add: "إضافة",
        task: "المهام",
      },
      contactImportWpModal: {
        title: "تصدير جهات الاتصال إلى إكسل",
        buttons: {
          downloadModel: "تنزيل قالب الاستيراد",
          closed: "إغلاق",
          import: "استيراد جهات الاتصال (من ملف)",
        },
        status: {
			completed: "اكتمل الاستيراد بنجاح",
			inProgress: "الاستيراد قيد التقدم {{current}} من {{total}}، لا تترك هذه الشاشة حتى يكتمل الاستيراد"
		},
		sheetName: "جهات الاتصال"
      },
      connections: {
        title: "الاتصالات",
        waitConnection: "انتظر... سيتم إعادة تشغيل اتصالاتك!",
        newConnection: "اتصال جديد",
        restartConnections: "إعادة تشغيل الاتصالات",
        callSupport: "الاتصال بالدعم",
        newConnection: "اتصال جديد",
        connectYourServiceChannelsToReceiveMessagesAndStartConversationsWithYourCustomers:
          " اربط قنوات الخدمة الخاصة بك لاستقبال الرسائل وبدء المحادثات مع عملائك.",
        client: "العميل",
        connectedConnections: " الاتصالات المتصلة ",
        disconnectedConnections: "الاتصالات المنقطعة ",
        totalConnections: " إجمالي الاتصالات",
        total: "الإجمالي",
        connections: "اتصالات:",

        toasts: {
          deleted: "تم حذف الاتصال بنجاح!",
          closedimported: "نحن نغلق المحادثات المستوردة، يرجى الانتظار قليلاً",
        },
        confirmationModal: {
          closedImportedTitle: "إغلاق المحادثات المستوردة",
          closedImportedMessage: "إذا أكدت سيتم إغلاق جميع المحادثات المستوردة",
          deleteTitle: "حذف",
          deleteMessage: "هل أنت متأكد؟ لا يمكن التراجع عن هذا الإجراء.",
          disconnectTitle: "قطع الاتصال",
          disconnectMessage: "هل أنت متأكد؟ ستحتاج إلى قراءة رمز QR مرة أخرى.",
        },
        buttons: {
          add: "إضافة اتصال",
          disconnect: "قطع الاتصال",
          tryAgain: "حاول مرة أخرى",
          qrcode: "رمز QR",
          newQr: "رمز QR جديد",
          closedImported: "إغلاق جميع المحادثات المستوردة",
          preparing: "تجهيز الرسائل للاستيراد",
          importing: "استيراد رسائل الواتس اب",
          newQr: "رمز QR جديد",
          processed: "تمت المعالجة",
          in: "من",
          connecting: "جاري الاتصال",
        },
        typography: {
          processed: "تمت المعالجة",
          in: "من",
          date: "تاريخ الرسالة",
        },
        toolTips: {
          disconnected: {
            title: "فشل في بدء جلسة الواتس اب",
            content:
              "تأكد من أن هاتفك متصل بالإنترنت وحاول مرة أخرى، أو اطلب رمز QR جديد",
          },
          qrcode: {
            title: "في انتظار قراءة رمز QR",
            content: "انقر على زر 'رمز QR' واقرأ رمز QR بهاتفك لبدء الجلسة",
          },
          connected: {
            title: "تم تأسيس الاتصال!",
          },
          timeout: {
            title: "فُقد الاتصال مع الهاتف",
            content:
              "تأكد من أن هاتفك متصل بالإنترنت والواتس اب مفتوح، أو انقر على زر 'قطع الاتصال' للحصول على رمز QR جديد",
          },
        },
        table: {
          name: "الاسم",
          status: "الحالة",
          lastUpdate: "آخر تحديث",
          default: "افتراضي",
          actions: "الإجراءات",
          session: "الجلسة",
          number: "رقم الواتس اب",
          color: "اللون",
        },
      },
      showTicketOpenModal: {
        title: {
          header: "محادثة موجودة",
        },
        form: {
          message: "جهة الاتصال هذه في محادثة بالفعل:",
          user: "المشغل",
          queue: "الطابور",
          messageWait:
            "جهة الاتصال هذه تنتظر المحادثة بالفعل. اطلع على تبويب الانتظار!",
        },
      },
      showTicketLogModal: {
        title: {
          header: "السجلات",
        },
        options: {
          create: "تم إنشاء المحادثة.",
          chatBot: "تم بدء البوت.",
          queue: " - تم تحديد الطابور.",
          open: " بدأ المحادثة.",
          access: "دخل إلى المحادثة.",
          transfered: "نقل المحادثة.",
          receivedTransfer: "استلم المحادثة المنقولة.",
          pending: "أعاد إلى الطابور.",
          closed: "أغلق المحادثة",
          reopen: "أعاد فتح المحادثة",
          redirect: "- تم التوجيه",
          clientClosed: "العميل أغلق المحادثة",
        },
      },
      whatsappModal: {
        title: {
          add: "إضافة اتصال",
          edit: "تعديل الاتصال",
        },
        tabs: {
          general: "عام",
          messages: "الرسائل",
          assessments: "NPS",
          integrations: "التكاملات",
          schedules: "ساعات العمل",
        },
        form: {
          importOldMessagesEnable: "استيراد رسائل الجهاز",
          importOldMessages: "تاريخ بداية الاستيراد",
          importRecentMessages: "تاريخ نهاية الاستيراد",
          importOldMessagesGroups: "استيراد رسائل المجموعات",
          closedTicketsPostImported: "إنهاء المحادثات بعد الاستيراد",
          name: "الاسم",
          queueRedirection: "إعادة توجيه الطابور",
          queueRedirectionDesc:
            "اختر طابوراً لجهات الاتصال التي لا تملك طابوراً ليتم توجيهها",
          default: "افتراضي",
          group: "السماح بالمجموعات",
          timeSendQueue: "الوقت بالدقائق لإعادة التوجيه للطابور",
          importAlert:
            "تنبيه: عند الحفظ، سيتم إنهاء اتصالك، وستحتاج لقراءة رمز QR مرة أخرى لاستيراد الرسائل",
          groupAsTicket: "التعامل مع المجموعات كمحادثة",
          timeCreateNewTicket: "إنشاء محادثة جديدة في x دقائق",
          maxUseBotQueues: "إرسال البوت x مرات",
          maxUseInactiveTime: "إرسال تدفق عدم النشاط x مرات",
          timeUseBotQueues: "إرسال البوت في x دقائق",
          timeToReturnQueue: "الوقت للعودة للطابور بالدقائق",
          timeAwaitActiveFlow: "الوقت لانتظار تفعيل التدفق",
          expiresTicket: "إنهاء المحادثات المفتوحة بعد x دقائق",
          expiresTicketNPS: "إنهاء المحادثات المنتظرة للتقييم بعد x دقائق",
          maxUseBotQueuesNPS: "الحد الأقصى لعدد مرات إرسال التقييم",
          closeLastMessageOptions1: "من المشغل/العميل",
          closeLastMessageOptions2: "من المشغل",
          outOfHoursMessage: "رسالة خارج ساعات العمل",
          greetingMessage: "رسالة الترحيب",
          complationMessage: "رسالة الإنهاء",
          lgpdLinkPrivacy: "رابط سياسة الخصوصية",
          lgpdMessage: "رسالة ترحيب LGPD",
          lgpdDeletedMessages: "إخفاء الرسالة المحذوفة من جهة الاتصال",
          lgpdSendMessage: "طلب تأكيد جهة الاتصال دائماً",
          ratingMessage: "رسالة التقييم - المقياس يجب أن يكون من 0 إلى 10",
          token: "رمز للتكامل الخارجي",
          sendIdQueue: "الطابور",
          inactiveMessage: "رسالة عدم النشاط",
          timeInactiveMessage: "الوقت بالدقائق لإرسال تنبيه عدم النشاط",
          flowInactiveTime: "الوقت بالدقائق لإرسال تدفق عدم النشاط",
          whenExpiresTicket: "إنهاء المحادثات المفتوحة عندما تكون آخر رسالة من",
          expiresInactiveMessage: "رسالة الإنهاء بسبب عدم النشاط",
          prompt: "الموجه",
          collectiveVacationEnd: "التاريخ النهائي",
          collectiveVacationStart: "التاريخ الأولي",
          collectiveVacationMessage: "رسالة الإجازة الجماعية",
          queueIdImportMessages: "طابور لاستيراد الرسائل",
          isOficial: "رسمي",
          phone_number_id: "معرف رقم الهاتف",
          waba_id: "معرف Waba",
          send_token: "رمز الإرسال",
          business_id: "معرف العمل",
          phone_number: "رقم الهاتف",
          triggerIntegrationOnClose: "تفعيل التكامل عند إغلاق المحادثة",
          enableIntegration: "تفعيل التكامل",
        },
        buttons: {
          okAdd: "إضافة",
          okEdit: "حفظ",
          cancel: "إلغاء",
        },
        menuItem: {
          enabled: "مفعل",
          disabled: "معطل",
          minutes: "دقائق",
        },
        success: "تم حفظ الاتصال بنجاح.",
        errorSendQueue:
          "تم تحديد وقت لإعادة توجيه الطابور، لكن لم يتم اختيار طابور للتوجيه. يجب ملء الحقلين معاً",
        errorExpiresNPS: "مطلوب تحديد وقت للتقييم عند استخدام NPS.",
        errorRatingMessage: "مطلوب تحديد رسالة تقييم عند استخدام NPS.",
      },
      qrCode: {
        message: "اقرأ رمز QR لبدء الجلسة",
      },
      contacts: {
        title: "جهات الاتصال",
        toasts: {
          deleted: "تم حذف جهة الاتصال بنجاح!",
        },
        searchPlaceholder: "البحث...",
        conversationFlows: "تدفقات المحادثة",
        addFlow: "إضافة تدفق",
        editFlow: "تعديل التدفق ",
        confirmationModal: {
          deleteTitle: "حذف ",
          importTitlte: "استيراد جهات الاتصال",
          exportContact: "تصدير جهات الاتصال",
          deleteMessage:
            "هل أنت متأكد من حذف جهة الاتصال هذه؟ جميع المحادثات المرتبطة ستفقد.",
          blockContact: "هل أنت متأكد من حظر جهة الاتصال هذه؟",
          unblockContact: "هل أنت متأكد من إلغاء حظر جهة الاتصال هذه؟",
          importMessage: "هل تريد استيراد جميع جهات الاتصال من الهاتف؟",
          importChat: "استيراد المحادثات",
          wantImport: "هل تريد استيراد جميع المحادثات من الهاتف؟",
        },
        buttons: {
          import: "استيراد جهات الاتصال",
          add: "إضافة جهة اتصال",
          export: "تصدير جهة الاتصال",
          downloadModel: "تنزيل النموذج",
          close: "إغلاق",
        },
        table: {
          name: "الاسم",
          whatsapp: "الاتصال",
          email: "البريد الإلكتروني",
          actions: "الإجراءات",
          lastMessage: "آخر رسالة",
          wallet: "المحفظة",
        },
        table: {
          name: "الاسم",
          whatsapp: "الاتصال",
          email: "البريد الإلكتروني",
          actions: "الإجراءات",
          lastMessage: "آخر رسالة",
          wallet: "المحفظة",
          status: "الحالة",
          unassigned: "غير معين",
          userNotFound: "المستخدم غير موجود"
        },
        buttons: {
          add: "إضافة جهة اتصال",
          deleteAll: "حذف جميع جهات الاتصال"
        },
        menu: {
          importYourPhone: "استيراد من الجهاز الافتراضي",
          importToExcel: "استيراد / تصدير من إكسل",
          importexport: "استيراد / تصدير",
        },
      },
      forwardMessage: {
        text: "معاد التوجيه",
      },
      forwardMessageModal: {
        title: "إعادة توجيه الرسالة",
        buttons: {
          ok: "إعادة توجيه",
        },
      },
      dialog: {
        imageTitle: "صورة الملف الشخصي - {contactName}",
        imageNotAvailable: "الصورة غير متوفرة"
      },
      tooltips: {
        deleteAll: "حذف جميع جهات الاتصال",
        deleteSelected: "حذف جهات الاتصال المحددة",
        cancelSelection: "إلغاء التحديد"
      },
      toolbar: {
        selectedAll: "تم تحديد {count} جهة اتصال (جميع جهات الاتصال)"
      },
      title: {
        selectedAll: "- تم تحديد {count} (الكل)"
      },
      promptModal: {
        form: {
          name: "الاسم",
          prompt: "الموجه",
          voice: "الصوت",
          max_tokens: "الحد الأقصى للرموز في الإجابة",
          temperature: "درجة الحرارة",
          apikey: "مفتاح API",
          max_messages: "الحد الأقصى للرسائل في التاريخ",
          voiceKey: "مفتاح API الصوت",
          voiceRegion: "منطقة الصوت",
        },
        success: "تم حفظ الموجه بنجاح!",
        title: {
          add: "إضافة موجه",
          edit: "تعديل الموجه",
        },
        buttons: {
          okAdd: "إضافة",
          okEdit: "حفظ",
          cancel: "إلغاء",
        },
      },
      prompts: {
        title: "الموجهات",
        table: {
          name: "الاسم",
          queue: "القسم/الطابور",
          max_tokens: "الحد الأقصى لرموز الإجابة",
          actions: "الإجراءات",
        },
        confirmationModal: {
          deleteTitle: "حذف",
          deleteMessage: "هل أنت متأكد؟ لا يمكن التراجع عن هذا الإجراء!",
        },
        buttons: {
          add: "إضافة موجه",
        },
      },
      contactModal: {
        title: {
          add: "إضافة جهة اتصال",
          edit: "تعديل جهة الاتصال",
        },
        form: {
          mainInfo: "بيانات جهة الاتصال",
          extraInfo: "معلومات إضافية",
			birthDate: "تاريخ الميلاد",
			birthDateHelper: "تاريخ الميلاد لرسائل عيد الميلاد التلقائية",
          name: "الاسم",
          number: "رقم الواتس اب",
          email: "البريد الإلكتروني",
          extraName: "اسم الحقل",
          extraValue: "القيمة",
          chatBotContact: "تعطيل البوت",
          termsLGDP: "تم قبول شروط LGPD في:",
          whatsapp: "مصدر الاتصال: ",
          assignWallet: "محفظة العميل",
        },
        buttons: {
          addExtraInfo: "إضافة معلومة",
          okAdd: "إضافة",
          okEdit: "حفظ",
          cancel: "إلغاء",
        },
        success: "تم حفظ جهة الاتصال بنجاح.",
        walletLinked: "تم ربط جهة الاتصال بمحفظتك بنجاح!",
        walletError: "المستخدم لا يملك طوابير مرتبطة",
        saveFirst: "يجب حفظ جهة الاتصال أولاً",
      },
	contactImport: {
		title: "استيراد جهات الاتصال من ملف",
		validate: "التحقق من جهات الاتصال على WhatsApp",
		importing: "جاري الاستيراد... يرجى الانتظار",
		buttons: {
			import: "استيراد جهات الاتصال",
			cancel: "إلغاء",
			importMore: "استيراد المزيد من جهات الاتصال",
			tryAgain: "حاول مرة أخرى",
			back: "رجوع"
		},
		table: {
			name: "الاسم",
			number: "الرقم",
			email: "البريد الإلكتروني",
			tags: "العلامات",
			wallet: "المحفظة"
		},
		results: {
			title: "نتائج الاستيراد",
			created: "تم إنشاء {{count}} جهة اتصال بنجاح",
			ignored: "تم تجاهل {{count}} جهة اتصال (رقم غير صالح أو غير محدد للتحديث)"
		},
		processing: "جاري معالجة الملف...",
		invalidFile: {
			title: "ملف غير صالح!",
			message: "الملف الذي حاولت استيراده غير صالح. يرجى المحاولة مرة أخرى بملف بالتنسيق الصحيح."
		},
		dropzone: {
			title: "انقر أو اسحب ملف Excel",
			formats: "* التنسيقات المقبولة: xls, xlsx, csv, txt",
			instructions: "لاستيراد جهات الاتصال، يجب أن يكون لديك على الأقل أعمدة الاسم ورقم الهاتف."
		},
		errors: {
			noNumber: "لم يتم تحديد حقل رقم جهة الاتصال",
			noName: "لم يتم تحديد حقل اسم جهة الاتصال",
			noContact: "لم يتم تحديد أي جهة اتصال"
		},
		toasts: {
			success: "تم الاستيراد بنجاح! تم استيراد {{count}} جهة اتصال.",
			warn: "اكتمل الاستيراد: تم استيراد {{imported}} جهة اتصال وتجاهل {{ignored}}.",
			fail: "فشل الاستيراد. لم يتم استيراد أي جهات اتصال."
		}
	},
	contactImportWpModal: {
		status: {
			completed: "اكتمل الاستيراد بنجاح",
			inProgress: "الاستيراد قيد التقدم {{current}} من {{total}}، لا تترك هذه الشاشة حتى يكتمل الاستيراد"
		},
		sheetName: "جهات الاتصال"
	},
	contactNotes: {
		toasts: {
			addSuccess: "تمت إضافة الملاحظة بنجاح!",
			deleteSuccess: "تم حذف الملاحظة بنجاح!"
		},
		confirmationModal: {
			deleteTitle: "حذف السجل",
			deleteMessage: "هل تريد حقًا حذف هذا السجل؟"
		},
		buttons: {
			cancel: "إلغاء",
			save: "حفظ",
			close: "إغلاق"
		},
		editModal: {
			title: "تعديل الملاحظة",
			label: "تعديل الملاحظة"
		}
	},
	contactDeleteConfirm: {
		expected: {
			all: "حذف الكل",
			selected: "حذف المحدد"
		},
		error: "اكتب بالضبط: {{text}}",
		title: {
			all: "حذف كل {{count}} جهات الاتصال؟",
			selected: "حذف {{count}} جهات اتصال محددة؟"
		},
		alert: {
			all: "⚠️ تحذير: سيؤدي هذا الإجراء إلى حذف جميع {{count}} جهات الاتصال من الشركة بشكل دائم!",
			selected: "سيؤدي هذا الإجراء إلى حذف {{count}} جهات اتصال محددة بشكل دائم."
		},
		message: {
			all: "لا يمكن التراجع عن هذه العملية. سيتم فقدان جميع جهات الاتصال وسجلات رسائلهم وعلاماتهم وعلاقاتهم بشكل دائم.",
			selected: "سيتم حذف جهات الاتصال المحددة وبياناتها ذات الصلة بشكل دائم."
		},
		instruction: "للتأكيد، اكتب بالضبط: <strong>{{text}}</strong>",
		label: "تأكيد",
		buttons: {
			cancel: "إلغاء",
			confirmAll: "حذف الكل",
			confirmSelected: "حذف المحدد"
		}
	},
      wallets: {
        title: "محافظ جهات الاتصال",
        searchPlaceholder: "البحث عن جهات الاتصال...",
        filterByUser: "تصفية حسب المستخدم",
        allUsers: "جميع المستخدمين",
        contact: "جهة الاتصال",
        user: "المستخدم",
        queue: "الطابور",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        actions: "الإجراءات",
        editWallet: "تعديل المحفظة",
        selectUser: "اختيار المستخدم",
        selectQueue: "اختيار الطابور",
        selectUserAndQueue: "اختر مستخدماً وطابوراً",
        cancel: "إلغاء",
        save: "حفظ",
        confirmDeleteTitle: "تأكيد الحذف",
        confirmDeleteMessage:
          "هل أنت متأكد من إزالة جهة الاتصال هذه من المحفظة؟",
        deleteSuccess: "تم إزالة جهة الاتصال من المحفظة بنجاح!",
        updateSuccess: "تم تحديث المحفظة بنجاح!",
        wallet: "المحفظة",
      },
      queueModal: {
        title: {
          queueData: "بيانات الطابور",
          text: "ساعات الخدمة",
          add: "إضافة طابور",
          edit: "تعديل الطابور",
          confirmationDelete: "هل أنت متأكد؟ جميع خيارات التكاملات ستحذف.",
        },
        form: {
          name: "الاسم",
          color: "اللون",
          orderQueue: "ترتيب الطابور (البوت)",
          rotate: "التناوب",
          timeRotate: "وقت التناوب",
          typeRandomMode: "نوع التناوب",
          greetingMessage: "رسالة الترحيب",
          complationMessage: "رسالة الإنهاء",
          outOfHoursMessage: "رسالة خارج ساعات العمل",
          token: "الرمز المميز",
          integrationId: "التكامل",
          fileListId: "قائمة الملفات",
          closeTicket: "إغلاق المحادثة",
          queueType: "نوع القائمة",
          message: "رسالة الإرجاع",
          queue: "طابور النقل",
          integration: "التكامل",
          file: "قائمة الملفات",
        },
        buttons: {
          okAdd: "إضافة",
          okEdit: "حفظ",
          cancel: "إلغاء",
        },
        bot: {
          title: "الخيارات",
          toolTipTitle: "أضف خيارات لبناء بوت المحادثة",
          toolTip:
            "إذا كان هناك خيار واحد فقط، سيتم اختياره تلقائياً، مما يجعل البوت يجيب برسالة الخيار ويتابع",
          selectOption: "اختر خياراً",
          text: "النص",
          attendent: "المشغل",
          queue: "الطابور",
          integration: "التكامل",
          file: "الملف",
          toolTipMessageTitle: "الرسالة مطلوبة للانتقال للمستوى التالي",
          toolTipMessageContent: "الرسالة مطلوبة للانتقال للمستوى التالي",
          selectUser: "اختر مستخدماً",
          selectQueue: "اختر طابوراً",
          selectIntegration: "اختر تكاملاً",
          addOptions: "إضافة خيارات",
        },
        serviceHours: {
          dayWeek: "يوم الأسبوع",
          startTimeA: "الوقت الأولي - الدوام أ",
          endTimeA: "الوقت النهائي - الدوام أ",
          startTimeB: "الوقت الأولي - الدوام ب",
          endTimeB: "الوقت النهائي - الدوام ب",
          monday: "الاثنين",
          tuesday: "الثلاثاء",
          wednesday: "الأربعاء",
          thursday: "الخميس",
          friday: "الجمعة",
          saturday: "السبت",
          sunday: "الأحد",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "إضافة مشروع",
          edit: "تعديل المشروع",
        },
        form: {
          id: "المعرف",
          type: "النوع",
          name: "الاسم",
          projectName: "اسم المشروع",
          language: "اللغة",
          jsonContent: "محتوى Json",
          urlN8N: "الرابط",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "الوقت بالدقائق لانتهاء المحادثة",
          typebotKeywordFinish: "كلمة إنهاء المحادثة",
          typebotKeywordRestart: "كلمة إعادة تشغيل التدفق",
          typebotRestartMessage: "رسالة عند إعادة تشغيل المحادثة",
          typebotUnknownMessage: "رسالة الخيار غير الصحيح",
          typebotDelayMessage: "الفاصل الزمني (مللي ثانية) بين الرسائل",
        },
        buttons: {
          okAdd: "إضافة",
          okEdit: "حفظ",
          cancel: "إلغاء",
          test: "اختبار البوت",
        },
        messages: {
          testSuccess: "تم اختبار التكامل بنجاح!",
          addSuccess: "تم إضافة التكامل بنجاح.",
          editSuccess: "تم تعديل التكامل بنجاح.",
        },
      },
      userModal: {
        warning: "لاستيراد الرسائل يجب قراءة رمز QR مرة أخرى !!!",
        title: {
          add: "إضافة مستخدم",
          edit: "تعديل المستخدم",
          updateImage: "تحديث الصورة",
          removeImage: "حذف الصورة",
        },
        form: {
          name: "الاسم",
          email: "البريد الإلكتروني",
          password: "كلمة المرور",
          farewellMessage: "رسالة الوداع",
          profile: "الملف الشخصي",
          startWork: "بداية العمل",
          endWork: "نهاية العمل",
          whatsapp: "الاتصال الافتراضي",
          allTicketEnable: "مفعل",
          allTicketDisable: "معطل",
          allTicket: "عرض المحادثات بدون طابور",
          allowGroup: "السماح بالمجموعات",
          defaultMenuOpen: "مفتوح",
          defaultMenuClosed: "مغلق",
          defaultMenu: "القائمة الافتراضية",
          defaultTheme: "المظهر الافتراضي",
          defaultThemeDark: "داكن",
          defaultThemeLight: "فاتح",
          allHistoric: "عرض محادثات الطوابير الأخرى",
          allHistoricEnabled: "مفعل",
          allHistoricDisabled: "معطل",
          allUserChat: "عرض محادثات المستخدمين الآخرين",
          userClosePendingTicket: "السماح بإغلاق المحادثات المعلقة",
          showDashboard: "عرض لوحة التحكم",
          allowRealTime: "عرض لوحة المحادثات",
          allowConnections: "السماح بإجراءات الاتصالات",
          showContacts: "عرض جهات الاتصال",
          showCampaign: "عرض الحملات",
          showFlow: "عرض التدفقات",
        },
        tabs: {
          general: "عام",
          permissions: "الصلاحيات",
        },
        buttons: {
          okAdd: "إضافة",
          okEdit: "حفظ",
          cancel: "إلغاء",
          addImage: "إضافة صورة",
          editImage: "تعديل الصورة",
        },
        success: "تم حفظ المستخدم بنجاح.",
      },
      companyModal: {
        title: {
          add: "إضافة شركة",
          edit: "تعديل الشركة",
          message: "رسالة",
        },
        form: {
          name: "الاسم",
          email: "البريد الإلكتروني",
          passwordDefault: "كلمة المرور",
          numberAttendants: "المستخدمون",
          numberConections: "الاتصالات",
        },
        buttons: {
          okAdd: "إضافة",
          okEdit: "حفظ",
          cancel: "إلغاء",
        },
        success: "تم حفظ الشركة بنجاح.",
      },
      scheduleModal: {
        title: {
          add: "جدولة جديدة",
          edit: "تعديل الجدولة",
          message: "رسالة"
        },
        form: {
          body: "الرسالة",
          contact: "جهة الاتصال",
          sendAt: "تاريخ الجدولة"
        },
        buttons: {
          addSchedule: "إضافة جدولة",
          cancel: "إلغاء",
          okAdd: "إضافة"
        }
      },
      scheduleModal: {
        title: {
          add: "جدولة جديدة",
          edit: "تعديل الجدولة",
          message: "رسالة",
        },
        form: {
          body: "الرسالة",
          contact: "جهة الاتصال",
          sendAt: "تاريخ الجدولة",
          sentAt: "تاريخ الإرسال",
          assinar: "إرسال التوقيع",
        },
        buttons: {
          okAdd: "إضافة",
          okEdit: "حفظ",
          cancel: "إلغاء",
          addSchedule: "إضافة جدولة",
        },
        success: "تم حفظ الجدولة بنجاح.",
      },
      tagModal: {
        title: {
          add: "علامة جديدة",
          edit: "تعديل العلامة",
          addKanban: "مسار جديد",
          editKanban: "تعديل المسار",
        },
        form: {
          name: "الاسم",
          color: "اللون",
          timeLane: "الوقت بالدقائق لإعادة التوجيه للمسار",
          nextLaneId: "المسار",
          greetingMessageLane: "رسالة ترحيب المسار",
          rollbackLaneId: "العودة للمسار بعد استئناف المحادثة",
        },
        buttons: {
          okAdd: "إضافة",
          okEdit: "حفظ",
          cancel: "إلغاء",
        },
        success: "تم حفظ العلامة بنجاح.",
        successKanban: "تم حفظ المسار بنجاح.",
      },
      chatModal: {
        form: {
          name: "الاسم",
          description: "الوصف",
          groupDescription: "وصف المجموعة",
          users: "المستخدمون",
        },
      },
      fileModal: {
        title: {
          add: "إضافة قائمة ملفات",
          edit: "تعديل قائمة الملفات",
        },
        buttons: {
          okAdd: "حفظ",
          okEdit: "تعديل",
          cancel: "إلغاء",
          fileOptions: "إضافة ملف",
        },
        form: {
          name: "اسم قائمة الملفات",
          message: "تفاصيل القائمة",
          fileOptions: "قائمة الملفات",
          extraName: "رسالة لإرسالها مع الملف",
          extraValue: "قيمة الخيار",
        },
        success: "تم حفظ قائمة الملفات بنجاح!",
      },
      chat: {
        noTicketMessage: "اختر محادثة لبدء المراسلة.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "⬇️ اسحب وأفلت الملفات في الحقل أدناه ⬇️",
          titleFileList: "قائمة الملف(ات)",
        },
      },
      chatInternal: {
        new: "إنشاء مجموعة",
        modal: {
          conversation: "المحادثة",
          title: "الاسم",
          filterUsers: "اختيار الأعضاء",
          cancel: "إغلاق",
          save: "حفظ",
        },
        modalDelete: {
          title: "حذف المحادثة",
          message: "لا يمكن التراجع عن هذا الإجراء، تأكيد؟",
        },
      },
      ticketsManager: {
        questionCloseTicket: "هل تريد إغلاق جميع المحادثات؟",
        yes: "نعم",
        not: "لا",
        buttons: {
          newTicket: "جديدة",
          resolveAll: "حل الكل",
          close: "إغلاق",
          new: "جديدة",
        },
      },
      ticketsQueueSelect: {
        placeholder: "الطوابير",
      },
      tickets: {
        inbox: {
          closedAllTickets: "إغلاق جميع المحادثات؟",
          closedAll: "إغلاق الكل",
          newTicket: "محادثة جديدة",
          yes: "نعم",
          no: "لا",
          open: "مفتوحة",
          resolverd: "محلولة",
        },
        toasts: {
          deleted: "المحادثة التي كنت فيها تم حذفها.",
        },
        notification: {
          message: "رسالة من",
        },
        tabs: {
          open: { title: "مفتوحة" },
          closed: { title: "محلولة" },
          search: { title: "البحث" },
        },
        search: {
          placeholder: "البحث في المحادثات والرسائل",
          filterConections: "تصفية حسب الاتصال",
          filterConectionsOptions: {
            open: "مفتوح",
            closed: "مغلق",
            pending: "معلق",
          },
          filterUsers: "تصفية حسب المستخدمين",
          filterContacts: "تصفية حسب جهات الاتصال",
          ticketsPerPage: "محادثات لكل صفحة",
        },
        buttons: {
          showAll: "الكل",
          returnQueue: "إرجاع للطابور",
          scredule: "جدولة",
          deleteTicket: "حذف المحادثة",
        },
        closedTicket: {
          closedMessage: "إغلاق المحادثة مع رسالة الوداع",
          closedNotMessage: "إغلاق المحادثة بدون رسالة الوداع",
        },
      },
      transferTicketModal: {
        title: "نقل المحادثة",
        fieldLabel: "اكتب للبحث عن المستخدمين",
        fieldQueueLabel: "النقل للطابور",
        fieldQueuePlaceholder: "اختر طابوراً",
        fieldWhatsapp: "اختر واتس اب",
        noOptions: "لم يتم العثور على مستخدم بهذا الاسم",
        msgTransfer: "ملاحظات - رسالة داخلية، لن تذهب للعميل",
        buttons: {
          ok: "نقل",
          cancel: "إلغاء",
        },
      },
      chatInternal: {
        new: "إنشاء مجموعة",
        modal: {
          conversation: "المحادثة",
          title: "الاسم",
          filterUsers: "اختيار الأعضاء",
          cancel: "إغلاق",
          save: "حفظ",
        },
        modalDelete: {
          title: "حذف المحادثة",
          message: "لا يمكن التراجع عن هذا الإجراء، تأكيد؟",
        },
      },
      ticketsList: {
        called: "المحادثة",
        today: "اليوم",
        missedCall: "مكالمة صوتية/فيديو فائتة في",
        pendingHeader: "في الانتظار",
        assignedHeader: "جاري المحادثة",
        groupingHeader: "المجموعات",
        noTicketsTitle: "لا شيء هنا!",
        noTicketsMessage: "لا توجد محادثة بهذه الحالة أو المصطلح المبحوث عنه",
        noQueue: "بدون طابور",
        buttons: {
          accept: "قبول",
          cancel: "إلغاء",
          start: "بدء",
          closed: "إغلاق",
          reopen: "إعادة فتح",
          transfer: "نقل",
          ignore: "تجاهل",
          exportAsPDF: "تصدير كـ PDF",
          kanbanActions: "خيارات الكانبان",
        },
        acceptModal: {
          title: "قبول المحادثة",
          queue: "اختيار القسم",
        },
      },
      newTicketModal: {
        title: "إنشاء محادثة",
        fieldLabel: "اكتب للبحث عن جهة الاتصال",
        add: "إضافة",
        buttons: {
          ok: "حفظ",
          cancel: "إلغاء",
        },
      },
      SendContactModal: {
        title: "إرسال جهة اتصال",
        fieldLabel: "اكتب للبحث عن جهة الاتصال",
        add: "إضافة",
        buttons: {
          ok: "إرسال",
          cancel: "إلغاء",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "لوحة التحكم",
          connections: "الاتصالات",
          chatsTempoReal: "اللوحة",
          tickets: "المحادثات",
          quickMessages: "الردود السريعة",
          contacts: "جهات الاتصال",
          wallets: "المحافظ",
          queues: "الطوابير والبوت",
          tags: "العلامات",
          administration: "الإدارة",
          companies: "الشركات",
          users: "المستخدمون",
          settings: "الإعدادات",
          files: "قائمة الملفات",
          helps: "المساعدة",
          messagesAPI: "API",
          schedules: "الجدولة",
          campaigns: "الحملات",
          annoucements: "الإعلانات",
          chats: "المحادثة الداخلية",
          financeiro: "المالية",
          queueIntegration: "التكاملات",
          version: "الإصدار",
          kanban: "الكانبان",
          prompts: "Talk.Ai",
          allConnections: "إدارة الاتصالات",
          reports: "التقارير",
          management: "الإدارة",
        },
        appBar: {
          user: {
            profile: "الملف الشخصي",
            logout: "خروج",
            message: "مرحباً",
            messageEnd: "مرحباً بك في",
            active: "نشط حتى",
            goodMorning: "مرحباً،",
            myName: "اسمي",
            continuity: "وسأتابع محادثتك.",
            virtualAssistant: "المساعد الافتراضي",
            token: "رمز غير صالح، يرجى الاتصال بمسؤول المنصة.",
          },
          message: {
            location: "الموقع",
            contact: "جهة الاتصال",
          },
          notRegister: "لا يوجد سجل",
          refresh: "تحديث",
        },
      },
      languages: {
        undefined: "اللغة",
        "pt-BR": "البرتغالية",
        es: "الإسبانية",
        en: "الإنجليزية",
        tr: "التركية",
        ar: "العربية",
      },
      messagesAPI: {
        title: "API",
        toSend: "إرسال",
        textMessage: {
          number: "الرقم",
          body: "الرسالة",
          token: "الرمز المسجل",
          userId: "معرف المستخدم/المشغل",
          queueId: "معرف الطابور",
        },
        mediaMessage: {
          number: "الرقم",
          body: "اسم الملف",
          media: "الملف",
          token: "الرمز المسجل",
        },
        API: {
          title: "وثائق إرسال الرسائل",
          methods: {
            title: "طرق الإرسال",
            messagesText: "الرسائل النصية",
            messagesMidia: "الرسائل الوسائطية",
          },
          instructions: {
            title: "التعليمات",
            comments: "ملاحظات مهمة",
            comments1:
              "قبل إرسال الرسائل، يجب تسجيل الرمز المرتبط بالاتصال الذي سيرسل الرسائل. <br />للتسجيل، ادخل إلى قائمة 'الاتصالات'، انقر على زر تعديل الاتصال وأدخل الرمز في الحقل المخصص.",
            comments2:
              "رقم الإرسال يجب ألا يحتوي على قناع أو رموز خاصة ويجب أن يتكون من:",
            codeCountry: "كود الدولة",
            code: "كود المنطقة",
            number: "الرقم",
          },
          text: {
            title: "1. الرسائل النصية",
            instructions:
              "فيما يلي قائمة المعلومات المطلوبة لإرسال الرسائل النصية:",
          },
          media: {
            title: "2. الرسائل الوسائطية",
            instructions:
              "فيما يلي قائمة المعلومات المطلوبة لإرسال الرسائل النصية:",
          },
        },
      },
      notifications: {
        noTickets: "لا توجد إشعارات.",
      },
      triggerFlowModal: {
        title: "تفعيل التدفق",
        description:
          "اختر تدفقاً لتنفيذه في هذه المحادثة. ستتغير حالة المحادثة إلى 'بوت' أثناء التنفيذ.",
        selectFlow: "اختر تدفقاً",
        selectedFlow: "التدفق المختار",
        flowId: "معرف التدفق",
        noFlows: "لا توجد تدفقات نشطة",
        cancel: "إلغاء",
        trigger: "تفعيل التدفق",
        triggering: "جاري التفعيل...",
        success: "تم تفعيل التدفق بنجاح!",
        error: "خطأ في تفعيل التدفق",
      },
      quickMessages: {
        title: "الردود السريعة",
        searchPlaceholder: "البحث...",
        noAttachment: "بدون مرفق",
        confirmationModal: {
          deleteTitle: "حذف",
          deleteMessage: "هذا الإجراء لا يمكن التراجع عنه! هل تريد المتابعة؟",
        },
        selectMessage: "اختيار الرد السريع",
        hasMedia: "مع وسائط",
        global: "عام",
        noResultsFound: "لم يتم العثور على رد سريع لبحثك",
        noQuickMessages: "لا توجد ردود سريعة متاحة",
        buttons: {
          add: "إضافة",
          attach: "إرفاق ملف",
          cancel: "إلغاء",
          edit: "تعديل",
        },
        toasts: {
          success: "تم إضافة الاختصار بنجاح!",
          deleted: "تم حذف الاختصار بنجاح!",
        },
        dialog: {
          title: "الرسالة السريعة",
          shortcode: "الاختصار",
          message: "الرد",
          save: "حفظ",
          cancel: "إلغاء",
          geral: "السماح بالتعديل",
          add: "إضافة",
          general: "عام",
          visao: "السماح بالعرض",
          form: {
            shortcode: {
              required: "مطلوب"
            }
          },
          tabs: {
            general: "عام",
            official: "رسمي"
          },
          media: {
            title: "إرفاق وسائط",
            newFile: "ملف جديد",
            newAudio: "صوت جديد",
            newAudioRecorded: "صوت مسجل جديد",
            buttons: {
              attach: "إرفاق ملف",
              record: "تسجيل صوت",
              cancelEdit: "إلغاء التعديل"
            },
            tooltips: {
              edit: "تعديل الوسائط",
              remove: "إزالة الوسائط"
            },
            preview: {
              audioNotSupported: "متصفحك لا يدعم عنصر الصوت.",
              videoNotSupported: "متصفحك لا يدعم عنصر الفيديو."
            },
            replace: "اختر وسائط جديدة للاستبدال:",
            choose: "اختر خيارًا لإرفاق الوسائط:"
          },
          components: {
            type: "النوع",
            value: "القيمة"
          },
          status: "الحالة",
          language: "اللغة",
          category: "الفئة",
          metaID: "معرف ميتا",
        },
        table: {
          shortcode: "الاختصار",
          message: "الرسالة",
          actions: "الإجراءات",
          mediaName: "الوسائط",
          status: "الحالة",
        },
      },
      contactLists: {
        title: "قوائم جهات الاتصال",
        table: {
          name: "الاسم",
          contacts: "جهات الاتصال",
          actions: "الإجراءات",
        },
        buttons: {
          add: "قائمة جديدة",
        },
        dialog: {
          name: "الاسم",
          company: "الشركة",
          okEdit: "تعديل",
          okAdd: "إضافة",
          add: "إضافة",
          edit: "تعديل",
          cancel: "إلغاء",
        },
        confirmationModal: {
          deleteTitle: "حذف",
          deleteMessage: "لا يمكن التراجع عن هذا الإجراء.",
        },
        toasts: {
          deleted: "تم حذف السجل",
        },
      },
      contactListItems: {
        title: "جهات الاتصال",
        searchPlaceholder: "البحث",
        buttons: {
          add: "جديد",
          lists: "القوائم",
          import: "استيراد",
        },
        dialog: {
          name: "الاسم",
          number: "الرقم",
          whatsapp: "الواتس اب",
          email: "البريد الإلكتروني",
          okEdit: "تعديل",
          okAdd: "إضافة",
          add: "إضافة",
          edit: "تعديل",
          cancel: "إلغاء",
        },
        table: {
          name: "الاسم",
          number: "الرقم",
          whatsapp: "الواتس اب",
          email: "البريد الإلكتروني",
          actions: "الإجراءات",
        },
        confirmationModal: {
          deleteTitle: "حذف",
          deleteMessage: "لا يمكن التراجع عن هذا الإجراء.",
          importMessage: "هل تريد استيراد جهات الاتصال من هذا الملف؟ ",
          importTitlte: "استيراد",
        },
        toasts: {
          deleted: "تم حذف السجل",
        },
      },

      tagModal: {
        title: {
          add: "علامة جديدة",
          edit: "تعديل العلامة",
          addKanban: "مسار جديد",
          editKanban: "تعديل المسار",
          backToKanban: "العودة إلى الكانبان",
        },
        form: {
          name: "الاسم",
          color: "اللون",
          timeLane: "الوقت بالدقائق لإعادة التوجيه إلى المسار",
          nextLaneId: "المسار",
          greetingMessageLane: "رسالة ترحيب المسار",
          rollbackLaneId: "العودة إلى المسار بعد استئناف المحادثة",
        },
        buttons: {
          okAdd: "إضافة",
          okEdit: "حفظ",
          cancel: "إلغاء",
        },
        success: "تم حفظ العلامة بنجاح.",
        successKanban: "تم حفظ المسار بنجاح.",
      },

      tagsKanban: {
        title: "المسارات",
        laneDefault: "مفتوح",
        backToKanban: "العودة إلى الكانبان",
        confirmationModal: {
          deleteTitle: "هل أنت متأكد من حذف هذا المسار؟",
          deleteMessage: "لا يمكن التراجع عن هذا الإجراء.",
        },
        table: {
          name: "الاسم",
          color: "اللون",
          tickets: "التذاكر",
          actions: "الإجراءات",
        },
        buttons: {
          add: "مسار جديد",
        },
        toasts: {
          deleted: "تم حذف المسار بنجاح.",
        },
      },

      kanban: {
        title: "الكانبان",
        searchPlaceholder: "البحث",
        subMenus: {
          list: "اللوحة",
          tags: "المسارات",
        },
      },

      campaigns: {
        title: "الحملات",
        searchPlaceholder: "البحث",
        subMenus: {
          list: "القائمة",
          listContacts: "قائمة جهات الاتصال",
          settings: "الإعدادات",
        },
        settings: {
          randomInterval: "فاصل زمني عشوائي للإرسال",
          noBreak: "بدون فاصل",
          intervalGapAfter: "فاصل أكبر بعد",
          undefined: "غير محدد",
          messages: "رسائل",
          laggerTriggerRange: "فاصل إرسال أكبر",
          addVar: "إضافة متغير",
          save: "حفظ",
          close: "إغلاق",
          add: "إضافة",
          shortcut: "اختصار",
          content: "المحتوى",
        },
        buttons: {
          add: "حملة جديدة",
          contactLists: "قوائم جهات الاتصال",
        },
        table: {
          name: "الاسم",
          whatsapp: "الاتصال",
          contactList: "قائمة جهات الاتصال",
          option: "لا شيء",
          disabled: "معطل",
          enabled: "مفعل",
          status: "الحالة",
          scheduledAt: "الجدولة",
          completedAt: "مكتملة",
          confirmation: "التأكيد",
          actions: "الإجراءات",
          details: "التفاصيل",
          recurrence: "التكرار",
          nextExecution: "التنفيذ التالي",
        },
        filters: {
          status: "تصفية حسب الحالة",
          recurrence: "تصفية حسب التكرار",
          all: "الكل",
          allStatuses: "جميع الحالات",
          allRecurrences: "جميع التكرارات",
          recurring: "متكررة",
          unique: "فريدة",
          inactive: "غير نشطة",
          scheduled: "مجدولة",
          inProgress: "قيد التقدم",
          cancelled: "ملغاة",
          completed: "مكتملة",
        },
        dialog: {
          new: "حملة جديدة",
          update: "تعديل الحملة",
          readonly: "عرض فقط",
          help: "استخدم متغيرات مثل {الاسم}، {الرقم}، {البريد} أو حدد متغيرات مخصصة.",
          tabs: {
            message1: "رسالة 1",
            message2: "رسالة 2",
            message3: "رسالة 3",
            message4: "رسالة 4",
            message5: "رسالة 5"
          },
          help: "استخدم متغيرات مثل {الاسم}، {الرقم}، {البريد} أو حدد متغيرات مخصصة.",
          form: {
            name: "الاسم",
            message1: "الرسالة 1",
            message2: "الرسالة 2",
            message3: "الرسالة 3",
            message4: "الرسالة 4",
            message5: "الرسالة 5",
            confirmationMessage1: "رسالة التأكيد 1",
            confirmationMessage2: "رسالة التأكيد 2",
            confirmationMessage3: "رسالة التأكيد 3",
            confirmationMessage4: "رسالة التأكيد 4",
            confirmationMessage5: "رسالة التأكيد 5",
            messagePlaceholder: "محتوى الرسالة",
            whatsapp: "الاتصال",
            noContactList: "لا شيء",
            disabled: "معطل",
            enabled: "مفعل",
            required: "مطلوب",
            status: "الحالة",
            scheduledAt: "الجدولة",
            confirmation: "التأكيد",
            contactList: "قائمة جهات الاتصال",
            tagList: "العلامات",
            statusTicket: "حالة المحادثة",
            openTicketStatus: "مفتوحة",
            pendingTicketStatus: "معلقة",
            closedTicketStatus: "مغلقة",
            enabledOpenTicket: "مفعل",
            disabledOpenTicket: "معطل",
            openTicket: "فتح محادثة",
          },
          buttons: {
            add: "إضافة",
            edit: "تحديث",
            okadd: "موافق",
            cancel: "إلغاء الإرسال",
            restart: "إعادة تشغيل الإرسال",
            close: "إغلاق",
            attach: "إرفاق ملف",
            close: "إغلاق",
            attach: "إرفاق ملف",
          },
        },
        confirmationModal: {
          deleteTitle: "حذف",
          deleteMessage: "لا يمكن التراجع عن هذا الإجراء.",
        },
        toasts: {
          success: "تم تنفيذ العملية بنجاح",
          cancel: "تم إلغاء الحملة",
          restart: "تم إعادة تشغيل الحملة",
          deleted: "تم حذف السجل",
        },
      },
      campaignReport: {
        title: "تقرير",
        inactive: "غير نشطة",
        scheduled: "مجدولة",
        process: "قيد التنفيذ",
        cancelled: "ملغاة",
        finished: "منتهية",
        campaign: "الحملة",
        validContacts: "جهات اتصال صالحة",
        confirmationsRequested: "تأكيدات مطلوبة",
        confirmations: "تأكيدات",
        deliver: "مسلمة",
        connection: "الاتصال",
        contactLists: "قائمة جهات الاتصال",
        schedule: "الجدولة",
        conclusion: "الخلاصة",
      },
      announcements: {
        title: "الإعلانات",
        searchPlaceholder: "البحث",
        active: "نشط",
        inactive: "غير نشط",
        buttons: {
          add: "إعلان جديد",
          contactLists: "قوائم الإعلانات",
        },
        table: {
          priority: "الأولوية",
          title: "العنوان",
          text: "النص",
          mediaName: "الملف",
          status: "الحالة",
          actions: "الإجراءات",
        },
        dialog: {
          edit: "تعديل الإعلان",
          add: "إعلان جديد",
          update: "تعديل الإعلان",
          readonly: "عرض فقط",
          form: {
            priority: "الأولوية",
            title: "العنوان",
            text: "النص",
            mediaPath: "الملف",
            status: "الحالة",
            high: "عالية",
            medium: "متوسطة",
            low: "منخفضة",
            active: "نشط",
            inactive: "غير نشط",
          },
          buttons: {
            add: "إضافة",
            edit: "تحديث",
            okadd: "موافق",
            cancel: "إلغاء",
            close: "إغلاق",
            attach: "إرفاق ملف",
          },
        },
        confirmationModal: {
          deleteTitle: "حذف",
          deleteMessage: "لا يمكن التراجع عن هذا الإجراء.",
        },
        toasts: {
          success: "تم تنفيذ العملية بنجاح",
          deleted: "تم حذف السجل",
        },
      },
      campaignsConfig: {
        title: "إعدادات الحملات",
      },
      queues: {
        title: "الطوابير والبوت",
        table: {
          name: "الاسم",
          color: "اللون",
          greeting: "رسالة الترحيب",
          orderQueue: "ترتيب الطابور (البوت)",
          actions: "الإجراءات",
          ID: "المعرف",
        },
        buttons: {
          add: "إضافة طابور",
        },
        toasts: {
          success: "تم حفظ الطابور بنجاح",
          deleted: "تم حذف الطابور بنجاح",
        },
        confirmationModal: {
          deleteTitle: "حذف",
          deleteMessage:
            "هل أنت متأكد؟ لا يمكن التراجع عن هذا الإجراء! محادثات هذا الطابور ستبقى موجودة، لكن لن يكون لها طابور مخصص.",
        },
      },
      queue: {
        queueData: "البيانات",
      },
      queueSelect: {
        inputLabel: "الطوابير",
        inputLabelRO: "طوابير للقراءة فقط",
        withoutQueue: "بدون طابور",
      },
      reports: {
        title: "تقارير المحادثات",
        startDate: "التاريخ الأولي",
        endDate: "التاريخ النهائي",
        table: {
          id: "المحادثة",
          user: "المستخدم",
          dateOpen: "تاريخ الفتح",
          dateClose: "تاريخ الإغلاق",
          NPS: "NPS",
          status: "الحالة",
          whatsapp: "الاتصال",
          queue: "الطابور",
          actions: "الإجراءات",
          lastMessage: "آخر رسالة",
          contact: "العميل",
          supportTime: "وقت المحادثة",
        },
        buttons: {
          filter: "تطبيق المرشح",
          onlyRated: "المقيمة فقط",
        },
        searchPlaceholder: "البحث...",
      },
      queueIntegration: {
        title: "التكاملات",
        table: {
          id: "المعرف",
          type: "النوع",
          name: "الاسم",
          projectName: "اسم المشروع",
          language: "اللغة",
          lastUpdate: "آخر تحديث",
          actions: "الإجراءات",
        },
        buttons: {
          add: "إضافة مشروع",
        },
        searchPlaceholder: "البحث...",
        confirmationModal: {
          deleteTitle: "حذف",
          deleteMessage:
            "هل أنت متأكد؟ لا يمكن التراجع عن هذا الإجراء! وسيتم إزالته من الطوابير والاتصالات المرتبطة",
        },
      },
      users: {
        title: "المستخدمون",
        table: {
          status: "الحالة",
          name: "الاسم",
          email: "البريد الإلكتروني",
          profile: "الملف الشخصي",
          startWork: "بداية العمل",
          endWork: "نهاية العمل",
          actions: "الإجراءات",
          ID: "المعرف",
        },
        buttons: {
          add: "إضافة مستخدم",
        },
        toasts: {
          deleted: "تم حذف المستخدم بنجاح.",
        },
        confirmationModal: {
          deleteTitle: "حذف",
          deleteMessage:
            "جميع بيانات المستخدم ستفقد. المحادثات المفتوحة لهذا المستخدم ستنقل للطابور.",
        },
      },
      compaies: {
        title: "الشركات",
        table: {
          ID: "المعرف",
          status: "نشط",
          name: "الاسم",
          email: "البريد الإلكتروني",
          password: "كلمة المرور",
          phone: "الهاتف",
          plan: "الخطة",
          active: "نشط",
          numberAttendants: "المشغلين",
          numberConections: "الاتصالات",
          value: "القيمة",
          namePlan: "اسم الخطة",
          numberQueues: "الطوابير",
          useCampaigns: "الحملات",
          useExternalApi: "Rest API",
          useFacebook: "فيسبوك",
          useInstagram: "إنستجرام",
          useWhatsapp: "واتس اب",
          useInternalChat: "المحادثة الداخلية",
          useSchedules: "الجدولة",
          createdAt: "تم الإنشاء في",
          dueDate: "الاستحقاق",
          lastLogin: "آخر دخول",
          folderSize: "حجم المجلد ",
          totalFiles: " إجمالي الملفات",
          lastUpdate: "آخر تحديث",
          actions: "الإجراءات",
          money: "ر.س",
          yes: "نعم",
          no: "لا",
          document: "السجل التجاري/الهوية",
          recurrence: "التكرار",
          monthly: "شهري",
          bimonthly: "شهرين",
          quarterly: "ربع سنوي",
          semester: "نصف سنوي",
          yearly: "سنوي",
          clear: "مسح",
          delete: "حذف",
          user: "المستخدم",
          save: "حفظ",
          generateInvoice: "إنشاء فاتورة",
        },
        buttons: {
          add: "إضافة شركة",
        },
        toasts: {
          deleted: "تم حذف الشركة بنجاح.",
        },
        confirmationModal: {
          deleteTitle: "حذف",
          deleteMessage:
            "جميع بيانات الشركة ستفقد. المحادثات المفتوحة لهذا المستخدم ستنقل للطابور.",
        },
      },
      plans: {
        form: {
          name: "الاسم",
          users: "المستخدمون",
          connections: "الاتصالات",
          campaigns: "الحملات",
          schedules: "الجدولة",
          enabled: "مفعل",
          disabled: "معطل",
          clear: "إلغاء",
          delete: "حذف",
          save: "حفظ",
          yes: "نعم",
          no: "لا",
          money: "ر.س",
          public: "عام",
          trial: "تجريبي",
          trialDays: "أيام التجربة",
        },
      },
      helps: {
        title: "مركز المساعدة",
        settings: {
          codeVideo: "كود الفيديو",
          description: "الوصف",
          clear: "مسح",
          delete: "حذف",
          save: "حفظ",
        },
      },
      schedules: {
        title: "الجدولة",
        date: "التاريخ",
        time: "الوقت",
        event: "الحدث",
        allDay: "اليوم كله",
        week: "الأسبوع",
        work_week: "الجدولة",
        day: "اليوم",
        month: "الشهر",
        previous: "السابق",
        next: "التالي",
        yesterday: "أمس",
        tomorrow: "غداً",
        today: "اليوم",
        agenda: "الأجندة",
        noEventsInRange: "لا توجد جدولة في هذه الفترة.",
        confirmationModal: {
          deleteTitle: "هل أنت متأكد من حذف هذه الجدولة؟",
          deleteMessage: "لا يمكن التراجع عن هذا الإجراء.",
        },
        table: {
          contact: "جهة الاتصال",
          body: "الرسالة",
          sendAt: "تاريخ الجدولة",
          sentAt: "تاريخ الإرسال",
          status: "الحالة",
          actions: "الإجراءات",
        },
        buttons: {
          add: "جدولة جديدة",
        },
        toasts: {
          deleted: "تم حذف الجدولة بنجاح.",
        },
      },
      tags: {
        title: "العلامات",
        addColumns: "+ إضافة أعمدة",
        search: "البحث",
        seeTicket: "عرض المحادثة",
        confirmationModal: {
          deleteTitle: "هل أنت متأكد من حذف هذه العلامة؟",
          deleteMessage: "لا يمكن التراجع عن هذا الإجراء.",
        },
        table: {
          id: "المعرف",
          name: "الاسم",
          kanban: "الكانبان",
          color: "اللون",
          tickets: "سجلات العلامات",
          contacts: "جهات الاتصال",
          actions: "الإجراءات",
        },
        buttons: {
          add: "علامة جديدة",
        },
        toasts: {
          deleted: "تم حذف العلامة بنجاح.",
        },
      },

      tagsKanban: {
        title: "المسارات",
        laneDefault: "مفتوحة",
        backToKanban: "العودة للكانبان",

        confirmationModal: {
          deleteTitle: "هل أنت متأكد من حذف هذا المسار؟",
          deleteMessage: "لا يمكن التراجع عن هذا الإجراء.",
        },
        table: {
          name: "الاسم",
          color: "اللون",
          tickets: "المحادثات",
          actions: "الإجراءات",
        },
        buttons: {
          add: "مسار جديد",
        },
        toasts: {
          deleted: "تم حذف المسار بنجاح.",
        },
      },

      files: {
        title: "قائمة الملفات",
        table: {
          name: "الاسم",
          contacts: "جهات الاتصال",
          actions: "الإجراءات",
        },
        toasts: {
          deleted: "تم حذف القائمة بنجاح!",
          deletedAll: "تم حذف جميع القوائم بنجاح!",
        },
        buttons: {
          add: "إضافة",
          deleteAll: "حذف الكل",
        },
        confirmationModal: {
          deleteTitle: "حذف",
          deleteAllTitle: "حذف الكل",
          deleteMessage: "هل أنت متأكد من حذف هذه القائمة؟",
          deleteAllMessage: "هل أنت متأكد من حذف جميع القوائم؟",
        },
      },
      settings: {
        success: "تم حفظ الإعدادات بنجاح.",
        title: "الإعدادات",
        tabs: {
          options: "الخيارات",
          plans: "الخطط",
          helps: "المساعدة",
          companies: "الشركات",
        },
        settings: {
          userCreation: {
            name: "إنشاء المستخدم",
            options: {
              enabled: "مفعل",
              disabled: "معطل",
            },
          },
          tabs: {
            options: "الخيارات",
            schedules: "المواعيد",
            plans: "الخطط",
            help: "المساعدة",
          },
          options: {
            disabled: "معطل",
            enabled: "مفعل",
            updating: "جاري التحديث...",
            creationCompanyUser: "إنشاء الشركة/المستخدم",
            evaluations: "التقييمات",
            officeScheduling: "جدولة المكتب",
            queueManagement: "الإدارة بالطابور",
            companyManagement: "الإدارة بالشركة",
            connectionManagement: "الإدارة بالاتصال",
            sendGreetingAccepted: "إرسال الترحيب عند قبول المحادثة",
            sendMsgTransfTicket: "إرسال رسالة نقل القسم/المشغل",
            checkMsgIsGroup: "تجاهل رسائل المجموعات",
            chatBotType: "نوع البوت",
            userRandom: "اختيار مشغل عشوائي",
            buttons: "الأزرار",
            acceptCallWhatsapp: "إعلام عدم قبول المكالمات في الواتس اب؟",
            sendSignMessage: "السماح للمشغل باختيار إرسال التوقيع",
            sendGreetingMessageOneQueues:
              "إرسال الترحيب عند وجود طابور واحد فقط",
            sendQueuePosition: "إرسال رسالة مع موقع الطابور",
            sendFarewellWaitingTicket: "إرسال رسالة الوداع في الانتظار",
            acceptAudioMessageContact: "قبول الصوتيات من جميع جهات الاتصال؟",
            enableLGPD: "تفعيل معاملة LGPD",
            requiredTag: "علامة إجبارية لإغلاق المحادثة",
            closeTicketOnTransfer: "إغلاق المحادثة عند النقل لطابور آخر",
            showNotificationPending: "إظهار إشعار للمحادثات المعلقة",
            DirectTicketsToWallets: "نقل العميل تلقائياً للمحفظة",
            copyContactPrefix: "بادئة لنسخ جهات الاتصال",
            copyContactPrefixPlaceholder: "مثال: +966 للمملكة العربية السعودية",
            copyContactAcronymConfiguration: "تكوين اختصار لنسخ جهة الاتصال",
            efiPixConfiguration: "تكوين Efí Pix (GerenciaNet)",
            clientID: "معرف العميل",
            clientSecret: "سر العميل",
            pixKey: "مفتاح PIX",
            mercadoPago: "Mercado Pago",
            accessToken: "رمز الوصول",
            stripe: "Stripe",
            stripePrivateKey: "مفتاح Stripe الخاص",
            asaas: "ASAAS",
            asaasToken: "رمز Asaas",
            chatBotTypeValues: {
              text: "نص"
            }
          },
          customMessages: {
            sendQueuePositionMessage: "رسالة الموقع في الطابور",
            AcceptCallWhatsappMessage: "رسالة إعلام عدم قبول المكالمات",
            greetingAcceptedMessage: "رسالة الترحيب عند قبول المحادثة",
            transferMessage: "رسالة النقل - ${queue.name} = الطابور المقصود",
          },
          LGPD: {
            title: "LGPD",
            welcome: "رسالة الترحيب (LGPD)",
            linkLGPD: "رابط سياسة الخصوصية",
            obfuscateMessageDelete: "إخفاء الرسالة المحذوفة",
            alwaysConsent: "طلب الموافقة دائماً",
            obfuscatePhoneUser: "إخفاء رقم الهاتف للمستخدمين",
            enabled: "مفعل",
            disabled: "معطل",
          },
          acronyms: {
            title: "تكوين اختصار لنسخ جهة الاتصال"
          },
          payment: {
            efi: "تكوين Efí Pix (GerenciaNet)",
            efiClientId: "معرف العميل",
            efiClientSecret: "سر العميل",
            efiPixKey: "مفتاح PIX",
            mercadoPago: "Mercado Pago",
            mercadoPagoAccessToken: "رمز الوصول",
            stripe: "Stripe",
            stripePrivateKey: "مفتاح Stripe الخاص",
            asaas: "ASAAS",
            asaasToken: "رمز Asaas"
          },
        },
              },
        messagesList: {
        header: {
          assignedTo: "مخصص لـ:",
          dialogRatingTitle: "هل تريد ترك تقييم للخدمة للعميل؟",
          dialogClosingTitle: "إنهاء المحادثة مع العميل!",
          dialogRatingCancel: "حل مع رسالة الوداع",
          dialogRatingSuccess: "حل وإرسال التقييم",
          dialogRatingWithoutFarewellMsg: "حل بدون رسالة الوداع",
          ratingTitle: "اختر قائمة تقييم",
          notMessage: "لا توجد رسالة مختارة",
          amount: "قيمة الاستطلاع",
          buttons: {
            return: "إرجاع",
            resolve: "حل",
            reopen: "إعادة فتح",
            accept: "قبول",
            rating: "إرسال التقييم",
            enableIntegration: "تفعيل التكامل",
            disableIntegration: "تعطيل التكامل",
            logTicket: "سجلات المحادثة",
            requiredTag: "يجب تخصيص علامة قبل إغلاق المحادثة.",
            greetingAcceptedMessage: "يجب إعداد رسالة ترحيب عند قبول المحادثة.",
          },
        },
        sayHello: "قل مرحباً لجهة اتصالك الجديدة!",
        dropFile: "أسقط الملف هنا",
        loadingVideo: "جاري تحميل الفيديو...",
        videoNotSupported: "متصفحك لا يدعم تشغيل الفيديو.",
        videoError: "❌ خطأ في تحميل الفيديو",
        downloadVideo: "تحميل الفيديو",
        download: "تحميل",
        forwarded: "معاد توجيهها",
        deletedContact: "🚫 تم حذف هذه الرسالة من قبل جهة الاتصال",
        contact: "جهة اتصال",
        deleted: "🚫 تم حذف هذه الرسالة",
        edited: "معدلة",
        youReacted: "لقد تفاعلت...",
        metaPolicy: "لديك 24 ساعة للرد بعد استلام رسالة، وفقًا لسياسات ميتا."
      },
      messagesInput: {
        placeholderPrivateMessage: "اكتب رسالة أو اضغط / للردود السريعة",
        placeholderOpen: "اكتب رسالة أو اضغط / للردود السريعة",
        placeholderClosed: "أعد فتح أو اقبل هذه المحادثة لإرسال رسالة.",
        signMessage: "توقيع",
        privateMessage: "رسالة خاصة",
        placeholderPending: "رسالة داخلية (المحادثة في انتظار القبول)...",
        pendingTicket: {
          title: "المحادثة في الانتظار:",
          message: "يُسمح فقط بالرسائل الداخلية في هذا الوقت."
        },
        internalMessage: "رسالة داخلية",
      },
      contactDrawer: {
        header: "بيانات جهة الاتصال",
        searchPlaceholder: "البحث في الرسائل...",
        buttons: {
          edit: "تعديل جهة الاتصال",
          block: "حظر",
          unblock: "إلغاء الحظر",
        },
        extraInfo: "معلومات أخرى",
        tabs: {
          info: "المعلومات",
          images: "الصور",
          videos: "الفيديوهات",
          audios: "الصوتيات",
          documents: "المستندات",
          links: "الروابط",
          participants: "المشاركون"
        },
        participants: {
          title: "المشاركون في المجموعة",
          noParticipants: "لم يتم العثور على مشاركين",
          superAdmin: "مشرف خارق",
          admin: "مشرف"
        },
        media: {
          noImages: "لم يتم العثور على صور",
          noVideos: "لم يتم العثور على فيديوهات",
          noAudios: "لم يتم العثور على صوتيات",
          noDocuments: "لم يتم العثور على مستندات",
          noLinks: "لم يتم العثور على روابط",
          document: "مستند"
        },
        search: {
          searching: "جار البحث...",
          noMessages: "لم يتم العثور على رسائل",
          found: "تم العثور على الرسالة",
          you: "أنت"
        },
        toasts: {
          contactBlocked: "تم حظر جهة الاتصال",
          contactUnblocked: "تم إلغاء حظر جهة الاتصال"
        }
      },
      messageVariablesPicker: {
        label: "المتغيرات المتاحة",
        vars: {
          contactFirstName: "الاسم الأول",
          contactName: "الاسم",
          user: "المشغل",
          greeting: "الترحيب",
          protocolNumber: "البروتوكول",
          date: "التاريخ",
          hour: "الساعة",
          ticket_id: "رقم المحادثة",
          queue: "القسم",
          connection: "الاتصال",
        },
      },
      ticketOptionsMenu: {
        schedule: "جدولة",
        delete: "حذف",
        transfer: "نقل",
        registerAppointment: "ملاحظات جهة الاتصال",
        resolveWithNoFarewell: "إنهاء بدون وداع",
        acceptAudioMessage: "قبول صوتيات جهة الاتصال؟",
        appointmentsModal: {
          title: "ملاحظات المحادثة",
          textarea: "الملاحظة",
          placeholder: "أدخل هنا المعلومة التي تريد تسجيلها",
        },
        confirmationModal: {
          title: "حذف محادثة جهة الاتصال",
          titleFrom: "من جهة الاتصال ",
          message: "تنبيه! جميع الرسائل المتعلقة بالمحادثة ستفقد.",
        },
        buttons: {
          delete: "حذف",
          cancel: "إلغاء",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "موافق",
          cancel: "إلغاء",
        },
      },
      messageInput: {
        tooltip: {
          signature: "تفعيل/تعطيل التوقيع",
          privateMessage: "تفعيل/تعطيل الرسالة الخاصة",
          meet: "إرسال رابط مؤتمر فيديو",
          triggerFlow: "تفعيل التدفق",
        },
        type: {
          imageVideo: "الصور والفيديوهات",
          cam: "الكاميرا",
          contact: "جهة الاتصال",
          meet: "مكالمة فيديو",
          template: "قالب ميتا",
        },
      },
      messageOptionsMenu: {
        delete: "حذف",
        reply: "رد",
        edit: "تعديل",
        forward: "إعادة توجيه",
        toForward: "إعادة توجيه",
        talkTo: "محادثة مع",
        confirmationModal: {
          title: "حذف الرسالة؟",
          message: "لا يمكن التراجع عن هذا الإجراء.",
        },
      },
      invoices: {
        table: {
          invoices: "الفواتير",
          details: "التفاصيل",
          users: "المستخدمون",
          connections: "الاتصالات",
          queue: "الطوابير",
          value: "القيمة",
          expirationDate: "تاريخ الاستحقاق",
          action: "الإجراء",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP:
          "يجب أن يكون هناك واتس اب افتراضي واحد على الأقل.",
        ERR_NO_DEF_WAPP_FOUND:
          "لم يتم العثور على واتس اب افتراضي. تحقق من صفحة الاتصالات.",
        ERR_WAPP_NOT_INITIALIZED:
          "جلسة الواتس اب هذه لم يتم تهيئتها. تحقق من صفحة الاتصالات.",
        ERR_WAPP_CHECK_CONTACT:
          "لا يمكن التحقق من جهة اتصال الواتس اب. تحقق من صفحة الاتصالات",
        ERR_WAPP_INVALID_CONTACT: "هذا ليس رقم واتس اب صالح.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "لا يمكن تحميل الوسائط من الواتس اب. تحقق من صفحة الاتصالات.",
        ERR_INVALID_CREDENTIALS: "خطأ في المصادقة. حاول مرة أخرى.",
        ERR_SENDING_WAPP_MSG:
          "خطأ في إرسال رسالة الواتس اب. تحقق من صفحة الاتصالات.",
        ERR_DELETE_WAPP_MSG: "لا يمكن حذف رسالة الواتس اب.",
        ERR_OTHER_OPEN_TICKET: "يوجد محادثة مفتوحة لجهة الاتصال هذه بالفعل.",
        ERR_SESSION_EXPIRED: "انتهت الجلسة. يرجى الدخول.",
        ERR_USER_CREATION_DISABLED: "تم تعطيل إنشاء المستخدم من قبل المدير.",
        ERR_NO_PERMISSION: "ليس لديك صلاحية للوصول لهذا المورد.",
        ERR_DUPLICATED_CONTACT: "يوجد جهة اتصال بهذا الرقم بالفعل.",
        ERR_NO_SETTING_FOUND: "لم يتم العثور على إعداد بهذا المعرف.",
        ERR_NO_CONTACT_FOUND: "لم يتم العثور على جهة اتصال بهذا المعرف.",
        ERR_NO_TICKET_FOUND: "لم يتم العثور على محادثة بهذا المعرف.",
        ERR_NO_USER_FOUND: "لم يتم العثور على مستخدم بهذا المعرف.",
        ERR_NO_WAPP_FOUND: "لم يتم العثور على واتس اب بهذا المعرف.",
        ERR_CREATING_MESSAGE: "خطأ في إنشاء الرسالة في قاعدة البيانات.",
        ERR_CREATING_TICKET: "خطأ في إنشاء المحادثة في قاعدة البيانات.",
        ERR_FETCH_WAPP_MSG:
          "خطأ في جلب الرسالة من الواتس اب، ربما تكون قديمة جداً.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "هذا اللون مستخدم بالفعل، اختر لوناً آخر.",
        ERR_WAPP_GREETING_REQUIRED:
          "رسالة الترحيب مطلوبة عند وجود أكثر من طابور واحد.",
        ERR_OUT_OF_HOURS: "خارج ساعات العمل!",
      },
      messagesAPIInstructions: {
        endpoint: "نقطة النهاية:",
        method: "الطريقة:",
        post: "POST",
        headers: "الرؤوس:",
        headerAuthorization:
          "Authorization Bearer (الرمز المسجل) و Content-Type (application/json)",
        body: "المحتوى:",
        fieldNumber: '"number": "966555999999"',
        fieldBody: '"body": "الرسالة"',
        fieldUserId: '"userId": معرف المستخدم أو ""',
        fieldQueueId: '"queueId": معرف الطابور أو ""',
        fieldSendSignature: '"sendSignature": توقيع الرسالة - true/false',
        fieldCloseTicket: '"closeTicket": إنهاء المحادثة - true/false',
        singMessage: "توقيع الرسالة - true/false",
        closeTicket: "إنهاء المحادثة - true/false",
        testSend: "اختبار الإرسال",
      },
      recurrenceSection: {
        title: "التكرار",
        recurrence: "تكوين التكرار",
        enable: "تفعيل التكرار",
        type: "نوع التكرار",
        interval: "الفاصل الزمني",
        daysOfWeek: "أيام الأسبوع",
        dayOfMonth: "يوم الشهر",
        endDate: "تاريخ الانتهاء",
        maxExecutions: "الحد الأقصى للتنفيذات",
        preview: {
          title: "معاينة التنفيذات",
          buttonShow: "إظهار المعاينة",
          buttonHide: "إخفاء المعاينة",
          execution: "التنفيذ {{index}}"
        },
        options: {
          daily: "يومي",
          weekly: "أسبوعي",
          biweekly: "كل أسبوعين",
          monthly: "شهري",
          yearly: "سنوي",
          days: "أيام",
          weeks: "أسابيع",
          months: "أشهر"
        },
        weekDays: {
          sunday: "الأحد",
          monday: "الاثنين",
          tuesday: "الثلاثاء",
          wednesday: "الأربعاء",
          thursday: "الخميس",
          friday: "الجمعة",
          saturday: "السبت"
        },
        helpers: {
          interval: "كل {{count}} {{type}}",
          endDate: "تاريخ انتهاء اختياري للتكرار",
          maxExecutions: "الحد الأقصى لعدد التنفيذات (اختياري)",
          dayOfMonth: "يوم الشهر (1-31)"
        },
        validation: {
          type: "نوع التكرار مطلوب",
          interval: "الفاصل الزمني مطلوب",
          intervalMin: "يجب أن يكون الفاصل الزمني على الأقل 1",
          daysOfWeek: "يجب اختيار يوم واحد على الأقل",
          dayOfMonth: "يوم الشهر مطلوب",
          dayOfMonthMinMax: "يجب أن يكون اليوم بين 1 و 31",
          endDate: "يجب أن يكون تاريخ الانتهاء في المستقبل",
          maxExecutions: "يجب أن يكون الحد الأقصى للتنفيذات على الأقل 1"
        }
      },
      servicePanel: {
        allowRealTime: "لوحة المحادثات",
      },
      financial: {
        invoices: "الفواتير",
        details: "التفاصيل",
        users: "المستخدمون",
        connections: "الاتصالات",
        queues: "الطوابير",
        value: "القيمة",
        expirationDate: "تاريخ الاستحقاق",
        status: "الحالة",
        action: "الإجراء",
      },
      statusFilter: {
        statusFilter: "تصفية حسب الحالة",
      },
      momentsUser: {
        services: "المحادثات:",
        pending: "معلقة",
        noqueue: "بدون طابور",
      },
      campaignsPhrase: {
        campaignsFlow: "تدفق الحملات",
        campaigns: "الحملات",
        name: "الاسم",
        status: "الحالة",
        newCampaignWithFlowByPhrase: "حملة جديدة مع تدفق بالعبارة",
        editCampaignWithFlowByPhrase: "تعديل حملة مع تدفق بالعبارة",
        phraseTriggerName: "اسم التفعيل بالعبارة",
        chooseAStream: "اختر تدفقاً",
        whichPhraseTriggersTheFlow: " أي عبارة تفعل التدفق؟",
        selectAConnection: "اختر اتصالاً",
        chooseAStream: "اختر تدفقاً",
        status: "الحالة",
        cancel: "إلغاء",
        createCampaign: "إنشاء حملة",
        saveCampaign: "حفظ الحملة",
        title: "حملات التدفق",
        newCampaign: "حملة جديدة",
        connections: "الاتصالات",
        noCampaignsFound: "لم يتم العثور على حملة",
        createFirstCampaign: "انقر على \"حملة جديدة\" لإنشاء أول حملة تدفق لك",
        campaignName: "اسم الحملة",
        selectFlow: "اختر تدفقاً",
        whatsappConnections: "اتصالات واتساب",
        multipleConnections: "متعددة",
        noConnection: "لا يوجد اتصال",
        moreConnections: "المزيد من {{count}} اتصال",
        active: "نشطة",
        inactive: "غير نشطة",
        editCampaign: "تعديل الحملة",
        deleteCampaign: "حذف الحملة",
        phrasesTriggerFlow: "العبارات/الكلمات التي تفعل التدفق",
        exactMatch: "مطابقة دقيقة: يجب أن تكون الرسالة مطابقة للعبارة المكونة.",
        partialMatch: "مطابقة جزئية: يمكن أن تكون العبارة موجودة في أي جزء من الرسالة.",
        phrase: "العبارة {{number}}",
        type: "النوع",
        exact: "دقيقة",
        partial: "جزئية",
        addPhrase: "إضافة عبارة",
        atLeastOneConnection: "يجب اختيار اتصال واحد على الأقل",
        connectionsSelected: "تم اختيار {{count}} اتصال:",
        campaignWillExecute: "ستتم تنفيذ الحملة عندما تتلقى أي من هذه الاتصالات رسائل تطابق العبارات المكونة.",
        saving: "جاري الحفظ...",
        update: "تحديث",
        create: "إنشاء",
        campaignDeleted: "تم حذف الحملة بنجاح",
        campaignUpdated: "تم تحديث الحملة بنجاح",
        campaignCreated: "تم إنشاء الحملة بنجاح",
        errorLoadingFlows: "خطأ في تحميل التدفقات",
        errorLoadingConnections: "خطأ في تحميل الاتصالات",
        errorLoadingCampaign: "خطأ في تحميل بيانات الحملة",
        errorSavingCampaign: "خطأ في حفظ الحملة",
        fillRequiredFields: "يرجى ملء جميع الحقول المطلوبة",
        flowNotFound: "لم يتم العثور على التدفق المحدد",
        phrasesConfigured: "تم تكوين {{count}} عبارة",
        nameRequired: "الاسم مطلوب",
        flowRequired: "التدفق مطلوب",
        phraseRequired: "العبارة مطلوبة",
      },
      whatsappModalRel: {
        form: {
          isOficial: "تقرير المحادثة",
          ticketId: "معرف المحادثة",
          client: "العميل",
          number: "الرقم",
          agent: "المشغل",
          date: "التاريخ",
          lastMessage: "آخر رسالة",
          fullReport: "التقرير الكامل مرفق أعلاه",
          resolveAndTriggerIntegration: "حل وتفعيل التكامل",
          elementNotFoundForExport: "العنصر غير موجود للتصدير.",
          reportFilename: "تقرير_المحادثة",
        },
      },
      chatList: {
        noMessages: "لا توجد رسائل",
        admin: "المدير",
        member: "عضو",
        searchChat: "البحث في المحادثة...",
        createNewChat: "إنشاء محادثة جديدة",
        searchUser: "البحث عن مستخدم...",
        noUserFound: "لم يتم العثور على مستخدم",
        noUserAvailable: "لا يوجد مستخدم متاح",
        cancel: "إلغاء",
        details: "التفاصيل",
        deleteChat: "حذف المحادثة",
        deleteChatConfirm: "لا يمكن التراجع عن هذا الإجراء، تأكيد؟",
        detailsTitle: "التفاصيل",
        edit: "تعديل",
        delete: "حذف",
        now: "الآن",
        minutesAgo: "{{count}} د مضت",
        hoursAgo: "{{count}} س مضت",
      },
      chatMessages: {
        deleted: "تم حذف هذه الرسالة",
        deletedAdmin: "رسالة محذوفة - مرئية للمديرين فقط",
        reply: "رد",
        edit: "تعديل",
        delete: "حذف",
        forward: "إعادة توجيه",
        editMessage: "تعديل الرسالة",
        save: "حفظ",
        cancel: "إلغاء",
        deleteMessage: "حذف الرسالة",
        deleteMessageConfirm: "هل أنت متأكد من حذف هذه الرسالة؟",
        forwardMessage: "إعادة توجيه الرسالة",
        selectChat: "اختر المحادثة",
        doubleClickToReply: "انقر مرتين للرد",
        edited: "(معدلة)",
        forwarded: "(معاد توجيهها)",
        typeMessage: "اكتب رسالة...",
        send: "إرسال",
        noMessages: "لا توجد رسائل",
        loading: "جاري التحميل...",
        replyingTo: "رد على",
        clickToGoToOriginal: "انقر للذهاب للرسالة الأصلية",
        today: "اليوم",
        loadingOldMessages: "جاري تحميل الرسائل القديمة...",
        viewDocument: "عرض المستند",
        doubleClickToReply: "انقر مرتين للرد",
        messageNotFound: "[لم يتم العثور على الرسالة]",
      },
      chatShared: {
        audio: "صوت",
        image: "صورة",
        video: "فيديو",
        file: "ملف",
      },
      chatPopover: {
        reply: "رد",
        edit: "تعديل",
        delete: "حذف",
        forward: "إعادة توجيه",
        cancel: "إلغاء",
        confirmDelete: "تأكيد الحذف",
        confirm: "تأكيد",
        deleteMessage: "هل أنت متأكد من حذف هذه الرسالة؟",
        editMessage: "تعديل الرسالة",
        save: "حفظ",
        forwardMessage: "إعادة توجيه الرسالة",
        selectChat: "اختر المحادثة",
        forward: "إعادة توجيه",
        noChats: "لا توجد محادثة متاحة",
        internalChat: "محادثة داخلية #",
        noMessages: "لا توجد رسائل",
      },
      chatIndex: {
        chats: "المحادثات",
        groups: "المجموعات",
        new: "جديد",
        messages: "الرسائل",
        search: "البحث...",
        noChats: "لا توجد محادثة",
        noGroups: "لا توجد مجموعة",
        noMessages: "لا توجد رسائل",
        loading: "جاري التحميل...",
        error: "خطأ في تحميل البيانات",
        addGroupPhoto: "إضافة صورة المجموعة",
        changeGroupPhoto: "تغيير صورة المجموعة",
        groupName: "اسم المجموعة",
        groupDescription: "وصف المجموعة",
        save: "حفظ",
        cancel: "إلغاء",
        createGroup: "إنشاء مجموعة",
        editGroup: "تعديل المجموعة",
        deleteGroup: "حذف المجموعة",
        deleteGroupConfirm: "هل أنت متأكد من حذف هذه المجموعة؟",
        edit: "تعديل",
        delete: "حذف",
        details: "التفاصيل",
        groupDetails: "تفاصيل المجموعة",
        title: "العنوان",
        description: "الوصف",
        modal: {
          title: "إنشاء مجموعة",
          name: "اسم المجموعة",
          description: "وصف المجموعة",
          create: "إنشاء",
          cancel: "إلغاء",
          save: "حفظ",
          edit: "تعديل",
        },
        modal: {
          title: "إنشاء مجموعة",
          editTitle: "تعديل المجموعة",
          save: "حفظ",
          cancel: "إلغاء",
        },
      },
      conversationFlows: {
    title: "تدفقات المحادثة",
    searchPlaceholder: "البحث في التدفقات...",
    newFlow: "تدفق جديد",
    createFirstFlow: "إنشاء أول تدفق",
    noFlowsCreated: "لم يتم إنشاء أي تدفق بعد",
    noFlowsFound: "لم يتم العثور على تدفق",
    createFirstFlowDescription: "أنشئ أول تدفق محادثة لك لأتمتة الخدمات",
    tryOtherSearchTerms: "جرب استخدام مصطلحات بحث أخرى",
    active: "نشط",
    inactive: "غير نشط",
    editFlow: "تحرير التدفق",
    deleteFlow: "حذف التدفق",
    duplicateFlow: "نسخ التدفق",
    flowDeleted: "تم حذف التدفق بنجاح",
    flowDuplicated: "تم نسخ التدفق بنجاح",
    deleteFlowTitle: "حذف التدفق",
    duplicateFlowTitle: "نسخ التدفق",
    deleteFlowMessage: "لا يمكن التراجع عن هذا الإجراء. ستضيع جميع التكاملات ذات الصلة.",
    duplicateFlowMessage: "سيتم إنشاء نسخة من التدفق لك لتحريرها.",
    createFlow: "إنشاء تدفق",
    ariaLabel: "إنشاء تدفق"
  },
  flowDefault: {
    title: "التدفق الافتراضي",
    save: "حفظ",
    welcomeFlow: "تدفق الترحيب",
    welcomeFlowDescription: "يتم تشغيل هذا التدفق فقط للجهات الجديدة، الأشخاص الذين ليس لديك في قائمة جهات الاتصال وأرسلوا رسالة",
    defaultResponseFlow: "تدفق الرد الافتراضي",
    defaultResponseFlowDescription: "يتم إرسال الرد الافتراضي مع أي حرف مختلف عن كلمة مفتاحية. انتبه! سيتم تشغيله إذا كانت الخدمة مغلقة بالفعل ومرت 6 ساعات على إغلاقها.",
    chooseFlow: "اختر تدفقاً",
    defaultFlowsUpdated: "تم تحديث التدفقات الافتراضية"
  },
  validation: {
    required: "مطلوب",
    tooShort: "قصير جداً",
    tooLong: "طويل جداً",
    nameRequired: "الاسم مطلوب",
    emailRequired: "البريد الإلكتروني مطلوب",
    phoneRequired: "رقم الهاتف مطلوب",
    invalidEmail: "بريد إلكتروني غير صحيح",
    invalidPhone: "رقم هاتف غير صحيح",
    minLength: "يجب أن يكون على الأقل {{count}} أحرف",
    maxLength: "يجب أن يكون على الأكثر {{count}} أحرف",
    promptRequired: "اوصف التدريب للذكاء الاصطناعي",
    invalidModel: "نموذج غير صحيح",
    modelRequired: "أدخل النموذج",
    minTokens: "الحد الأدنى 10 رموز",
    maxTokens: "الحد الأقصى 4000 رمز",
    maxTokensGemini: "الحد الأقصى 8000 رمز",
    maxTokensRequired: "أدخل العدد الأقصى للرموز",
    minTemperature: "الحد الأدنى 0",
    maxTemperature: "الحد الأقصى 2",
    temperatureRequired: "أدخل درجة الحرارة",
    apiKeyRequired: "أدخل مفتاح API",
    minMessages: "الحد الأدنى رسالة واحدة",
    maxMessages: "الحد الأقصى 100 رسالة",
    maxMessagesRequired: "أدخل العدد الأقصى للرسائل",
    voiceRequired: "أدخل وضع الصوت",
    voiceKeyRequired: "مفتاح الصوت مطلوب لتوليف الصوت",
    voiceRegionRequired: "منطقة الصوت مطلوبة لتوليف الصوت",
    invalidFlowMode: "وضع التدفق غير صحيح",
    flowModeRequired: "اختر وضع التدفق",
    minInteractions: "الحد الأدنى تفاعل واحد",
    maxInteractions: "الحد الأقصى 50 تفاعل",
    minTimeout: "الحد الأدنى دقيقة واحدة",
    maxTimeout: "الحد الأقصى 60 دقيقة",
    keywordRequired: "الكلمة المفتاحية لا يمكن أن تكون فارغة",
    minKeywordsRequired: "كلمة مفتاحية واحدة على الأقل مطلوبة في الوضع المؤقت",
    objectiveRequired: "الهدف مطلوب عندما يكون الإكمال التلقائي نشطاً"
  },
  flowBuilderSingleBlockModal: {
    labels: {
      title: "إضافة محتوى إلى التدفق",
      btn: "إضافة",
      editTitle: "تعديل المحتوى",
      btnSave: "حفظ",
      addMenuTitle: "إضافة قائمة إلى التدفق"
    },
    toasts: {
      emptyMessageFields: "حقول الرسالة فارغة!",
      invalidInterval: "لا يمكن أن يكون الفاصل الزمني 0 أو أكبر من 120!",
      fileTooLarge2mb: "الملف كبير جدًا! الحد الأقصى 2 ميجابايت",
      fileTooLarge5mb: "الملف كبير جدًا! الحد الأقصى 5 ميجابايت",
      fileTooLarge10mb: "الملف كبير جدًا! الحد الأقصى 10 ميجابايت",
      fileTooLarge20mb: "الملف كبير جدًا! الحد الأقصى 20 ميجابايت",
      contentSuccessAdded: "تمت إضافة المحتوى بنجاح!",
      deleteEmptyCards: "احذف البطاقات الفارغة (صورة، صوت، وفيديو)"
    },
    misc: {
      browserNotSupportHTML5: "متصفحك لا يدعم HTML5",
      uploadingAndCreating: "جاري تحميل الملفات وإنشاء المحتوى..."
    },
    buttons: {
      text: "نص",
      interval: "فاصل زمني",
      image: "صورة",
      audio: "صوت",
      video: "فيديو",
      document: "مستند",
      sendImage: "إرسال صورة",
      sendAudio: "إرسال صوت",
      sendVideo: "إرسال فيديو",
      sendDocument: "إرسال مستند"
    },
    textFieldLabels: {
      message: "رسالة",
      timeInSeconds: "الوقت بالثواني"
    },
    checkboxLabels: {
      sendAsRecordedAudio: "إرسال كصوت مسجل في الحال"
    },
    headings: {
      variables: "المتغيرات",
      text: "نص",
      interval: "فاصل زمني",
      image: "صورة",
      audio: "صوت",
      video: "فيديو",
      document: "مستند"
    }
  },
  flowBuilderMenuModal: {
    labels: {
      addMenuTitle: "إضافة قائمة إلى التدفق",
      editMenuTitle: "تعديل القائمة",
      btn: "إضافة",
      btnSave: "حفظ",
      menuExplanationMessage: "رسالة شرح القائمة",
      addOption: "إضافة خيار",
      type: "اكتب",
      typeOption: "اكتب خيارًا"
    },
    radio: {
      number: "رقم",
      list: "قائمة",
      button: "زر"
    }
  },
  flowBuilderInputModal: {
    labels: {
      title: "إضافة إدخال إلى التدفق",
      btn: "إضافة",
      editTitle: "تعديل إدخال التدفق",
      btnSave: "حفظ التغييرات",
      question: "سؤال",
      typeQuestion: "اكتب السؤال",
      availableVariables: "المتغيرات المتاحة (انقر للإدراج):",
      variableName: "اسم المتغير",
      helperText: "سيتم تخزين رد المستخدم في هذا المتغير",
      howItWorks: "كيف يعمل"
    },
    tooltips: {
      question: "السؤال الذي سيتم إرساله إلى المستخدم. يمكنك تضمين متغيرات باستخدام ${variableName}",
      variableName: "اسم المتغير حيث سيتم تخزين الرد. لا تستخدم مسافات أو أحرف خاصة."
    },
    placeholders: {
      question: "مثال: مرحباً ${name}، كم عمرك؟",
      variableName: "مثال: عمر_العميل"
    },
    info: {
      howItWorks: "سيقوم هذا العقدة بإرسال السؤال إلى المستخدم وانتظار الرد. عندما يرد المستخدم، سيتم تخزين القيمة في المتغير المحدد وسيستمر التدفق إلى العقدة التالية."
    }
  },
  flowBuilderIntervalModal: {
    title: {
      add: "إضافة فاصل زمني إلى التدفق",
      edit: "تعديل الفاصل الزمني"
    },
    labels: {
      timeInSeconds: "الوقت بالثواني"
    },
    buttons: {
      add: "إضافة",
      edit: "تعديل"
    },
    toasts: {
      addIntervalValue: "أضف قيمة الفاصل الزمني",
      maxTimeReached: "تم الوصول إلى الحد الأقصى للوقت وهو 120 ثانية"
    }
  },
  flowBuilderRandomizerModal: {
    title: {
      add: "إضافة عشوائي إلى التدفق",
      edit: "تعديل العشوائي"
    },
    buttons: {
      add: "إضافة",
      edit: "تعديل"
    },
    toasts: {
      addIntervalValue: "أضف قيمة الفاصل الزمني",
      maxTimeReached: "تم الوصول إلى الحد الأقصى للوقت وهو 120 ثانية"
    }
  },
  flowBuilderAddTicketModal: {
    title: {
      add: "إضافة قائمة انتظار إلى التدفق",
      edit: "تعديل قائمة الانتظار"
    },
    labels: {
      selectQueue: "اختر قائمة الانتظار التي تريد التحويل إليها",
      selectConnection: "اختر اتصالاً"
    },
    buttons: {
      add: "إضافة",
      edit: "تعديل"
    },
    toasts: {
      addQueue: "أضف قائمة انتظار"
    }
  },
  flowBuilderAddTagModal: {
    title: {
      add: "إضافة علامة إلى التدفق",
      edit: "تعديل العلامة"
    },
    labels: {
      selectTag: "اختر علامة",
      noTagSelected: "لم يتم اختيار أي علامة"
    },
    buttons: {
      add: "إضافة",
      edit: "تعديل"
    },
    toasts: {
      addTag: "أضف علامة"
    }
  },
  flowBuilderRemoveTagModal: {
    title: {
      add: "إزالة علامة من التدفق",
      edit: "تعديل إزالة العلامة"
    },
    labels: {
      selectTag: "اختر علامة لإزالتها من جهة الاتصال",
      selectTagToRemove: "اختر علامة لإزالتها",
      noTagSelected: "لم يتم اختيار أي علامة",
      info: "سيؤدي هذا الإجراء إلى إزالة العلامة المحددة من جهة الاتصال عند تنفيذ التدفق"
    },
    buttons: {
      add: "إضافة إزالة",
      edit: "تعديل"
    },
    toasts: {
      selectTag: "اختر علامة لإزالتها"
    }
  },
  flowBuilderAddSwitchFlowModal: {
    title: {
      add: "إضافة تبديل التدفق",
      edit: "تعديل تبديل التدفق"
    },
    buttons: {
      add: "إضافة",
      edit: "تعديل"
    },
    placeholders: {
      chooseFlow: "اختر تدفقًا"
    }
  },
  flowBuilderAddAttendantModal: {
    title: {
      add: "إضافة مساعد إلى التدفق",
      edit: "تعديل المساعد"
    },
    labels: {
      selectAttendant: "اختر مساعدًا",
      selectUser: "اختر مستخدمًا"
    },
    buttons: {
      add: "إضافة",
      edit: "تعديل"
    },
    toasts: {
      addAttendant: "أضف مساعدًا"
    }
  },
  flowBuilderHttpRequestNode: {
    title: "طلب HTTP",
    preset: {
      title: "Webhooks معدة مسبقًا",
      label: "اختر إعدادًا مسبقًا",
      placeholder: "اختر تكوينًا جاهزًا...",
      using: "باستخدام الإعداد المسبق:",
      remove: "إزالة الإعداد المسبق",
      system: "النظام",
      toasts: {
        errorLoading: "خطأ في تحميل الإعدادات المسبقة:",
        errorApplying: "خطأ في تطبيق تكوين الإعداد المسبق"
      }
    },
    url: {
      label: "URL",
      labelPreset: "URL للإعداد المسبق (للقراءة فقط)",
      placeholder: "https://your-domain.com/webhook",
      helperText: "تتم إدارة URL بواسطة الإعداد المسبق. للتغيير، قم بإزالة الإعداد المسبق."
    },
    method: "الطريقة",
    buttons: {
      test: "اختبار الطلب",
      showAdvanced: "إظهار الإعدادات المتقدمة",
      hideAdvanced: "إخفاء الإعدادات المتقدمة",
      addQueryParam: "إضافة معلمة استعلام",
      addHeader: "إضافة رأس",
      editBody: "تحرير جسم الطلب",
      mapVariables: "تخطيط متغيرات الاستجابة",
      hideVariables: "إخفاء متغيرات الاستجابة",
      addVariable: "إضافة متغير",
      close: "إغلاق"
    },
    response: {
      title: "الاستجابة",
      fullResponse: "عرض الاستجابة الكاملة",
      fullResponseTitle: "استجابة الطلب الكاملة"
    },
    advanced: {
      alert: "تتم إدارة الإعدادات المتقدمة بواسطة الإعداد المسبق ولا يمكن تحريرها.",
      timeout: "مهلة الطلب (ثواني)",
      queryParams: "معلمات الاستعلام",
      key: "المفتاح",
      value: "القيمة",
      headers: "الرؤوس",
      headersPlaceholder: '{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer your_token"\n}',
      body: "جسم الطلب (JSON)",
      editBody: "محرر الجسم المتقدم"
    },
    mapping: {
      title: "تخطيط بيانات الاستجابة للمتغيرات",
      path: "مسار البيانات في الاستجابة",
      pathPlaceholder: "على سبيل المثال: data.id",
      variableName: "اسم المتغير",
      variablePlaceholder: "على سبيل المثال: customerId"
    },
    misc: {
      requestError: "خطأ في إجراء الطلب",
      usefulTips: "نصائح مفيدة:",
      tip1: "يتم حفظ استجابة API الكاملة تلقائيًا في المتغير العام <strong>apiResponse</strong>",
      tip2: "يمكنك استخدام ${variableName} في عنوان URL ونص الطلب لتضمين قيم المتغيرات.",
      configSaved: "تم حفظ التكوين!"
    },
    providers: {
      kiwify: "Kiwify"
    },
    presets: {
      subscription_late: {
        name: "Kiwify - اشتراك متأخر",
        description: "Webhook عندما يكون الاشتراك متأخرًا في Kiwify"
      },
      subscription_canceled: {
        name: "Kiwify - اشتراك ملغى",
        description: "Webhook عندما يتم إلغاء اشتراك في Kiwify"
      },
      subscription_renewed: {
        name: "Kiwify - اشتراك مجدد",
        description: "Webhook عندما يتم تجديد اشتراك في Kiwify"
      }
    }
  },
  flowBuilderVariableNode: {
    title: "متغير عالمي",
    labels: {
      name: "اسم المتغير",
      value: "القيمة",
      helperText: "يمكنك استخدام قيم ثابتة أو مراجع مثل ${anotherVariable}"
    },
    buttons: {
      save: "حفظ المتغير"
    },
    toasts: {
      saved: "تم الحفظ!",
      savedSuccess: "تم حفظ المتغير بنجاح!"
    }
  },
  flowBuilderGeminiModal: {
    title: {
      add: "إضافة Gemini إلى التدفق",
      edit: "تعديل Gemini في التدفق"
    },
    buttons: {
      add: "إضافة",
      save: "حفظ",
      cancel: "إلغاء"
    },
    basicSettings: {
      title: "الإعدادات الأساسية - Google Gemini",
      assistantName: "اسم المساعد",
      apiKey: "مفتاح API لـ Google AI",
      model: "نموذج Gemini",
      systemPrompt: "موجه النظام",
      promptPlaceholder: "صف سلوك الذكاء الاصطناعي، والمعلومات التي يجب جمعها، وكيفية الرد...",
      temperature: "درجة الحرارة",
      temperatureHelper: "0 = متحفظ، 2 = إبداعي",
      maxTokens: "الحد الأقصى للرموز",
      maxTokensHelper: "الحجم الأقصى للاستجابة",
      maxMessages: "الحد الأقصى للرسائل",
      maxMessagesHelper: "سجل السياق"
    },
    flowBehavior: {
      title: "سلوك التدفق",
      tooltip: "تكوين سلوك Gemini في التدفق",
      mode: "وضع التشغيل",
      permanent: {
        title: "دائم - إنهاء التدفق هنا",
        description: "سيستمر المستخدم في الدردشة مع الذكاء الاصطناعي حتى يطلب التحويل أو ينهي المحادثة"
      },
      temporary: {
        title: "مؤقت - العودة إلى التدفق لاحقًا",
        description: "يقوم الذكاء الاصطناعي بمهمة محددة ثم يعود إلى التدفق الطبيعي"
      }
    },
    temporarySettings: {
      title: "⏱️ إعدادات الوضع المؤقت",
      description: "تكوين متى يجب أن يتوقف الذكاء الاصطناعي ويعود إلى التدفق",
      maxInteractions: "الحد الأقصى للتفاعلات",
      maxInteractionsHelper: "الحد الأقصى لعدد الرسائل قبل العودة إلى التدفق (0 = غير محدود)",
      timeout: "مهلة (دقائق)",
      timeoutHelper: "الحد الزمني قبل العودة إلى التدفق (0 = بلا حدود)",
      continueKeywords: "الكلمات الرئيسية لمتابعة التدفق",
      keywordPlaceholder: "أدخل كلمة رئيسية",
      addKeyword: "إضافة",
      keywordsHelper: "عندما يرسل المستخدم إحدى هذه الكلمات، سيستمر التدفق تلقائيًا",
      objective: "هدف الذكاء الاصطناعي",
      objectiveHelper: "صف ما يجب على الذكاء الاصطناعي إنجازه (على سبيل المثال، 'جمع الاسم والبريد الإلكتروني والهاتف')",
      objectivePlaceholder: "مثال: جمع بيانات العميل، تأهيل الاهتمام، تشخيص المشكلة...",
      autoComplete: {
        label: "الإكمال التلقائي عند تحقيق الهدف",
        description: "سيقوم الذكاء الاصطناعي بتحليل ما إذا كان قد أكمل الهدف تلقائيًا وسيعود إلى التدفق"
      },
      queueId: "معرف قائمة الانتظار (للتحويل)",
      queueIdHelper: "معرف قائمة الانتظار للتحويل إليها إذا طلب المستخدم وكيلًا (0 = عدم التحويل)"
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
      add: "إضافة OpenAI إلى التدفق",
      edit: "تعديل OpenAI في التدفق"
    },
    buttons: {
      add: "إضافة",
      save: "حفظ",
      cancel: "إلغاء"
    },
    basicSettings: {
      title: "الإعدادات الأساسية - OpenAI",
      assistantName: "اسم المساعد",
      apiKey: "مفتاح API لـ OpenAI",
      model: "نموذج OpenAI",
      systemPrompt: "موجه النظام",
      promptPlaceholder: "صف سلوك الذكاء الاصطناعي، والمعلومات التي يجب جمعها، وكيفية الرد...",
      temperature: "درجة الحرارة",
      temperatureHelper: "0 = متحفظ، 2 = إبداعي",
      maxTokens: "الحد الأقصى للرموز",
      maxTokensHelper: "الحجم الأقصى للاستجابة",
      maxMessages: "الحد الأقصى للرسائل",
      maxMessagesHelper: "سجل السياق"
    },
    voiceSettings: {
      title: "إعدادات الصوت (اختياري)",
      responseType: "نوع الاستجابة",
      voiceKey: "مفتاح الصوت (Azure)",
      voiceKeyPlaceholder: "مفتاح خدمة Azure Speech",
      voiceRegion: "منطقة الصوت (Azure)",
      voiceRegionPlaceholder: "مثال: brazilsouth",
      textOnly: "نص فقط"
    },
    flowBehavior: {
      title: "سلوك التدفق",
      tooltip: "تكوين سلوك OpenAI في التدفق",
      mode: "وضع التشغيل",
      permanent: {
        title: "دائم - إنهاء التدفق هنا",
        description: "سيستمر المستخدم في الدردشة مع الذكاء الاصطناعي حتى يطلب التحويل أو ينهي المحادثة"
      },
      temporary: {
        title: "مؤقت - العودة إلى التدفق لاحقًا",
        description: "يقوم الذكاء الاصطناعي بمهمة محددة ثم يعود إلى التدفق الطبيعي"
      }
    },
    temporarySettings: {
      title: "⏱️ إعدادات الوضع المؤقت",
      description: "تكوين متى يجب أن يتوقف الذكاء الاصطناعي ويعود إلى التدفق",
      maxInteractions: "الحد الأقصى للتفاعلات",
      maxInteractionsHelper: "الحد الأقصى لعدد الرسائل قبل العودة إلى التدفق (0 = غير محدود)",
      timeout: "مهلة (دقائق)",
      timeoutHelper: "الحد الزمني قبل العودة إلى التدفق (0 = بلا حدود)",
      continueKeywords: "الكلمات الرئيسية لمتابعة التدفق",
      keywordPlaceholder: "أدخل كلمة رئيسية",
      addKeyword: "إضافة",
      keywordsHelper: "عندما يرسل المستخدم إحدى هذه الكلمات، سيستمر التدفق تلقائيًا",
      objective: "هدف الذكاء الاصطناعي",
      objectiveHelper: "صف ما يجب على الذكاء الاصطناعي إنجازه (على سبيل المثال، 'جمع الاسم والبريد الإلكتروني والهاتف')",
      objectivePlaceholder: "مثال: جمع بيانات العميل، تأهيل الاهتمام، تشخيص المشكلة...",
      autoComplete: {
        label: "الإكمال التلقائي عند تحقيق الهدف",
        description: "سيقوم الذكاء الاصطناعي بتحليل ما إذا كان قد أكمل الهدف تلقائيًا وسيعود إلى التدفق"
      },
      queueId: "معرف قائمة الانتظار (للتحويل)",
      queueIdHelper: "معرف قائمة الانتظار للتحويل إليها إذا طلب المستخدم وكيلًا (0 = عدم التحويل)"
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
  }
    },
    flowBuilderStartNode: {
      title: "بداية التدفق",
      description: "هذه الكتلة تحدد بداية التدفق الخاص بك!"
    },
    plantao: {
      title: "تحت الطلب",
      buttons: {
        add: "إضافة وردية"
      },
      confirmationModal: {
        deleteTitle: "إزالة الشخص المناوب",
        deleteMessage: "هل أنت متأكد أنك تريد حذف هذا الشخص المناوب؟"
      },
      toasts: {
        deleted: "تمت إزالة الوردية بنجاح"
      },
      table: {
        id: "المعرف",
        onCall: "الشخص المناوب",
        phone: "الهاتف",
        schedules: "الجداول الزمنية",
        actions: "الإجراءات"
      },
      modal: {
        title: {
          add: "إضافة شخص مناوب",
          edit: "تحرير الشخص المناوب"
        },
        form: {
          phone: "الهاتف",
          interval: "الفاصل الزمني",
          daysOfWeek: "أيام الأسبوع",
          dayOfWeek: "يوم الأسبوع",
          startOnCall: "بداية الوردية",
          endOnCall: "نهاية الوردية",
          user: "المستخدم",
          helperTextInterval: "الفاصل الزمني بين الإشعارات (بالدقائق)"
        },
        validation: {
          user: "يرجى تقديم المستخدم",
          phone: "يرجى تقديم رقم الهاتف",
          interval: "يرجى تقديم الفاصل الزمني للإشعار",
          startOnCall: "يرجى تقديم وقت بدء الوردية",
          endOnCall: "يرجى تقديم وقت انتهاء الوردية",
          atLeastOneDay: "يجب أن يحتوي يوم واحد على الأقل من الأسبوع على أوقات البدء والانتهاء معبأة"
        },
        weekDays: {
          monday: "الاثنين",
          tuesday: "الثلاثاء",
          wednesday: "الأربعاء",
          thursday: "الخميس",
          friday: "الجمعة",
          saturday: "السبت",
          sunday: "الأحد"
        }
      }
    },
    financeiro: {
      title: "المالية",
      subTitle: "الفواتير",
      dueWarning: "تنبيه: اشتراكك قد انتهى. يرجى الاتصال بالدعم لتسوية وضعك.",
      table: {
        details: "التفاصيل",
        users: "المستخدمون",
        connections: "الاتصالات",
        queues: "قوائم الانتظار",
        value: "القيمة",
        dueDate: "تاريخ الاستحقاق",
        status: "الحالة",
        action: "الإجراء"
      },
      status: {
        paid: "مدفوع",
        expired: "منتهي الصلاحية",
        open: "مفتوح"
      },
      boolean: {
        yes: "نعم",
        no: "لا"
      },
      buttons: {
        pay: "دفع",
        paid: "مدفوع"
      },
      checkout: {
        title: "أوشكت على الانتهاء!",
        steps: {
          data: "البيانات",
          customize: "تخصيص",
          review: "مراجعة"
        },
        buttons: {
          back: "رجوع",
          pay: "دفع",
          next: "التالي"
        },
        toasts: {
          success: "تم الاشتراك بنجاح! في انتظار تأكيد الدفع."
        },
        notFound: "غير موجود",
        form: {
          fullName: "الاسم الكامل*",
          address: "العنوان*",
          city: "المدينة*",
          state: "الولاية/المقاطعة*",
          document: "الرقم الضريبي*",
          country: "الدولة*"
        },
        errors: {
          fullName: "الاسم الكامل مطلوب",
          address: "العنوان مطلوب",
          city: "المدينة مطلوبة",
          state: "الولاية/المقاطعة مطلوبة",
          document: "الرقم الضريبي مطلوب",
          documentInvalid: "تنسيق الرقم الضريبي غير صالح",
          country: "الدولة مطلوبة"
        },
        payment: {
          planDescription: {
            users: "المستخدمون",
            connections: "اتصال",
            queues: "قوائم الانتظار"
          },
          selectButton: "تحديد",
          priceSuffix: "/شهر"
        },
        review: {
          title: "ملخص الاشتراك",
          planDetails: "تفاصيل الخطة",
          users: "المستخدمون:",
          connections: "اتصال:",
          queues: "قوائم الانتظار:",
          billing: "الفواتير:",
          billingValue: "شهريًا",
          paymentInfo: "معلومات الدفع",
          email: "البريد الإلكتروني:",
          name: "الاسم:",
          document: "الرقم الضريبي:",
          total: "المجموع:"
        },
        success: {
          total: "المجموع",
          copied: "تم النسخ",
          copyButton: "نسخ رمز PIX QR",
          instructions: "للإتمام، قم بالدفع عن طريق مسح أو لصق رمز Pix أعلاه، أو اختر الدفع ببطاقة الائتمان أدناه.",
          payWithCard: "الدفع ببطاقة الائتمان",
          payWithMercadoPago: "الدفع بواسطة MercadoPago",
          payWithAsaas: "الدفع بواسطة Asaas",
          toast: "تم تجديد ترخيصك حتى {dueDate}!"
        }
      }
    }
  }
};
const finalizacaoVendaModal = {
  title: "إنهاء الخدمة - قيمة البيع",
  loading: "جاري تحميل الإعدادات...",
  form: {
    saleCompletedLabel: "هل تم البيع؟",
    saleCompletedYes: "نعم، تم البيع",
    saleCompletedNo: "لا، لم يتم البيع",
    saleValue: "قيمة البيع",
    noSaleReason: "سبب عدم البيع",
    finalizationReason: "سبب الإنهاء",
    selectReason: "اختر سبباً"
  },
  buttons: {
    cancel: "إلغاء",
    finalize: "إنهاء الخدمة",
    finalizing: "جاري الإنهاء..."
  },
  toasts: {
    saleValueRequired: "يرجى إدخال قيمة البيع.",
    noSaleReasonRequired: "يرجى اختيار سبب عدم البيع.",
    finalizationReasonRequired: "يرجى اختيار سبب الإنهاء."
  }
};
const signup = {
  title: "التسجيل",
  toasts: {
    disabled: "تسجيل المستخدمين معطل من قبل المسؤول.",
    success: "تم تسجيل المستخدم بنجاح!",
    cpfValid: "CPF صالح!",
    cpfInvalid: "CPF غير صالح!",
    cnpjValid: "CNPJ صالح! تم ملء اسم الشركة تلقائيًا.",
    documentInvalid: "مستند غير صالح أو لم يتم العثور عليه.",
    documentValidationError: "خطأ في التحقق من المستند. يرجى المحاولة مرة أخرى."
  },
  form: {
    document: "CPF أو CNPJ",
    documentHelper: "أدخل CPF (11 رقمًا) أو CNPJ (14 رقمًا)",
    company: "اسم الشركة",
    name: "الاسم",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    phone: "الهاتف",
    plan: "الخطة"
  },
  planDetails: {
    users: "المستخدمون",
    connections: "الاتصالات",
    queues: "قوائم الانتظار"
  },
  buttons: {
    submit: "تسجيل",
    login: "هل لديك حساب بالفعل؟ تسجيل الدخول"
  },
  errors: {
    nameTooShort: "قصير جدا!",
    nameTooLong: "طويل جدا!",
    nameRequired: "مطلوب",
    companyTooShort: "قصير جدا!",
    companyTooLong: "طويل جدا!",
    companyRequired: "مطلوب",
    documentInvalid: "يجب أن يتكون CPF من 11 رقمًا أو CNPJ من 14 رقمًا",
    documentRequired: "CPF أو CNPJ مطلوب",
    passwordTooShort: "قصيرة جدا!",
    passwordTooLong: "طويلة جدا!",
    emailInvalid: "بريد إلكتروني غير صالح",
    emailRequired: "مطلوب",
    phoneRequired: "مطلوب",
    documentValidation: "خطأ في التحقق من المستند:"
  }
};


export { messages };
