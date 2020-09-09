/* Functions */
import { createArrayFromObjectSpecificKeys as createLabelsFrom } from "@/functions/createArrayFromObjectSpecificKeys.js";
import { createObjectWithLabelsArray as createModelFrom } from "@/functions/createObjectWithLabelsArray.js";

export const fields = {
  /** Data from api in the fields */
  f33: {
    isInputFieldData: true,
    type: "text",
    label: "Correios",
    get_data_from_api: true,
    url: "https://viacep.com.br",
    path: "/ws/",
    after_path: "/json",
  },
  f34: {
    isInputField: true,
    type: "text",
    label: "cidade",
    alternativeLabel: "Cidade",
    value_from_api: "localidade",
  },
  f35: {
    isInputField: true,
    type: "text",
    label: "rua",
    alternativeLabel: "Rua",
    value_from_api: "logradouro",
  },
  /** End Data from api in the fields */
  f1: {
    isInputField: true,
    type: "text",
    label: "text",
    alternativeLabel: "Text",
  },
  f2: {
    isInputField: true,
    type: "password",
    label: "password",
    alternativeLabel: "Password",
  },
  f3: {
    isInputField: true,
    type: "email",
    label: "email",
    alternativeLabel: "E-mail",
  },
  f4: {
    isTextArea: true,
    label: "textarea",
    alternativeLabel: "Text area",
  },
  f5: {
    isInputField: true,
    type: "color",
    label: "color",
    alternativeLabel: "Color",
  },
  f6: {
    isInputField: true,
    type: "date",
    label: "date",
    alternativeLabel: "Date",
  },
  f7: {
    isInputField: true,
    type: "datetime-local",
    label: "date",
    alternativeLabel: "Date/time local",
  },
  f8: {
    isInputField: true,
    type: "button",
    label: "button",
    alternativeLabel: "Button",
  },
  f9: {
    isInputField: true,
    type: "file",
    label: "file",
    alternativeLabel: "File",
  },
  f10: {
    isInputField: true,
    type: "image",
    label: "image",
    alternativeLabel: "Image",
  },
  f11: {
    isInputField: true,
    type: "month",
    label: "month",
    alternativeLabel: "Month",
  },
  f12: {
    isInputField: true,
    type: "number",
    label: "number",
    alternativeLabel: "Number",
  },
  f13: {
    isInputField: true,
    type: "range",
    label: "range",
    alternativeLabel: "Range",
  },
  f14: {
    isInputField: true,
    type: "reset",
    label: "reset",
    alternativeLabel: "Reset",
  },
  f15: {
    isInputField: true,
    type: "search",
    label: "search",
    alternativeLabel: "Search",
  },
  f16: {
    isInputField: true,
    type: "submit",
    label: "submit",
    alternativeLabel: "Submit",
  },
  f17: {
    isInputField: true,
    type: "tel",
    label: "tel",
    alternativeLabel: "Tel",
  },
  f18: {
    isInputField: true,
    type: "time",
    label: "time",
    alternativeLabel: "Time",
  },
  f19: {
    isInputField: true,
    type: "url",
    label: "url",
    alternativeLabel: "Url",
  },
  f20: {
    isInputField: true,
    type: "week",
    label: "week",
    alternativeLabel: "Week",
  },
  /**
   * Radio
   */
  f21: {
    isInputRadio: true,
    type: "radio",
    label: "radio",
    alternativeLabel: "Radio",
    name: "radioButton",
    options: ["opt1", "opt2", "opt3"],
  },
  f22: {
    isInputCheckbox: true,
    type: "checkbox",
    label: "checkbox",
    alternativeLabel: "Checkbox",
    options: ["opt1", "opt2", "opt3"],
  },
};

/* export const fields = {
  f1: {
    type: "text",
    label: "nome_princ",
    get_data_from_api: true,
    url: "https://viacep.com.br",
    path: "/ws/",
    after_path: "/json",
  },
  f6: {
    type: "text",
    label: "cidade",
    value_from_api: "localidade",
  },
  f2: {
    type: "text",
    label: "Estado",
    value_from_api: "uf",
  },
  f3: {
    type: "number",
    label: "identidade1",
  },
  f4: {
    type: "number",
    label: "Passport",
  },
  f5: {
    type: "number",
    label: "Imigratio",
  },
  f7: {
    type: "number",
    label: "Dado numerico2",
  },
}; */

/* Create labels from fields */
const labels = createLabelsFrom(fields, "label");

/* Create model from labels */
const model = createModelFrom(labels);

export default model;
