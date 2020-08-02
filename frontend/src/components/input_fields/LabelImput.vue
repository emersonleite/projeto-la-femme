 <template>
  <label :class="_class" :for="_label" :style="style">{{_alternativeLabel || _label}}</label>
</template>
 
 <script>
export default {
  name: "LabelImput",
  data() {
    return {
      style: {
        display: "block",
      },
    };
  },
  props: ["_label", "_alternativeLabel", "_class"],
  computed: {
    formatedField() {
      return this._label.charAt(0).toUpperCase() + this._label.slice(1);
    },
  },
};
</script>
 
