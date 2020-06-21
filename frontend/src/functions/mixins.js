import { _ } from "@/functions/local.js";
export const mixinIncreaseDecrease = {
  methods: {
    increaseAmount(item, cart) {
      ++item.amount;
      this.total(item);
      this.updateCartAndLocalStorage(cart);
    },
    /* Função decremento e atalização do local storage */
    decreaseAmount(item, cart) {
      --item.amount;
      this.total(item);
      this.updateCartAndLocalStorage(cart);
    },
    /* Função atualiação do carrinho */
    updateCartAndLocalStorage(cart) {
      this.ADD_PRODUCT_TO_CART(cart);
      window.localStorage["cart"] = _.to(cart);
    },
    total(item) {
      console.log(item);
      return (item.total = item.price * item.amount);
    },
  },
};
