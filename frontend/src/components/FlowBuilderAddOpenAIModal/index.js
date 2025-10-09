// frontend/openaiModal.jsx
import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, FieldArray } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Select, 
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Checkbox,
  Chip,
  Box,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip
} from "@material-ui/core";
import { i18n } from "../../translate/i18n";
import { 
  Visibility, 
  VisibilityOff, 
  ExpandMore,
  Add,
  Delete,
  Info,
  Settings,
  Timer,
  Chat
} from "@material-ui/icons";
import { InputAdornment } from "@material-ui/core";

// Lista de modelos OpenAI suportados
const openAiModels = [
  "gpt-3.5-turbo",
  "gpt-3.5-turbo-1106", 
  "gpt-3.5-turbo-16k",
  "gpt-4",
  "gpt-4-turbo",
  "gpt-4o",
  "gpt-4o-mini"
];

// Lista de vozes disponíveis para OpenAI
const availableVoices = [
  "texto",
  "pt-BR-FabioNeural",
  "pt-BR-FranciscaNeural",
  "pt-BR-AntonioNeural",
  "pt-BR-BrendaNeural",
  "pt-BR-DonatoNeural",
  "pt-BR-ElzaNeural",
  "pt-BR-GiovannaNeural",
  "pt-BR-HumbertoNeural",
  "pt-BR-JulioNeural",
  "pt-BR-LeilaNeural",
  "pt-BR-LeticiaNeural",
  "pt-BR-ManuelaNeural",
  "pt-BR-NicolauNeural",
  "pt-BR-ValerioNeural",
  "pt-BR-YaraNeural"
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  multFieldLine: {
    display: "flex",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1),
    },
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1)
  },
  flowModeCard: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.default
  },
  temporarySettings: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[50],
    borderRadius: theme.spacing(1),
    border: `1px dashed ${theme.palette.primary.light}`
  },
  keywordChip: {
    margin: theme.spacing(0.5),
  },
  helpText: {
    fontSize: "0.75rem",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(0.5)
  },
  accordion: {
    marginBottom: theme.spacing(1),
    "&:before": {
      display: "none",
    }
  },
  accordionSummary: {
    backgroundColor: theme.palette.grey[50],
    borderRadius: theme.spacing(0.5),
    minHeight: 48,
    "&.Mui-expanded": {
      minHeight: 48,
    }
  },
  accordionDetails: {
    padding: theme.spacing(2),
    flexDirection: "column"
  }
}));

