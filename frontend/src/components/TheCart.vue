 <template>
  <div class="header__cart">
    <span>Meu carrinho</span>
    <span>| {{total| toCurrencyBRL}}</span>
  </div>
</template>
 
 <script>
import { mapGetters } from "vuex";
export default {
  name: "TheCart",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["total"])
  },
  created() {}
};
</script>
 
 <style>
</style>