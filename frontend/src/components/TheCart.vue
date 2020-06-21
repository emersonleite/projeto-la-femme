 <template>
  <div class="header__cart">
    <span>
      <router-link :to="{path:'/cartitems'}">Meu carrinho</router-link>
    </span>
    <span class="header__cartTotal">
      <router-link :to="{path:'/cartitems'}">{{totalCart| toCurrencyBRL}}</router-link>
    </span>
  </div>
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