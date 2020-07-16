 <template>
  <div class="productDetail__image">
    <img :src="`http://localhost:1337${product.photos[0].url}`" :alt="product.name" />
  </div>
</template>
 
 <script>
export default {
  name: "ProductDetailImage",
  props: ["product"]
};
</script>
 
 <style lang="scss" scoped>
@import "../sass/productDetail.scss";
</style>