 <template>
  <div class="main">
    <TitleSection :title="title" />
    <box-container _class="box-container jc-c">
      <div class="box-item-6">
        <form-submit
          _text_button="Entrar"
          _class="formSignupPage"
          _class_button="box-item-6 signup__button"
          _url="http://localhost:1337/auth/local"
          :_body="model"
          :dataFromApi.sync="dataFromApi_"
        >
          <div v-for="field in fields" :key="field.label">
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
              :_dataApi.sync="dataInputApi_"
            />
            <InputField
              v-else-if="!field.get_data_from_api && !field.isTextArea"
              _class="inputField"
              :_type="field.type"
              :_label="field.label"
              :_value="dataInputApi_[field.value_from_api]"
              :_model.sync="model[field.label]"
            />
            <InputTextArea
              v-if="field.isTextArea"
              _class="textAreaInput"
              :_label="field.label"
              :_model.sync="model[field.label]"
            />
          </div>
          <!--  <button type="submit" class="box-item-6 signup__button">Login</button>-->
        </form-submit>
      </div>
    </box-container>
    <div style="color:white;">{{dataFromApi_}}</div>
  </div>
</template>
 
 <script>
/* Structure components */
import BoxContainer from "@/components/structure/BoxContainer.vue";

/* Input fields components  */
import InputField from "@/components/input_fields/InputField.vue";
import LabelInput from "@/components/input_fields/LabelImput.vue";
import InputFieldData from "@/components/input_fields/InputFieldData.vue";
import InputTextArea from "@/components/input_fields/InputTextArea.vue";

/* Form Submit */
import FormSubmit from "@/components/forms/FormSubmit.vue";

/* Custom components */
import TitleSection from "@/components/TitleSection.vue";

/* Form data */
import model from "@/data/form1.js";
import { fields } from "@/data/form1.js";

export default {
  name: "SignupPage",
  components: {
    BoxContainer,
    InputField,
    LabelInput,
    InputFieldData,
    TitleSection,
    InputTextArea,
    FormSubmit,
  },

  data() {
    return {
      title: "Cadastro",
      dataInputApi_: {},
      dataFromApi_: {},
      model,
      fields,
    };
  },
};
</script>
 
 <style lang="scss" scoped>
/* @import "../sass/mixins.scss";
@import "../sass/box-container.scss";
@import "../sass/variables.scss"; */
@import "../sass/input-fields.scss";
@import "../sass/main.scss";
@import "../sass/spacing.scss";
@include boxContainer(960px, 20px);

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
</style>