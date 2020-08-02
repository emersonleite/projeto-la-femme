 <template>
  <textarea
    :name="_label"
    :id="_label"
    :class="_class"
    @change="modelHandler($event)"
    :required="true"
    cols="30"
    rows="10"
  ></textarea>
</template>
 
 <script>
export default {
  name: "InputTextArea",
  props: ["_label", "_class"],
  methods: {
    modelHandler() {
      this.$emit("update:_model", event.target.value);
    },
  },
};
</script>
 
 <style>
</style>