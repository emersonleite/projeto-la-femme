 <template>
  <form-container _class="formSignupPage">
    <div v-for="field in _fields" :key="field.label" class="box-item-4">
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
        :_model.sync="_model[field.label]"
        :_dataApi.sync="dataApi_"
      />
      <InputField
        v-else-if="!field.get_data_from_api && !field.isTextArea"
        _class="inputField"
        :_type="field.type"
        :_label="field.label"
        :_value="dataApi_[field.value_from_api]"
        :_model.sync="_model[field.label]"
      />
      <InputTextArea
        v-if="field.isTextArea"
        _class="textAreaInput"
        :_label="field.label"
        :_model.sync="_model[field.label]"
      />
    </div>
    {{_model}}
  </form-container>
</template>
 
 <script>
import FormContainer from "@/components/input_fields/FormContainer.vue";
import InputField from "@/components/input_fields/InputField.vue";
import LabelInput from "@/components/input_fields/LabelImput.vue";
import InputFieldData from "@/components/input_fields/InputFieldData.vue";
import InputTextArea from "@/components/input_fields/InputTextArea.vue";

export default {
  name: "FormFields",
  props: ["_fields", "_model"],
  components: {
    FormContainer,
    LabelInput,
    InputField,
    InputTextArea,
    InputFieldData,
  },
  data() {
    return {
      dataApi_: {},
    };
  },
  watch: {
    _model() {
      this.$emit("update:_modelFromForm", this._model);
    },
  },
};
</script>
 
 <style>
</style>