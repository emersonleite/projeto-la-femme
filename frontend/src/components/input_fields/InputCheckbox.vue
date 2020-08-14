 <template>
  <div>
    <span v-for="option in _options" :key="option">
      <label :for="option">{{option}}</label>
      <input
        :value="option"
        :type="_type"
        :name="option"
        :id="option"
        :class="_class"
        @change="modelHandler"
        :required="true"
        v-model="checkboxModel"
      />
    </span>
  </div>
</template>
 
 <script>
export default {
  name: "InputField",
  data() {
    return {
      checkboxModel: [],
    };
  },
  props: [
    "_type",
    "_label",
    "_name",
    "_class",
    "_model",
    "_value",
    "_options",
    "_theModel",
  ],
  methods: {
    modelHandler() {
      this.$emit("update:_model", this.checkboxModel);
    },
  },
};
</script>
 
