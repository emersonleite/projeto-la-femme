 <template>
  <main>
    <!-- NOTA*** Utilização do nome da categoria retornada como título da seção -->
    <get-data class="main" :url="`http://localhost:1337/products`" :data__.sync="data_">
      <TitleSection :title="title" />
      <ProductList :products="data_" />
      <!-- NOTA*** - ACIMA passando props para componente filho -->
    </get-data>
  </main>
</template>
 
 <script>
import GetData from "@/components/get_data/GetData.vue";
import ProductList from "@/components/ProductList.vue";
import TitleSection from "@/components/TitleSection.vue";
/* import { api } from "@/services.js"; */
export default {
  name: "Home",
  components: {
    ProductList,
    TitleSection,
    GetData
  },
  data() {
    return {
      title: "La Femme",
      data_: {}
    };
  },
  created() {
    /* NOTA*** Mudando título da página na criação do elemento */
    document.title = this.title;
    /* this.getProducts(); */
  }
};
</script>
<style lang="scss" scoped>
@import "../sass/main.scss";
</style>