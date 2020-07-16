 <template>
  <box-container _class="box-container">
    <box-row _class="box-row">
      <box-column class="box-item-4" v-for="product in products" :key="product.id">
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
      </box-column>
    </box-row>
  </box-container>
</template>
 
 <script>
import BoxContainer from "@/components/structure/BoxContainer.vue";
import BoxRow from "@/components/structure/BoxRow.vue";
import BoxColumn from "@/components/structure/BoxColumn.vue";
export default {
  data() {
    return {};
  },
  components: {
    BoxContainer,
    BoxRow,
    BoxColumn
  },
  props: ["products"]
};
</script>
 
  <style lang="scss" scoped>
@import "../sass/variables.scss";
@import "../sass/boxContainer.scss";
@include boxContainer(960px, 50px);

* {
  font-family: $primary-font;
}

.box-item-4 {
  margin-bottom: 70px;
}
.product__image {
  display: block;
  max-width: 100%;
  border-radius: 3px;
}

.product__priceContainer {
  color: #ffffff;
  display: flex;
}

.product__name {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 15px;
  text-align: center;
}

.product__cashPrice {
  border-right: 2px solid #fff;
  flex: 1;
  line-height: 1.3;
  padding-right: 15px;
  text-align: center;
  font-weight: 700;
  span {
    color: #911e75;
    font-size: 1.25rem;
  }
}

.product__installmentPrice {
  flex: 1;
  line-height: 1.3;
  padding-left: 15px;
  font-weight: 700;
  span {
    color: #911e75;
    font-size: 1.25rem;
  }
}
</style>