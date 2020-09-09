 <template>
  <!-- Getting data from api - get-data component -->
  <get-data :_url="`http://localhost:1337${this.$route.fullPath}`" :data__.sync="data_">
    <box-container class="box-container">
      <box-row class="box-row">
        <box-column class="productDetail__image box-item-gold">
          <img
            v-if="data_.photos !== undefined"
            :src="`http://localhost:1337${data_.photos[0].url}`"
            :alt="data_.name"
          />
          <button
            class="product__button--cart"
            @click="update_cart(product_to_cart, $event, data_.sizes, sizeChoosed_)"
          >adicionar ao carrinho</button>
          <TheCart />
        </box-column>
        <box-column class="box-item-gold-rest">
          <ProductDetailPrices :product="data_" />
          <ProductDetailButtonSize :product="data_" :sizeChoosed__.sync="sizeChoosed_" />
        </box-column>
      </box-row>
    </box-container>
  </get-data>
</template>
 
 <script>
/* Structure components */
import BoxContainer from "@/components/structure/BoxContainer.vue";
import BoxRow from "@/components/structure/BoxRow.vue";
import BoxColumn from "@/components/structure/BoxColumn.vue";
import GetData from "@/components/get_data/GetData.vue";

/* Custom components */
/* import ProductDetailButtonSize from "@/components/ProductDetailButtonSize.vue"; */
/* import ProductDetailPrices from "@/components/ProductDetailPrices.vue"; */
import TheCart from "@/components/TheCart.vue";

/* Functions */
import { changeTextFromElementAfterATime as change } from "@/functions/changeTextFromElementAfterATime.js";
import { _ } from "@/functions/local.js";

/* Mixins */
import { mixinIncreaseDecrease, createdMixins } from "@/functions/mixins.js";

export default {
  name: "ProductDetail",
  mixins: [mixinIncreaseDecrease, createdMixins],
  props: ["id"],
  components: {
    ProductDetailButtonSize: () =>
      import("@/components/ProductDetailButtonSize.vue"),
    /* ProductDetailButtonSize, */
    ProductDetailPrices: () => import("@/components/ProductDetailPrices.vue"),
    /* ProductDetailPrices, */
    TheCart,
    BoxContainer,
    BoxRow,
    BoxColumn,
    GetData,
  },
  data() {
    return {
      data_: {},
      amount: 1,
      cartTemp: [],
      sizeChoosed_: "",
      currentInfoSize: "escolha o tamanho:",
    };
  },

  methods: {
    infoSelectSize() {
      let infoSize = document.querySelector(".productDetail__size");
      let infoSizeChoosed = `tamanho ${this.sizeChoosed_} escolhido`;
      infoSize.innerText = infoSizeChoosed;
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
    },
  },

  computed: {
    /* Função retonando o tipo de dado que deve ser adicionado ao carrinho */
    product_to_cart() {
      return {
        id: this.data_.id,
        name: this.data_.name,
        price: this.data_.cashPrice,
        amount: this.amount,
        total: this.amount * this.data_.cashPrice,
        size: this.sizeChoosed_,
      };
    },
  },
  created() {
    /* mixin */
  },
  watch: {
    sizeChoosed_() {
      this.infoSelectSize();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables.scss";
@import "../sass/mixins.scss";
@import "../sass/box-container.scss";
@import "../sass/product-detail.scss";
@include boxContainer(960px, 30px);

.box-container {
  margin-top: 60px;
}

.header__cart {
  background-color: #353535;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
  &:hover {
    background-color: #656565;
    transform: scale($scale-factor);
    color: white;
  }
}

/* product detail container */
.productDetail__ImageAndButton {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.productDetail__image {
  flex: 1;
  margin: 0 auto;
  padding: 20px;
  img {
    border-radius: 5px;
    width: 100%;
  }
}
.productDetail__name {
  display: inline-block;
  border-bottom: solid 3px #fff;
  font-size: 1.875rem;
  margin-bottom: 30px;
  padding-bottom: 15px;
}

.productDetail__description {
  font-size: 1.25rem;
  margin-bottom: 60px;
}

.productDetail__buttons {
  flex: 0.618;
  padding: 20px;
}

.productDetail__size {
  border-radius: 4px;
  text-align: center;
  background-color: $tertiary-color;
  font-size: 1.5rem;
  padding: 20px 0;
  margin-bottom: 5px;
}

.productDetail__sizeContainer {
  border-bottom: solid 3px $secondary-color;
  padding: 30px 0;
  margin-bottom: 50px;
}

label {
  border: 3px solid $secondary-color;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  margin-right: 3px;
  margin-left: 3px;
  padding: 2px 9px;
  &:hover {
    background-color: $secondary-color;
  }
}
input:checked + label {
  background-color: $secondary-color;
}
input[type="radio"] {
  display: none;
}

.productDetail__installmentValue {
  color: $secondary-color;
  font-size: 1.75rem;
  font-weight: 600;
}

.productDetail__installmentText {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.productDetail__InstallmentPrice {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.productDetail__cashPrice {
  color: $secondary-color;
  font-size: 1.75rem;
  font-weight: 600;
}

.productDetail__previousPrice {
  font-size: 1.25rem;
  margin-bottom: 10px;
  span {
    text-decoration: line-through;
  }
}

.productDetail__InstallmentPrice {
  font-size: 1.5rem;
}

/* end product detail container */
</style>