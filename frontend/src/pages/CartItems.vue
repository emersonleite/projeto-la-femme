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
            <td class="cartItems__totalCartText">Total do pedido</td>
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
          <tr class="cartItems__item spacing">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <button type="submit" @click="requestProcess">click</button>
    <a style="color: white;" v-if="linkBoleto" :href="linkBoleto">Clique para ver seu boleto</a>
    <iframe :src="linkBoleto" frameborder="0"></iframe>

    <div v-if="transaction">{{transaction.transaction}}</div>
    <div>{{cart}}</div>
  </div>
</template>
 
 <script>
import axios from "axios";

import { createArrayFromObjectSpecificKeys as create } from "@/functions/createArrayFromObjectSpecificKeys.js";

/* Custom components */
import TitleSection from "@/components/TitleSection.vue";

/* Mixins */
import { mixinIncreaseDecrease, createdMixins } from "@/functions/mixins.js";

/* Mutation, State, Getters */
import { mapMutations, mapState, mapGetters } from "vuex";

/* Request process */
import getSession from "@/utils/request_process/getSession.js";
import getHash from "@/utils/request_process/getHash.js";
import getBoleto from "@/utils/request_process/getBoleto.js";
import getRequestNumber from "@/utils/request_process/getRequestNumber.js";

import { checkoutData } from "@/utils/request_process/checkoutData.js";

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
      linkBoleto: "",
      transaction: "",
      request_data: {
        ...checkoutData.defaultData(),
        //Name, cpf, ddd, phone number, email
        ...checkoutData.senderData(
          "Jose Batista Leite",
          "22111944785",
          "11",
          "56273440",
          "c81948782719752361657@sandbox.pagseguro.com.br"
        ),
        ...checkoutData.shippingData(
          "Av.Brig.FariaLima",
          "1384",
          "5oandar",
          "JardimPaulistano",
          "01452002",
          "SaoPaulo",
          "SP",
          "BRA",
          "1",
          "1.00"
        ),
        //id, quantify, description, amount
        ...checkoutData.itemData("01", "1", "Notebook Prata", "2500.00"),
        reference: "REF1234",
      },
      request_data_for_bd: {
        code: "010011999",
        reference: "010011999",
        date: "2020/08/22",
        paymentLink: "https://www.emersonleite.dev",
        cliente_id: "01",
        items_ids: "01/02/03",
        items_description: "Teste de descrição",
        items_quantities: "01/02/03",
        amount: "3000",
        user: {
          id: 1,
        },
      },
    };
  },
  methods: {
    ...mapMutations(["UPDATE_CART"]),
    atribuicao() {
      /* console.log(this.cart);
      const arrayItems = ["id", "name", "amount"];
      let formattedItems = arrayItems.map(function (item) {
        this.cart.map((itemFromCart) => {
          return itemFromCart[item];
        });
      });
      console.log(formattedItems); */

      const ids = create(this.cart, "id");
      const idsFormated = String(ids).split(",").join(" / ");
      console.log(idsFormated);
      return (this.request_data.itemId1 = idsFormated);
    },

    /* Request process */
    async requestProcess() {
      /* Request number */
      this.request_data.reference = await getRequestNumber();

      /* Session number */
      this.session = await getSession();
      console.log(this.session);

      /* Hash */
      await getHash();
      await console.log("hash => ", window.hash1);

      this.atribuicao();

      /* Request number */
      await getRequestNumber();

      /* Transaction data */
      this.transaction = await getBoleto(this.request_data);
      this.transaction = await window.parser.parse(this.transaction);
      console.log(this.transaction);
      console.log(this.transaction.transaction.paymentLink);

      /* Link boleto */
      this.linkBoleto = this.transaction.transaction.paymentLink;

      /* Saving the request  */
      await this.savingRequest();
    },

    /* Saving the request at bd */
    async savingRequest() {
      await console.log("deu");
      try {
        const response = await axios.post(
          "http://localhost:1337/requests",
          this.request_data_for_bd
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalCart"]),
  },
  watch: {},
  created() {},
};
</script>
 
 <style lang="scss">
.cartItems__item.spacing {
  border-top: none;
  height: 40px;
}

.cartItems__totalCartText {
  background-color: #fff;
  color: #be2799;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>