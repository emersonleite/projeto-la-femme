 <template>
  <ul class="product__container">
    <TheProductOne v-for="product in products" :product="product" :key="product.id" />
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