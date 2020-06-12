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
    <button
      class="product__button--cart"
      @click="add_product_to_cart({id:product.id,name:product.name,amount})"
    >
      Adicionar ao
      <br />carrinho
    </button>
  </li>
</template>
 
 <script>
import { mapMutations } from "vuex";
export default {
  data() {
    return { amount: 0 };
  },
  props: ["product"],
  methods: {
    ...mapMutations(["ADD_PRODUCT_TO_CART"]),
    add_product_to_cart(product) {
      /* Verificando se a quantidade escolhida do produto é maior que zero */
      if (product.amount > 0) this.ADD_PRODUCT_TO_CART(product);
    }
  },
  computed: {
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