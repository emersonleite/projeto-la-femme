 <template>
  <li class="product">
    <router-link :to="{name: 'product', params:{id:product.id}}">
      <img
        class="product__image"
        :src="`http://localhost:1337${product.photos[0].url}`"
        :alt="product.name"
      />
      <div style="width: 100% ">
        <p class="product__name">{{product.name}}</p>
      </div>
    </router-link>
    <div class="product__priceContainer">
      <p class="product__cashPrice">
        <span>{{product.cashPrice | toCurrencyBRL}}</span>
        <br />à vista
      </p>
      <p class="product__installmentPrice">
        ou {{product.installment}}x de
        <span>{{product.installmentPrice/product.installment | toCurrencyBRL}}</span>
      </p>
    </div>
  </li>
</template>
 
 <script>
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
};
</script>
 
 <style lang="scss">
.product__priceContainer {
  color: #ffffff;
  display: flex;
}

.product__cashPrice {
  border-right: 2px solid #fff;
  flex: 1;
  line-height: 1.3;
  padding-right: 15px;
  text-align: center;
  span {
    color: #911e75;
    font-size: 1.25rem;
  }
}

.product__installmentPrice {
  flex: 1;
  line-height: 1.3;
  padding-left: 15px;
  span {
    color: #911e75;
    font-size: 1.25rem;
  }
}
</style>