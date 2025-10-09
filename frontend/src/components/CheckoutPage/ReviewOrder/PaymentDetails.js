import React, { useContext } from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import { AuthContext } from "../../../context/Auth/AuthContext";
import { i18n } from '../../../translate/i18n';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { firstName, address2, city, zipcode, state, country, plan } = formValues;
  const { user } = useContext(AuthContext);


  const newPlan = JSON.parse(plan);
  const { price } = newPlan;

  const getCurrency = () => {
    const language = localStorage.getItem("language");
    if (language === "es") {
      return 'MXN';
    }
    return 'BRL';
  }

  return (
    <Grid item container direction="column" xs={6} sm={12}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        {i18n.t("financeiro.checkout.review.paymentInfo")}
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>{i18n.t("financeiro.checkout.review.email")}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{user.email}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>{i18n.t("financeiro.checkout.review.name")}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{firstName}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>{i18n.t("financeiro.checkout.review.document")}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{zipcode}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>{i18n.t("financeiro.checkout.review.total")}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{price.toLocaleString(i18n.language === 'pt' ? 'pt-br' : 'es-mx', { style: 'currency', currency: getCurrency() })}</Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}

export default PaymentDetails;
