 <template>
  <box-container _class="box-container jc-c">
    <div class="box-item-12 mt-100 pd-50 formSignup__container">
      <TitleSection :title="title" />
      <form-submit
        _text_button="Entrar"
        _class="formSignup"
        _class_button="signup__button box-item-6"
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

        <!-- <TheFields :model__.sync="model" /> -->
        <common-button class="signup__button">enviar</common-button>
      </form-submit>
    </div>
  </box-container>
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
/* import TheFields from "@/components/input_fields/TheFields.vue"; */

/* Buttons */
import CommonButton from "@/components/buttons/CommonButton.vue";

/* Custom components */
import TitleSection from "@/components/TitleSection.vue";

/* Form data */
import model from "@/data/form1.js";
import { fields } from "@/data/form1.js";

/* Mixins */
import mixinLoginProcess from "@/utils/mixinLoginProcess.js";

export default {
  name: "SignupPage",
  components: {
    BoxContainer,
    InputField,
    LabelInput,
    InputFieldData,
    InputTextArea,
    TitleSection,
    FormSubmit,
    CommonButton,
    /* TheFields, */
  },
  /*  mixins: [mixinLoginProcess], */
  data() {
    return {
      title: "Login",
      dataInputApi_: {},
      dataFromApi_: {},
      model,
      fields,
    };
  },
  methods: {},
  computed: {},
  created() {
    console.log(mixinLoginProcess);
    console.log(this.model);
  },
};
</script>
 
 <style lang="scss" scoped>
@import "../sass/main.scss";
@import "../sass/input-fields.scss";
@import "../sass/spacing.scss";
/* container */
@include boxContainer(450px, 20px);

.formSignup__container {
  background: $tertiary-color;
  border-radius: 10px;
  /* border: solid 5px #ad9482; */
  font-family: $primary-font;
}

.signup__button {
  @include bigButton;
  background-color: $primary-color;
}
</style>