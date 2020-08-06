 <template>
  <keep-alive>
    <div v-show="_hook" :class="_class" :style="_style" @click="closeModalWrapper($event)">
      <button type="submit">teste</button>
      <slot></slot>
    </div>
  </keep-alive>
</template>
 
 <script>
/**
 * The only true button.
 * @displayName Modal Wrapper
 */

export default {
  name: "ModalWrapper",
  computed: {
    _style() {
      return {
        position: "fixed",
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
           * event which changes the _hook's state if _closingFunction don't exists
           *  */
          this.$emit("update:hook_", !this._hook);
        }
      }
    },
  },
};
</script>