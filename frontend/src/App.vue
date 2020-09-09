<template>
  <div id="app">
    <TheHeader />
    <TheNavigation />
    <!-- Search -->
    <!-- <div>
      <InputField _type="search" v-model="valor" :_model.sync="valor" />
      <p style="color: white;">{{valor}}</p>
    </div>-->
    <modal-wrapper :_hook="showLoginScreen" :_closingFunction="SHOW_LOGIN_SCREEN">
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
import addExternalScriptToPage from "@/utils/addExternalScriptToPage.js";
import { mapState, mapMutations } from "vuex";
/* import InputField from "@/components/input_fields/InputField.vue"; */

export default {
  name: "App",
  data() {
    return {
      valor: "",
    };
  },
  components: {
    TheHeader,
    TheNavigation,
    TheFooter,
    PageLogIn,
    ModalWrapper,
    /* InputField, */
  },

  computed: {
    ...mapState(["showLoginScreen"]),
  },
  methods: {
    ...mapMutations(["SHOW_LOGIN_SCREEN"]),
  },
  mounted() {
    addExternalScriptToPage(
      "script",
      "src",
      "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js"
    );
    /* Importing external lib for parsing xml to json */
    addExternalScriptToPage(
      "script",
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/fast-xml-parser/3.17.1/parser.js"
    );
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
