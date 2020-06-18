 <template>
  <div style="min-height:100vh">
    <TitleSection :title="title" />
    {{cart}}
  </div>
</template>
 
 <script>
import { mapMutations, mapState } from "vuex";
import TitleSection from "@/components/TitleSection.vue";
import { _ } from "@/functions/local.js";
export default {
  data() {
    return {
      title: "Meu carrinho"
    };
  },
  name: "CartItems",
  components: {
    TitleSection
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT_TO_CART"])
  },
  computed: {
    ...mapState(["cart"])
  },
  created() {
    if (window.localStorage.cart) {
      let cart = _.from("cart");
      this.ADD_PRODUCT_TO_CART(cart);
    }
  }
};
</script>
 
 <style>
</style>