 <template>
  <div>
    <h3 v-if="product.sizes.length !==0 " class="productDetail__size">escolha o tamanho:</h3>
    <div style="display:flex; flex-wrap: wrap;" class="productDetail__sizeContainer">
      <span @click="sizeChoosedHandler($event)" v-for="(size) in product.sizes" :key="size.id">
        <input
          v-model="sizeChoosed"
          :id="`${size.Number}`"
          :value="size.Number"
          type="radio"
          name="radio"
        />
        <label :for="`${size.Number}`">{{size.Number}}</label>
      </span>
    </div>
  </div>
</template>
 
 <script>
export default {
  name: "productDetailButton",
  props: ["product"],
  data() {
    return {
      sizeChoosed: "",
    };
  },
  methods: {
    sizeChoosedHandler(event) {
      /* console.log(event.target.value); */
      this.$emit("update:sizeChoosed__", event.target.value);
    },
  },
};
</script>
 
 <style lang="scss" scoped>
@import "../sass/product-detail.scss";
</style>