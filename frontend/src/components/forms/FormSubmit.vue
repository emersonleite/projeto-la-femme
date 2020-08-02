 <template>
  <form @submit.prevent="handleClick" :class="_class">
    <slot></slot>
    <button type="submit" :class="_class_button">{{_text_button}}</button>
  </form>
</template>
 
 <script>
import axios from "axios";
export default {
  name: "FormSubmit",
  props: ["_text_button", "_class", "_class_button", "_url", "_body"],
  data() {
    return {
      dataFromApi_: {},
    };
  },
  methods: {
    handleClick() {
      console.log(this._body);
      axios
        .post(this._url, {
          identifier: this._body.identifier,
          password: this._body.password,
        })
        .then((response) => {
          this.dataFromApi_ = response.data;
          console.log(response.data);
          window.localStorage["token"] = response.data.jwt;
          this.$emit("update:dataFromApi", this.dataFromApi_);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    created() {},
  },
};
</script>
 
 <style lang="scss" scoped>
/* @import "../../sass/variables.scss";
@import "../../sass/mixins.scss";

.signup-button {
  @include bigButton;
} */
</style>