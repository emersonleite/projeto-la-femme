 <template>
  <section class="productDetail__section" style="min-height: 100vh">
    <!-- <TitleSection :title="product.name" /> -->
    <div v-if="product" class="productDetail__container">
      <div class="productDetail__image">
        <img :src="`http://localhost:1337${product.photos[0].url}`" :alt="product.name" />
      </div>
      <div class="productDetail__buttons">
        <h2 class="productDetail__name">{{product.name}}</h2>
        <p class="productDetail__description">{{product.description}}</p>
        <h3 class="productDetail__size">Tamanhos</h3>
        <div class="product__button">
          <button
            :disabled="amount === 0"
            @click="amount--"
            :class="{'product__button--takeout-disabled': amount === 0}"
            class="product__button--takeout"
          >-</button>
          <button @click="amount++" class="product__button--add">+</button>
          <input class="product__amount" type="text" name="amount" v-model="amount" />
          <span class="product__price">{{product.price | toCurrencyBRL}}</span>
        </div>
        <button
          :disabled="amount === 0"
          class="product__button--cart"
          @click="add_product_to_cart(product_to_cart, $event)"
        >
          Adicionar ao
          <br />carrinho
        </button>
      </div>
    </div>
  </section>
</template>
 
 <script>
import { api } from "@/functions/requests.js";
import { mapMutations /* mapState */ } from "vuex";
import { changeTextFromElementAfterATime as change } from "@/functions/changeTextFromElementAfterATime.js";
import { _ } from "@/functions/local.js";
import { mixinIncreaseDecrease } from "@/functions/mixins.js";
/* Importando função de soma */
export default {
  name: "ProductDetail",
  mixins: [mixinIncreaseDecrease],
  props: ["id"],
  data() {
    return {
      product: {},
      amount: 0,
      cartTemp: []
    };
  },

  methods: {
    ...mapMutations(["ADD_PRODUCT_TO_CART"]),
    /* Função para adicionar produtos ao carrinho. Ela chama uma mutation que é mapeada acima para mudança
    do 'state' 'cart'. */
    getProduct() {
      api
        .get("http://localhost:1337" + this.$route.fullPath)
        .then(response => (this.product = response));
    },
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
          this.cartTemp.push(product);
          window.localStorage.cart = _.to(this.cartTemp);
        }
        const button = event.currentTarget;
        console.log(button.innerText);
        change(
          button,
          "Adicionando...",
          `Adicionar
         ao carrinho`,
          1000
        );
        this.ADD_PRODUCT_TO_CART(this.cartTemp);
        window.setTimeout(() => {
          this.amount = 0;
        }, 1000);
      } /* else if (product.amount === 0) {
        window.alert("Por favor, escolha a quantidade a ser comprada");
      } */ /* else {
        window.alert("O produto já está no carrinho.");
      } */
    }
  },
  computed: {
    /* Mapeando o dado do store 'cart' */
    /*  ...mapState(["total"]), */

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
  created() {
    console.log("criado");
    if (window.localStorage.cart) {
      let cart = _.from("cart");
      this.ADD_PRODUCT_TO_CART(cart);
    }
    this.getProduct();
  },
  watch: {}
};
</script>
 
 <style>
</style>