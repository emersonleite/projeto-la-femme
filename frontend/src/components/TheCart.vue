 <template>
  <div class="header__cart">
    <span>
      <router-link :to="{path:'/cartitems'}">Meu carrinho</router-link>
    </span>
    <span class="header__cartTotal">{{total| toCurrencyBRL}}</span>
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
    ...mapGetters(["total"]),
    ...mapState(["cart"])
  },
  created() {}
};
</script>
 
 <style>
</style>