 <template>
  <get-data
    class="main"
    _url="http://localhost:1337/categories"
    _option="axios"
    :data__.sync="data_"
  >
    <nav class="navigation">
      <ul class="navigation__container">
        <router-link
          :to=" { name: 'products', query: {'category.category':item.category} }"
          tag="li"
          class="navigation__items"
          v-for="item in data_"
          :key="item.id"
        >
          <a href>{{item.category}}</a>
        </router-link>
        <li class="navigation__buttons">
          <router-link
            v-if="!loggedUser"
            tag="button"
            :to="{ path: '/signup' }"
            class="navigation__button--signup"
          >Cadastrar</router-link>
          <button
            v-if="!loggedUser"
            tag="button"
            @click="update_login"
            class="navigation__button--login"
          >Log in</button>
          <div class="navigation__user" v-else style="color: white;">
            <p>Olá, {{loggedUser}}</p>
          </div>
          <common-button
            v-if="loggedUser"
            _class="navigation__button--logout"
            :_handleClick="logout"
          >sair</common-button>
        </li>
      </ul>
    </nav>
  </get-data>
</template>
 
 <script>
/* Structure components */
import CommonButton from "@/components/buttons/CommonButton.vue";
import GetData from "@/components/get_data/GetData.vue";

/* Mutations */
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      data_: {},
      navigation_items: [],
    };
  },
  components: {
    GetData,
    CommonButton,
  },
  methods: {
    ...mapMutations(["SHOW_LOGIN_SCREEN"]),
    ...mapActions(["LOGOUT_PROCESS"]),
    update_login() {
      this.SHOW_LOGIN_SCREEN();
    },
    logout() {
      this.LOGOUT_PROCESS();
    },
  },
  computed: {
    ...mapState(["loggedUser", "roleUser"]),
  },
};
</script>
 
 <style lang="scss">
.navigation__button--logout {
  @include miniButtoms;
  background-color: $primary-color;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  margin-left: 50px;
  padding: 8px;
  &:hover {
    background-color: $tertiary-color;
    transform: scale(1.07);
  }
}
</style>