 <template>
  <!-- Getting data from api - get-data component -->
  <get-data
    class="main"
    :_url="`http://localhost:1337${this.$route.fullPath}`"
    :data__.sync="data_"
  >
    <TitleSection :title="returnedCategory" />
    <ProductList :products="data_" />
  </get-data>
</template>
 
 <script>
/* Structure components */
import GetData from "@/components/get_data/GetData.vue";

/* Custom components */
import TitleSection from "@/components/TitleSection.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Products",
  components: {
    ProductList,
    TitleSection,
    GetData,
  },
  props: ["category"],
  data() {
    return {
      title: "La Femme",
      data_: {},
    };
  },
  watch: {
    returnedCategory() {
      document.title = `${this.title} - ${this.returnedCategory}`;
    },
  },

  computed: {
    /* NOTA*** Retornando o parametro passado em 'this.$route.query["category.category"]
     para poder ser utilizado em na view Products. A variável fica com o nome returnedCategorie  */
    returnedCategory() {
      return this.$route.query["category.category"];
    },
  },

  created() {
    /* NOTA*** Mudando título da página na criação do elemento */
    document.title = this.title;
    /* this.getProducts(); */
  },
};
</script>
 
 <style lang="scss" scoped>
@import "../sass/main.scss";
</style>