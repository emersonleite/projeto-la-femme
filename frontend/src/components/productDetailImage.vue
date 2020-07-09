 <template>
  <div class="productDetail__image">
    <img :src="`http://localhost:1337${product.photos[0].url}`" :alt="product.name" />
  </div>
</template>
 
 <script>
export default {
  name: "productDetailImage",
  props: ["product"]
};
</script>
 
 <style>
</style>