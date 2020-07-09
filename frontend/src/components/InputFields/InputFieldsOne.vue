 <template>
  <div>
    <label :style="styleLabelObject" :for="identification" :class="classNameLabel">{{formatedField}}</label>
    <input
      :style="styleInputObject"
      :type="type"
      :name="identification"
      :id="identification"
      :class="classNameInput"
    />
  </div>
</template>
 
 <script>
export default {
  name: "InputFieldsOne",
  props: [
    "type",
    "identification",
    "classNameInput",
    "classNameLabel",
    "styleInputObject",
    "styleLabelObject"
  ],
  computed: {
    formatedField() {
      return (
        this.identification.charAt(0).toUpperCase() +
        this.identification.slice(1)
      );
    }
  }
};
</script>
 
 <style>
</style>