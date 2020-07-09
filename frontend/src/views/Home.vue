 <template>
  <main>
    <!-- NOTA*** Utilização do nome da categoria retornada como título da seção -->
    <TitleSection :title="title" />
    <TheProductList :products="products" />
    <!-- NOTA*** - ACIMA passando props para componente filho -->
  </main>
</template>
 
 <script>
import TheProductList from "@/components/TheProductList.vue";
import TitleSection from "@/components/TitleSection.vue";
import { api } from "@/services.js";
export default {
  name: "Home",
  components: {
    TheProductList,
    TitleSection
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
      api.get("http://localhost:1337/products").then(response => {
        /* console.log(response); */
        this.products = response;
      });
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