 <template>
  <div>
    <input
      :type="_type"
      :name="_label"
      :id="_label"
      :class="_inputClass"
      :placeholder="_placeholder"
      @change="modelHandler($event)"
    />
    <label :class="_labelClass" :for="_label">{{formatedField}}</label>
  </div>
</template>
 
 <script>
export default {
  name: "InputField",
  props: [
    "_type",
    "_label",
    "_class",
    "_labelClass",
    "_inputClass",
    "_altLabel",
    "_placeholder"
  ],
  methods: {
    modelHandler() {
      this.$emit("update:_model", event.target.value);
    }
  },
  computed: {
    formatedField() {
      if (!this._altLabel) {
        return this._label.charAt(0).toUpperCase() + this._label.slice(1);
      }
      return this._altLabel.charAt(0).toUpperCase() + this._altLabel.slice(1);
    }
  }
};
</script>
 
