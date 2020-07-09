 <template>
  <div>
    <h2 class="productDetail__name">{{product.name}}</h2>
    <p v-if="product.previousPrice" class="productDetail__previousPrice">
      De
      <span>{{product.previousPrice |toCurrencyBRL}}</span>
    </p>
    <p
      v-if="product.installmentPrice"
      class="productDetail__InstallmentPrice"
    >por {{product.installmentPrice |toCurrencyBRL}}</p>
    <p class="productDetail__installmentText" v-if="product.installment">
      em até {{product.installment}}x de
      <span
        class="productDetail__installmentValue"
      >{{product.installmentPrice/product.installment |toCurrencyBRL}}</span> no cartão ou
    </p>
    <p class="productDetail__installmentText">
      <span class="productDetail__cashPrice">{{product.cashPrice|toCurrencyBRL}}</span> à vista
    </p>
    <p class="productDetail__description">{{product.description}}</p>
  </div>
</template>
 
 <script>
export default {
  name: "productDetailPrices",
  props: ["product"]
};
</script>
