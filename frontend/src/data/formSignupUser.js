/* Functions */
import { createArrayFromObjectSpecificKeys as createLabelsFrom } from "@/functions/createArrayFromObjectSpecificKeys.js";
import { createObjectWithLabelsArray as createModelFrom } from "@/functions/createObjectWithLabelsArray.js";

export const fields = {
  f1: {
    isInputField: true,
    type: "text",
    label: "name",
    alternativeLabel: "Nome",
  },
  f3: {
    isInputField: true,
    type: "text",
    label: "username",
    alternativeLabel: "Nome de usuário",
  },
  f4: {
    isInputField: true,
    type: "email",
    label: "email",
    alternativeLabel: "E-mail",
  },
  f5: {
    isInputField: true,
    type: "password",
    label: "password",
    alternativeLabel: "Senha",
  },
  f6: {
    isInputField: true,
    type: "password",
    label: "confirmedPassword",
    alternativeLabel: "Confirmar senha",
  },
  /*  f6: {
    type: "number",
    label: "previousPrice",
    alternativeLabel: "Preço Antigo",
  }, */
  /* f7: {
    type: "number",
    label: "cashPrice",
    alternativeLabel: "Preço a vista",
  }, */
  /* f8: {
    type: "number",
    label: "installmentPrice",
    alternativeLabel: "Preço a prazo",
  }, */
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
