 <template>
  <div>
    <span v-for="option in _options" :key="option">
      <label :for="option">{{option}}</label>
      <input
        :value="option"
        :type="_type"
        :name="_name"
        :id="option"
        :class="_class"
        @change="modelHandler($event)"
        :required="true"
      />
    </span>
  </div>
</template>
 
 <script>
export default {
  name: "InputField",
  props: ["_type", "_label", "_name", "_class", "_model", "_value", "_options"],
  methods: {
    modelHandler() {
      this.$emit("update:_model", event.target.value);
    },
  },
};
</script>
 
