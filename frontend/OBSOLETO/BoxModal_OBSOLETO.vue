 <template>
  <div class="modal" @click="mostrar($event)">
    <button>x</button>
    <slot></slot>
  </div>
</template>
 
 <script>
import { mapMutations } from "vuex";
export default {
  name: "BoxModal",
  methods: {
    ...mapMutations(["SHOW_LOGIN_SCREEN"]),
    /* backNavigation() {
      return this.$router.go(-1);
    }, */
    mostrar(event) {
      console.log(event.currentTarget);
      console.log(event.target);
      if (event.currentTarget == event.target) {
        this.SHOW_LOGIN_SCREEN();
      }
    },
  },
};
</script>
 
 <style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* display: none; */
  justify-content: center;
  align-items: flex-start; /* or center */
  /* depending on what z-index values exist in your page, in order for the modal layer to sit on top of other content */
  z-index: 1000;
  /* enable scrolling if needed - although this is not really necessary since we are going take care of overflow in modal-content */
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>