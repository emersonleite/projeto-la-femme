 <template>
  <keep-alive>
    <div v-show="_hook" :class="_class" :style="_style" @click="closeModalWrapper($event)">
      <common-button :style="_styleButton" :_handleClick="closeModalWrapper">x</common-button>
      <slot></slot>
    </div>
  </keep-alive>
</template>
 
 <script>
import CommonButton from "@/components/buttons/CommonButton.vue";
/**
 * The only true button.
 * @displayName Modal Wrapper
 */

export default {
  name: "ModalWrapper",
  components: {
    CommonButton,
  },
  computed: {
    _style() {
      return {
        position: "fixed",
        /*  position: "relative", */
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        zIndex: 10,
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      };
    },
    _styleButton() {
      return {
        backgroundColor: "#505050",
        color: "#fff",
        zIndex: 11,
        fontSize: "1.5rem",
        top: "6%",
        left: "70%",
        position: "absolute",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "none",
      };
    },
  },
  props: {
    /**
     * Variable wich allow that the modal appears
     */
    _hook: {
      type: Boolean,
      required: true,
      default: false,
    },
    /**
     * Class for styling.
     */
    _class: {
      type: String,
      required: false,
    },
    /**
     * Function that changes the _hook's state. Is applicable if the _hook is a store variable.
     */
    _closingFunction: {
      type: Function,
      required: false,
    },
  },
  methods: {
    /**
     * Method which  close the modal wrapper when the user click out of modal.
     */
    closeModalWrapper(event) {
      if (event.currentTarget == event.target) {
        if (this.$options.propsData._closingFunction) this._closingFunction();
        else {
          /**
           * event which changes the _hook's state if _closingFunction don't exist
           *  */
          this.$emit("update:hook_", !this._hook);
        }
      }
    },
  },
};
</script>