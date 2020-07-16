 <template>
  <form-container>
    <div v-for="(input, index) in _labels" :key="index">
      <LabelImput :_label="input.label" />
      <InputField :type="input.type" :_label="input.label" />
    </div>
  </form-container>
</template>
 
 <script>
import FormContainer from "@/components/input_fields/FormContainer.vue";
import InputField from "@/components/input_fields/InputField.vue";
import LabelImput from "@/components/input_fields/LabelImput.vue";
import { createObjectWithLabelsArray as createObject } from "@/functions/createObjectWithLabelsArray.js";

export default {
  name: "FormBuilder",
  components: {
    FormContainer,
    InputField,
    LabelImput
  },
  props: ["_labels", "type"],
  data() {
    return {
      v_models: createObject(this._labels)
    };
  },
  computed: {},
  created() {
    /* console.log(this.v_models); */
  },
  watch: {
    v_models() {
      this.$emit("update:_v_models", this.v_models);
    }
  }
};
</script>
