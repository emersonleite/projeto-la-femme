 <template>
  <label :class="_class" :for="_label" :style="style">{{formatedField}}</label>
</template>
 
 <script>
export default {
  name: "LabelImput",
  data() {
    return {
      style: {
        display: "block"
      }
    };
  },
  props: ["_label", "_class"],
  computed: {
    formatedField() {
      return this._label.charAt(0).toUpperCase() + this._label.slice(1);
    }
  }
};
</script>
 
