 <template>
  <div style="min-height:100vh">
    <TitleSection :title="title" />

    <div class="cartItems__container">
      <table class="cartItems__table">
        <thead>
          <tr>
            <th>Remover</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>(+-)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="cartItems__totalCart">{{totalCart | toCurrencyBRL}}</td>
          </tr>
        </tfoot>
        <tbody>
          <tr class="cartItems__item" v-for="(item, index) in cart" :key="`${index}${item.id}`">
            <td>
              <button class="cartItems__button--remove" @click="removeFromCart(cart, index)">X</button>
            </td>
            <td>
              <span class="cartItems__itemName">{{item.name}}</span>
            </td>
            <td>
              <span class="cartItems__itemAmount">{{item.amount}}x</span>
            </td>
            <td>
              <span class="cartItems__itemPrice">{{item.price | toCurrencyBRL}}</span>
            </td>
            <td>
              <button
                :disabled="item.amount < 1"
                class="cartItems__itemDecrease"
                @click="decreaseAmount(item, cart, index)"
              >-</button>
              <button class="cartItems__itemIncrease" @click="increaseAmount(item, cart)">+</button>
            </td>
            <td>
              <span class="cartItems__total">{{total(item)|toCurrencyBRL}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
 
 <script>
import { mapMutations, mapState, mapGetters } from "vuex";
import TitleSection from "@/components/TitleSection.vue";
import { _ } from "@/functions/local.js";
import { mixinIncreaseDecrease } from "@/functions/mixins.js";
export default {
  name: "CartItems",
  components: {
    TitleSection
  },
  mixins: [mixinIncreaseDecrease],
  data() {
    return {
      title: "Meu carrinho"
    };
  },
  methods: {
    ...mapMutations(["UPDATE_CART"])

    /* -----------------------MIXIN----------------------------- */
    /* from mixinIncreaseDecrease - mixins.js */
    /* -----------------------END_MIXIN----------------------------- */
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalCart"])
  },
  watch: {},
  created() {
    if (window.localStorage.cart) {
      let cart = _.from("cart");
      this.UPDATE_CART(cart);
    }
  }
};
</script>
 
 <style>
</style>