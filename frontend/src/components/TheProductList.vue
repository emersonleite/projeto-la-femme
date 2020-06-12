 <template>
  <ul class="product__container">
    <TheProductOne :product="product" v-for="product in products" :key="product.id" />
  </ul>
</template>
 
 <script>
import TheProductOne from "@/components/TheProductOne.vue";
export default {
  data() {
    return {};
  },
  components: {
    TheProductOne
  },
  props: ["products"]
  /* props: ["name", "description", "price", "photos"] */
};
</script>
 
 <style>
</style>