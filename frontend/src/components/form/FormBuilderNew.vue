 <template>
  <form-container>
    <div v-for="(input, index) in _labels" :key="index">
      <label class="label" :for="input.label">{{input.label}}</label>
      <input
        :type="input.type"
        :name="input.label"
        :id="input.label"
        class="input"
        @change="modelHandler($event)"
        :required="false"
      />
    </div>
  </form-container>
</template>
 
 <script>
import FormContainer from "@/components/input_fields/FormContainer.vue";
import { createObjectWithLabelsArray as createObject } from "@/functions/createObjectWithLabelsArray.js";

export default {
  name: "FormBuilder",
  components: {
    FormContainer
  },
  props: ["_labels", "type", "_labelClass", "_inputClass"],
  data() {
    return {
      v_models: createObject(this._labels)
    };
  },
  methods: {
    modelHandler() {
      this.$emit("update:_model", event.target.value);
    }
  },
  computed: {
    /* formatedField() {
      return (
        this._labels.label.charAt(0).toUpperCase() + this._labels.label.slice(1)
      );
    } */
  },
  created() {
    console.log(this._labels);
  },
  watch: {
    /* v_models() {
      this.$emit("update:_v_models", this.v_models);
    } */
  }
};
</script>
