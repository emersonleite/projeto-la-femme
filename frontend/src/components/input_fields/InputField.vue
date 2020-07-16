 <template>
  <input
    :type="_type"
    :name="_label"
    :id="_label"
    :class="_class"
    @change="modelHandler($event)"
    :required="false"
  />
</template>
 
 <script>
export default {
  name: "InputField",
  props: ["_type", "_label", "_class", "_model"],
  methods: {
    modelHandler() {
      this.$emit("update:_model", event.target.value);
    }
  }
};
</script>
 
