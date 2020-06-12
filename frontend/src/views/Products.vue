 <template>
  <main>
    <!-- NOTA*** Utilização do nome da categoria retornada como título da seção -->
    <div class="product__container">
      <h1 class="product__category">{{returnedCategory}}</h1>
    </div>
    <TheProductList :products="products" />
    <!-- NOTA*** - ACIMA passando props para componente filho -->
  </main>
</template>
 
 <script>
import TheProductList from "@/components/TheProductList.vue";

import { api } from "@/services.js";
export default {
  name: "Products",
  components: {
    TheProductList
  },
  /* NOTA***  -  a props 'categorie' deve ser registrada na view de destino que é chamada através da rota
   /products/:categorie */
  props: ["category"],
  data() {
    return {
      title: "La Femme",
      products: {}
    };
  },
  watch: {
    returnedCategory() {
      /* NOTA*** Utilização do nome da categoria retornada como título da página  */
      /* console.log(this.$route.query); */
      /* console.log(this.$route.fullPath); */
      document.title = `${this.title} - ${this.returnedCategory}`;
      this.getProducts();
    }
  },
  methods: {
    getProducts() {
      api
        .get("http://localhost:1337" + this.$route.fullPath)
        .then(response => (this.products = response));
    }
  },
  computed: {
    /* NOTA*** Retornando o parametro passado em 'this.$route.query["category.category"]
     para poder ser utilizado em na view Products. A variável fica com o nome returnedCategorie  */
    returnedCategory() {
      return this.$route.query["category.category"];
    }
  },
  created() {
    /* NOTA*** Mudando título da página na criação do elemento */
    document.title = this.title;
    this.getProducts();
  }
};
</script>
 
 <style lang="scss">
</style>