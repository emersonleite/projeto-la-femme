 <template>
  <router-link class="header__cart" tag="div" :to="{path:'/cartitems'}">
    <span>Meu carrinho</span>
    <span class="header__cartTotal">{{totalCart| toCurrencyBRL}}</span>
  </router-link>
</template>
 
 <script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "TheCart",
  data() {
    return {};
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalCart"])
  },
  created() {}
};
</script>
 
 <style>
</style>