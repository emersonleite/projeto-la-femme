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
@import "../src/fonts/Holland.ttf";
@import "../src/fonts/MavenPro-VariableFont_wght.ttf";
/* End Imports */

/* Variables */
/* $primary-color: #231a13; */
$primary-color: #151515;
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

@mixin buttonsAddTakeout {
  background-color: #707070;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 2.25rem;
  line-height: none;
  padding: 0;
  flex: 1;
  height: 36px;
  &:hover {
    transform: scale(1.07);
    background-color: #707070 - #101010;
    z-index: 99;
  }
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

/* title section */
.title__container {
  @include container;
  margin-top: 50px;
  margin-bottom: 50px;
}

.title__description {
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
/* end title section */

/* Cart Items */

table {
  border-spacing: 0;
}

tbody tr td {
  text-align: center;
  border-top: solid 2px #202020;
}

table tr th {
  font-size: 1.5rem;
  background-color: #4f1140;
  padding: 10px 15px;
}

.cartItems__container {
  @include container;
  color: #fff;
  flex-direction: column;
  font-family: $primary-font;
  font-size: 1.25rem;
}

.cartItems__button--remove {
  background-color: $secondary-color;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-weight: bolder;
  width: 30px;
  height: 30px;
}

.cartItems__itemName {
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
}

.cartItems__itemAmountPrice {
  text-align: right;
}

.cartItems__itemAmount {
  color: $secondary-color;
  font-weight: bolder;
  font-size: 1.5rem;
}

.cartItems__itemPrice {
  margin-left: 20px;
}

.cartItems__total {
  border-radius: 3px;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 15px 15px;
  margin-left: 20px;
  min-width: 100px;
}

.cartItems__totalCart {
  background-color: $secondary-color;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 15px;
  text-align: center;
}

.cartItems__item {
  align-items: center;
  border-top: solid 1px #202020;
  border-bottom: solid 1px #202020;
  color: #fff;
}

.cartItems__itemDecrease,
.cartItems__itemIncrease {
  cursor: pointer;
  padding: 8px;
  background-color: #707070;
  &:hover {
    transform: scale(1.07);
    background-color: #707070 - #101010;
    z-index: 99;
  }
}
/* End cart items */

/* header */
.header {
  background-color: $primary-color;
  position: sticky;
  top: 0;
  z-index: 999;
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
    span {
      cursor: pointer;
      font-family: $logo-font;
      font-size: 2.2rem;
      margin-right: 10px;
      &:hover {
        color: $secondary-color + #454545;
      }
    }
    .header__cartTotal {
      border-left: solid 3px #fff;
      display: inline-block;
      font-family: $primary-font;
      font-size: 1.25rem;
      font-weight: 500;
      margin-left: 25px;
      min-width: 145px;
      text-align: right;
    }
  }
}
.header__container {
  @include container;
}
/* end header */

/* My cart */

/* end My cart */

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

.product {
  width: 25.33%;
  font-family: $primary-font;
  font-weight: bold;
  margin-bottom: 70px;
  &:nth-child(3n + 2) {
    margin-left: 12%;
    margin-right: 12%;
  }
}
.product__image {
  display: block;
  max-width: 100%;
  border-top-left-radius: 30px;
}
.product__name {
  color: #fff;
  font-size: 1.5rem;
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
    @include buttonsAddTakeout;
  }

  .product__button--add {
    border-left: solid 1.5px #fff;
  }

  .product__button--takeout {
    border-right: solid 1.5px #fff;
  }

  .product__button--takeout-disabled {
    background-color: #303030;
    &:hover {
      background-color: #303030;
      transform: none;
    }
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
  &:disabled {
    background-color: #707070;
    transform: none;
    visibility: hidden;
  }
}

/* end product */

/* product detail container */

.productDetail__section {
  color: #fff;
  font-family: $primary-font;
  margin-top: 50px;

  .productDetail__container {
    @include container;
    .productDetail__image {
      flex: 1;
      margin: 0 auto;
      padding: 20px;
      img {
        width: 100%;
      }
    }
    .productDetail__name {
      display: inline-block;
      border-bottom: solid 3px #fff;
      font-size: 1.875rem;
      margin-bottom: 30px;
      padding-bottom: 15px;
    }

    .productDetail__description {
      font-size: 1.25rem;
      margin-bottom: 60px;
    }

    .productDetail__buttons {
      flex: 0.618;
      padding: 20px;
      .productDetail__size {
        text-align: center;
        background-color: #4f1140;
        font-size: 1.5rem;
        padding: 25px 0;
        margin-bottom: 40px;
      }
    }
  }
}

/* end product detail container */

/* footer */
.footer {
  background-color: $secondary-color;
  border-top: solid 5px #ad9482;
}
.footer__container {
  @include container;
  color: #fff;
  font-family: $primary-font;
  align-items: center;
  .footer__logo {
    flex: 1;
    font-size: 2.5rem;
    font-family: $logo-font;
    padding: 11px;
    text-align: center;
  }
  .footer__copyright {
    font-weight: bold;
    font-size: 1.25rem;
    flex: 1;
  }
  .footer__social {
    flex: 1;
    text-align: right;
  }
}
/* end footer */
</style>
