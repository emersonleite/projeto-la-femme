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
            tag="button"
            :to="{ path: '/signup' }"
            class="navigation__button--signup"
          >Cadastrar</router-link>
          <button tag="button" @click="update_login" class="navigation__button--login">Log in</button>
        </li>
      </ul>
    </nav>
  </get-data>
</template>
 
 <script>
/* Structure components */
import GetData from "@/components/get_data/GetData.vue";

/* Mutations */
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      data_: {},
      navigation_items: [],
    };
  },
  components: {
    GetData,
  },
  methods: {
    ...mapMutations(["UPDATE_LOGIN"]),
    update_login() {
      this.UPDATE_LOGIN();
    },
  },
};
</script>
 
 <style>
</style>