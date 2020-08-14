 <template>
  <button :class="_class" :value="_value" @click="handleClick">{{_value}}</button>
</template>
 
 <script>
/* import axios from "axios"; */

export default {
  name: "ActionButton",
  props: ["_class", "_value", "_url", "_method", "_body", "_option"],
  data() {
    return {};
  },

  methods: {
    handleClick() {
      switch (this._option) {
        case "auth":
          break;

        case "auth2":
          fetch({
            method: "post",
            url: this._url,
            body: JSON.stringify(this._body),
            headers: {
              "content-type": "Content-Type:application/json",
            },
          })
            .then((response) => {
              // Handle success.
              console.log(response);
            })
            .catch((error) => {
              // Handle error.
              console.log("An error occurred:", error.response);
            });
          break;

        case "register-fetch":
          fetch(this._url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(this._body),
          })
            .then((response) => response.json())
            .then((response) => console.log(response));
          break;
      }
    },
  },
};
</script>