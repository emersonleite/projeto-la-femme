 <template>
  <li class="product">
    <router-link :to="{name: 'product', params:{id:product.id}}">
      <img
        class="product__image"
        :src="`http://localhost:1337${product.photos[0].url}`"
        :alt="product.name"
      />
      <p class="product__name">{{product.name}}</p>
    </router-link>
  </li>
</template>
 
 <script>
/* import { _ } from "@/functions/local.js"; */
/* Importando função de soma */

export default {
  data() {
    return {
      amount: 0,
      cartTemp: []
    };
  },
  props: ["product"],
  methods: {},

  computed: {}
  /*   created() {
    if (window.localStorage.cart) {
      let cart = _.from("cart");
      this.ADD_PRODUCT_TO_CART(cart);
    }
  } */
};
</script>
 
 <style>
</style>