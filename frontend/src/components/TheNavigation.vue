 <template>
  <get-data class="main" url="http://localhost:1337/categories" :data__.sync="data_">
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
          <button class="navigation__button--login">Log in</button>
        </li>
      </ul>
    </nav>
  </get-data>
</template>
 
 <script>
/* Structure components */
import GetData from "@/components/get_data/GetData.vue";

export default {
  data() {
    return {
      data_: {},
      navigation_items: []
    };
  },
  components: {
    GetData
  }
};
</script>
 
 <style>
</style>