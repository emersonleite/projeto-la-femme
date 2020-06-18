 <template>
  <div class="product__container">
    <div class="product" v-for="product in products" :key="product.id">
      <the-product
        :photos="product.photos"
        :name="product.name"
        :price="product.price"
        :description="product.description"
      />
    </div>
  </div>
</template>
 
 <script>
export default {
  props: ["name", "description", "price", "photos", "product"]
};
</script>
 
 <style>
</style>