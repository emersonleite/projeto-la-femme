 <template>
  <main>
    <get-data class="main" _url="http://localhost:1337/products" :data__.sync="data_">
      <TitleSection :title="title" />
      <ProductList :products="data_" />
    </get-data>
  </main>
</template>
 
 <script>
import GetData from "@/components/get_data/GetData.vue";
import ProductList from "@/components/ProductList.vue";
import TitleSection from "@/components/TitleSection.vue";

export default {
  name: "Home",
  components: {
    ProductList,
    TitleSection,
    GetData,
  },
  data() {
    return {
      title: "La Femme",
      data_: {},
    };
  },
  created() {
    document.title = this.title;
  },
};
</script>
<style lang="scss" scoped>
@import "../sass/main.scss";
</style>