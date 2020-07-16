 <template>
  <section>
    <div>{{data}}</div>
    <!-- <div>{{pFuncion}}</div> -->
    <div>
      <p v-html="n" :key="n" v-for="n in arrayN2">{{n}}</p>
    </div>
  </section>
</template>
 
 <script>
export default {
  name: "ViewData",
  props: ["data"],
  data() {
    return {
      dataError: "Não foi possível obter dados",
      arrayN: [1, 2, 3],
      arrayN2: ["<span>1</span>", "<span>2</span>", "<span>3</span>"]
    };
  },
  methods: {},
  computed: {
    returnFunction() {
      return "<p>Teste</p>";
    },
    pFuncion() {
      const a = [1, 2, 3].map(n => `<p>${n}</p>`);
      return a;
    }
  },
  created() {
    if (this.data.statusCode) {
      this.data = this.dataError;
    }
  }
};
</script>
 
 <style>
* {
  color: #fff;
}
</style>