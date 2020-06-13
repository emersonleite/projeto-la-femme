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
    <button class="product__button--cart" @click="add_product_to_cart(product_to_cart, $event)">
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
    /* Função para adicionar produtos ao carrinho. Ela chama uma mutation que é mapeada acima para mudança
    do 'state' 'cart'. */
    add_product_to_cart(product, event) {
      /* 'if' para verificar se a quantidade escolhida do produto é maior que zero e se não está no carrinho*/
      if (product.amount > 0 && !window.localStorage[`in_cart${product.id}`]) {
        this.ADD_PRODUCT_TO_CART(product);
        window.localStorage[`in_cart${product.id}`] = true;
        window.localStorage.cart = JSON.stringify(this.cart);
        console.log(event.currentTarget.innerText);
        const button = event.currentTarget;
        button.innerText = `Adicionando...`;
        window.setInterval(() => {
          button.innerText = `Adicionar ao carrinho`;
        }, 800);
      } else if (product.amount === 0) {
        window.alert("Por favor, escolha a quantidade a ser comprada");
      } else {
        window.alert("O produto já está no carrinho.");
      }
    }
  },
  created() {},
  computed: {
    /* Mapeando o dado do store 'cart' */
    ...mapState(["cart"]),
    /* Função retonando o tipo de dado que deve ser adicionado ao carrinho */
    product_to_cart() {
      return {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        amount: this.amount,
        total: this.amount * this.product.price,
        in_cart: this.in_cart
      };
    },
    /* Função Retornando o valor no formato de moeda (real - Brasil) */
    formatedPrice() {
      return this.product.price.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    }
  },
  watch: {
    /* amount() {
      console.log("mudou");
    } */
  }
};
</script>
 
 <style>
</style>