 <template>
  <form @submit.prevent="handleClick" :class="_class">
    <div v-for="field in _fields" :key="field.label">
      <LabelInput
        :_class="_classLabelInput"
        :_label="field.label"
        :_alternativeLabel="field.alternativeLabel"
      />
      <InputFieldData
        v-if="field.isInputFieldData"
        :_type="field.type"
        :_label="field.label"
        :_class="_classInputField"
        :_url="field.url"
        :_path="field.path"
        :_after_path="field.after_path"
        :_model.sync="_model[field.label]"
        :_dataApi.sync="dataInputApi_"
      />
      <InputField
        v-if="field.isInputField"
        :_class="_classInputField"
        :_type="field.type"
        :_label="field.label"
        :_value="dataInputApi_[field.value_from_api]"
        :_model.sync="_model[field.label]"
      />
      <InputRadio
        v-if="field.isInputRadio"
        :_type="field.type"
        :_class="_classInputField"
        :_label="field.label"
        :_name="field.name"
        :_options="field.options"
        :_model.sync="_model[field.label]"
      />
      <InputCheckbox
        v-if="field.isInputCheckbox"
        :_type="field.type"
        :_class="_classInputField"
        :_label="field.label"
        :_name="field.name"
        :_options="field.options"
        :_model.sync="_model[field.label]"
        :_theModel="_model[field.label]"
      />
      <InputTextArea
        v-if="field.isTextArea"
        :_class="_classTextAreaInput"
        :_label="field.label"
        :_model.sync="_model[field.label]"
      />
    </div>
    <slot></slot>
    <!-- {{_model}} -->
  </form>
</template>

 <script>
import axios from "axios";
import mixinLoginProcess from "@/utils/mixinLoginProcess.js";

/* Input fields */
import InputField from "@/components/input_fields/InputField.vue";
import LabelInput from "@/components/input_fields/LabelImput.vue";
import InputFieldData from "@/components/input_fields/InputFieldData.vue";
import InputTextArea from "@/components/input_fields/InputTextArea.vue";
import InputRadio from "@/components/input_fields/InputRadio.vue";
import InputCheckbox from "@/components/input_fields/InputCheckbox.vue";

/* Functions */
import { saveToLocalStorage } from "@/functions/local.js";

/* Generate session */
import generateSession from "@/utils/generateSession.js";

export default {
  name: "FormSubmit",
  data() {
    return { dataInputApi_: {} };
  },
  components: {
    InputField,
    LabelInput,
    InputFieldData,
    InputTextArea,
    InputRadio,
    InputCheckbox,
  },
  props: {
    /**
     * Class for styling the form.
     */
    _class: {
      type: String,
    },
    /**
     * Class for label Input
     */
    _classLabelInput: {
      type: String,
    },
    /**
     * Class for Input field
     */
    _classInputField: {
      type: String,
    },
    /**
     * Class for Text Area
     */
    _classTextAreaInput: {
      type: String,
    },
    /**
     * Request's url.
     */
    _url: {
      type: String,
      required: true,
    },
    /**
     * Action. Type of submit.
     */
    _action: {
      type: String,
      required: true,
    },
    /**
     * Model that will be send.
     */
    _model: {
      type: Object,
      required: true,
    },
    /**
     * Fields
     */
    _fields: {
      type: Object,
      required: true,
    },
    _mixins: {
      type: Object,
    },
  },
  mixins: [mixinLoginProcess],
  methods: {
    emitError(message) {
      this.$emit("update:_emittedErrors", message);
    },
    /* authenticateUser: () => {
      console.log(this._model);
      axios
        .post(this._url, {
          identifier: this._model.identifier,
          password: this._model.password,
        })
        .then((response) => {
          const { user, jwt } = response.data;
          saveToLocalStorage("token", jwt);
          this.loginProcess(user.name, user.role.name);
        })
        .catch((error) => {
          this.emitError("senha ou usuário errados");
          console.log(error);
          throw "Os passwords não batem";
        });
    }, */
    /* registerUser: function () {
      console.log(this._model, this._url);
      if (this._model.password !== this._model.confirmedPassword) {
        this.emitError("as senhas não batem");
        throw "Os passwords não batem";
      }
      axios
        .post(this._url, this._model)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.toJSON());
        });
    }, */
    /* Mixin mixinLoginProcess */
    handleClick() {
      console.log(this._model);
      switch (this._action) {
        case "auth":
          console.log(this._model);
          axios
            .post(this._url, {
              identifier: this._model.identifier,
              password: this._model.password,
            })
            .then((response) => {
              const { user, jwt } = response.data;
              saveToLocalStorage("token", jwt);
              this.loginProcess(user.name, user.role.name);
              generateSession();
            })
            .catch((error) => {
              this.emitError("senha ou usuário errados");
              console.log(error);
              throw "Os passwords não batem";
            });
          break;
        case "register":
          console.log(this._model, this._url);
          if (this._model.password !== this._model.confirmedPassword) {
            this.emitError("as senhas não batem");
            throw "Os passwords não batem";
          }
          axios
            .post(this._url, this._model)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error.toJSON());
            });
          break;
      }
    },
  },
};
</script>