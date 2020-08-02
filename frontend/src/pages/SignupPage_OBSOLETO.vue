 <template>
  <main>
    <TitleSection :title="title" />
    <box-container _class="box-container">
      <box-row _class="box-row">
        <form-container _class="formSignupPage">
          <div v-for="field in fields" :key="field.label" class="box-item-4">
            <LabelInput
              _class="labelInput"
              :_label="field.label"
              :_alternativeLabel="field.alternativeLabel"
            />
            <InputFieldData
              v-if="field.get_data_from_api && !field.isTextArea"
              :_type="field.type"
              :_label="field.label"
              _class="inputField"
              :_url="field.url"
              :_path="field.path"
              :_after_path="field.after_path"
              :_model.sync="model[field.label]"
              :_dataApi.sync="dataApi_"
            />
            <InputField
              v-else-if="!field.get_data_from_api && !field.isTextArea"
              _class="inputField"
              :_type="field.type"
              :_label="field.label"
              :_value="dataApi_[field.value_from_api]"
              :_model.sync="model[field.label]"
            />
            <InputTextArea
              v-if="field.isTextArea"
              _class="textAreaInput"
              :_label="field.label"
              :_model.sync="model[field.label]"
            />
          </div>

          <action-button
            _url="http://localhost:1337/auth/local"
            _method="POST"
            :_body="model"
            _option="auth2"
            _class="box-item-6 signup__button"
            _value="Enviar"
          ></action-button>
        </form-container>
      </box-row>
    </box-container>
    <div style="color:white;">{{model}}</div>
  </main>
</template>
 
 <script>
/* AXIOS  */
import axios from "axios";

/* Structure components */
import BoxContainer from "@/components/structure/BoxContainer.vue";
import BoxRow from "@/components/structure/BoxRow.vue";
/* import BoxColumn from "@/components/structure/BoxColumn.vue"; */

/* Buttons */
/* import ActionButton from "@/components/buttons/ActionButton.vue"; */

/* Input fields components  */
import FormContainer from "@/components/input_fields/FormContainer.vue";
import InputField from "@/components/input_fields/InputField.vue";
import LabelInput from "@/components/input_fields/LabelImput.vue";
import InputFieldData from "@/components/input_fields/InputFieldData.vue";
import InputTextArea from "@/components/input_fields/InputTextArea.vue";

/* Custom components */
import TitleSection from "@/components/TitleSection.vue";

/* Requests */
/* import { api } from "@/functions/requests.js"; */

/* Form data */
import model from "@/data/form1.js";
import { fields } from "@/data/form1.js";

export default {
  name: "SignupPage",
  components: {
    BoxContainer,
    BoxRow,
    /* BoxColumn, */
    InputField,
    LabelInput,
    InputFieldData,
    FormContainer,
    TitleSection,
    /*   ActionButton, */
    InputTextArea,
  },

  methods: {
    handleClick() {
      axios
        .post("http://localhost:1337/auth/local", {
          identifier: "emersonleite",
          password: "123456789",
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    },
  },

  data() {
    return {
      title: "Cadastro",
      dataApi_: {},
      model,
      fields,
      modelFromForm: {},
    };
  },
};
</script>
 
 <style lang="scss" scoped>
@import "../sass/box-container.scss";
@import "../sass/variables.scss";
@import "../sass/input-fields.scss";
@include boxContainer(960px, 20px);
@import "../sass/mixins.scss";

.promotional {
  border-radius: 7px;
  background: url("../assets/img/banner.jpg") no-repeat center center;
  background-size: cover;
  flex-basis: 460px;
}

.signup__button {
  @include bigButton;
}

.box-item-4 {
  align-items: stretch;
}

* {
  font-family: $primary-font;
}

main {
  margin-bottom: 100px;
}
</style>