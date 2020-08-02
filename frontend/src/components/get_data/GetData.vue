 <template>
  <main :class="_class">
    <slot></slot>
  </main>
</template>
 
 <script>
import { api } from "@/services.js";
/* import axios from "axios"; */

export default {
  name: "GetData",
  props: ["_url", "_class"],
  data() {
    return {
      data_: {},
    };
  },
  methods: {
    getData() {
      //AXIOS
      /* axios.get(this._url).then((response) => {
        this.data_ = response.data;
        this.$emit("update:data__", this.data_);
      }); */

      //FETCH
      api.get(this._url).then((response) => {
        this.data_ = response;
        console.log(response);
        this.$emit("update:data__", this.data_);
      });
    },
  },
  watch: {
    _url() {
      this.getData();
    },
  },
  created() {
    this.getData();
  },
};
</script>