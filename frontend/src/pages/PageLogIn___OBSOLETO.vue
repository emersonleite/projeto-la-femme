 <template>
  <box-modal>
    <TitleSection :title="title" />
    <box-container _class="box-container">
      <box-row _class="box-row">
        <form @submit.prevent="handleClick" class="formSignupPage box-item-6">
          <div v-for="field in fields" :key="field.label" class="box-item-6">
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
          <button type="submit" class="box-item-6 signup__button">Login</button>
        </form>
        <div>Você já está logado</div>
      </box-row>
    </box-container>
    <div style="color:white;">{{dataApi_}}</div>
  </box-modal>
</template>
 
 <script>
/* AXIOS  */
import axios from "axios";

/* Structure components */
import BoxContainer from "@/components/structure/BoxContainer.vue";
import BoxRow from "@/components/structure/BoxRow.vue";

/* Input fields components  */
import InputField from "@/components/input_fields/InputField.vue";
import LabelInput from "@/components/input_fields/LabelImput.vue";
import InputFieldData from "@/components/input_fields/InputFieldData.vue";
import InputTextArea from "@/components/input_fields/InputTextArea.vue";

/* Custom components */
import TitleSection from "@/components/TitleSection.vue";

/* Form data */
import model from "@/data/form1.js";
import { fields } from "@/data/form1.js";

/* Modal */
import BoxModal from "@/components/modal/BoxModal.vue";

export default {
  name: "SignupPage",
  components: {
    BoxContainer,
    BoxRow,
    InputField,
    LabelInput,
    InputFieldData,
    TitleSection,
    InputTextArea,
    BoxModal,
  },

  methods: {
    handleClick() {
      axios
        .post("http://localhost:1337/auth/local", {
          identifier: this.model.identifier,
          password: this.model.password,
        })
        .then((response) => {
          this.dataApi_ = response.data;
          console.log(response.data);
          window.localStorage["token"] = response.data.jwt;
        })
        .catch((error) => console.error(error));
    },
  },

  data() {
    return {
      title: "Log in",
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

.formSignupPage {
  justify-content: center;
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
  min-height: 100vh;
}
</style>