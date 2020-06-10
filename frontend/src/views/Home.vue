 <template>
  <main>
    <!-- NOTA*** Utilização do nome da categoria retornada como título da seção -->
    <div class="product__container">
      <h1 class="product__category">{{title}}</h1>
    </div>
    <div class="product__container">
      <div v-for="product in products" :key="product.id">
        <the-product
          :photos="product.photos"
          :name="product.name"
          :price="product.price"
          :description="product.description"
        />
      </div>
    </div>
    <!-- NOTA*** - ACIMA passando props para componente filho -->
  </main>
</template>
 
 <script>
import TheProduct from "@/components/TheProduct.vue";
import { api } from "@/services.js";
export default {
  name: "Home",
  components: {
    TheProduct
  },
  data() {
    return {
      title: "La Femme",
      products: {}
    };
  },
  watch: {},
  methods: {
    getProducts() {
      api
        .get("http://localhost:1337/products")
        .then(response => (this.products = response));
    }
  },
  computed: {},
  created() {
    /* NOTA*** Mudando título da página na criação do elemento */
    document.title = this.title;
    this.getProducts();
  }
};
</script>
 
 <style lang="scss">
</style>