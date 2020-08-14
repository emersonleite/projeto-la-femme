 <template>
  <box-container _class="box-container jc-c">
    <div class="box-item-12 mt-100 pd-50 formSignup__container">
      <TitleSection :title="title" />
      <form-submit
        _class="formSignup"
        _classLabelInput="labelInput"
        _classInputField="inputField"
        _classTextAreaInput="textAreaInput"
        _url="http://localhost:1337/auth/local"
        _action="auth"
        :_model="model"
        :_fields="fields"
        :_emittedErrors.sync="emittedErrors"
      >
        <common-button class="signup__button">enviar</common-button>
        <warning-box v-if="emittedErrors" _class="signup__warning--message">{{emittedErrors}}</warning-box>
      </form-submit>
    </div>
  </box-container>
</template>
 
 <script>
/* Structure components */
import BoxContainer from "@/components/structure/BoxContainer.vue";

/* Form Submit */
import FormSubmit from "@/components/forms/FormSubmit.vue";
/* import TheFields from "@/components/input_fields/TheFields.vue"; */

/* Buttons */
import CommonButton from "@/components/buttons/CommonButton.vue";

/* Custom components */
import TitleSection from "@/components/TitleSection.vue";

/* Form data */
import model from "@/data/formAuth.js";
import { fields } from "@/data/formAuth.js";

/* Message box */
import WarningBox from "@/components/message_box/WarningBox.vue";

export default {
  name: "SignupPage",
  components: {
    BoxContainer,
    TitleSection,
    FormSubmit,
    CommonButton,
    WarningBox,
  },
  data() {
    return {
      title: "Login",
      model,
      fields,
      emittedErrors: "",
    };
  },
};
</script>
 
 <style lang="scss" scoped>
@import "../sass/main.scss";
@import "../sass/spacing.scss";
/* container */
@include boxContainer(450px, 20px);

.signup__warning--message {
  border-radius: 5px;
  width: 100%;
  background-color: $primary-color;
  color: #fff;
  font-size: 1.15rem;
  text-align: center;
  padding: 30px 0;
  margin-top: 40px;
}
</style>