// Esquema de validação para OpenAI
const OpenAiSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, i18n.t("validation.tooShort"))
    .max(100, i18n.t("validation.tooLong"))
    .required(i18n.t("validation.required")),
  prompt: Yup.string()
    .min(50, i18n.t("validation.tooShort"))
    .required(i18n.t("validation.promptRequired")),
  model: Yup.string()
    .oneOf(openAiModels, i18n.t("validation.invalidModel"))
    .required(i18n.t("validation.modelRequired")),
  maxTokens: Yup.number()
    .min(10, i18n.t("validation.minTokens"))
    .max(4000, i18n.t("validation.maxTokens"))
    .required(i18n.t("validation.maxTokensRequired")),
  temperature: Yup.number()
    .min(0, i18n.t("validation.minTemperature"))
    .max(2, i18n.t("validation.maxTemperature"))
    .required(i18n.t("validation.temperatureRequired")),
  apiKey: Yup.string().required(i18n.t("validation.apiKeyRequired")),
  maxMessages: Yup.number()
    .min(1, i18n.t("validation.minMessages"))
    .max(100, i18n.t("validation.maxMessages"))
    .required(i18n.t("validation.maxMessagesRequired")),
  voice: Yup.string().required(i18n.t("validation.voiceRequired")),
  voiceKey: Yup.string().when("voice", {
    is: (voice) => voice !== "texto",
    then: Yup.string().required(i18n.t("validation.voiceKeyRequired")),
    otherwise: Yup.string().notRequired()
  }),
  voiceRegion: Yup.string().when("voice", {
    is: (voice) => voice !== "texto",
    then: Yup.string().required(i18n.t("validation.voiceRegionRequired")),
    otherwise: Yup.string().notRequired()
  }),
  flowMode: Yup.string()
    .oneOf(["permanent", "temporary"], i18n.t("validation.invalidFlowMode"))
    .required(i18n.t("validation.flowModeRequired")),
  maxInteractions: Yup.number().when("flowMode", {
    is: "temporary",
    then: Yup.number()
      .min(1, i18n.t("validation.minInteractions"))
      .max(50, i18n.t("validation.maxInteractions"))
      .nullable(),
    otherwise: Yup.number().nullable()
  }),
  completionTimeout: Yup.number().when("flowMode", {
    is: "temporary",
    then: Yup.number()
      .min(1, i18n.t("validation.minTimeout"))
      .max(60, i18n.t("validation.maxTimeout"))
      .nullable(),
    otherwise: Yup.number().nullable()
  }),
  continueKeywords: Yup.array().when("flowMode", {
    is: "temporary",
    then: Yup.array()
      .of(Yup.string().required(i18n.t("validation.keywordRequired")))
      .min(1, i18n.t("validation.minKeywordsRequired")),
    otherwise: Yup.array()
  }),
  objective: Yup.string().when(["flowMode", "autoCompleteOnObjective"], {
    is: (flowMode, autoComplete) => flowMode === "temporary" && autoComplete,
    then: Yup.string().required(i18n.t("validation.objectiveRequired")),
    otherwise: Yup.string()
  })
});

