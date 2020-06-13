 <template>
  <nav class="navigation">
    <ul class="navigation__container">
      <!-- NOTA*** - acesso abaixo (propriedade :to) para a rota /products/:categorie, ou seja a rota 
      com o nome 'products', devidamente registrado no arquivo index.js, presente na 
      pasta 'router'
      :to=" { name: 'products', params: {category: item.category} }"
      
      -->
      <router-link
        :to=" { name: 'products', query: {'category.category':item.category} }"
        tag="li"
        class="navigation__items"
        v-for="item in navigation_items"
        :key="item.id"
      >
        <a href>{{item.category}}</a>
      </router-link>
      <div class="navigation__buttons">
        <button class="navigation__button--signup">Sign up</button>
        <button class="navigation__button--login">Log in</button>
      </div>
    </ul>
  </nav>
</template>
 
 <script>
export default {
  data() {
    return {
      navigation_items: []
    };
  },
  methods: {
    getItemsNavigation() {
      fetch("http://localhost:1337/categories")
        .then(response => response.json())
        .then(response => {
          this.navigation_items = response;
          /* console.log(this.navigation_items); */
        });
    }
  },
  created() {
    this.getItemsNavigation();
  }
};
</script>
 
 <style>
</style>