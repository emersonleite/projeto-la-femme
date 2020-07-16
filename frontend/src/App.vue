<template>
  <div id="app">
    <TheHeader />
    <TheNavigation />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheNavigation,
    TheFooter
  }
};
</script>

<style lang="scss">
/* Imports */
@import "./sass/boxContainer.scss";
@import "../src/fonts/Holland.ttf";
@import "../src/fonts/MavenPro-VariableFont_wght.ttf";
@import "../src/fonts/Holland.ttf";
@import "../src/fonts/MavenPro-VariableFont_wght.ttf";
@import "./sass/variables.scss";
@import "./sass/reset.scss";
@import "./sass/mixins.scss";
@import "./sass/titleSection.scss";
@import "./sass/cartItems.scss";
@import "./sass/header.scss";
@import "./sass/navigation.scss";
@import "./sass/product.scss";
/* @import "./sass/productDetail.scss"; */
@import "./sass/footer.scss";
/* End Imports */
</style>