const FlowBuilderOpenAIModal = ({ open, onSave, data, onUpdate, close }) => {
  const classes = useStyles();
  const isMounted = useRef(true);

  const initialState = {
    name: "",
    prompt: "",
    model: "gpt-4o",
    voice: "texto",
    voiceKey: "",
    voiceRegion: "",
    maxTokens: 1000,
    temperature: 0.7,
    apiKey: "",
    maxMessages: 10,
    queueId: 0,
    
    // Campos para controle de fluxo
    flowMode: "permanent",
    maxInteractions: 5,
    completionTimeout: 10,
    continueKeywords: ["continuar", "próximo", "avançar"],
    objective: "",
    autoCompleteOnObjective: false
  };

  const [showApiKey, setShowApiKey] = useState(false);
  const [integration, setIntegration] = useState(initialState);
  const [labels, setLabels] = useState({
    title: i18n.t("flowBuilderOpenAIModal.title.add"),
    btn: i18n.t("flowBuilderOpenAIModal.buttons.add"),
  });
  const [newKeyword, setNewKeyword] = useState("");

  useEffect(() => {
    if (open === "edit") {
      setLabels({
        title: i18n.t("flowBuilderOpenAIModal.title.edit"),
        btn: i18n.t("flowBuilderOpenAIModal.buttons.save"),
      });
      const typebotIntegration = data?.data?.typebotIntegration || {};
      setIntegration({
        ...initialState,
        ...typebotIntegration,
        model: openAiModels.includes(typebotIntegration.model)
          ? typebotIntegration.model
          : "gpt-4o",
        flowMode: typebotIntegration.flowMode || "permanent",
        continueKeywords: typebotIntegration.continueKeywords || ["continuar", "próximo", "avançar"],
        maxInteractions: typebotIntegration.maxInteractions || 5,
        completionTimeout: typebotIntegration.completionTimeout || 10,
        objective: typebotIntegration.objective || "",
        autoCompleteOnObjective: typebotIntegration.autoCompleteOnObjective || false
      });
    } else if (open === "create") {
      setLabels({
        title: i18n.t("flowBuilderOpenAIModal.title.add"),
        btn: i18n.t("flowBuilderOpenAIModal.buttons.add"),
      });
      setIntegration(initialState);
    }

    return () => {
      isMounted.current = false;
    };
  }, [open, data]);

  const handleClose = () => {
    setNewKeyword("");
    close(null);
  };

  const handleSavePrompt = (values, { setSubmitting }) => {
    const promptData = {
      ...values,
      // Garantir que campos do modo temporário sejam nulos se modo for permanente
      maxInteractions: values.flowMode === "temporary" ? values.maxInteractions : null,
      completionTimeout: values.flowMode === "temporary" ? values.completionTimeout : null,
      continueKeywords: values.flowMode === "temporary" ? values.continueKeywords : [],
      objective: values.flowMode === "temporary" ? values.objective : "",
      autoCompleteOnObjective: values.flowMode === "temporary" ? values.autoCompleteOnObjective : false,
      // Forçar provider como openai
      provider: "openai"
    };

    if (open === "edit") {
      onUpdate({
        ...data,
        data: { typebotIntegration: promptData },
      });
    } else if (open === "create") {
      promptData.projectName = promptData.name;
      onSave({
        typebotIntegration: promptData,
      });
    }
    handleClose();
    setSubmitting(false);
  };

  const addKeyword = (arrayHelpers, keyword) => {
    if (keyword.trim() && !integration.continueKeywords.includes(keyword.trim())) {
      arrayHelpers.push(keyword.trim());
      setNewKeyword("");
    }
  };

  const removeKeyword = (arrayHelpers, index) => {
    arrayHelpers.remove(index);
  };

  const getModelDisplayName = (model) => {
    const modelNames = {
      "gpt-3.5-turbo": i18n.t("flowBuilderOpenAIModal.models.gpt-3.5-turbo"),
      "gpt-3.5-turbo-1106": i18n.t("flowBuilderOpenAIModal.models.gpt-3.5-turbo-1106"),
      "gpt-3.5-turbo-16k": i18n.t("flowBuilderOpenAIModal.models.gpt-3.5-turbo-16k"),
      "gpt-4": i18n.t("flowBuilderOpenAIModal.models.gpt-4"),
      "gpt-4-turbo": i18n.t("flowBuilderOpenAIModal.models.gpt-4-turbo"),
      "gpt-4o": i18n.t("flowBuilderOpenAIModal.models.gpt-4o"),
      "gpt-4o-mini": i18n.t("flowBuilderOpenAIModal.models.gpt-4o-mini")
    };
    return modelNames[model] || model;
  };

  const getVoiceDisplayName = (voice) => {
    if (voice === "texto") return i18n.t("flowBuilderOpenAIModal.voiceSettings.textOnly");
    return voice.replace("pt-BR-", "").replace("Neural", "");
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={open === "create" || open === "edit"}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        scroll="paper"
      >
        <DialogTitle id="form-dialog-title">
          {labels.title}
        </DialogTitle>
        <Formik
          initialValues={integration}
          enableReinitialize={true}
          validationSchema={OpenAiSchema}
          onSubmit={handleSavePrompt}
        >
          {({ touched, errors, isSubmitting, values, setFieldValue }) => (
            <Form style={{ width: "100%" }}>
              <DialogContent dividers>
                
                {/* CONFIGURAÇÕES BÁSICAS */}
                <Accordion className={classes.accordion} defaultExpanded>
                  <AccordionSummary 
                    expandIcon={<ExpandMore />}
                    className={classes.accordionSummary}
                  >
                    <Typography className={classes.sectionTitle}>
                      <Settings />
                      {i18n.t("flowBuilderOpenAIModal.basicSettings.title")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    
                    <Field
                      as={TextField}
                      label={i18n.t("flowBuilderOpenAIModal.basicSettings.assistantName")}
                      name="name"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      required
                    />

                    <FormControl fullWidth margin="dense" variant="outlined">
                      <Field
                        as={TextField}
                        label={i18n.t("flowBuilderOpenAIModal.basicSettings.apiKey")}
                        name="apiKey"
                        type={showApiKey ? "text" : "password"}
                        error={touched.apiKey && Boolean(errors.apiKey)}
                        helperText={touched.apiKey && errors.apiKey}
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        required
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => setShowApiKey(!showApiKey)}>
                                {showApiKey ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormControl>

                    <FormControl
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      error={touched.model && Boolean(errors.model)}
                    >
                      <InputLabel>{i18n.t("flowBuilderOpenAIModal.basicSettings.model")}</InputLabel>
                      <Field
                        as={Select}
                        label={i18n.t("flowBuilderOpenAIModal.basicSettings.model")}
                        name="model"
                      >
                        {openAiModels.map((model) => (
                          <MenuItem key={model} value={model}>
                            {getModelDisplayName(model)}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.model && errors.model && (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.model}
                        </div>
                      )}
                    </FormControl>

                    <Field
                      as={TextField}
                      label={i18n.t("flowBuilderOpenAIModal.basicSettings.systemPrompt")}
                      name="prompt"
                      error={touched.prompt && Boolean(errors.prompt)}
                      helperText={touched.prompt && errors.prompt}
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      required
                      rows={6}
                      multiline
                      placeholder={i18n.t("flowBuilderOpenAIModal.basicSettings.promptPlaceholder")}
                    />

                    <div className={classes.multFieldLine}>
                      <Field
                        as={TextField}
                        label={i18n.t("flowBuilderOpenAIModal.basicSettings.temperature")}
                        name="temperature"
                        error={touched.temperature && Boolean(errors.temperature)}
                        helperText={touched.temperature && errors.temperature || i18n.t("flowBuilderOpenAIModal.basicSettings.temperatureHelper")}
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        type="number"
                        inputProps={{
                          step: "0.1",
                          min: "0",
                          max: "2",
                        }}
                      />
                      <Field
                        as={TextField}
                        label={i18n.t("flowBuilderOpenAIModal.basicSettings.maxTokens")}
                        name="maxTokens"
                        error={touched.maxTokens && Boolean(errors.maxTokens)}
                        helperText={touched.maxTokens && errors.maxTokens || i18n.t("flowBuilderOpenAIModal.basicSettings.maxTokensHelper")}
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        type="number"
                      />
                      <Field
                        as={TextField}
                        label={i18n.t("flowBuilderOpenAIModal.basicSettings.maxMessages")}
                        name="maxMessages"
                        error={touched.maxMessages && Boolean(errors.maxMessages)}
                        helperText={touched.maxMessages && errors.maxMessages || i18n.t("flowBuilderOpenAIModal.basicSettings.maxMessagesHelper")}
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        type="number"
                      />
                    </div>

                  </AccordionDetails>
                </Accordion>

                {/* CONFIGURAÇÕES DE VOZ */}
                <Accordion className={classes.accordion}>
                  <AccordionSummary 
                    expandIcon={<ExpandMore />}
                    className={classes.accordionSummary}
                  >
                    <Typography className={classes.sectionTitle}>
                      <Chat />
                      {i18n.t("flowBuilderOpenAIModal.voiceSettings.title")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    
                    <FormControl
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      error={touched.voice && Boolean(errors.voice)}
                    >
                      <InputLabel>{i18n.t("flowBuilderOpenAIModal.voiceSettings.responseType")}</InputLabel>
                      <Field
                        as={Select}
                        label={i18n.t("flowBuilderOpenAIModal.voiceSettings.responseType")}
                        name="voice"
                      >
                        {availableVoices.map((voice) => (
                          <MenuItem key={voice} value={voice}>
                            {getVoiceDisplayName(voice)}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.voice && errors.voice && (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.voice}
                        </div>
                      )}
                    </FormControl>

                    {values.voice !== "texto" && (
                      <div className={classes.multFieldLine}>
                        <Field
                          as={TextField}
                          label={i18n.t("flowBuilderOpenAIModal.voiceSettings.voiceKey")}
                          name="voiceKey"
                          error={touched.voiceKey && Boolean(errors.voiceKey)}
                          helperText={touched.voiceKey && errors.voiceKey}
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          placeholder={i18n.t("flowBuilderOpenAIModal.voiceSettings.voiceKeyPlaceholder")}
                        />
                        <Field
                          as={TextField}
                          label={i18n.t("flowBuilderOpenAIModal.voiceSettings.voiceRegion")}
                          name="voiceRegion"
                          error={touched.voiceRegion && Boolean(errors.voiceRegion)}
                          helperText={touched.voiceRegion && errors.voiceRegion}
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          placeholder={i18n.t("flowBuilderOpenAIModal.voiceSettings.voiceRegionPlaceholder")}
                        />
                      </div>
                    )}

                  </AccordionDetails>
                </Accordion>

                {/* COMPORTAMENTO DO FLUXO */}
                <Accordion className={classes.accordion} defaultExpanded>
                  <AccordionSummary 
                    expandIcon={<ExpandMore />}
                    className={classes.accordionSummary}
                  >
                    <Typography className={classes.sectionTitle}>
                      <Timer />
                      {i18n.t("flowBuilderOpenAIModal.flowBehavior.title")}
                      <Tooltip title={i18n.t("flowBuilderOpenAIModal.flowBehavior.tooltip")}>
                        <Info fontSize="small" color="action" />
                      </Tooltip>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">{i18n.t("flowBuilderOpenAIModal.flowBehavior.mode")}</FormLabel>
                      <RadioGroup
                        name="flowMode"
                        value={values.flowMode}
                        onChange={(e) => setFieldValue("flowMode", e.target.value)}
                      >
                        <FormControlLabel
                          value="permanent"
                          control={<Radio />}
                          label={
                            <Box>
                              <Typography variant="body1">
                                <strong>{i18n.t("flowBuilderOpenAIModal.flowBehavior.permanent.title")}</strong>
                              </Typography>
                              <Typography variant="caption" color="textSecondary">
                                {i18n.t("flowBuilderOpenAIModal.flowBehavior.permanent.description")}
                              </Typography>
                            </Box>
                          }
                        />
                        <FormControlLabel
                          value="temporary"
                          control={<Radio />}
                          label={
                            <Box>
                              <Typography variant="body1">
                                <strong>{i18n.t("flowBuilderOpenAIModal.flowBehavior.temporary.title")}</strong>
                              </Typography>
                              <Typography variant="caption" color="textSecondary">
                                {i18n.t("flowBuilderOpenAIModal.flowBehavior.temporary.description")}
                              </Typography>
                            </Box>
                          }
                        />
                      </RadioGroup>
                    </FormControl>

                    {/* CONFIGURAÇÕES DO MODO TEMPORÁRIO */}
                    {values.flowMode === "temporary" && (
                      <div className={classes.temporarySettings}>
                        <Typography variant="h6" gutterBottom>
                          {i18n.t("flowBuilderOpenAIModal.temporarySettings.title")}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                          {i18n.t("flowBuilderOpenAIModal.temporarySettings.description")}
                        </Typography>

                        {/* Limite de Interações */}
                        <Field
                          as={TextField}
                          label={i18n.t("flowBuilderOpenAIModal.temporarySettings.maxInteractions")}
                          name="maxInteractions"
                          error={touched.maxInteractions && Boolean(errors.maxInteractions)}
                          helperText={touched.maxInteractions && errors.maxInteractions || i18n.t("flowBuilderOpenAIModal.temporarySettings.maxInteractionsHelper")}
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          type="number"
                          inputProps={{ min: 0, max: 50 }}
                        />

                        {/* Timeout */}
                        <Field
                          as={TextField}
                          label={i18n.t("flowBuilderOpenAIModal.temporarySettings.timeout")}
                          name="completionTimeout"
                          error={touched.completionTimeout && Boolean(errors.completionTimeout)}
                          helperText={touched.completionTimeout && errors.completionTimeout || i18n.t("flowBuilderOpenAIModal.temporarySettings.timeoutHelper")}
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          type="number"
                          inputProps={{ min: 0, max: 60 }}
                        />

                        {/* Palavras-chave de Continuação */}
                        <FormControl fullWidth margin="dense">
                          <Typography variant="subtitle2" gutterBottom>
                            {i18n.t("flowBuilderOpenAIModal.temporarySettings.continueKeywords")}
                          </Typography>
                          <FieldArray name="continueKeywords">
                            {(arrayHelpers) => (
                              <div>
                                <Box display="flex" gap={1} alignItems="center" mb={1}>
                                  <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder={i18n.t("flowBuilderOpenAIModal.temporarySettings.keywordPlaceholder")}
                                    value={newKeyword}
                                    onChange={(e) => setNewKeyword(e.target.value)}
                                    onKeyPress={(e) => {
                                      if (e.key === "Enter") {
                                        addKeyword(arrayHelpers, newKeyword);
                                      }
                                    }}
                                  />
                                  <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<Add />}
                                    onClick={() => addKeyword(arrayHelpers, newKeyword)}
                                    disabled={!newKeyword.trim()}
                                  >
                                    {i18n.t("flowBuilderOpenAIModal.temporarySettings.addKeyword")}
                                  </Button>
                                </Box>
                                <Box display="flex" flexWrap="wrap" gap={0.5}>
                                  {values.continueKeywords.map((keyword, index) => (
                                    <Chip
                                      key={index}
                                      label={keyword}
                                      className={classes.keywordChip}
                                      onDelete={() => removeKeyword(arrayHelpers, index)}
                                      deleteIcon={<Delete />}
                                      variant="outlined"
                                      size="small"
                                    />
                                  ))}
                                </Box>
                                <Typography variant="caption" color="textSecondary">
                                  {i18n.t("flowBuilderOpenAIModal.temporarySettings.keywordsHelper")}
                                </Typography>
                                {touched.continueKeywords && errors.continueKeywords && (
                                  <Typography variant="caption" color="error">
                                    {errors.continueKeywords}
                                  </Typography>
                                )}
                              </div>
                            )}
                          </FieldArray>
                        </FormControl>

                        {/* Objetivo */}
                        <Field
                          as={TextField}
                          label={i18n.t("flowBuilderOpenAIModal.temporarySettings.objective")}
                          name="objective"
                          error={touched.objective && Boolean(errors.objective)}
                          helperText={touched.objective && errors.objective || i18n.t("flowBuilderOpenAIModal.temporarySettings.objectiveHelper")}
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          multiline
                          rows={2}
                          placeholder={i18n.t("flowBuilderOpenAIModal.temporarySettings.objectivePlaceholder")}
                        />

                        {/* Auto Completar */}
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={values.autoCompleteOnObjective}
                              onChange={(e) => setFieldValue("autoCompleteOnObjective", e.target.checked)}
                              name="autoCompleteOnObjective"
                            />
                          }
                          label={
                            <Box>
                              <Typography variant="body2">
                                {i18n.t("flowBuilderOpenAIModal.temporarySettings.autoComplete.label")}
                              </Typography>
                              <Typography variant="caption" color="textSecondary">
                                {i18n.t("flowBuilderOpenAIModal.temporarySettings.autoComplete.description")}
                              </Typography>
                            </Box>
                          }
                        />

                        {/* Fila de Transferência */}
                        <Field
                          as={TextField}
                          label={i18n.t("flowBuilderOpenAIModal.temporarySettings.queueId")}
                          name="queueId"
                          error={touched.queueId && Boolean(errors.queueId)}
                          helperText={i18n.t("flowBuilderOpenAIModal.temporarySettings.queueIdHelper")}
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          type="number"
                          inputProps={{ min: 0 }}
                        />

                      </div>
                    )}

                  </AccordionDetails>
                </Accordion>

              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  color="secondary"
                  variant="outlined"
                  disabled={isSubmitting}
                >
                  {i18n.t("flowBuilderOpenAIModal.buttons.cancel")}
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className={classes.btnWrapper}
                  disabled={isSubmitting}
                >
                  {labels.btn}
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default FlowBuilderOpenAIModal;