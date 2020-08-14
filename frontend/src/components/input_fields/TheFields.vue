 <template>
  <div>
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
  </div>
</template>
 
 <script>
/* Input fields components  */
import InputField from "@/components/input_fields/InputField.vue";
import LabelInput from "@/components/input_fields/LabelImput.vue";
import InputFieldData from "@/components/input_fields/InputFieldData.vue";
import InputTextArea from "@/components/input_fields/InputTextArea.vue";

/* Form data */
import model from "@/data/form1.js";
import { fields } from "@/data/form1.js";

export default {
  components: {
    InputField,
    LabelInput,
    InputFieldData,
    InputTextArea,
  },
  data() {
    return {
      model,
      fields,
    };
  },
  beforeMount() {
    console.log(this.model, this.fields);
  },
};
</script>
 
 <style>
</style>