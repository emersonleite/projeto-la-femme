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
              <span class="cartItems__itemName">
                <router-link :to="{name: 'product', params:{id:item.id}}">{{item.name}}</router-link>
              </span>
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
    <button type="submit" @click="requestProcess">click</button>
  </div>
</template>
 
 <script>
/* Custom components */
import TitleSection from "@/components/TitleSection.vue";

/* Mixins */
import { mixinIncreaseDecrease, createdMixins } from "@/functions/mixins.js";

/* Mutation, State, Getters */
import { mapMutations, mapState, mapGetters } from "vuex";

/* Request process */
import generateSession from "@/utils/request_process/generateSession.js";

export default {
  name: "CartItems",
  components: {
    TitleSection,
  },
  mixins: [mixinIncreaseDecrease, createdMixins],
  data() {
    return {
      title: "Meu carrinho",
      session: "",
    };
  },
  methods: {
    ...mapMutations(["UPDATE_CART"]),
    async requestProcess() {
      const data = await generateSession();
      this.session = data.replace(/<[^>]+>|\\n+/g, "");
      console.log(this.session);
    },
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalCart"]),
  },
};
</script>
 
 <style>
</style>