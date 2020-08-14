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
      >
        <common-button class="signup__button">enviar</common-button>
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
import model from "@/data/formPrototype.js";
import { fields } from "@/data/formPrototype.js";

export default {
  name: "SignupPage",
  components: {
    BoxContainer,
    TitleSection,
    FormSubmit,
    CommonButton,
  },
  data() {
    return {
      title: "forms",
      model,
      fields,
    };
  },
};
</script>
 
 <style lang="scss" scoped>
@import "../sass/main.scss";
@import "../sass/spacing.scss";
/* container */
@include boxContainer(450px, 20px);
</style>