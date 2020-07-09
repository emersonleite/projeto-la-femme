<template>
  <header class="header">
    <div class="header__container">
      <router-link tag="h1" to="/" class="header__logo">La Femme</router-link>
      <TheCart />
    </div>
  </header>
</template>
<script>
import TheCart from "@/components/TheCart.vue";
export default {
  name: "TheHeader",
  components: {
    TheCart
  }
};
</script>
<style>
</style>