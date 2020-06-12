<template>
  <div id="app">
    <TheHeader />
    <TheNavigation />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheNavigation
  }
};
</script>

<style lang="scss">
/* Imports */
@import "../src/fonts/Holland.ttf";
@import "../src/fonts/MavenPro-VariableFont_wght.ttf";
/* End Imports */

/* Variables */
$primary-color: #231a13;
/* $primary-color: #151515; */
$secondary-color: #911e75;
$logo-font: "Holland";
$primary-font: "Maven Pro";
/* Variables */

/* mixins */
@mixin container {
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
}

@mixin button {
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: inline;
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
}
/* end mixins */

/* reset */
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: currentColor;
}

body {
  background-color: $primary-color;
}
/* end reset */

/* header */
.header {
  background-color: $primary-color;
  .header__logo {
    color: #ffffff;
    cursor: pointer;
    font-family: $logo-font;
    font-size: 3.125rem;
    flex: 1;
    padding: 7px 0;
  }
  .header__cart {
    color: #fff;
    margin: auto 0;
    font-size: 1rem;
    font-family: $primary-font;
  }
}
.header__container {
  @include container;
}
/* end header */

/* navigation */
.navigation {
  background-color: $secondary-color;
  /* min-height: 150px; */
  border-bottom: solid 5px #ad9482;
}

.navigation__container {
  @include container;
  .navigation__items {
    flex: 1;
    color: #fff;
    font-family: $primary-font;
    font-size: 1.25rem;
    font-weight: bold;
    padding: 17px 0;
    text-align: center;
    a {
      display: block;
      border-right: solid 3px #fff;
    }
  }
  .navigation__buttons {
    flex: 1.35;
    margin: auto 0;
    text-align: right;
    .navigation__button--login {
      @include button;
      background-color: $primary-color;
      margin-left: 15px;
    }
    .navigation__button--signup {
      @include button;
      background-color: #4f1140;
    }
  }
}
/* end navigation */

/* product */
.product__container {
  @include container;
}
.product__category {
  border-top: solid 5px #fff;
  border-bottom: solid 5px #fff;
  color: #fff;
  display: inline-block;
  font-size: 2.5rem;
  font-family: $primary-font;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0 auto;
}

.product__container {
  @include container;
  margin-top: 50px;
  /* border: solid 1px white; */
}

.product {
  width: 25.33%;
  font-family: $primary-font;
  font-weight: bold;
  margin-bottom: 70px;
  &:nth-child(3n + 2) {
    margin-left: 12%;
    margin-right: 12%;
  }
  .product__image {
    display: block;
    max-width: 100%;
    border-top-left-radius: 30px;
  }
  .product__name {
    color: #fff;
    font-size: 1.875rem;
    padding: 15px;
    text-align: center;
  }
  .product__button {
    align-items: center;
    color: #fff;
    display: flex;
    justify-content: center;
    box-shadow: 2px 2px 1px rgba($color: #000000, $alpha: 0.3);
    z-index: 9;
    .product__button--add,
    .product__button--takeout {
      background-color: #707070;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 2.25rem;
      line-height: none;
      padding: 0;
      &:hover {
        transform: scale(1.07);
        background-color: #707070 - #101010;
        z-index: 99;
      }
    }

    .product__button--add {
      border-left: solid 1.5px #fff;
    }

    .product__button--takeout {
      border-right: solid 1.5px #fff;
    }

    .product__button--add,
    .product__button--takeout {
      flex: 1;
      height: 36px;
    }
    .product__price {
      background-color: $secondary-color;
      border: none;
      font-size: 1.25rem;
      flex: 2;
      padding: 6px;
      text-align: center;
    }
  }

  .product__amount {
    border: none;
    font-size: 1.25rem;
    font-weight: bold;
    height: 36px;
    width: 20%;
    text-align: center;
  }
  .product__button--cart {
    background-color: $secondary-color;
    border: none;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: #fff;
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 15px;
    width: 100%;
    z-index: 1;
    &:hover {
      background-color: $secondary-color - #101010;
      transform: scale(1.02);
    }
  }
}

/* end product */
</style>
