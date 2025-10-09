import { i18n } from "../../../translate/i18n";

export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: i18n.t("financeiro.checkout.form.fullName"),
      requiredErrorMsg: i18n.t("financeiro.checkout.errors.fullName")
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required'
    },
    address1: {
      name: 'address2',
      label: i18n.t("financeiro.checkout.form.address"),
      requiredErrorMsg: i18n.t("financeiro.checkout.errors.address")
    },

    city: {
      name: 'city',
      label: i18n.t("financeiro.checkout.form.city"),
      requiredErrorMsg: i18n.t("financeiro.checkout.errors.city")
    },
    state: {
      name: 'state',
      label: i18n.t("financeiro.checkout.form.state"),
      requiredErrorMsg: i18n.t("financeiro.checkout.errors.state")
    },
    zipcode: {
      name: 'zipcode',
      label: i18n.t("financeiro.checkout.form.document"),
      requiredErrorMsg: i18n.t("financeiro.checkout.errors.document"),
      invalidErrorMsg: i18n.t("financeiro.checkout.errors.documentInvalid")
    },
    country: {
      name: 'country',
      label: i18n.t("financeiro.checkout.form.country"),
      requiredErrorMsg: i18n.t("financeiro.checkout.errors.country")
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Use this address for payment details'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Name on card*',
      requiredErrorMsg: 'Name on card is required'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      requiredErrorMsg: 'Card number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Expiry date*',
      requiredErrorMsg: 'Expiry date is required',
      invalidErrorMsg: 'Expiry date is not valid'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    }
  }
};
