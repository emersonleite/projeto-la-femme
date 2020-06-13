<template>
  <header class="header">
    <div class="header__container">
      <router-link tag="h1" to="/" class="header__logo">La Femme</router-link>
      <p style="color: #fff;cursor: pointer;" @click="limpar">Limpar</p>
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
  },
  methods: {
    limpar() {
      window.localStorage.clear();
      window.localStorage.removeItem("cart");
    }
  }
};
</script>
<style>
</style>