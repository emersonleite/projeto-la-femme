/* Functions */
import { createArrayFromObjectSpecificKeys as createLabelsFrom } from "@/functions/createArrayFromObjectSpecificKeys.js";
import { createObjectWithLabelsArray as createModelFrom } from "@/functions/createObjectWithLabelsArray.js";

export const fields = {
  f1: {
    isInputField: true,
    type: "text",
    label: "identifier",
    alternativeLabel: "Nome de usuário",
  } /** accented words  */,
  f2: {
    isInputField: true,
    type: "password",
    label: "password",
    alternativeLabel: "Senha" /** accented words  */,
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
}; */

/* Create labels from fields */
const labels = createLabelsFrom(fields, "label");

/* Create model from labels */
const model = createModelFrom(labels);

export default model;
