 <template>
  <section class="productDetail__section">
    <div v-if="product" class="productDetail__container">
      <div class="productDetail__image">
        <img :src="`http://localhost:1337${product.photos[0].url}`" :alt="product.name" />
        <button
          class="product__button--cart"
          @click="update_cart(product_to_cart, $event, product.sizes, sizeChoosed_)"
        >adicionar ao carrinho</button>
        <TheCart />
      </div>
      <div class="productDetail__buttons">
        <ProductDetailPrices :product="product" />
        <ProductDetailButtonSize :sizeChoosed__.sync="sizeChoosed_" :product="product" />
      </div>
    </div>
    <div v-else class="productDetail__container">Carregando ...</div>
  </section>
</template>
 
 <script>
import ProductDetailButtonSize from "@/components/productDetailButtonSize.vue";
import ProductDetailPrices from "@/components/productDetailPrices.vue";
import TheCart from "@/components/TheCart.vue";
import { mapMutations /* mapState */ } from "vuex";
import { api } from "@/functions/requests.js";
import { changeTextFromElementAfterATime as change } from "@/functions/changeTextFromElementAfterATime.js";
import { _ } from "@/functions/local.js";
import { mixinIncreaseDecrease } from "@/functions/mixins.js";
export default {
  name: "ProductDetail",
  mixins: [mixinIncreaseDecrease],
  props: ["id"],
  components: {
    ProductDetailButtonSize,
    ProductDetailPrices,
    TheCart
  },
  data() {
    return {
      product: {},
      amount: 1,
      cartTemp: [],
      sizeChoosed_: "",
      currentInfoSize: "escolha o tamanho:"
    };
  },

  methods: {
    infoSelectSize() {
      let infoSize = document.querySelector(".productDetail__size");
      let infoSizeChoosed = `tamanho ${this.sizeChoosed_} escolhido`;
      infoSize.innerText = infoSizeChoosed;
    },

    ...mapMutations(["UPDATE_CART"]),
    /* Função para adicionar produtos ao carrinho. Ela chama uma mutation que é mapeada acima para mudança
    do 'state' 'cart'. */
    getProduct() {
      api.get("http://localhost:1337" + this.$route.fullPath).then(response => {
        this.product = response;
      });
    },

    update_cart(product, event, productSizes, sizeChoosed) {
      if (productSizes.length > 0 && !sizeChoosed) {
        window.alert("Escolha um tamanho");
      } else {
        if (window.localStorage.cart) {
          this.cartTemp = _.from("cart");
          this.cartTemp.push(product);
          window.localStorage.cart = _.to(this.cartTemp);
        } else {
          this.cartTemp.push(product);
          window.localStorage.cart = _.to(this.cartTemp);
        }
        const button = event.currentTarget;
        change(button, "Adicionando...", `adicionar ao carrinho`, 1500);

        this.UPDATE_CART(this.cartTemp);
      }
    }
  },
  computed: {
    /* Função retonando o tipo de dado que deve ser adicionado ao carrinho */
    product_to_cart() {
      return {
        id: this.product.id,
        name: this.product.name,
        price: this.product.cashPrice,
        amount: this.amount,
        total: this.amount * this.product.cashPrice,
        size: this.sizeChoosed_
      };
    }
  },
  created() {
    this.getProduct();
    if (window.localStorage.cart) {
      let cart = _.from("cart");
      this.UPDATE_CART(cart);
    }
  },
  watch: {
    sizeChoosed_() {
      this.infoSelectSize();
    }
  }
};
</script>

<style lang="scss" scoped>
.header__cart {
  background-color: #353535;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
  &:hover {
    background-color: #656565;
    transform: scale(1.02);
    color: white;
  }
}
</style>