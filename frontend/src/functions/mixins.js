import { _ } from "@/functions/local.js";
export const mixinIncreaseDecrease = {
  methods: {
    /* Função para retirada de item no carrinho */
    removeFromCart(theCart, indexOfItemInArray) {
      theCart.splice(indexOfItemInArray, 1);
      this.UPDATE_CART(theCart);
      window.localStorage["cart"] = _.to(theCart);
    },
    /* Função incremento e atualização do local storage */
    increaseAmount(item, cart) {
      ++item.amount;
      this.total(item);
      this.updateCartAndLocalStorage(cart);
    },
    /* Função decremento e atualização do local storage */
    decreaseAmount(itemOfTheCart, theCart, indexOfItemInArray) {
      --itemOfTheCart.amount;
      if (itemOfTheCart.amount === 0)
        this.removeFromCart(theCart, indexOfItemInArray);
      this.total(itemOfTheCart);
      this.updateCartAndLocalStorage(theCart);
    },
    /* Função atualiação do carrinho */
    updateCartAndLocalStorage(theCart) {
      this.UPDATE_CART(theCart);
      window.localStorage["cart"] = _.to(theCart);
    },
    total(itemOfTheCart) {
      return (itemOfTheCart.total = itemOfTheCart.price * itemOfTheCart.amount);
    },
  },
};
