 <template>
  <!-- <modal-wrapper> -->
  <box-container _class="box-container jc-c">
    <div class="box-item-6 mt-100 pd-50" style="background: #000;">
      <TitleSection :title="title" />
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
      </form-submit>
    </div>
  </box-container>
  <!-- </modal-wrapper> -->
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

/* Modal */
/* import BoxModal from "@/components/modal/BoxModal.vue"; */
/* import ModalContent from "@/components/modal/BoxModal.vue"; */
/* import ModalWrapper from "@/components/modal/ModalWrapper.vue"; */

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
    /* ModalWrapper, */
    /* BoxModal, */
    /* ModalContent, */
  },
  data() {
    return {
      title: "Login",
      dataInputApi_: {},
      dataFromApi_: {},
      model,
      fields,
    };
  },
  methods: {
    /* ...mapMutations(["UPDATE_LOGIN"]), */
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

.mt-100 {
  margin-top: 100px;
}

.pd-20 {
  padding: 20px;
}

.pd-50 {
  padding: 50px;
}

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