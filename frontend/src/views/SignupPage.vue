 <template>
  <main>
    <TitleSection :title="title" />
    <box-container-section :styleObject="boxStyle">
      <input-fields-container InputFieldsContainerClass="formSignupPage">
        <InputFieldsOne
          type="text"
          identification="nome"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="text"
          identification="sobrenome"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="number"
          identification="telefone"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="number"
          identification="cpf"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="email"
          identification="email"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="password"
          identification="senha"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="password"
          identification="repetir senha"
          classNameInput="inputSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
      </input-fields-container>
      <input-fields-container InputFieldsContainerClass="formSignupPage">
        <InputFieldsOne
          type="text"
          identification="CEP"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="text"
          identification="logradouro"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="text"
          identification="número"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="text"
          identification="cidade"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="text"
          identification="estado"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
        <InputFieldsOne
          type="text"
          identification="país"
          classNameInput="inputSignupPage"
          classNameLabel="labelSignupPage"
          :styleLabelObject="labelStyle"
          :styleInputObject="inputStyle"
        />
      </input-fields-container>
    </box-container-section>
  </main>
</template>
 
 <script>
import TitleSection from "@/components/TitleSection.vue";
import InputFieldsOne from "@/components/InputFields/InputFieldsOne.vue";
import InputFieldsContainer from "@/components/InputFields/InputFieldsContainer.vue";
import BoxContainerSection from "@/components/containers/BoxContainerSection.vue";
export default {
  name: "SignupPage",
  components: {
    TitleSection,
    InputFieldsOne,
    InputFieldsContainer,
    BoxContainerSection
  },
  data() {
    return {
      title: "Cadastro",
      boxStyle: {
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        maxWidth: "960px"
      },
      labelStyle: {
        display: "block",
        color: "#fff",
        fontSize: "1.25rem",
        marginBottom: "5px"
      },
      inputStyle: {
        fontSize: "1.25rem",
        flex: "1",
        height: "35px",
        marginBottom: "20px",
        padding: "2.5px"
      }
    };
  }
};
</script>
 
 <style lang="scss" scoped>
.labelSignupPage {
  display: block;
}
</style>