 <template>
  <main>
    <TitleSection :title="title" />
    <box-container _class="box-container">
      <box-row _class="box-row">
        <box-column class="box-item-3">
          <form-container _class="formSignupPage">
            <LabelInput _class="labelInput" _label="nome" />
            <InputField _class="inputField" _type="text" _label="nome" :_model.sync="nome" />
            <LabelInput _class="labelInput" _label="sobrenome" />
            <InputField
              _class="inputField"
              _type="text"
              _label="sobrenome"
              :_model.sync="sobrenome"
            />
            <LabelInput _class="labelInput" _label="telefone" />
            <InputField
              _class="inputField"
              _type="number"
              _label="telefone"
              :_model.sync="telefone"
            />
            <LabelInput _class="labelInput" _label="CPF" />
            <InputField _class="inputField" _type="number" _label="CPF" :_model.sync="CPF" />
            <LabelInput _class="labelInput" _label="email" />
            <InputField _class="inputField" _type="email" _label="email" :_model.sync="email" />
            <LabelInput _class="labelInput" _label="senha" />
            <InputField _class="inputField" _type="password" _label="senha" :_model.sync="senha" />
          </form-container>
        </box-column>
        <box-column class="box-item-3">
          <form-container _class="formSignupPage">
            <LabelInput _class="labelInput" _label="CEP" />
            <InputField
              _class="inputField"
              _type="number"
              _label="CEP"
              :_model.sync="cep"
              @change="getEndereco(cep)"
            />
            <LabelInput _class="labelInput" _label="logradouro" />
            <InputField
              _class="inputField"
              _type="text"
              _label="logradouro"
              :_model.sync="logradouro"
              v-model="logradouro"
            />
            <LabelInput _class="labelInput" _label="cidade" />
            <InputField
              _class="inputField"
              _type="text"
              _label="cidade"
              :_model.sync="cidade"
              v-model="cidade"
            />
            <LabelInput _class="labelInput" _label="bairro" />
            <InputField
              _class="inputField"
              _type="text"
              _label="bairro"
              :_model.sync="bairro"
              v-model="bairro"
            />
            <LabelInput _class="labelInput" _label="estado" />
            <InputField
              _class="inputField"
              _type="text"
              _label="estado"
              :_model.sync="estado"
              v-model="estado"
            />
            <LabelInput _class="labelInput" _label="repetir senha" />
            <InputField
              _class="inputField"
              _type="password"
              _label="repetir senha"
              :_model.sync="repetir_senha"
            />
          </form-container>
        </box-column>
        <box-column
          style="background-color:#fff; height    : 100%;"
          class="box-item-6 promotional"
        >Aproveite</box-column>
      </box-row>
    </box-container>
    <box-container _class="box-container">
      <box-row _class="box-row">
        <button class="box-item-6 signup__button">Enviar</button>
      </box-row>
    </box-container>
  </main>
</template>
 
 <script>
/*  */
import TitleSection from "@/components/TitleSection.vue";
import FormContainer from "@/components/input_fields/FormContainer.vue";
import InputField from "@/components/input_fields/InputField.vue";
import LabelInput from "@/components/input_fields/LabelImput.vue";
import BoxContainer from "@/components/structure/BoxContainer.vue";
import BoxRow from "@/components/structure/BoxRow.vue";
import BoxColumn from "@/components/structure/BoxColumn.vue";
import { api } from "@/functions/requests.js";
/*  */
export default {
  name: "SignupPage",
  components: {
    TitleSection,
    InputField,
    LabelInput,
    FormContainer,
    BoxContainer,
    BoxRow,
    BoxColumn
  },
  data() {
    return {
      title: "Cadastro",
      nome: "",
      sobrenome: "",
      telefone: "",
      CPF: "",
      email: "",
      senha: "",
      repetir_senha: "",
      cep: "",
      logradouro: "",
      cidade: "",
      bairro: "",
      estado: ""
    };
  },
  methods: {
    getEndereco(zipCode) {
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
    }
  },
  watch: {
    cep() {
      if (this.cep.length === 8) {
        this.getEndereco(this.cep);
      }
    }
  }
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