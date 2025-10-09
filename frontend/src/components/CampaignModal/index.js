import React, { useState, useEffect, useRef, useContext } from "react";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import { head } from "lodash";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Chip from '@material-ui/core/Chip';
import RepeatIcon from '@material-ui/icons/Repeat';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { isNil } from "lodash";
import { i18n } from "../../translate/i18n";
import moment from "moment";

import api from "../../services/api";
import toastError from "../../errors/toastError";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  FormControlLabel,
  Switch,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemText,
  FormHelperText,
  Card,
  CardContent,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import { AuthContext } from "../../context/Auth/AuthContext";
import ConfirmationModal from "../ConfirmationModal";
import UserStatusIcon from "../UserModal/statusIcon";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import useQueues from "../../hooks/useQueues";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginRight: theme.spacing(1),
    flex: 1,
  },
  extraAttr: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnWrapper: {
    position: "relative",
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  recurrenceCard: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[50],
  },
  previewCard: {
    marginTop: theme.spacing(1),
    maxHeight: 200,
    overflow: 'auto',
  },
  recurrenceIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  variableChip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


// No CampaignModal.js - Atualizar o schema de validação

const CampaignSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, i18n.t("campaigns.dialog.form.short"))
    .max(50, i18n.t("campaigns.dialog.form.long"))
    .required(i18n.t("campaigns.dialog.form.required")),
  isRecurring: Yup.boolean().default(false),
  recurrenceType: Yup.string().when('isRecurring', {
    is: true,
    then: Yup.string().oneOf(['daily', 'weekly', 'biweekly', 'monthly', 'yearly']).required(i18n.t("recurrenceSection.validation.type")),
    otherwise: Yup.string().nullable()
  }),
  recurrenceInterval: Yup.number().when('isRecurring', {
    is: true,
    then: Yup.number().min(1, i18n.t("recurrenceSection.validation.intervalMin")).required(i18n.t("recurrenceSection.validation.interval")),
    otherwise: Yup.number().nullable()
  }),
  // CORREÇÃO: Validar como array mas permitir vazio
  recurrenceDaysOfWeek: Yup.array().when(['isRecurring', 'recurrenceType'], {
    is: (isRecurring, recurrenceType) => isRecurring && recurrenceType === 'weekly',
    then: Yup.array().min(1, i18n.t("recurrenceSection.validation.daysOfWeek")).required(),
    otherwise: Yup.array().nullable()
  }),
  recurrenceDayOfMonth: Yup.number().when(['isRecurring', 'recurrenceType'], {
    is: (isRecurring, recurrenceType) => isRecurring && recurrenceType === 'monthly',
    then: Yup.number().min(1, i18n.t("recurrenceSection.validation.dayOfMonthMinMax")).max(31, i18n.t("recurrenceSection.validation.dayOfMonthMinMax")).required(i18n.t("recurrenceSection.validation.dayOfMonth")),
    otherwise: Yup.number().nullable()
  }),
  recurrenceEndDate: Yup.date().when('isRecurring', {
    is: true,
    then: Yup.date().min(new Date(), i18n.t("recurrenceSection.validation.endDate")).nullable(),
    otherwise: Yup.date().nullable()
  }),
  maxExecutions: Yup.number().when('isRecurring', {
    is: true,
    then: Yup.number().min(1, i18n.t("recurrenceSection.validation.maxExecutions")).nullable(),
    otherwise: Yup.number().nullable()
  })
});

const VariableChips = ({ identifier, setFieldValue, formikValues }) => {
  const classes = useStyles();

  const variables = [
    {
      label: i18n.t("campaigns.dialog.form.variable_list.name"),
      value: "{nome}",
    },
    {
      label: i18n.t("campaigns.dialog.form.variable_list.number"),
      value: "{numero}",
    },
    {
      label: i18n.t("campaigns.dialog.form.variable_list.email"),
      value: "{email}",
    },
  ];

  const handleInsertVariable = (variable) => {
    const currentValue = formikValues[identifier] || "";
    const newValue = `${currentValue} ${variable}`;
    setFieldValue(identifier, newValue);
  };

  return (
    <Box mt={1}>
      <Typography variant="subtitle2" gutterBottom>
        {i18n.t("campaigns.dialog.form.variables")}
      </Typography>
      {variables.map((variable) => (
        <Chip
          key={variable.value}
          label={variable.label}
          onClick={() => handleInsertVariable(variable.value)}
          className={classes.variableChip}
          size="small"
        />
      ))}
    </Box>
  );
};

