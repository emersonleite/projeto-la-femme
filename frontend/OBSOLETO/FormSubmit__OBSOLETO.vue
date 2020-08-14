 <template>
  <form @submit.prevent="handleClick" :class="_class">
    <slot></slot>
  </form>
</template>

 <script>
import axios from "axios";
import mixinLoginProcess from "@/utils/mixinLoginProcess.js";
/* import { mapActions } from "vuex"; */
export default {
  name: "FormSubmit",

  props: {
    /**
     * Text of button.
     */
    _text_button: {
      type: String,
      default: "Ok",
    },
    /**
     * Class for styling the form.
     */

    _class: {
      type: String,
    },
    /**
     * Request's url.
     */
    _url: {
      type: String,
      required: true,
    },
    /**
     * Model that will be send.
     */
    _body: {
      type: Object,
      required: true,
    },
    _mixins: {
      type: Object,
    },
  },
  mixins: [mixinLoginProcess],
  data() {
    return {
      /* dataFromApi_: {}, */
    };
  },
  methods: {
    /* ...mapMutations(["UPDATE_USER", "SHOW_LOGIN_SCREEN", "UPDATE_ROLE_USER"]),*/
    /* ...mapActions(["LOGIN_PROCESS"]), */
    handleClick() {
      console.log(this._body);
      axios
        .post(this._url, {
          /* body: this._body, */
          identifier: this._body.identifier,
          password: this._body.password,
        })
        .then((response) => {
          const { user, jwt } = response.data;
          /* this.dataFromApi_ = response.data;
          console.log(response.data);
          console.log(response.data.user);
          console.log(response.data.user.role.name); */
          window.localStorage["token"] = jwt;
          this.loginProcess(user.name, user.role.name);
          /* this.$emit("update:dataFromApi", this.dataFromApi_); */
        })
        .catch((error) => {
          console.log(error);
        });
    },
    created() {},
  },
};
</script>