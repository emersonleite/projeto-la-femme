 <template>
  <button :class="_class" :value="_value" @click="handleClick">{{_value}}</button>
</template>
 
 <script>
/* import { api } from "@/services.js"; */

export default {
  name: "PostButton",
  props: ["_class", "_value", "_url"],
  data() {
    return {
      body: {
        titulo: "em 22/07/2020....",
        descricao: "isso ocorreu de novo",
      },
    };
  },

  computed: {
    body1() {
      return JSON.stringify(this.body);
    },
  },

  methods: {
    handleClick() {
      console.log(this._url);
      try {
        fetch(this._url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(this.body),
        }).then((r) => r.json());
        /* .then((r) => console.log(r)); */
      } catch (error) {
        /* console.log("Erro", error); */
      }
    },
  },
};
</script>
 
 <style>
</style>