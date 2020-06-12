 <template>
  <li class="product">
    <img class="product__image" :src="`http://localhost:1337${product.photos[0].url}`" alt />
    <p class="product__name">{{product.name}}</p>
    <div class="product__button">
      <button @click="amount--" class="product__button--takeout">-</button>
      <button @click="amount++" class="product__button--add">+</button>
      <input class="product__amount" type="text" name="amount" v-model="amount" />
      <span class="product__price">{{formatedPrice}}</span>
    </div>
    <button class="product__button--cart" @click="add_product_to_cart(product_to_cart)">
      Adicionar ao
      <br />carrinho
    </button>
  </li>
</template>
 
 <script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      amount: 0,
      in_cart: false
    };
  },
  props: ["product"],
  methods: {
    ...mapMutations(["ADD_PRODUCT_TO_CART"]),
    add_product_to_cart(product) {
      /* Verificando se a quantidade escolhida do produto é maior que zero */
      if (product.amount > 0 && !window.localStorage[`in_cart${product.id}`]) {
        this.ADD_PRODUCT_TO_CART(product);
        window.localStorage[`in_cart${product.id}`] = true;
        window.localStorage.cart = JSON.stringify(this.cart);
      } else window.alert("Item no carrinho ou igual a zero");
    }
  },
  created() {
    /* this.cart_after_reload = JSON.parse(window.localStorage.cart);
    this.ADD_PRODUCT_TO_CART(this.cart_after_reload); */
  },
  computed: {
    ...mapState(["cart"]),
    product_to_cart() {
      return {
        id: this.product.id,
        name: this.product.name,
        amount: this.amount,
        in_cart: this.in_cart
      };
    },
    formatedPrice() {
      return this.product.price.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    }
  },
  watch: {
    amount() {
      console.log("mudou");
    }
  }
};
</script>
 
 <style>
</style>