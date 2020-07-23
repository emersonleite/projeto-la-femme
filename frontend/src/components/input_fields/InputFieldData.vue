 <template>
  <input
    :type="_type"
    :name="_label"
    :id="_label"
    :class="_class"
    :value="_value"
    @change="modelHandler($event)"
    :required="false"
  />
</template>
 
 <script>
import { api } from "@/services.js";
export default {
  name: "InputFieldData",
  props: [
    "_type",
    "_label",
    "_class",
    "_model",
    "_value",
    "_url",
    "_path",
    "_after_path",
  ],
  data() {
    return {
      dataApi_: {},
    };
  },

  methods: {
    modelHandler() {
      this.$emit("update:_model", event.target.value);
      /* REGEX */
      if (event.target.value.length === 8) {
        this.getData(
          this._url + this._path + event.target.value + this._after_path
        );
      }
    },
    getData(url) {
      api.get(url).then((response) => {
        this.dataApi_ = response;
        this.$emit("update:_dataApi", this.dataApi_);
      });
    },
  },
};
</script>
 
