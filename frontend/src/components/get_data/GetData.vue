 <template>
  <main :class="class_">
    <slot></slot>
  </main>
</template>
 
 <script>
import { api } from "@/services.js";

export default {
  name: "GetData",
  props: ["url", "class_"],
  data() {
    return {
      data_: {}
    };
  },
  methods: {
    getData() {
      api.get(this.url).then(response => {
        this.data_ = response;
        this.emitData();
      });
    },
    emitData() {
      this.$emit("update:data__", this.data_);
    }
  },
  watch: {
    url() {
      this.getData();
    }
  },
  created() {
    this.getData();
  }
};
</script>