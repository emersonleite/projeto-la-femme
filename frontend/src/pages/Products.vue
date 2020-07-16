 <template>
  <get-data class="main" :url="`http://localhost:1337${this.$route.fullPath}`" :data__.sync="data_">
    <TitleSection :title="returnedCategory" />
    <ProductList :products="data_" />
  </get-data>
</template>
 
 <script>
import GetData from "@/components/get_data/GetData.vue";
import TitleSection from "@/components/TitleSection.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Products",
  components: {
    ProductList,
    TitleSection,
    GetData
  },
  /* NOTA***  -  a props 'categorie' deve ser registrada na view de destino que é chamada através da rota
   /products/:categorie */
  props: ["category"],
  data() {
    return {
      title: "La Femme",
      data_: {},
      url: "",
      full: this.$route.fullPath
    };
  },
  watch: {
    returnedCategory() {
      /* NOTA*** Utilização do nome da categoria retornada como título da página  */
      /* console.log(this.$route.query); */
      /* console.log(this.$route.fullPath); */
      document.title = `${this.title} - ${this.returnedCategory}`;
      /*  this.getProducts(); */
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
    /* this.getProducts(); */
  }
};
</script>
 
 <style lang="scss" scoped>
@import "../sass/main.scss";
</style>