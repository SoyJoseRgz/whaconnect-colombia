const messages = {
  tr: {
    translations: {
      signup: {
        title: "Kayıt Ol",
        toasts: {
          success: "Kullanıcı başarılı bir şekilde oluşturuldu. Giriş Yapın!",
          fail: "Kullanıcı oluştururken hata oluştu."
        },
        form: {
          name: "Adınız",
          companyName: "Organizasyon Adı",
          email: "Eposta",
          phone: "Telefon",
          password: "Şifre"
        },
        buttons: {
          submit: "Kayıt",
          login: "Hesabınız var mı? Giriş Yapın."
        },
        recaptcha1: "This site is protected by reCAPTCHA and the Google",
        recaptcha2: "Privacy Policy",
        recaptcha3: "and",
        recaptcha4: "Terms of Service",
        recaptcha5: "apply."
      },
      passwordRecovery: {
        title: "Şifremi Unuttum",
        toasts: {
          success: "Eposta gönderildi, eposta adresinizi kontrol edin.",
          passwordUpdateSuccess: "Şifre Başarılı bir şekilde değiştirildi.",
          fail: "Şifre değiştirilirken hata oluştu. Tekrar deneyin."
        },
        form: {
          email: "Eposta",
          password: "Şifre",
          confirmPassword: "Şifre Tekrar",
          validation: "Şifrelerin eşleşmesi gerekiyor!"
        },
        buttons: {
          submit: "Gönder",
          login: "Giriş Yap"
        }
      },
      login: {
        title: "Giriş",
        form: {
          email: "Eposta",
          password: "Şifre"
        },
        buttons: {
          submit: "Gönder",
          register: "Hesabınız yok mu? Kayıt Ol!",
          recovery: "Şifremi Unuttum?"
        }
      },
      auth: {
        toasts: {
          success: "Giriş Başarılı!",
          active:
            "Hesap başarılı bir şekilde aktif edildi. Lütfen giriş yapın.",
          trialExpired: "Deneme süreniz bitti, bizimle iletişime geçiniz.",
          notActive:
            "Hesabınız aktif edilmedi, Lütfen eposta adresinizi doğrulayın."
        }
      },
      dashboard: {
        charts: {
          perHour: {
            title: "Bugün - Sohbet Adeti: ",
            verticalTitle: "Sohbet"
          }
        }
      },
      connections: {
        title: "Bağlantı",
        toasts: {
          deleted: "WhatsApp bağlantısı başarılı bir şekilde silindi!"
        },
        confirmationModal: {
          deleteTitle: "Sil",
          deleteMessage:
            "Silmek istediğinize emin misiniz? Bu işlem geri döndürülemez.",
          disconnectTitle: "Bağlantı Yok!",
          disconnectMessage:
            "Emin misiniz? QR Kodu yeniden okutmanız gerekecek."
        },
        buttons: {
          add: "WhatsApp Ekle",
          disconnect: "Bağlantıyı Sonlandır",
          tryAgain: "Tekrar Deneyin",
          qrcode: "QR Kodu",
          newQr: "Yeni QR Kodu",
          connecting: "Bağlantıyı Oluştur",
          start: "Başla"
        },
        toolTips: {
          disconnected: {
            title: "WhatsApp oturumu başlatılamadı!",
            content:
              "Telefonun İnternet bağlantısı ve şarj seviyesinin düşük olmadığından emin olunuz. Ya da QR Kodu yeniden oluşturunuz."
          },
          qrcode: {
            title: "QR Kodu okumasını bekleyiniz.",
            content:
              "'QR Kodu' butonuna tıklayın ve telefonunuzdan QR Kodu okutarak oturumu başlatın."
          },
          connected: {
            title: "Bağlantı Kuruldu."
          },
          timeout: {
            title: "Telefonunuzla olan bağlantı koptu!",
            content:
              "Telefonun İnternet bağlantısından, WhatsApp'ın arka planda da çalışır olduğundan ve şarj seviyesinin düşük olmadığından emin olunuz. Ya da QR Kodu yeniden oluşturunuz."
          },
          offline: {
            title: "Bağlantı kapalı",
            content: "Online olmak için başlayın."
          }
        },
        table: {
          name: "İsim",
          number: "Numara",
          status: "Durum",
          provider: "WhatsApp",
          default: "Varsayılan",
          actions: "İşlem",
          session: "Oturum"
        }
      },
      whatsappModal: {
        title: {
          add: "WhatsApp Ekle",
          edit: "WhatsApp'ı düzenle"
        },
        form: {
          name: "İsim",
          onNewMessage: "Yeni Bir Mesajda",
          greetingMessage: "Karşılama Mesajı",
          farewellMessage: "Kapanış Mesajı",
          alwaysReopen: "Her zaman önceki konuşmayı yeniden aç",
          customReopen1: "Önceki konuşmayı",
          customReopen2: "dakikaya kadar yeniden aç",
          farewellTooltip: {
            title: "Sohbet Kapatıldıktan sonra gönderilecek mesaj",
            content:
              "Eklemek için aşağıdaki değişkenlere tıklayabilirsiniz. Göndermemek için boş bırakın"
          }
        },
        buttons: {
          okAdd: "Ekle",
          okEdit: "Kaydet",
          cancel: "İptal"
        },
        success: "WhatsApp başarılı bir şekilde kaydedildi."
      },
      qrCode: {
        message: "Oturumu başlatmak için QR Kodu okuyun."
      },
      fastResponses: {
        title: "Hızlı Yanıtlar",
        toasts: {
          deleted: "Hızlı yanıt başarılı bir şekilde silindi!"
        },
        confirmationModal: {
          deleteTitle: "Sil",
          deleteMessage: "Emin misiniz? Bu işlem geri döndürülemez."
        },
        buttons: {
          add: "Hızlı yanıt etkle"
        },
        table: {
          shortcut: "Kısayol",
          message: "Mesaj",
          actions: "Eylem"
        }
      },
      fastResponseModal: {
        title: {
          add: "Hızlı yanıt ekle",
          edit: "Hızlı yanıt düzenle"
        },
        form: {
          shortcut: "Kısayol",
          message: "Mesaj"
        },
        buttons: {
          okAdd: "Ekle",
          okEdit: "Kaydet",
          cancel: "İptal"
        },
        success: "Hızlı yanıt başarılı bir şekilde kaydedildi."
      },
      quickMessages: {
        title: "Hızlı Yanıtlar",
        searchPlaceholder: "Ara...",
        noAttachment: "Ek yok",
        confirmationModal: {
          deleteTitle: "Sil",
          deleteMessage: "Bu işlem geri alınamaz! Devam etmek istiyor musunuz?"
        },
        buttons: {
          add: "Ekle",
          attach: "Dosya Ekle",
          cancel: "İptal",
          edit: "Düzenle"
        },
        toasts: {
          success: "Kısayol başarıyla eklendi!",
          deleted: "Kısayol başarıyla kaldırıldı!"
        },
        dialog: {
          title: "Hızlı Mesaj",
          shortcode: "Kısayol",
          message: "Yanıt",
          save: "Kaydet",
          cancel: "İptal",
          general: "Genel",
          geral: "Düzenlemeye İzin Ver",
          add: "Ekle",
          edit: "Düzenle",
          visao: "Görüntülemeye İzin Ver",
          form: {
            shortcode: {
              required: "Gerekli"
            }
          },
          tabs: {
            general: "Genel",
            official: "Resmi"
          },
          media: {
            title: "Medya Ekle",
            newFile: "Yeni Dosya",
            newAudio: "Yeni Ses",
            newAudioRecorded: "Yeni kaydedilmiş ses",
            buttons: {
              attach: "Dosya Ekle",
              record: "Ses Kaydet",
              cancelEdit: "Düzenlemeyi İptal Et"
            },
            tooltips: {
              edit: "Medyayı düzenle",
              remove: "Medyayı kaldır"
            },
            preview: {
              audioNotSupported: "Tarayıcınız ses öğesini desteklemiyor.",
              videoNotSupported: "Tarayıcınız video öğesini desteklemiyor."
            },
            replace: "Değiştirmek için yeni bir medya seçin:",
            choose: "Medya eklemek için bir seçenek seçin:"
          },
          components: {
            type: "Tür",
            value: "Değer"
          },
          status: "Durum",
          language: "Dil",
          category: "Kategori",
          metaID: "Meta ID"
        },
        table: {
          shortcode: "Kısayol",
          message: "Mesaj",
          actions: "Eylemler",
          mediaName: "Medya",
          status: "Durum"
        }
      },
      help: {
        title: "Yardım Merkezi"
      },
      contacts: {
        title: "Kişiler",
        toasts: {
          deleted: "Kişi Başarılı bir şekilde silindi!",
          not_imported_beta:
            "WhatsApp Beta'da kişileri içe aktarmak mümkün değil"
        },
        searchPlaceholder: "Ara ...",
        conversationFlows: "Konuşma Akışları",
        confirmationModal: {
          deleteTitle: "Sil",
          importTitlte: "Kişileri Yükle",
          deleteMessage:
            "Kişiyi silmek istediğinize emin misiniz? İlgili kişiye ait tüm sohbetler silinecektir.",
          importMessage:
            "Tüm Kişileri telefonunuzdan yüklemek istediğinize emin misiniz?"
        },
        newTicketModal: {
          title: "Yeni Konuşma",
          message: "Sohbete Başlamak için bağlantı oluştur."
        },
        buttons: {
          import: "Kişileri Çek",
          add: "Kişi Ekle",
          export: "Kişiyi Dışa Aktar",
          downloadModel: "Modeli İndir",
          close: "Kapat",
        },
        table: {
          name: "İsim",
          whatsapp: "WhatsApp",
          email: "Eposta",
          actions: "İşlemler"
        },
        table: {
          name: "İsim",
          whatsapp: "WhatsApp",
          email: "Eposta",
          actions: "İşlemler",
          status: "Durum",
          wallet: "Cüzdan",
          unassigned: "Atanmamış",
          userNotFound: "Kullanıcı bulunamadı"
        },
        buttons: {
          import: "Kişileri Çek",
          add: "Kişi Ekle",
          deleteAll: "Tüm Kişileri Sil"
        }
      },
      contactModal: {
        title: {
          add: "Kişi Ekle",
          edit: "Kişi Düzenle"
        },
        form: {
          mainInfo: "İletişim Bilgileri",
          extraInfo: "Ek Bilgiler",
			birthDate: "Doğum Tarihi",
			birthDateHelper: "Otomatik doğum günü mesajları için doğum tarihi",
          name: "İsim",
          number: "Whatsapp numarası",
          email: "Eposta",
          extraName: "Alan Adı",
          extraValue: "Değeri",
          treatmentName: "İletişim Nedeni",
          verified: "Onaylı",
          notVerified: "Onaylı Değiş"
        },
        buttons: {
          addExtraInfo: "Ekstra Bilgi Ekle ",
          okAdd: "Ekle",
          okEdit: "Kaydet",
          cancel: "İptal"
        },
        success: "Kişi Başarılı bir şekilde kaydedildi."
      },
      dialog: {
        imageTitle: "Profil Resmi - {contactName}",
        imageNotAvailable: "Resim mevcut değil"
      },
      tooltips: {
        deleteAll: "Tüm kişileri sil",
        deleteSelected: "Seçili kişileri sil",
        cancelSelection: "Seçimi iptal et"
      },
      toolbar: {
        selectedAll: "{count} kişi seçildi (TÜM KİŞİLER)"
      },
      title: {
        selectedAll: "- {count} seçildi (TÜMÜ)"
      },
	contactImport: {
title: "Dosyadan kişileri içe aktar",
		validate: "WhatsApp'taki kişileri doğrula",
		importing: "İçe aktarılıyor... Lütfen bekleyin",
		buttons: {
			import: "Kişileri içe aktar",
			cancel: "İptal",
			importMore: "Daha fazla kişi içe aktar",
			tryAgain: "Tekrar dene",
			back: "Geri"
		},
		table: {
			name: "İsim",
			number: "Numara",
			email: "E-posta",
			tags: "Etiketler",
			wallet: "Cüzdan"
		},
		results: {
			title: "İçe aktarma sonuçları",
			created: "{{count}} kişi başarıyla oluşturuldu",
			ignored: "{{count}} kişi yoksayıldı (geçersiz numara veya güncelleme için işaretlenmemiş)"
		},
		processing: "Dosya işleniyor...",
		invalidFile: {
			title: "Geçersiz dosya!",
			message: "İçe aktarmaya çalıştığınız dosya geçerli değil. Lütfen doğru biçimde bir dosya ile tekrar deneyin."
		},
		dropzone: {
			title: "Bir Excel dosyasını tıklayın veya sürükleyin",
			formats: "* Kabul edilen formatlar: xls, xlsx, csv, txt",
			instructions: "Kişileri içe aktarmak için en azından ad ve telefon numarası sütunlarına sahip olmalısınız."
		},
		errors: {
			noNumber: "Kişi numarası alanı seçilmedi",
			noName: "Kişi adı alanı seçilmedi",
			noContact: "Kişi seçilmedi"
		},
		toasts: {
			success: "İçe aktarma başarılı! {{count}} kişi içe aktarıldı.",
			warn: "İçe aktarma tamamlandı: {{imported}} kişi içe aktarıldı ve {{ignored}} yoksayıldı.",
			fail: "İçe aktarma başarısız oldu. Hiçbir kişi içe aktarılmadı."
		}
	},
	contactImportWpModal: {
		status: {
			completed: "İçe aktarma başarıyla tamamlandı",
			inProgress: "İçe aktarma devam ediyor {{current}} / {{total}}, içe aktarma tamamlanana kadar bu ekrandan ayrılmayın"
		},
		sheetName: "Kişiler"
	},
	contactNotes: {
		toasts: {
			addSuccess: "Not başarıyla eklendi!",
			deleteSuccess: "Not başarıyla silindi!"
		},
		confirmationModal: {
			deleteTitle: "Kaydı Sil",
			deleteMessage: "Bu kaydı gerçekten silmek istiyor musunuz?"
		},
		buttons: {
			cancel: "İptal",
			save: "Kaydet",
			close: "Kapat"
		},
		editModal: {
			title: "Notu Düzenle",
			label: "Notu Düzenle"
		}
	},
	contactDeleteConfirm: {
		expected: {
			all: "TÜMÜNÜ SİL",
			selected: "SEÇİLENLERİ SİL"
		},
		error: "Tam olarak şunu yazın: {{text}}",
		title: {
			all: "TÜM {{count}} kişiyi sil?",
			selected: "{{count}} seçili kişiyi sil?"
		},
		alert: {
			all: "⚠️ UYARI: Bu işlem, şirketten TÜM {{count}} kişiyi kalıcı olarak silecektir!",
			selected: "Bu işlem, {{count}} seçili kişiyi kalıcı olarak silecektir."
		},
		message: {
			all: "Bu işlem geri alınamaz. Tüm kişiler, mesaj geçmişleri, etiketleri ve ilişkileri kalıcı olarak kaybolacaktır.",
			selected: "Seçilen kişiler ve ilgili verileri kalıcı olarak silinecektir."
		},
		instruction: "Onaylamak için tam olarak şunu yazın: <strong>{{text}}</strong>",
		label: "Onay",
		buttons: {
			cancel: "İptal",
			confirmAll: "Tümünü Sil",
			confirmSelected: "Seçilenleri Sil"
		}
	},
      queueModal: {
        title: {
          add: "Kuyruk Oluştur",
          edit: "Kuyruk Düzenle"
        },
        form: {
          options: "Ayarlar",
          option: "Ayar",
          name: "İsim",
          color: "Renk",
          greetingMessage: "Karşılama Mesajı",
          responseMessage: "Yanıt:"
        },
        optionsTooltip: {
          title: "ChatBot için ayarları ekle",
          content:
            "Tek bir seçenek varsa, otomatik olarak seçilecek ve botun seçenek mesajıyla yanıt vermesini sağlayacak."
        },
        greetingTooltip: {
          title:
            "Mesaj zorunlu alan, düzenlemek için tıkla! Message is required, click here to edit!",
          content: "Mesajsız bir seçenek seçilmeyecek."
        },
        buttons: {
          okAdd: "Ekle",
          okEdit: "Kaydet",
          cancel: "İptal",
          addOption: "Seçenek Ekle"
        },
        confirmationModal: {
          deleteTitle: "Seçeneği sil",
          deleteMessage: "Emin misiniz? Yapılan tüm seçenekler silinecek!"
        }
      },
      campaignModal: {
        title: {
          add: "Yeni Kampanya"
        },
        form: {
          name: "Kampanya Adı",
          connection: "Bağlantı",
          globalBody: "Varsayılan Mesaj",
          globalBodyTooltip:
            "Bu mesaj, tanımlanmış bir body'si olmayan CSV'deki içe aktarılan numaralara gönderilecektir."
        },
        buttons: {
          okAdd: "Ekle",
          okEdit: "Kaydet",
          cancel: "İptal"
        },
        success: "Kampanya Başarılı şekilde eklendi."
      },
      campaignProgressModal: {
        title: "Kampanya Mesajı",
        name: "Kampanya Adı",
        status: "Durum",
        table: {
          number: "Numara",
          message: "Mesaj",
          updatedAt: "Güncellendi",
          status: "Durum"
        },
        buttons: {
          back: "Geri"
        },
        ackLabels: {
          scheduled: "Ayarlandı",
          pending: "Gönderilmedi",
          sent: "Gönderildi",
          received: "Alındı",
          read: "Okundu"
        }
      },
      csvHandler: {
        downloadCsv: "Örnek Dosyayı İndir",
        importCsv: "CSV Dosyası Yükle"
      },
      userModal: {
        title: {
          add: "Kullanıcı Ekle",
          edit: "Kullanıcı Düzenle"
        },
        form: {
          name: "Ad",
          email: "Eposta",
          password: "Şifre",
          profile: "Profil"
        },
        buttons: {
          okAdd: "Ekle",
          okEdit: "Kaydet",
          cancel: "İptal"
        },
        success: "Kullanıcı başarılı bir şekilde kaydedildi."
      },
      scheduleModal: {
        title: {
          add: "Yeni Randevu",
          edit: "Randevuyu Düzenle",
          message: "Mesaj"
        },
        form: {
          body: "Mesaj",
          contact: "Kişi",
          sendAt: "Randevu Tarihi"
        },
        buttons: {
          addSchedule: "Randevu ekle",
          cancel: "İptal",
          okAdd: "Ekle"
        }
      },
      chat: {
        noTicketMessage:
          "Sohbete Başlamak için, herhangi bir sohbet kabul edin veya başlatın."
      },
      ticketsManager: {
        buttons: {
          newTicket: "Yeni"
        }
      },
      multipleSelectField: {
        selectAll: "Tümünü seç"
      },
      ticketsFilter: {
        applyFilters: "Uygula",
        cleanFilters: "Temizle",
        found: "Bulundu",
        placeholders: {
          search: "İsime veya numaraya göre ara",
          queues: "Kuyruklar",
          noQueue: "Sıra",
          whatsapps: "WhatsApp'lar",
          noWhatsapp: "Ne whatsapp",
          users: "Kullanıcılar",
          noUser: "Cevapsız",
          status: "Durumlar",
          protocol: "Protokol",
          tags: "Etiketler",
          dateFrom: "Başlangıç",
          dateTo: "Bitiş",
          pending: "Beklemek",
          open: "Katılmak",
          closed: "Çözüldü"
        }
      },
      ticketTagManager: {
        addTags: "Etiket Ekle",
        add: "Ekle",
        typeToAdd: "Yeni Etiket Yaz",
        confirmationModal: {
          deleteTitle: "Etiket Sil",
          deleteMessage:
            "Emin misiniz? Bu etiket ilgili tüm konuşmalardan silinecek!"
        }
      },
      referral: {
        title: "Referans Programı",
        link: "Referans Bağlantısı"
      },
      subscription: {
        title: "Abonelik",
        details: "Abonelik Detayları",
        billingEmail: "Fatura Eposta",
        unverifiedEmail1: "Bu eposta onaylanmamış, ",
        unverifiedEmailClick: "Buraya Tıkla ",
        unverifiedEmail2: "Aktivasyon mailini yeniden almak için.",
        status: {
          trial: "Deneme",
          active: "Aylık Abone",
          suspended: "Aboneliğin süresi doldu!"
        },
        expirationMessage: {
          trialExpiringIn: "Deneme sürenizin bitmesine {{count}} gün kaldı!!",
          trialExpiringIn_plural:
            "Deneme süreniz {{count}} gün içinde sona eriyor!",
          trialExpired:
            "Deneme süresi doldu, Kullanmak için aboneliğinizi yenileyin!",
          subscriptionCycleExpiring: "Mevcut aboneliğiniz sona eriyor."
        },
        planTable: {
          header: {
            plan: "Plan",
            users: "Kullanıcılar",
            whatsapps: "Whatsapplar",
            total: "Toplam",
            lastInvoice: "Son Fatura"
          },
          planName: "Özel"
        },
        buttons: {
          subscribe: "Abone Ol!",
          edit: "Değiştir",
          close: "Sonlandır"
        },
        tooltip: {
          billingCycle: {
            title: "Bir sonraki faturanızın son ödeme tarihi",
            content:
              "Fatura son ödeme tarihinden 10 gün önce düzenlenir. Aşağıdaki 'Son fatura' düğmesi aracılığıyla veya fatura e-postanız aracılığıyla faturaya erişin."
          }
        }
      },
      changeEmailModal: {
        title: "Fatura epostasını değiştirin",
        placeholder: "Yeni eposta",
        toast: "Yeni bir onay maili eposta adresinize gönderildi.",
        buttons: {
          ok: "Değiştir",
          cancel: "İptal"
        }
      },
      checkoutStepper: {
        titleEdit: "Planı Değiştir",
        titlePending: "Neredeyse Hazır!",
        titleDone: "Aboneliğiniz için Teşekkürler!",
        steps: {
          billingData: "Veri",
          customize: "Özelleştir",
          review: "Gözden Geçir",
          success: "Tebrikler!"
        },
        messages: {
          toastMinimumPlan: "En az 3 kullanıcı ve 1 whatsapp numarası gerekli",
          fieldMinimumUsers: "En Az 3!",
          fieldMinimumWhats: "En az 1!",
          emailSent:
            "Fatura adresine ödeme talimatı içeren bir e-posta gönderildi.",
          activationInfo:
            "Kredi kartı ödemeleri anında etkinleştirilir. Daha fazla yardıma ihtiyacınız olursa bizimle iletişime geçmekten çekinmeyin.",
          planChanged: "Aboneliğiniz güncellendi!",
          planChangedInfo:
            "Yeni kullanıcılar ve whatsapp limiti zaten mevcut. Yeni değer, bir sonraki açık faturanızda tahsil edilecektir."
        },
        buttons: {
          payNow: "Öde!",
          close: "Kapat"
        }
      },
      billingData: {
        title: "Gerekli Bilgiler",
        form: {
          name: "İsim",
          document: "Döküman Numarası",
          zip: "Posta Kodu",
          street: "Sokak",
          number: "Numara",
          district: "İlçe",
          complement: "Adres",
          city: "İl",
          state: "Ülke"
        }
      },
      planBuilder: {
        title: "Aboneliğinizi özelleştirin",
        table: {
          header: {
            item: "Ürün",
            quantity: "Miktar",
            unitaryValue: "Değer",
            subtotal: "Ara Toplam"
          },
          users: "Kullanıcılar",
          whatsapps: "Whatsapp'lar",
          total: "Toplam"
        },
        buttons: {
          next: "Sıradaki"
        }
      },
      subscriptionReview: {
        title: "Abonelik Özeti",
        titleChange: "Uyarı! Değişiklik 30 gün içerisinde değiştirilemez!",
        whatsExceeded:
          "Dikkat! Şu anda kullandığınızdan daha az whatsapp'a ayarlıyorsunuz. Fazla bağlantılar silinecek.",
        planDetails: "Plan Detayları",
        paymentDetails: "Ödeme Bilgisi",
        email: "Eposta",
        users: "Kullanıcılar",
        whatsapps: "Whatsapplar",
        name: "İsim",
        address: "Adres",
        document: "Döküman",
        total: "Toplam",
        buttons: {
          subscribe: "Abone Ol ",
          change: "Değişikliği Onayla",
          back: "Geri"
        }
      },
      tickets: {
        toasts: {
          deleted: "Oluşturulan sohbet silindi."
        },
        notification: {
          message: "Gelen Mesaj"
        },
        tabs: {
          open: { title: "Açık" },
          closed: { title: "Kapalı" },
          search: { title: "Ara" }
        },
        buttons: {
          showAll: "Tüm"
        }
      },
      transferTicketModal: {
        title: "Sohbeti Transfer Et",
        fieldLabel: "Kullanıcı Ara",
        noOptions: "Bu isimde Kullanıcı Bulunamadı.",
        noteLabel: "Gözlemler",
        buttons: {
          ok: "Transfer",
          cancel: "İptal"
        }
      },
      ticketsList: {
        pendingHeader: "Kuyruktakiler",
        assignedHeader: "İlgilenilenler",
        noTicketsTitle: "Boş!",
        noTicketsMessage:
          "Aranan terimle alakalı hiçbir şey bulunamadı.",
        buttons: {
          accept: "Kabul Et",
          cancel: "İptal",
          start: "Başlat",
          closed: "Kapat",
          reopen: "Yeniden Aç",
          transfer: "Aktar",
          ignore: "Yoksay",
          exportAsPDF: "PDF olarak dışa aktar",
          kanbanActions: "Kanban Seçenekleri",
        },
        confirmationModal: {
          title: "Otomatik Yanıtlama",
          message:
            "Bu konuşma otomatik yanıtlamada. Kabul etmek, otomatik yanıtlamanın kesilmesine neden olur."
        },
        status: {
          closed: "Kapandı"
        }
      },
      ticketListItem: {
        assignedTo: "İlgilenen",
        waitingWarning: "5 dakikadan fazla bekliyor!",
        noQueue: "sıra yok",
        connectionTooltip: {
          title: "Bir bağlantı seçmek için tıklayın"
        },
        chatbotTooltip: {
          title: "Otomatik Yanıtlama"
        },
        selectWhatsModal: {
          title: "Bu görüşmenin bağlantısı yok",
          message: "Sohbete devam etmek için bir bağlantı seçin",
          applyToAll: "Bağlantı olmadan herkese uygula"
        }
      },
      newTicketModal: {
        title: "Sohbet Oluştur",
        fieldLabel: "Kişileri Ara",
        queues: "Kuyruklar",
        noQueue: "Boş",
        add: "Ekle",
        buttons: {
          ok: "Başla",
          cancel: "İptal"
        }
      },
      whatsappSelect: {
        label: "Bağlantı Seç*"
      },
      mainDrawer: {
        listItems: {
          dashboard: "Pano",
          connections: "Bağlantılar",
          tickets: "Sohbetler",
          contacts: "Kişiler",
          help: "Yardım",
          fastResponses: "Hızlı Yanıtlamalar",
          queues: "Kuyruklar & Chatbotlar",
          administration: "Yönetim",
          users: "Kullanıcılar",
          api: "API",
          apiKeys: "Tokens",
          apiDocs: "Dökümanlar",
          subscription: "Abonelik",
          campaigns: "Kampanyalar",
          referral: "Referans",
          settings: "Ayarlar"
        },
        appBar: {
          user: {
            profile: "Profil",
            logout: "Çıkış"
          }
        }
      },
      notifications: {
        noTickets: "Bildirim Yok."
      },
      queues: {
        title: "Kuyruklar",
        deleteQueue: "Sıra başarıyla silindi.",
        saveQueue: "Sıra başarıyla kaydedildi!",
        table: {
          name: "İsim",
          color: "Renk",
          greeting: "Karşılama mesajı",
          actions: "İşlemler"
        },
        buttons: {
          add: "Kuyruk Ekle"
        },
        confirmationModal: {
          deleteTitle: "Sil",
          deleteMessage:
            "Silmek istediğinize emin misiniz? Bu kuyruktaki sohbetler hala var olacak, ancak atanmışlar herhangi bir sıraya sahip olmayacak!"
        }
      },
      queueSelect: {
        inputLabel: "Kuyruklar"
      },
      users: {
        title: "Kullanıcılar",
        table: {
          name: "İsim",
          email: "Eposta",
          profile: "Profil",
          actions: "İşlemler",
          no_data: "Veri yok"
        },
        buttons: {
          add: "Kullanıcı Ekle"
        },
        toasts: {
          deleted: "Kullanıcı Başarılı bir şekilde silindi."
        },
        confirmationModal: {
          deleteTitle: "Sil",
          deleteMessage:
            "Tüm kullanıcı verileri silinecek. Kullanıcıların açık sohbetleri kuyruğa taşınacaktır."
        },
        totalCountUsers: "Toplam Kullanıcılar :"
      },
      campaigns: {
        title: "Kampanyalar",
        table: {
          name: "Kampanya Adı",
          status: "Durum",
          createdAt: "Oluşturulma Zamanı",
          connection: "Bağlantı",
          progress: "İlerleme",
          actions: "İşlem"
        },
        not_connection: "Bağlantı Yok",
        status: {
          concluded: "Tamamlandı",
          suspended: "Askıda",
          active: "Aktif"
        },
        buttons: {
          add: "Yeni Kampanya"
        },
        toasts: {
          created: "Kampanya başarılı bir şekilde oluşturuldu!",
          started: "Kampanya başarılı bir şekilde başladı!",
          suspended: "Kampanya başarılı bir şekilde durduruldu!"
        },
        remainingMessages: "Kalan Mesajlar :"
      },
      settings: {
        success: "Ayarlar başarılı bir şekilde kaydedildi!",
        title: "Ayarlar",
        settings: {
          language: "Otomatik olarak oluşturulan mesajların dili",
          timezone: "Zaman dilimi"
        }
      },
      messagesList: {
        header: {
          assignedTo: "İlgilenen :",
          buttons: {
            return: "Kuyruğa Al",
            resolve: "Kapat",
            reopen: "Yeniden Aç",
            accept: "Kabul"
          }
        }
      },
      contactMessage: {
        add: "Ekle"
      },

      messageMedia: {
        loading: "Yükleniyor..."
      },
      messagesInput: {
        maxUploadSize: "Yüklenen dosya 20 MB sınırını aşıyor",
        placeholder: {
          open: "Hızlı yanıt vermek için bir mesaj veya ' / ' yazın",
          closed: "Mesaj göndermek için bu bileti yeniden açın veya kabul edin",
          note: "Özel not ekle"
        },
        signMessage: "Unvan",
        privateMessage: "Özel Mesaj",
        placeholderPrivateMessage: "Bir mesaj yazın veya hızlı yanıtlar için / tuşuna basın",
        placeholderPending: "Dahili mesaj (bilet kabulü bekleniyor)...",
        pendingTicket: {
          title: "Bilet Beklemede:",
          message: "Şu anda yalnızca dahili mesajlara izin veriliyor."
        },
        internalMessage: "Dahili Mesaj",
        dragAndDrop: "Dosya eklemek için sürükleyip bırakın",
        tooltips: {
          sendNote: "Özel not",
          sendMessage: "Açık Mesaj"
        }
      },
      contactDrawer: {
        header: "Kullanıcı Detayları",
        searchPlaceholder: "Mesajlarda ara...",
        buttons: {
          edit: "Kullanıcı Düzenle",
          block: "Engelle",
          unblock: "Engeli Kaldır"
        },
        extraInfo: "Diğer Bilgiler",
        tabs: {
          info: "Bilgi",
          images: "Resimler",
          videos: "Videolar",
          audios: "Sesler",
          documents: "Belgeler",
          links: "Bağlantılar",
          participants: "Katılımcılar"
        },
        participants: {
          title: "Grup Katılımcıları",
          noParticipants: "Katılımcı bulunamadı",
          superAdmin: "Süper Yönetici",
          admin: "Yönetici"
        },
        media: {
          noImages: "Resim bulunamadı",
          noVideos: "Video bulunamadı",
          noAudios: "Ses kaydı bulunamadı",
          noDocuments: "Belge bulunamadı",
          noLinks: "Bağlantı bulunamadı",
          document: "Belge"
        },
        search: {
          searching: "Aranıyor...",
          noMessages: "Mesaj bulunamadı",
          found: "Mesaj bulundu",
          you: "Siz"
        },
        toasts: {
          contactBlocked: "Kişi engellendi",
          contactUnblocked: "Kişinin engeli kaldırıldı"
        }
      },
      ticketOptionsMenu: {
        delete: "Sil",
        transfer: "Transfer",
        confirmationModal: {
          title: "Sohbeti Sil #",
          message: "Dikkat! Konuşmayla ilgili tüm mesajlar kaybolacak."
        },
        buttons: {
          delete: "Sil",
          cancel: "İptal"
        }
      },
      confirmationModal: {
        buttons: {
          confirm: "Tamam",
          cancel: "İptal"
        }
      },
      messageOptionsMenu: {
        delete: "Sil",
        reply: "Yanıtla",
        confirmationModal: {
          title: "Mesajı Sil?",
          message: "Bu işlem geri döndürülemez."
        }
      },
      maxUsersModal: {
        title: "Maksimum eşzamanlı kullanıcıya ulaşıldı!",
        subtitle:
          "Mevcut çevrimiçi kullanıcılar sözleşmeli kullanıcıları aştı, uygulamayı kullanmaya devam etmek için bir kullanıcının bağlantısını kesin.",
        table: {
          name: "İsim",
          lastSeen: "Son Görülme"
        },
        buttons: {
          disconnect: "Bağlantıyı Kes",
          logout: "Çıkış"
        },
        confirmationModal: {
          title: "Emin misiniz?",
          message: "Bağlantınız kesilecek."
        }
      },
      copyToClipboard: {
        copy: "Kopyala",
        copied: "Kopyalandı!"
      },
      retryMessageIcon: {
        error: "Mesaj gönderilirken hata oluştu. Yeniden denemek için tıklayın",
        loading: "Mesaj yeniden gönderiliyor..."
      },
      scheduledMessageIcon: {
        tooltip: "API'den gönderilmek üzere planlanmış mesaj"
      },
      sentFromApiIcon: {
        tooltip: "API'dan gönderildi"
      },
      messageVariablesPicker: {
        label: "Kullanılabilir Değişkenler",
        vars: {
          contactTreatment: "Kişi Sorunu",
          contactName: "Kişi İsmi",
          protocolNumber: "Protokol Numarası",
          contactNumber: "Kişi Numarası",
          greeting: "Karşılama"
        }
      },
      tokens: {
        title: "API Tokens",
        subtitle: "API Tokenlarını yönet",
        description:
          "Uygulama ile entegre etmek için tokenları kullanabilirsiniz. Bu API'yi kullanma hakkında daha fazla bilgi için Dokümanlar'ı ziyaret edin",
        table: {
          name: "İsim",
          secret: "Anahtar",
          actions: "İşlemler"
        },
        toasts: {
          tokenDeleted: "Token başarılı bir şekilde silindi!"
        },
        confirmationModal: {
          title: "Emin misiniz?",
          content:
            "Bu token'ı kullanan tüm sistemler yeniden yapılandırılmalıdır, aksi takdirde artık çalışmayacaktır.."
        },
        buttons: {
          new: "Yeni token"
        }
      },
      apiTokenModal: {
        title: "Token",
        name: "İsim",
        secret: "Anahtar",
        permissions: "İzinler",
        buttons: {
          save: "Kaydet",
          cancel: "İptal"
        },
        toasts: {
          noPermissions: "En az bir izin gereklidir.",
          success: "Token başarılı bir şekilde oluşturuldu!"
        }
      },
      initialConfig: {
        title: "İlk ayar",
        content1: "Whaticket 😊'a Hoşgeldiniz",
        content2:
          "Bunu kolaylaştırmak için * Hayatın, otomatik bir başlangıç ​​konfigürasyonu sağlıyoruz, böylece tüm Whaticket * * İnanılmaz * özelliklerini birkaç dakika içinde test edebilirsiniz.",
        content3:
          "* Tamam * tıklatarak, bir miktar * kuyruklar *, * chatbots *, * Hızlı Yanıtlar *, * Etiketler * ve A * WhatsApp bağlantısını oluşturalım. Bundan sonra, sadece sayfa * bağlantılardaki * QR kodunu * okuyun * bağlantılar * Testlere başlamak için. ",
        content4:
          "Bağlı sayıda ilk mesajı alır almaz, Whaticket eyleme geçecektir. 😎",
        content5:
          "Bütün bunları tek başına nasıl ayarlayacağınızı bilmek istiyorsanız, * Yardım * sayfasındaki videoları izleyebilir veya * Destek * ile temasa geçebilirsiniz.",
        content6: "İyi Testler! 🥰🥰"
      },
      languages: {
        undefined: "Dilim",
        "pt-BR": "Português",
        es: "Español",
        en: "English",
        tr: "Türkçe"
      },

      errorFallback: {
        error: "Uups, birşeyler yanlış gitti!",
        instructions: "Lütfen F5 yaparak sayfayı yenileyin ve tekrar deneyin!"
      },
      serviceWorker: {
        toast: "Yeni versiyon mevcut. Güncellemek için Tıklayın!"
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP:
          "En az bir tane WhatsApp bağlantısı olmak zorunda.",
        ERR_NO_DEF_WAPP_FOUND:
          "Varsayılan bir WhatsApp Hesabı bulunamadı. Lütfen Bağlantı sayfasını kontrol edin.",
        ERR_WAPP_NOT_INITIALIZED:
          "WhatsApp Oturumu başlatılamadı. Lütfen Bağlantı sayfasını kontrol edin.",
        ERR_WAPP_CHECK_CONTACT:
          "WhatsApp kişileri getirilemedi. Lütfen Bağlantı sayfasını kontrol edin.",
        ERR_WAPP_INVALID_CONTACT: "Bu uygun bir WhatsApp numarası gözükmüyor.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "Medya indirilemedi. Lütfen Bağlantı sayfasını kontrol edin.",
        ERR_INVALID_CREDENTIALS: "Doğrulama Hatası. Lütfen Tekrar deneyiniz.",
        ERR_SENDING_WAPP_MSG:
          "Mesaj gönderilirken hata oluştu. Lütfen Bağlantı sayfasını kontrol edin.",
        ERR_DELETE_WAPP_MSG: "Mesaj Silinemiyor!",
        ERR_OTHER_OPEN_TICKET:
          "Bu kişi ile zaten açık bir sohbetiniz bulunmakta.",
        ERR_SESSION_EXPIRED: "Oturum sonlandı. Lütfen Giriş Yapın.",
        ERR_USER_CREATION_DISABLED:
          "Kullanıcı oluşturulması yönetici tarafından engellendi.",
        ERR_NO_PERMISSION: "Bu kaynağa erişmek için yetkiniz yok.",
        ERR_DUPLICATED_CONTACT: "Bu numaraya ait bir kişi zaten mevcut.",
        ERR_NO_SETTING_FOUND: "Bu ID'ye ait bir ayar bulunamadı!",
        ERR_NO_CONTACT_FOUND: "Bu ID'ye ait bir kişi bulunamadı!",
        ERR_DUPLICATED_EMAIL: "Bu eposta zaten kayıtlı!",
        ERR_NO_TICKET_FOUND: "Bu ID'ye aiit bir sohbet bulunamadı!",
        ERR_NO_USER_FOUND: "Bu ID'ye ait bir kullanıcı bulunamadı!",
        ERR_DIFFERENT_PASSWORDS: "Farklı Şifreler",
        ERR_RECOVERY_EXPIRED: "Yenileme süresi doldu.",
        ERR_NO_EMAIL_FOUND: "Bu Eposta ile kullanıcı bulunamadı.",
        ERR_NO_WAPP_FOUND: "Bu ID ile WhatsApp bulunamadı.",
        ERR_CREATING_MESSAGE: "Veritabanında mesaj oluşturulurken hata oluştu.",
        ERR_MAX_WHATS_REACHED:
          "İzin verilen maksimum whatsapp hesaplarına ulaşıldı, satış ekibiyle iletişime geçin.",
        ERR_MAX_WHATS_EXCEEDED:
          "İzin verilen maksimum whatsapp hesabı aşıldı! Uygulamayı kullanmaya devam etmek için bazı bağlantıları kaldırın.",
        ERR_CREATING_TICKET: "Veritabanında sohbet oluşturulurken hata oluştu.",
        ERR_FETCH_WAPP_MSG:
          "WhatsApp'ta mesaj alınırken hata oluştu, mesaj çok eski olabilir.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Bu renk zaten kullanılıyor, başka bir tane seçin.",
        ERR_QUEUE_INVALID_COLOR: "Bu renk geçersiz.",
        ERR_WAPP_GREETING_REQUIRED:
          "Birden fazla kuyruk varsa karşılama mesajı gereklidir.",
        ERR_MAX_USERS_REACHED:
          "Maksimum eşzamanlı kullanıcı sayısına ulaşıldı.",
        ERR_TICKET_NO_WHATSAPP:
          "Bir bağlantı atamak için konuşma listesini kontrol edin.",
        ERR_CANT_IMPORT_MSGS:
          "İçe aktarmaya yalnızca kişinin ilk konuşmasında izin verilir",
        ERR_NOT_WHATSAPPS_ONLINE:
          "Kişileri eklemek veya güncellemek için çevrimiçi bağlantı gereklidir. Bağlantılar sayfasını kontrol edin",
        ERR_CANNOT_EDIT_GROUPS: "Grup kişilerini düzenlemeye izin verilmiyor",
        ERR_ACCOUNT_DISABLED:
          "Hesabınız devre dışı bırakıldı, daha fazla bilgi için bizimle iletişime geçin ",
        ERR_TAG_INVALID_NAME:
          "Etiket adı en az iki karakter uzunluğunda olmalıdır",
        ERR_FASTRESP_SHORTCUT_ALREADY_EXISTS:
          "Bu kısayolla hızlı bir yanıt zaten var",
        ERR_TAG_ALREADY_EXISTS: "Bu ada sahip bir etiket zaten var",
        ERR_SUBSCRIPTION_EXPIRED:
          "Aboneliğinizin süresi doldu. Abonelik sayfasını kontrol edin",
        ERR_PLAN_CHANGED_RECENTLY:
          "30 gün içinde birden fazla değişikliğe izin verilmez.",
        ERR_CEP_NOT_FOUND: "Posta kodu bulunamadı. Adresi manuel olarak girin",
        ERR_NUMBER_IS_NOT_VERIFIED:
          "Kişi doğrulanmadı, numarayı kontrol edin ve tekrar deneyin.",
        ERR_DUPLICATED_CONTACT_NINTH:
          "Bu numaraya ait bir kişi zaten bulunuyor.",
        ERR_LAST_ADMIN: "Hesapta en az bir tane yöneticiniz olmalıdır.",
        ERR_CREATING_COMPANY: "Hasabyňyzy döredip bolmaýar Goldaw goldawy.",
        ERR_INVALID_RECAPTCHA:
          "Howpsuzlygy barlamak säwligi, müşderi goldawyna ýüz tutuň."
      },
      tags: {
        title: "Etiketler",
        addColumns: "+ SÜTUN EKLE",
        search: "ARAMA",
        seeTicket: "BİLETİ GÖR",
        confirmationModal: {
          deleteTitle: "Bu Etiketi silmek istediğinizden emin misiniz?",
          deleteMessage: "Bu işlem geri alınamaz.",
        },
        table: {
          name: "İsim",
          kanban: "Kanban",
          color: "Renk",
          tickets: "Etiket Kayıtları",
          actions: "Eylemler",
        },
        buttons: {
          add: "Yeni Etiket",
        },
        toasts: {
          deleted: "Etiket başarıyla silindi.",
        },
      },
      chatModal: {
        form: {
          name: "İsim",
          description: "Açıklama",
          groupDescription: "Grup Açıklaması",
          users: "Kullanıcılar",
        },
      },
      campaigns: {
        title: "Kampanyalar",
        searchPlaceholder: "Ara",
        subMenus: {
          list: "Listeleme",
          listContacts: "Kişi Listesi",
          settings: "Ayarlar",
        },
        settings: {
          randomInterval: "Rastgele Gönderme Aralığı",
          noBreak: "Aralık Yok",
          intervalGapAfter: "Sonra daha uzun aralık",
          undefined: "Tanımsız",
          messages: "mesajlar",
          laggerTriggerRange: "Daha Büyük Gönderme Aralığı",
          addVar: "Değişken Ekle",
          save: "Kaydet",
          close: "Kapat",
          add: "Ekle",
          shortcut: "Kısayol",
          content: "İçerik",
        },
        buttons: {
          add: "Yeni Kampanya",
          contactLists: "Kişi Listeleri",
        },
        table: {
          name: "İsim",
          whatsapp: "Bağlantı",
          contactList: "Kişi Listesi",
          option: "Hiçbiri",
          disabled: "Devre Dışı",
          enabled: "Etkin",
          status: "Durum",
          scheduledAt: "Zamanlanmış",
          completedAt: "Tamamlandı",
          confirmation: "Onay",
          actions: "Eylemler",
          details: "Detaylar",
          recurrence: "Tekrarlama",
          nextExecution: "Sonraki Yürütme",
        },
        filters: {
          status: "Duruma Göre Filtrele",
          recurrence: "Tekrarlamaya Göre Filtrele",
          all: "Tümü",
          allStatuses: "Tüm Durumlar",
          allRecurrences: "Tüm Tekrarlamalar",
          recurring: "Tekrarlayan",
          unique: "Tekil",
          inactive: "Pasif",
          scheduled: "Zamanlanmış",
          inProgress: "Devam Ediyor",
          cancelled: "İptal Edildi",
          completed: "Tamamlandı",
        },
        confirmationModal: {
          deleteTitle: "Sil",
          deleteMessage: "Bu işlem geri alınamaz.",
        },
        toasts: {
          success: "İşlem başarıyla tamamlandı.",
          deleted: "Kayıt başarıyla silindi.",
        },
        dialog: {
          new: "Yeni Kampanya",
          update: "Kampanyayı Düzenle",
          readonly: "Sadece Görüntüle",
          help: "{isim}, {numara}, {eposta} gibi değişkenleri kullanın veya özel değişkenler tanımlayın.",
          tabs: {
            message1: "Msj. 1",
            message2: "Msj. 2",
            message3: "Msj. 3",
            message4: "Msj. 4",
            message5: "Msj. 5"
          },
          form: {
            name: "İsim",
            message1: "Mesaj 1",
            message2: "Mesaj 2",
            message3: "Mesaj 3",
            message4: "Mesaj 4",
            message5: "Mesaj 5",
            confirmationMessage1: "Onay Mesajı 1",
            confirmationMessage2: "Onay Mesajı 2",
            confirmationMessage3: "Onay Mesajı 3",
            confirmationMessage4: "Onay Mesajı 4",
            confirmationMessage5: "Onay Mesajı 5",
            messagePlaceholder: "Mesaj içeriği",
            whatsapp: "Bağlantı",
            noContactList: "Hiçbiri",
            disabled: "Devre Dışı",
            enabled: "Etkin",
            short: "Çok Kısa!",
            long: "Çok Uzun!",
            required: "Gerekli"
          }
        }
      },
      recurrenceSection: {
        title: "Tekrarlama",
        description:
          "Mesajı tekrarlı olarak göndermeyi seçebilir ve aralığı belirleyebilirsiniz. Tek seferlik bir mesaj ise, bu bölümde hiçbir şeyi değiştirmeyin.",
        labelInterval: "Aralık",
        intervalFilterValue: "Aralık filtre değeri",
        sendAsManyTimes: " Şu kadar kez gönder",
        shipNormallyOnNonbusinessDays: "İş günü olmayan günlerde normal gönder",
        sendOneBusinessDayBefore: "Bir iş günü önce gönder",
        sendOneBusinessDayLater: "Bir iş günü sonra gönder",
        options: {
          days: "Günler",
          weeks: "Haftalar",
          months: "Aylar",
          minutes: "Dakikalar",
        },
        recurrence: "Tekrarlama Kurulumu",
        validation: {
          type: "Tekrarlama türü gerekli",
          interval: "Aralık gerekli",
          intervalMin: "Aralık 0'dan büyük olmalı",
          daysOfWeek: "Haftanın en az bir gününü seçin",
          dayOfMonth: "Ayın günü gerekli",
          dayOfMonthMinMax: "Gün 1 ile 31 arasında olmalı",
          endDate: "Bitiş tarihi gelecekte olmalı",
          maxExecutions: "Maksimum yürütme 0'dan büyük olmalı"
        },
        enable: "Tekrarlamayı etkinleştir",
        type: "Tekrarlama Türü",
        interval: "Aralık",
        daysOfWeek: "Haftanın Günleri",
        dayOfMonth: "Ayın Günü",
        endDate: "Bitiş Tarihi (isteğe bağlı)",
        maxExecutions: "Maksimum Yürütme (isteğe bağlı)",
        options: {
          daily: "Günlük",
          weekly: "Haftalık",
          biweekly: "İki haftada bir",
          monthly: "Aylık",
          yearly: "Yıllık",
        },
        weekDays: {
          sunday: "Pazar",
          monday: "Pazartesi",
          tuesday: "Salı",
          wednesday: "Çarşamba",
          thursday: "Perşembe",
          friday: "Cuma",
          saturday: "Cumartesi",
        },
        helpers: {
          interval: "Her {{count}} {{type}}",
          dayOfMonth: "Ayın belirli bir günü (1-31)",
          endDate: "Sonsuz tekrarlama için boş bırakın",
          maxExecutions: "Sonsuz tekrarlama için boş bırakın",
        },
        preview: {
          title: "Sonraki 5 Yürütme:",
          execution: "{{index}}. Yürütme",
          buttonShow: "Sonraki Yürütmeleri Önizle",
          buttonHide: "Gizle",
        },
      },
      transcribe: {
        failed: "Metin dönüştürme başarısız oldu"
      },
      campaignsPhrase: {
        campaignsFlow: "Kampanya Akışı",
        campaigns: "Kampanya",
        name: "İsim",
        status: "Durum",
        newCampaignWithFlowByPhrase: "Frase ile akış kampanyası",
        editCampaignWithFlowByPhrase: "Frase ile akış kampanyasını düzenle",
        phraseTriggerName: "Frase tetikleyici adı",
        chooseAStream: "Bir akış seçin",
        whichPhraseTriggersTheFlow: " Hangi frasenin akışı tetiklediği?",
        selectAConnection: "Bir Bağlantı Seçin",
        chooseAStream: "Bir akış seçin",
        status: "Durum",
        cancel: "İPTAL",
        createCampaign: "KAMPANYA OLUŞTUR",
        saveCampaign: "Kampanyayı Kaydet",
        title: "Akış Kampanyaları",
        newCampaign: "Yeni Kampanya",
        connections: "Bağlantılar",
        noCampaignsFound: "Kampanya bulunamadı",
        createFirstCampaign: "İlk akış kampanyanızı oluşturmak için \"Yeni Kampanya\"ya tıklayın",
        campaignName: "Kampanya adı",
        selectFlow: "Bir akış seçin",
        whatsappConnections: "WhatsApp Bağlantıları",
        multipleConnections: "Çoklu",
        noConnection: "Bağlantı yok",
        moreConnections: "Daha fazla {{count}} bağlantı",
        active: "Aktif",
        inactive: "Pasif",
        editCampaign: "Kampanyayı düzenle",
        deleteCampaign: "Kampanyayı sil",
        phrasesTriggerFlow: "Akışı tetikleyen ifadeler/kelimeler",
        exactMatch: "Tam Eşleşme: Mesaj yapılandırılan ifade ile aynı olmalıdır.",
        partialMatch: "Kısmi Eşleşme: İfade mesajın herhangi bir yerinde bulunabilir.",
        phrase: "İfade {{number}}",
        type: "Tür",
        exact: "Tam",
        partial: "Kısmi",
        addPhrase: "İfade Ekle",
        atLeastOneConnection: "En az bir bağlantı seçilmelidir",
        connectionsSelected: "{{count}} bağlantı seçildi:",
        campaignWillExecute: "Kampanya, bu bağlantılardan herhangi biri yapılandırılan ifadelerle eşleşen mesajlar aldığında çalıştırılacaktır.",
        saving: "Kaydediliyor...",
        update: "Güncelle",
        create: "Oluştur",
        campaignDeleted: "Kampanya başarıyla silindi",
        campaignUpdated: "Kampanya başarıyla güncellendi",
        campaignCreated: "Kampanya başarıyla oluşturuldu",
        errorLoadingFlows: "Akışlar yüklenirken hata",
        errorLoadingConnections: "Bağlantılar yüklenirken hata",
        errorLoadingCampaign: "Kampanya verileri yüklenirken hata",
        errorSavingCampaign: "Kampanya kaydedilirken hata",
        fillRequiredFields: "Lütfen tüm gerekli alanları doldurun",
        flowNotFound: "Seçilen akış bulunamadı",
        phrasesConfigured: "{{count}} ifade yapılandırıldı",
        nameRequired: "İsim gerekli",
        flowRequired: "Akış gerekli",
        phraseRequired: "İfade gerekli",
      }
    },
    conversationFlows: {
      title: "Konuşma Akışları",
      searchPlaceholder: "Akışları ara...",
      newFlow: "Yeni Akış",
      createFirstFlow: "İlk Akışı Oluştur",
      noFlowsCreated: "Henüz akış oluşturulmadı",
      noFlowsFound: "Akış bulunamadı",
      createFirstFlowDescription: "Hizmetleri otomatikleştirmek için ilk konuşma akışınızı oluşturun",
      tryOtherSearchTerms: "Diğer arama terimlerini kullanmayı deneyin",
      active: "Aktif",
      inactive: "Pasif",
      editFlow: "Akışı düzenle",
      deleteFlow: "Akışı sil",
      duplicateFlow: "Akışı kopyala",
      flowDeleted: "Akış başarıyla silindi",
      flowDuplicated: "Akış başarıyla kopyalandı",
      deleteFlowTitle: "Akışı sil",
      duplicateFlowTitle: "Akışı kopyala",
      deleteFlowMessage: "Bu işlem geri alınamaz. Tüm ilgili entegrasyonlar kaybolacak.",
      duplicateFlowMessage: "Düzenlemeniz için akışın bir kopyası oluşturulacak.",
      createFlow: "Akış oluştur",
      ariaLabel: "Akış oluştur"
    },
    flowDefault: {
      title: "Varsayılan Akış",
      save: "Kaydet",
      welcomeFlow: "Hoş Geldin Akışı",
      welcomeFlowDescription: "Bu akış yalnızca yeni kişiler için tetiklenir, kişi listenizde olmayan ve mesaj gönderen kişiler için",
      defaultResponseFlow: "Varsayılan Yanıt Akışı",
      defaultResponseFlowDescription: "Varsayılan Yanıt, bir anahtar kelimeden farklı herhangi bir karakter ile gönderilir. DİKKAT! Hizmet zaten kapatılmışsa ve kapatılmasından 6 saat geçmişse tetiklenecektir.",
      chooseFlow: "Bir akış seçin",
      defaultFlowsUpdated: "Varsayılan akışlar güncellendi"
    },
    validation: {
      required: "Gerekli",
      tooShort: "Çok kısa",
      tooLong: "Çok uzun",
      nameRequired: "İsim gerekli",
      emailRequired: "E-posta gerekli",
      phoneRequired: "Telefon gerekli",
      invalidEmail: "Geçersiz e-posta",
      invalidPhone: "Geçersiz telefon",
      minLength: "En az {{count}} karakter olmalı",
      maxLength: "En fazla {{count}} karakter olmalı",
      promptRequired: "Yapay Zeka için eğitimi açıklayın",
      invalidModel: "Geçersiz model",
      modelRequired: "Modeli belirtin",
      minTokens: "Minimum 10 token",
      maxTokens: "Maksimum 4000 token",
      maxTokensGemini: "Maksimum 8000 token",
      maxTokensRequired: "Maksimum token sayısını belirtin",
      minTemperature: "Minimum 0",
      maxTemperature: "Maksimum 2",
      temperatureRequired: "Sıcaklığı belirtin",
      apiKeyRequired: "API Anahtarını belirtin",
      minMessages: "Minimum 1 mesaj",
      maxMessages: "Maksimum 100 mesaj",
      maxMessagesRequired: "Maksimum mesaj sayısını belirtin",
      voiceRequired: "Ses modunu belirtin",
      voiceKeyRequired: "Ses sentezi için Ses Anahtarı gerekli",
      voiceRegionRequired: "Ses sentezi için Ses Bölgesi gerekli",
      invalidFlowMode: "Geçersiz akış modu",
      flowModeRequired: "Akış modunu seçin",
      minInteractions: "Minimum 1 etkileşim",
      maxInteractions: "Maksimum 50 etkileşim",
      minTimeout: "Minimum 1 dakika",
      maxTimeout: "Maksimum 60 dakika",
      keywordRequired: "Anahtar kelime boş olamaz",
      minKeywordsRequired: "Geçici modda en az bir anahtar kelime gerekli",
      objectiveRequired: "Otomatik tamamlama aktifken hedef gerekli"
    }
  }
};

export { messages };
