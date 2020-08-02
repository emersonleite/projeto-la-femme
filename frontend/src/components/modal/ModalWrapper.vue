 <template>
  <keep-alive>
    <div v-show="_hook" :style="style" @click="closeModalWrapper($event)">
      <button>close</button>
      <slot></slot>
    </div>
  </keep-alive>
</template>
 
 <script>
import { mapMutations } from "vuex";

export default {
  name: "ModalWrapper",
  data() {
    return {
      style: {
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
      },
    };
  },
  props: ["_hook", "_closeFunction"],
  computed: {},
  methods: {
    ...mapMutations(["UPDATE_LOGIN"]),
    close() {
      this.UPDATE_LOGIN();
    },
    closeModalWrapper(event) {
      console.log(event.currentTarget);
      console.log(event.target);
      console.log(!!this.$options.propsData._closeFunction);
      if (event.currentTarget == event.target) {
        if (this.$options.propsData._closeFunction) this._closeFunction();
        else {
          /* case _closeFunction don't exists */
          this.close();
        }
      }
    },
  },
};
</script>