const CampaignModal = ({
  open,
  onClose,
  campaignId,
  initialValues,
  onSave,
  resetPagination,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMounted = useRef(true);
  const { user, socket } = useContext(AuthContext);
  const { companyId } = user;

  const initialState = {
    name: "",
    message1: "",
    message2: "",
    message3: "",
    message4: "",
    message5: "",
    confirmationMessage1: "",
    confirmationMessage2: "",
    confirmationMessage3: "",
    confirmationMessage4: "",
    confirmationMessage5: "",
    status: "INATIVA",
    confirmation: false,
    scheduledAt: "",
    contactListId: "",
    tagListId: "Nenhuma",
    companyId,
    statusTicket: "closed",
    openTicket: "disabled",
    // Novos campos de recorrência
    isRecurring: false,
    recurrenceType: "",
    recurrenceInterval: 1,
    recurrenceDaysOfWeek: [],
    recurrenceDayOfMonth: 1,
    recurrenceEndDate: "",
    maxExecutions: null,
  };

  const [campaign, setCampaign] = useState(initialState);
  const [whatsapps, setWhatsapps] = useState([]);
  const [selectedWhatsapps, setSelectedWhatsapps] = useState([]);
 const [whatsappId, setWhatsappId] = useState(null);
  const [contactLists, setContactLists] = useState([]);
  const [tagLists, setTagLists] = useState([]);
  const [messageTab, setMessageTab] = useState(0);
  const [attachment, setAttachment] = useState(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [campaignEditable, setCampaignEditable] = useState(true);
  const [previewExecutions, setPreviewExecutions] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const attachmentFile = useRef(null);

  const [options, setOptions] = useState([]);
  const [queues, setQueues] = useState([]);
  const [allQueues, setAllQueues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedQueue, setSelectedQueue] = useState(null);
  const { findAll: findAllQueues } = useQueues();

  // Opções para dias da semana
  const daysOfWeekOptions = [
    { value: 0, label: i18n.t("recurrenceSection.weekDays.sunday") },
    { value: 1, label: i18n.t("recurrenceSection.weekDays.monday") },
    { value: 2, label: i18n.t("recurrenceSection.weekDays.tuesday") },
    { value: 3, label: i18n.t("recurrenceSection.weekDays.wednesday") },
    { value: 4, label: i18n.t("recurrenceSection.weekDays.thursday") },
    { value: 5, label: i18n.t("recurrenceSection.weekDays.friday") },
    { value: 6, label: i18n.t("recurrenceSection.weekDays.saturday") },
  ];

  // Função para preview das execuções
  const handlePreviewRecurrence = async (values) => {
    if (!values.isRecurring || !values.recurrenceType || !values.scheduledAt) {
      setPreviewExecutions([]);
      return;
    }

    try {
      const params = {
        recurrenceType: values.recurrenceType,
        recurrenceInterval: values.recurrenceInterval,
        recurrenceDaysOfWeek: JSON.stringify(values.recurrenceDaysOfWeek),
        recurrenceDayOfMonth: values.recurrenceDayOfMonth,
      };

      if (campaignId) {
        const { data } = await api.get(`/campaigns/${campaignId}/recurrence-preview`, { params });
        setPreviewExecutions(data.executions);
      } else {
        // Para campanhas novas, calcular localmente ou usar endpoint genérico
        const mockExecutions = calculateMockExecutions(values);
        setPreviewExecutions(mockExecutions);
      }
    } catch (err) {
      console.error('Erro ao buscar preview:', err);
    }
  };

  // Função auxiliar para calcular execuções mock
  const calculateMockExecutions = (values) => {
    const executions = [];
    let currentDate = moment(values.scheduledAt);
    
    for (let i = 0; i < 5; i++) {
      executions.push(currentDate.format('DD/MM/YYYY HH:mm'));
      
      switch (values.recurrenceType) {
        case 'daily':
          currentDate = currentDate.clone().add(values.recurrenceInterval, 'days');
          break;
        case 'weekly':
          currentDate = currentDate.clone().add(values.recurrenceInterval, 'weeks');
          break;
        case 'biweekly':
          currentDate = currentDate.clone().add(values.recurrenceInterval * 2, 'weeks');
          break;
        case 'monthly':
          currentDate = currentDate.clone().add(values.recurrenceInterval, 'months');
          if (values.recurrenceDayOfMonth) {
            currentDate = currentDate.date(values.recurrenceDayOfMonth);
          }
          break;
        case 'yearly':
          currentDate = currentDate.clone().add(values.recurrenceInterval, 'years');
          break;
      }
    }
    
    return executions;
  };

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const loadQueues = async () => {
        const list = await findAllQueues();
        setAllQueues(list);
        setQueues(list);
      };
      loadQueues();
    }
  }, []);

  useEffect(() => {
    if (searchParam.length < 3) {
      setLoading(false);
      setSelectedQueue("");
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      setLoading(true);
      const fetchUsers = async () => {
        try {
          const { data } = await api.get("/users/");
          setOptions(data.users);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          toastError(err);
        }
      };
      fetchUsers();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchParam]);

  useEffect(() => {
    if (isMounted.current) {
      if (initialValues) {
        setCampaign((prevState) => {
          return { ...prevState, ...initialValues };
        });
      }

      api
        .get(`/contact-lists/list`, { params: { companyId } })
        .then(({ data }) => setContactLists(data));

      api
        .get(`/whatsapp`, { params: { companyId, session: 0 } })
        .then(({ data }) => {
          const mappedWhatsapps = data.map((whatsapp) => ({
            ...whatsapp,
            selected: false,
          }));
          setWhatsapps(mappedWhatsapps);
        });

      api.get(`/tags/list`, { params: { companyId, kanban: 0 } })
        .then(({ data }) => {
          const fetchedTags = data;
          const formattedTagLists = fetchedTags
            .filter(tag => tag.contacts.length > 0)
            .map((tag) => ({
              id: tag.id,
              name: `${tag.name} (${tag.contacts.length})`,
            }));
          setTagLists(formattedTagLists);
        })
        .catch((error) => {
          console.error("Error retrieving tags:", error);
        });

      if (!campaignId) return;

      api.get(`/campaigns/${campaignId}`).then(({ data }) => {
        if (data?.user) setSelectedUser(data.user);
        if (data?.queue) setSelectedQueue(data.queue.id);
        if (data?.whatsappId) {
          setWhatsappId(parseInt(data.whatsappId)); // Converter para número
        } else {
          setWhatsappId(null);
        }
        
        setCampaign((prev) => {
          let prevCampaignData = Object.assign({}, prev);

          Object.entries(data).forEach(([key, value]) => {
            if (key === "scheduledAt" && value !== "" && value !== null) {
              prevCampaignData[key] = moment(value).locale('en').format("YYYY-MM-DDTHH:mm");
            } else if (key === "recurrenceEndDate" && value !== "" && value !== null) {
              prevCampaignData[key] = moment(value).locale('en').format("YYYY-MM-DD");
            } else if (key === "recurrenceDaysOfWeek" && value) {
              prevCampaignData[key] = JSON.parse(value);
            } else {
              prevCampaignData[key] = value === null ? "" : value;
            }
          });

          return prevCampaignData;
        });
      });
    }
  }, [campaignId, open, initialValues, companyId]);

  useEffect(() => {
    const now = moment();
    const scheduledAt = moment(campaign.scheduledAt);
    const moreThenAnHour =
      !Number.isNaN(scheduledAt.diff(now)) && scheduledAt.diff(now, "hour") > 1;
    const isEditable =
      campaign.status === "INATIVA" ||
      (campaign.status === "PROGRAMADA" && moreThenAnHour);

    setCampaignEditable(isEditable);
  }, [campaign.status, campaign.scheduledAt]);

  const handleClose = () => {
    onClose();
    setCampaign(initialState);
    setPreviewExecutions([]);
    setShowPreview(false);
  };

  const handleAttachmentFile = (e) => {
    const file = head(e.target.files);
    if (file) {
      setAttachment(file);
    }
  };

const handleSaveCampaign = async (values) => {
  try {
    const dataValues = {
      ...values,
      whatsappId: whatsappId,
      userId: selectedUser?.id || null,
      queueId: selectedQueue || null,
      // CORREÇÃO: Garantir conversão correta do array
      recurrenceDaysOfWeek: (values.isRecurring && values.recurrenceDaysOfWeek && values.recurrenceDaysOfWeek.length > 0) 
        ? values.recurrenceDaysOfWeek // Enviar array, o backend irá converter para JSON
        : null, // Enviar null se não for recorrente ou array vazio
    };

    // Processar datas
    Object.entries(values).forEach(([key, value]) => {
      if (key === "scheduledAt" && value !== "" && value !== null) {
        dataValues[key] = moment(value).locale('en').format("YYYY-MM-DD HH:mm:ss");
      } else if (key === "recurrenceEndDate" && value !== "" && value !== null) {
        dataValues[key] = moment(value).locale('en').format("YYYY-MM-DD HH:mm:ss");
      } else if (key !== "recurrenceDaysOfWeek") { // Não processar recurrenceDaysOfWeek aqui
        dataValues[key] = value === "" ? null : value;
      }
    });

    // Garantir que campos não recorrentes sejam null quando isRecurring é false
    if (!values.isRecurring) {
      dataValues.recurrenceType = null;
      dataValues.recurrenceInterval = null;
      dataValues.recurrenceDaysOfWeek = null;
      dataValues.recurrenceDayOfMonth = null;
      dataValues.recurrenceEndDate = null;
      dataValues.maxExecutions = null;
    }

    if (campaignId) {
      await api.put(`/campaigns/${campaignId}`, dataValues);
      if (attachment != null) {
        const formData = new FormData();
        formData.append("file", attachment);
        await api.post(`/campaigns/${campaignId}/media-upload`, formData);
      }
      handleClose();
    } else {
      const { data } = await api.post("/campaigns", dataValues);
      if (attachment != null) {
        const formData = new FormData();
        formData.append("file", attachment);
        await api.post(`/campaigns/${data.id}/media-upload`, formData);
      }
      if (onSave) {
        onSave(data);
      }
      handleClose();
    }
    toast.success(i18n.t("campaigns.toasts.success"));
  } catch (err) {
    console.log(err);
    toastError(err);
  }
};

  const deleteMedia = async () => {
    if (attachment) {
      setAttachment(null);
      attachmentFile.current.value = null;
    }

    if (campaign.mediaPath) {
      await api.delete(`/campaigns/${campaign.id}/media-upload`);
      setCampaign((prev) => ({ ...prev, mediaPath: null, mediaName: null }));
      toast.success(i18n.t("campaigns.toasts.deleted"));
    }
  };

  const renderMessageField = (identifier, setFieldValue, formikValues) => {
    return (
      <>
        <Field
          as={TextField}
          id={identifier}
          name={identifier}
          fullWidth
          rows={5}
          label={i18n.t(`campaigns.dialog.form.${identifier}`)}
          placeholder={i18n.t("campaigns.dialog.form.messagePlaceholder")}
          multiline={true}
          variant="outlined"
          helperText={i18n.t("campaigns.dialog.help")}
          disabled={!campaignEditable && campaign.status !== "CANCELADA"}
        />
        <VariableChips
          identifier={identifier}
          setFieldValue={setFieldValue}
          formikValues={formikValues}
        />
      </>
    );
  };

  const renderConfirmationMessageField = (identifier) => {
    return (
      <Field
        as={TextField}
        id={identifier}
        name={identifier}
        fullWidth
        rows={5}
        label={i18n.t(`campaigns.dialog.form.${identifier}`)}
        placeholder={i18n.t("campaigns.dialog.form.messagePlaceholder")}
        multiline={true}
        variant="outlined"
        disabled={!campaignEditable && campaign.status !== "CANCELADA"}
      />
    );
  };

  const cancelCampaign = async () => {
    try {
      await api.post(`/campaigns/${campaign.id}/cancel`);
      toast.success(i18n.t("campaigns.toasts.cancel"));
      setCampaign((prev) => ({ ...prev, status: "CANCELADA" }));
      resetPagination();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const restartCampaign = async () => {
    try {
      await api.post(`/campaigns/${campaign.id}/restart`);
      toast.success(i18n.t("campaigns.toasts.restart"));
      setCampaign((prev) => ({ ...prev, status: "EM_ANDAMENTO" }));
      resetPagination();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const filterOptions = createFilterOptions({
    trim: true,
  });

  return (
    <div className={classes.root}>
      <ConfirmationModal
        title={i18n.t("campaigns.confirmationModal.deleteTitle")}
        open={confirmationOpen}
        onClose={() => setConfirmationOpen(false)}
        onConfirm={deleteMedia}
      >
        {i18n.t("campaigns.confirmationModal.deleteMessage")}
      </ConfirmationModal>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        scroll="paper"
      >
        <DialogTitle id="form-dialog-title">
          {campaignEditable ? (
            <>
              {campaignId
                ? `${i18n.t("campaigns.dialog.update")}`
                : `${i18n.t("campaigns.dialog.new")}`}
            </>
          ) : (
            <>{`${i18n.t("campaigns.dialog.readonly")}`}</>
          )}
        </DialogTitle>
        <div style={{ display: "none" }}>
          <input
            type="file"
            ref={attachmentFile}
            onChange={(e) => handleAttachmentFile(e)}
          />
        </div>
        <Formik
          initialValues={campaign}
          enableReinitialize={true}
          validationSchema={CampaignSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              handleSaveCampaign(values);
              actions.setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, touched, isSubmitting, setFieldValue }) => (
            <Form>
              <DialogContent dividers>
                <Grid spacing={2} container>
                  <Grid xs={12} md={4} item>
                    <Field
                      as={TextField}
                      label={i18n.t("campaigns.dialog.form.name")}
                      name="name"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      className={classes.textField}
                      disabled={!campaignEditable}
                    />
                  </Grid>
                  
                  <Grid xs={12} md={4} item>
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      className={classes.formControl}
                    >
                      <InputLabel id="confirmation-selection-label">
                        {i18n.t("campaigns.dialog.form.confirmation")}
                      </InputLabel>
                      <Field
                        as={Select}
                        label={i18n.t("campaigns.dialog.form.confirmation")}
                        placeholder={i18n.t("campaigns.dialog.form.confirmation")}
                        labelId="confirmation-selection-label"
                        id="confirmation"
                        name="confirmation"
                        error={touched.confirmation && Boolean(errors.confirmation)}
                        disabled={!campaignEditable}
                      >
                        <MenuItem value={false}>{i18n.t("campaigns.dialog.form.disabled")}</MenuItem>
                        <MenuItem value={true}>{i18n.t("campaigns.dialog.form.enabled")}</MenuItem>
                      </Field>
                    </FormControl>
                  </Grid>

                  <Grid xs={12} md={4} item>
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      className={classes.formControl}
                    >
                      <InputLabel id="contactList-selection-label">
                        {i18n.t("campaigns.dialog.form.contactList")}
                      </InputLabel>
                      <Field
                        as={Select}
                        label={i18n.t("campaigns.dialog.form.contactList")}
                        placeholder={i18n.t("campaigns.dialog.form.contactList")}
                        labelId="contactList-selection-label"
                        id="contactListId"
                        name="contactListId"
                        error={touched.contactListId && Boolean(errors.contactListId)}
                        disabled={!campaignEditable}
                      >
                        <MenuItem value="">{i18n.t("campaigns.dialog.form.noContactList")}</MenuItem>
                        {contactLists &&
                          contactLists.map((contactList) => (
                            <MenuItem key={contactList.id} value={contactList.id}>
                              {contactList.name}
                            </MenuItem>
                          ))}
                      </Field>
                    </FormControl>
                  </Grid>

                  <Grid xs={12} md={4} item>
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      className={classes.formControl}
                    >
                      <InputLabel id="tagList-selection-label">
                        {i18n.t("campaigns.dialog.form.tagList")}
                      </InputLabel>
                      <Field
                        as={Select}
                        label={i18n.t("campaigns.dialog.form.tagList")}
                        placeholder={i18n.t("campaigns.dialog.form.tagList")}
                        labelId="tagList-selection-label"
                        id="tagListId"
                        name="tagListId"
                        error={touched.tagListId && Boolean(errors.tagListId)}
                        disabled={!campaignEditable}
                      >
                        <MenuItem value="Nenhuma">{i18n.t("campaigns.dialog.form.noTagList")}</MenuItem>
                        {Array.isArray(tagLists) &&
                          tagLists.map((tagList) => (
                            <MenuItem key={tagList.id} value={tagList.id}>
                              {tagList.name}
                            </MenuItem>
                          ))}
                      </Field>
                    </FormControl>
                  </Grid>

                  <Grid xs={12} md={4} item>
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      className={classes.formControl}
                    >
                      <InputLabel id="whatsapp-selection-label">
                        {i18n.t("campaigns.dialog.form.whatsapp")}
                      </InputLabel>
                      <Field
                        as={Select}
                        label={i18n.t("campaigns.dialog.form.whatsapp")}
                        placeholder={i18n.t("campaigns.dialog.form.whatsapp")}
                        labelId="whatsapp-selection-label"
                        id="whatsappIds"
                        name="whatsappIds"
                        required
                        error={touched.whatsappId && Boolean(errors.whatsappId)}
                        disabled={!campaignEditable}
                        value={whatsappId}
                        onChange={(event) => {
                          setWhatsappId(event.target.value)
                        }}
                      >
                        {whatsapps &&
                          whatsapps.map((whatsapp) => (
                            <MenuItem key={whatsapp.id} value={whatsapp.id}>
                              {whatsapp.name}
                            </MenuItem>
                          ))}
                      </Field>
                    </FormControl>
                  </Grid>

                  <Grid xs={12} md={4} item>
                    <Field
                      as={TextField}
                      label={i18n.t("campaigns.dialog.form.scheduledAt")}
                      name="scheduledAt"
                      error={touched.scheduledAt && Boolean(errors.scheduledAt)}
                      helperText={touched.scheduledAt && errors.scheduledAt}
                      variant="outlined"
                      margin="dense"
                      type="datetime-local"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      className={classes.textField}
                      disabled={!campaignEditable}
                    />
                  </Grid>

                  {/* SEÇÃO DE RECORRÊNCIA */}
                  <Grid xs={12} item>
                    <Card className={classes.recurrenceCard}>
                      <CardContent>
                        <Box display="flex" alignItems="center" mb={2}>
                          <RepeatIcon className={classes.recurrenceIcon} />
                          <Typography variant="h6">{i18n.t("recurrenceSection.recurrence")}</Typography>
                        </Box>
                        
                        <Grid spacing={2} container>
                          <Grid xs={12} item>
                            <FormControlLabel
                              control={
                                <Field
                                  as={Switch}
                                  name="isRecurring"
                                  checked={values.isRecurring}
                                  onChange={(e) => {
                                    setFieldValue('isRecurring', e.target.checked);
                                    if (!e.target.checked) {
                                      setPreviewExecutions([]);
                                      setShowPreview(false);
                                    }
                                  }}
                                  disabled={!campaignEditable}
                                />
                              }
                              label={i18n.t("recurrenceSection.enable")}
                            />
                          </Grid>

                          <Collapse in={values.isRecurring}>
                            <Grid spacing={2} container>
                              <Grid xs={12} md={3} item>
                                <FormControl
                                  variant="outlined"
                                  margin="dense"
                                  fullWidth
                                  error={touched.recurrenceType && Boolean(errors.recurrenceType)}
                                >
                                  <InputLabel>{i18n.t("recurrenceSection.type")}</InputLabel>
                                  <Field
                                    as={Select}
                                    name="recurrenceType"
                                    label={i18n.t("recurrenceSection.type")}
                                    disabled={!campaignEditable}
                                    onChange={(e) => {
                                      setFieldValue('recurrenceType', e.target.value);
                                      // Reset outros campos quando mudar tipo
                                      setFieldValue('recurrenceDaysOfWeek', []);
                                      setFieldValue('recurrenceDayOfMonth', 1);
                                    }}
                                  >
                                    <MenuItem value="daily">{i18n.t("recurrenceSection.options.daily")}</MenuItem>
                                    <MenuItem value="weekly">{i18n.t("recurrenceSection.options.weekly")}</MenuItem>
                                    <MenuItem value="biweekly">{i18n.t("recurrenceSection.options.biweekly")}</MenuItem>
                                    <MenuItem value="monthly">{i18n.t("recurrenceSection.options.monthly")}</MenuItem>
                                    <MenuItem value="yearly">{i18n.t("recurrenceSection.options.yearly")}</MenuItem>
                                  </Field>
                                  {touched.recurrenceType && errors.recurrenceType && (
                                    <FormHelperText error>{errors.recurrenceType}</FormHelperText>
                                  )}
                                </FormControl>
                              </Grid>

                              <Grid xs={12} md={3} item>
                                <Field
                                  as={TextField}
                                  name="recurrenceInterval"
                                  label={i18n.t("recurrenceSection.interval")}
                                  type="number"
                                  variant="outlined"
                                  margin="dense"
                                  fullWidth
                                  inputProps={{ min: 1 }}
                                  error={touched.recurrenceInterval && Boolean(errors.recurrenceInterval)}
                                  helperText={touched.recurrenceInterval && errors.recurrenceInterval || i18n.t("recurrenceSection.helpers.interval", {
                                      count: values.recurrenceInterval || 1,
                                      type: values.recurrenceType === 'daily' ? i18n.t("recurrenceSection.options.days")?.toLowerCase() :
                                            values.recurrenceType === 'weekly' ? i18n.t("recurrenceSection.options.weeks")?.toLowerCase() :
                                            values.recurrenceType === 'biweekly' ? i18n.t("recurrenceSection.options.biweekly")?.toLowerCase() :
                                            values.recurrenceType === 'monthly' ? i18n.t("recurrenceSection.options.months")?.toLowerCase() :
                                            values.recurrenceType === 'yearly' ? i18n.t("recurrenceSection.options.yearly")?.toLowerCase() : ''
                                    })
                                  }
                                  disabled={!campaignEditable}
                                />
                              </Grid>

                              {/* Dias da semana para recorrência semanal */}
                              {values.recurrenceType === 'weekly' && (
                                <Grid xs={12} md={6} item>
                                  <Typography variant="subtitle2" gutterBottom>
                                    {i18n.t("recurrenceSection.daysOfWeek")}
                                  </Typography>
                                  <FormGroup row>
                                    {daysOfWeekOptions.map((day) => (
                                      <FormControlLabel
                                        key={day.value}
                                        control={
                                          <Checkbox
                                            checked={values.recurrenceDaysOfWeek.includes(day.value)}
                                            onChange={(e) => {
                                              const currentDays = values.recurrenceDaysOfWeek || [];
                                              if (e.target.checked) {
                                                setFieldValue('recurrenceDaysOfWeek', [...currentDays, day.value]);
                                              } else {
                                                setFieldValue('recurrenceDaysOfWeek', 
                                                  currentDays.filter(d => d !== day.value)
                                                );
                                              }
                                            }}
                                            disabled={!campaignEditable}
                                          />
                                        }
                                        label={day.label.substring(0, 3)}
                                      />
                                    ))}
                                  </FormGroup>
                                  {touched.recurrenceDaysOfWeek && errors.recurrenceDaysOfWeek && (
                                    <FormHelperText error>{errors.recurrenceDaysOfWeek}</FormHelperText>
                                  )}
                                </Grid>
                              )}

                              {/* Dia do mês para recorrência mensal */}
                              {values.recurrenceType === 'monthly' && (
                                <Grid xs={12} md={3} item>
                                  <Field
                                    as={TextField}
                                    name="recurrenceDayOfMonth"
                                    label={i18n.t("recurrenceSection.dayOfMonth")}
                                    type="number"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    inputProps={{ min: 1, max: 31 }}
                                    error={touched.recurrenceDayOfMonth && Boolean(errors.recurrenceDayOfMonth)}
                                    helperText={touched.recurrenceDayOfMonth && errors.recurrenceDayOfMonth || 
                                      i18n.t("recurrenceSection.helpers.dayOfMonth")
                                    }
                                    disabled={!campaignEditable}
                                  />
                                </Grid>
                              )}

                              <Grid xs={12} md={4} item>
                                <Field
                                  as={TextField}
                                  name="recurrenceEndDate"
                                  label={i18n.t("recurrenceSection.endDate")}
                                  type="date"
                                  variant="outlined"
                                  margin="dense"
                                  fullWidth
                                  InputLabelProps={{ shrink: true }}
                                  error={touched.recurrenceEndDate && Boolean(errors.recurrenceEndDate)}
                                  helperText={touched.recurrenceEndDate && errors.recurrenceEndDate || 
                                    i18n.t("recurrenceSection.helpers.endDate")
                                  }
                                  disabled={!campaignEditable}
                                />
                              </Grid>

                              <Grid xs={12} md={4} item>
                                <Field
                                  as={TextField}
                                  name="maxExecutions"
                                  label={i18n.t("recurrenceSection.maxExecutions")}
                                  type="number"
                                  variant="outlined"
                                  margin="dense"
                                  fullWidth
                                  inputProps={{ min: 1 }}
                                  error={touched.maxExecutions && Boolean(errors.maxExecutions)}
                                  helperText={touched.maxExecutions && errors.maxExecutions || 
                                    i18n.t("recurrenceSection.helpers.maxExecutions")
                                  }
                                  disabled={!campaignEditable}
                                />
                              </Grid>

                              <Grid xs={12} md={4} item>
                                <Button
                                  variant="outlined"
                                  startIcon={<VisibilityIcon />}
                                  onClick={() => {
                                    handlePreviewRecurrence(values);
                                    setShowPreview(!showPreview);
                                  }}
                                  disabled={!values.recurrenceType || !values.scheduledAt}
                                  fullWidth
                                  style={{ marginTop: 8 }}
                                >
                                  {showPreview ? i18n.t("recurrenceSection.preview.buttonHide") : i18n.t("recurrenceSection.preview.buttonShow")}
                                </Button>
                              </Grid>

                              {/* Preview das execuções */}
                              <Collapse in={showPreview && previewExecutions.length > 0}>
                                <Grid xs={12} item>
                                  <Card className={classes.previewCard}>
                                    <CardContent>
                                      <Typography variant="subtitle2" gutterBottom>                                        {i18n.t("recurrenceSection.preview.title")}
                                      </Typography>
                                      <List dense>
                                        {previewExecutions.slice(0, 5).map((execution, index) => (
                                          <ListItem key={index} divider>
                                            <ListItemText
                                              primary={i18n.t("recurrenceSection.preview.execution", { index: index + 1 })}
                                              secondary={typeof execution === 'string' ? execution : moment(execution).locale('en').format('DD/MM/YYYY HH:mm')}
                                            />
                                          </ListItem>
                                        ))}
                                      </List>
                                    </CardContent>
                                  </Card>
                                </Grid>
                              </Collapse>
                            </Grid>
                          </Collapse>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid xs={12} md={4} item>
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      className={classes.formControl}
                    >
                      <InputLabel id="openTicket-selection-label">
                        {i18n.t("campaigns.dialog.form.openTicket")}
                      </InputLabel>
                      <Field
                        as={Select}
                        label={i18n.t("campaigns.dialog.form.openTicket")}
                        placeholder={i18n.t("campaigns.dialog.form.openTicket")}
                        labelId="openTicket-selection-label"
                        id="openTicket"
                        name="openTicket"
                        error={touched.openTicket && Boolean(errors.openTicket)}
                        disabled={!campaignEditable}
                      >
                        <MenuItem value={"enabled"}>{i18n.t("campaigns.dialog.form.enabledOpenTicket")}</MenuItem>
                        <MenuItem value={"disabled"}>{i18n.t("campaigns.dialog.form.disabledOpenTicket")}</MenuItem>
                      </Field>
                    </FormControl>
                  </Grid>

                  {/* SELECIONAR USUARIO */}
                  <Grid xs={12} md={4} item>
                    <Autocomplete
                      style={{ marginTop: '8px' }}
                      variant="outlined"
                      margin="dense"
                      className={classes.formControl}
                      getOptionLabel={(option) => `${option.name}`}
                      value={selectedUser}
                      size="small"
                      onChange={(e, newValue) => {
                        setSelectedUser(newValue);
                        if (newValue != null && Array.isArray(newValue.queues)) {
                          if (newValue.queues.length === 1) {
                            setSelectedQueue(newValue.queues[0].id);
                          }
                          setQueues(newValue.queues);
                        } else {
                          setQueues(allQueues);
                          setSelectedQueue("");
                        }
                      }}
                      options={options}
                      filterOptions={filterOptions}
                      freeSolo
                      fullWidth
                      autoHighlight
                      disabled={!campaignEditable || values.openTicket === 'disabled'}
                      noOptionsText={i18n.t("transferTicketModal.noOptions")}
                      loading={loading}
                      renderOption={option => (<span> <UserStatusIcon user={option} /> {option.name}</span>)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={i18n.t("transferTicketModal.fieldLabel")}
                          variant="outlined"
                          onChange={(e) => setSearchParam(e.target.value)}
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <React.Fragment>
                                {loading ? (
                                  <CircularProgress color="inherit" size={20} />
                                ) : null}
                                {params.InputProps.endAdornment}
                              </React.Fragment>
                            ),
                          }}
                        />
                      )}
                    />
                  </Grid>

                  <Grid xs={12} md={4} item>
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      className={classes.formControl}
                    >
                      <InputLabel>
                        {i18n.t("transferTicketModal.fieldQueueLabel")}
                      </InputLabel>
                      <Select
                        value={selectedQueue}
                        onChange={(e) => setSelectedQueue(e.target.value)}
                        label={i18n.t("transferTicketModal.fieldQueuePlaceholder")}
                        required={!isNil(selectedUser)}
                        disabled={!campaignEditable || values.openTicket === 'disabled'}
                      >
                        {queues.map((queue) => (
                          <MenuItem key={queue.id} value={queue.id}>
                            {queue.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid xs={12} md={4} item>
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      className={classes.formControl}
                    >
                      <InputLabel id="statusTicket-selection-label">
                        {i18n.t("campaigns.dialog.form.statusTicket")}
                      </InputLabel>
                      <Field
                        as={Select}
                        label={i18n.t("campaigns.dialog.form.statusTicket")}
                        placeholder={i18n.t("campaigns.dialog.form.statusTicket")}
                        labelId="statusTicket-selection-label"
                        id="statusTicket"
                        name="statusTicket"
                        error={touched.statusTicket && Boolean(errors.statusTicket)}
                        disabled={!campaignEditable || values.openTicket === 'disabled'}
                      >
                        <MenuItem value={"closed"}>{i18n.t("campaigns.dialog.form.closedTicketStatus")}</MenuItem>
                        <MenuItem value={"pending"}>{i18n.t("campaigns.dialog.form.pendingTicketStatus")}</MenuItem>
                        <MenuItem value={"open"}>{i18n.t("campaigns.dialog.form.openTicketStatus")}</MenuItem>
                      </Field>
                    </FormControl>
                  </Grid>

                  {/* SEÇÃO DE MENSAGENS */}
                  <Grid xs={12} item>
                    <Tabs
                      value={messageTab}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={(e, v) => setMessageTab(v)}
                      variant="fullWidth"
                      centered
                      style={{
                        background: theme.palette.background.default,
                        border: "1px solid #e6e6e6",
                        borderRadius: 2,
                      }}
                    >
                      <Tab label={i18n.t("campaigns.dialog.tabs.message1")} index={0} />
                      <Tab label={i18n.t("campaigns.dialog.tabs.message2")} index={1} />
                      <Tab label={i18n.t("campaigns.dialog.tabs.message3")} index={2} />
                      <Tab label={i18n.t("campaigns.dialog.tabs.message4")} index={3} />
                      <Tab label={i18n.t("campaigns.dialog.tabs.message5")} index={4} />
                    </Tabs>
                    <Box style={{ paddingTop: 20, border: "none" }}>
                      {messageTab === 0 && (
                        <>
                          {values.confirmation ? (
                            <Grid spacing={2} container>
                              <Grid xs={12} md={8} item>
                                <>{renderMessageField("message1", setFieldValue, values)}</>
                              </Grid>
                              <Grid xs={12} md={4} item>
                                <>{renderConfirmationMessageField("confirmationMessage1")}</>
                              </Grid>
                            </Grid>
                          ) : (
                            <>{renderMessageField("message1", setFieldValue, values)}</>
                          )}
                        </>
                      )}
                      {messageTab === 1 && (
                        <>
                          {values.confirmation ? (
                            <Grid spacing={2} container>
                              <Grid xs={12} md={8} item>
                                <>{renderMessageField("message2", setFieldValue, values)}</>
                              </Grid>
                              <Grid xs={12} md={4} item>
                                <>{renderConfirmationMessageField("confirmationMessage2")}</>
                              </Grid>
                            </Grid>
                          ) : (
                            <>{renderMessageField("message2", setFieldValue, values)}</>
                          )}
                        </>
                      )}
                      {messageTab === 2 && (
                        <>
                          {values.confirmation ? (
                            <Grid spacing={2} container>
                              <Grid xs={12} md={8} item>
                                <>{renderMessageField("message3", setFieldValue, values)}</>
                              </Grid>
                              <Grid xs={12} md={4} item>
                                <>{renderConfirmationMessageField("confirmationMessage3")}</>
                              </Grid>
                            </Grid>
                          ) : (
                            <>{renderMessageField("message3", setFieldValue, values)}</>
                          )}
                        </>
                      )}
                      {messageTab === 3 && (
                        <>
                          {values.confirmation ? (
                            <Grid spacing={2} container>
                              <Grid xs={12} md={8} item>
                                <>{renderMessageField("message4", setFieldValue, values)}</>
                              </Grid>
                              <Grid xs={12} md={4} item>
                                <>{renderConfirmationMessageField("confirmationMessage4")}</>
                              </Grid>
                            </Grid>
                          ) : (
                            <>{renderMessageField("message4", setFieldValue, values)}</>
                          )}
                        </>
                      )}
                      {messageTab === 4 && (
                        <>
                          {values.confirmation ? (
                            <Grid spacing={2} container>
                              <Grid xs={12} md={8} item>
                                <>{renderMessageField("message5", setFieldValue, values)}</>
                              </Grid>
                              <Grid xs={12} md={4} item>
                                <>{renderConfirmationMessageField("confirmationMessage5")}</>
                              </Grid>
                            </Grid>
                          ) : (
                            <>{renderMessageField("message5", setFieldValue, values)}</>
                          )}
                        </>
                      )}
                    </Box>
                  </Grid>

                  {(campaign.mediaPath || attachment) && (
                    <Grid xs={12} item>
                      <Button startIcon={<AttachFileIcon />}>
                        {attachment != null ? attachment.name : campaign.mediaName}
                      </Button>
                      {campaignEditable && (
                        <IconButton
                          onClick={() => setConfirmationOpen(true)}
                          color="primary"
                        >
                          <DeleteOutlineIcon color="secondary" />
                        </IconButton>
                      )}
                    </Grid>
                  )}
                </Grid>
              </DialogContent>
              <DialogActions>
                {campaign.status === "CANCELADA" && (
                  <Button
                    color="primary"
                    onClick={() => restartCampaign()}
                    variant="outlined"
                  >
                    {i18n.t("campaigns.dialog.buttons.restart")}
                  </Button>
                )}
                {campaign.status === "EM_ANDAMENTO" && (
                  <Button
                    color="primary"
                    onClick={() => cancelCampaign()}
                    variant="outlined"
                  >
                    {i18n.t("campaigns.dialog.buttons.cancel")}
                  </Button>
                )}
                {!attachment && !campaign.mediaPath && campaignEditable && (
                  <Button
                    color="primary"
                    onClick={() => attachmentFile.current.click()}
                    disabled={isSubmitting}
                    variant="outlined"
                  >
                    {i18n.t("campaigns.dialog.buttons.attach")}
                  </Button>
                )}
                <Button
                  onClick={handleClose}
                  color="primary"
                  disabled={isSubmitting}
                  variant="outlined"
                >
                  {i18n.t("campaigns.dialog.buttons.close")}
                </Button>
                {(campaignEditable || campaign.status === "CANCELADA") && (
                  <Button
                    type="submit"
                    color="primary"
                    disabled={isSubmitting}
                    variant="contained"
                    className={classes.btnWrapper}
                  >
                    {campaignId
                      ? `${i18n.t("campaigns.dialog.buttons.edit")}`
                      : `${i18n.t("campaigns.dialog.buttons.add")}`}
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </Button>
                )}
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default CampaignModal;