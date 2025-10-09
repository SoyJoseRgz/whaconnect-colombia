import React from "react";
import { TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { i18n } from "../../translate/i18n";

function CurrencyInput(props) {
  const { label, value, onChange, ...other } = props;

  const getCurrencyConfig = () => {
    const language = i18n.language;
    switch (language) {
      case "es":
        return { symbol: "MXN ", decimal: ".", thousand: "," };
      case "en":
        return { symbol: "$ ", decimal: ".", thousand: "," };
      case "ar":
        return { symbol: "ر.س ", decimal: ".", thousand: "," };
      case "pt":
      default:
        return { symbol: "R$ ", decimal: ",", thousand: "." };
    }
  };

  const {
    symbol: currencySymbol,
    decimal: decimalSeparator,
    thousand: thousandSeparator,
  } = getCurrencyConfig();

  const handleValueChange = (values) => {
    if (onChange) {
      onChange({
        target: {
          name: props.name,
          value: values.value,
        },
      });
    }
  };

  return (
    <NumberFormat
      label={label}
      name="valorVenda"
      customInput={TextField}
      variant="outlined"
      margin="dense"
      fullWidth
      value={value}
      onValueChange={handleValueChange}
      prefix={currencySymbol}
      decimalSeparator={decimalSeparator}
      thousandSeparator={thousandSeparator}
      decimalScale={2}
      fixedDecimalScale={true}
      allowNegative={false}
      {...other}
    />
  );
}

export default CurrencyInput;
