import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';
import ShippingDetails from './ShippingDetails';
import PaymentDetails from './PaymentDetails';
import { i18n } from '../../../translate/i18n';

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {i18n.t("financeiro.checkout.review.title")}
      </Typography>
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}
