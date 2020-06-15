 <template>
  <li class="product">
    <img class="product__image" :src="`http://localhost:1337${product.photos[0].url}`" alt />
    <p class="product__name">{{product.name}}</p>
    <div class="product__button">
      <button @click="amount--" class="product__button--takeout">-</button>
      <button @click="amount++" class="product__button--add">+</button>
      <input class="product__amount" type="text" name="amount" v-model="amount" />
      <span class="product__price">{{product.price | toCurrencyBRL}}</span>
    </div>
    <button class="product__button--cart" @click="add_product_to_cart(product_to_cart, $event)">
      Adicionar ao
      <br />carrinho
    </button>
  </li>
</template>
 
 <script>
import { mapMutations, mapState } from "vuex";
import { changeTextFromElementAfterATime as change } from "@/functions/changeTextFromElementAfterATime.js";
import { _ } from "@/functions/local.js";
/* Importando função de soma */

export default {
  data() {
    return {
      amount: 0,
      cart: [],
      cartTemp: []
    };
  },
  props: ["product"],
  methods: {
    ...mapMutations(["ADD_PRODUCT_TO_CART"]),
    /* Função para adicionar produtos ao carrinho. Ela chama uma mutation que é mapeada acima para mudança
    do 'state' 'cart'. */
    add_product_to_cart(product, event) {
      /* 'if' para verificar se a quantidade escolhida do produto é maior que zero e se não está no carrinho*/
      if (
        product.amount > 0 /* && !window.localStorage[`in_cart${product.id}`] */
      ) {
        this.ADD_PRODUCT_TO_CART(product);
        /* VERIFICAR NECESSIDADE abaixo: */
        /* window.localStorage[`in_cart${product.id}`] = true; */
        if (window.localStorage.cart) {
          this.cartTemp = _.from("cart");
          this.cartTemp.push(product);
          window.localStorage.cart = _.to(this.cartTemp);
        } else {
          this.cart.push(product);
          window.localStorage.cart = _.to(this.cart);
          /* this.ADD_PRODUCT_TO_CART(this.cart); */
        }
        const button = event.currentTarget;
        change(button, "Adicionando...", "Adicionar ao carrinho", 200);
        this.ADD_PRODUCT_TO_CART(this.cartTemp);
      } else if (product.amount === 0) {
        window.alert("Por favor, escolha a quantidade a ser comprada");
      } /* else {
        window.alert("O produto já está no carrinho.");
      } */
    }
  },

  computed: {
    /* Mapeando o dado do store 'cart' */
    ...mapState(["total"]),

    /* Função retonando o tipo de dado que deve ser adicionado ao carrinho */
    product_to_cart() {
      return {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        amount: this.amount,
        total: this.amount * this.product.price
      };
    }
  },
  watch: {},
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