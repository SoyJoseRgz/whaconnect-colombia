// src/components/ContactDeleteConfirmModal/index.js
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { i18n } from "../../translate/i18n";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    minWidth: 400,
    paddingTop: theme.spacing(2),
  },
  confirmationInput: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  warningText: {
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    color: theme.palette.error.main,
  },
  alert: {
    marginBottom: theme.spacing(2),
  },
}));

const ContactDeleteConfirmModal = ({
  open,
  onClose,
  onConfirm,
  deleteType, // 'selected' ou 'all'
  selectedCount,
  totalCount,
}) => {
  const classes = useStyles();
  const [confirmText, setConfirmText] = useState("");
  const [error, setError] = useState("");

  const expectedText =
    deleteType === "all"
      ? i18n.t("contactDeleteConfirm.expected.all")
      : i18n.t("contactDeleteConfirm.expected.selected");

  const isConfirmValid = confirmText === expectedText;

  const handleConfirm = () => {
    if (!isConfirmValid) {
      setError(i18n.t("contactDeleteConfirm.error", { text: expectedText }));
      return;
    }
    
    setConfirmText("");
    setError("");
    onConfirm();
  };

  const handleClose = () => {
    setConfirmText("");
    setError("");
    onClose();
  };

  const getTitle = () => {
    if (deleteType === 'all') {
      return i18n.t("contactDeleteConfirm.title.all", { count: totalCount });
    }
    return i18n.t("contactDeleteConfirm.title.selected", { count: selectedCount });
  };

  const getMessage = () => {
    if (deleteType === 'all') {
      return (
        <>
          <Alert severity="error" className={classes.alert}>
            {i18n.t("contactDeleteConfirm.alert.all", { count: totalCount })}
          </Alert>
          <Typography variant="body2">
            {i18n.t("contactDeleteConfirm.message.all")}
          </Typography>
        </>
      );
    }
    
    return (
      <>
        <Alert severity="warning" className={classes.alert}>
          {i18n.t("contactDeleteConfirm.alert.selected", { count: selectedCount })}
        </Alert>
        <Typography variant="body2">
          {i18n.t("contactDeleteConfirm.message.selected")}
        </Typography>
      </>
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-confirm-dialog"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="delete-confirm-dialog">
        {getTitle()}
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {getMessage()}
        
        <Typography variant="body1" className={classes.warningText}>
          <span dangerouslySetInnerHTML={{ __html: i18n.t("contactDeleteConfirm.instruction", { text: expectedText }) }} />
        </Typography>
        
        <TextField
          fullWidth
          label={i18n.t("contactDeleteConfirm.label")}
          value={confirmText}
          onChange={(e) => {
            setConfirmText(e.target.value);
            setError("");
          }}
          placeholder={expectedText}
          className={classes.confirmationInput}
          error={!!error}
          helperText={error}
          autoFocus
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default" variant="outlined">
          {i18n.t("contactDeleteConfirm.buttons.cancel")}
        </Button>
        <Button
          onClick={handleConfirm}
          color="secondary"
          variant="contained"
          disabled={!isConfirmValid}
        >
          {deleteType === "all"
            ? i18n.t("contactDeleteConfirm.buttons.confirmAll")
            : i18n.t("contactDeleteConfirm.buttons.confirmSelected")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDeleteConfirmModal;