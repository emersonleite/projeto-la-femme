 <template>
  <main>
    <TitleSection :title="title" />
    <box-container _class="box-container">
      <box-row _class="box-row">
        <form-container _class="formSignupPage">
          <div v-for="field in fields" :key="field.label" class="box-item-4">
            <LabelInput _class="labelInput" :_label="field.label" />
            <InputFieldData
              v-if="field.get_data_from_api"
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
              v-else
              _class="inputField"
              :_type="field.type"
              :_label="field.label"
              :_value="dataApi_[field.value_from_api]"
              :_model.sync="model[field.label]"
            />
          </div>
        </form-container>

        <!--  Teste -->
        <div style="color: white;">{{model.localidade}}</div>
        <div style="color: white;">{{dataApi_.localidade}}</div>

        <!--  -->

        <!-- <box-column
          style="background-color:#fff; height    : 100%;"
          class="box-item-6 promotional"
        >Aproveite</box-column>-->
      </box-row>
    </box-container>
    <box-container _class="box-container">
      <box-row _class="box-row">
        <button class="box-item-6 signup__button">Enviar</button>
      </box-row>
      <post-button
        _url="http://localhost:1337/postagems"
        _class="box-item-6 signup__button"
        _value="ok"
      ></post-button>
    </box-container>
  </main>
</template>
 
 <script>
/* Structure components */
import BoxContainer from "@/components/structure/BoxContainer.vue";
import BoxRow from "@/components/structure/BoxRow.vue";
/* import BoxColumn from "@/components/structure/BoxColumn.vue"; */

/* Buttons */
import PostButton from "@/components/buttons/PostButton.vue";

/* Input fields components  */
import FormContainer from "@/components/input_fields/FormContainer.vue";
import InputField from "@/components/input_fields/InputField.vue";
import LabelInput from "@/components/input_fields/LabelImput.vue";
import InputFieldData from "@/components/input_fields/InputFieldData.vue";

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
    PostButton,
  },

  data() {
    return {
      title: "Cadastro",
      dataApi_: {},
      model,
      fields,
    };
  },
  methods: {
    /* getEndereco(zipCode) {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        api.get(`https://viacep.com.br/ws/${zipCode}/json`).then(response => {
          console.log(response);
          this.logradouro = response["logradouro"];
          this.cidade = response["localidade"];
          this.estado = response["uf"];
          this.bairro = response["bairro"];
        });
      }
    } */
  },

  watch: {
    form() {
      if (this.cep.length === 8) {
        this.getEndereco(this.cep);
      }
    },
  },
};
</script>
 
 <style lang="scss" scoped>
@import "../sass/boxContainer.scss";
@import "../sass/variables.scss";
@import "../sass/input_fields.scss";
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