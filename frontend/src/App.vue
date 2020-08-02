<template>
  <div id="app">
    <TheHeader />
    <TheNavigation />
    <!-- <modal-wrapper :_hook="showLoginScreen" :_closeFunction="UPDATE_LOGIN"> -->
    <modal-wrapper :_hook="showLoginScreen">
      <!-- <modal-wrapper :_hook="true"> -->
      <PageLogIn />
    </modal-wrapper>
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
import ModalWrapper from "@/components/modal/ModalWrapper.vue";
import PageLogIn from "@/pages/PageLogIn.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    TheHeader,
    TheNavigation,
    TheFooter,
    PageLogIn,
    ModalWrapper,
  },
  computed: {
    ...mapState(["showLoginScreen"]),
  },
  methods: {
    ...mapMutations(["UPDATE_LOGIN"]),
  },
};
</script>

<style lang="scss">
/* Imports */
@import "./sass/variables.scss";
@import "./sass/mixins.scss";
@import "./sass/box-container.scss";
@import "../src/fonts/Holland.ttf";
@import "../src/fonts/MavenPro-VariableFont_wght.ttf";
@import "../src/fonts/Holland.ttf";
@import "../src/fonts/MavenPro-VariableFont_wght.ttf";
@import "./sass/reset.scss";
@import "./sass/title-section.scss";
@import "./sass/cart-items.scss";
@import "./sass/header.scss";
@import "./sass/navigation.scss";
@import "./sass/product.scss";
/* @import "./sass/product-detail.scss"; */
@import "./sass/footer.scss";
/* End Imports */
</style>
