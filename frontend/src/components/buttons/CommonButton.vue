 <template>
  <button :type="_type" :class="_class" :style="_style" @click="_handleClick">
    <slot></slot>
  </button>
</template>
 
 <script>
/**
 * The only true button.
 * @displayName Common Button
 */
export default {
  name: "CommonButton",
  computed: {
    _style() {
      return {
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        cursor: "pointer",
        display: "inline",
        fontSize: "1rem",
        fontWeight: "bold",
        padding: "8px 16px",
        backgroundColor: "#4f1140",
      };
    },
  },
  props: {
    /**
     * The type of button.
     */
    _type: {
      type: String,
      default: "submit",
    },
    /**
     * Class for styling.
     */
    _class: {
      type: String,
    },
    _handleClick: {
      type: Function,
      default: function (event) {
        console.log(event.target);
      },
    },
  },
};
</script>
 
 <style>
</style>


<docs>
```js
new Vue({
  data: () => ({
    message: 'Hello guys!',
  }),
  methods: {
   write() {
      window.alert(this.message);
    },
  },
  template: `
    <div>
      <common-button :_handleClick="write"> Click </common-button>
    </div>
  `
})
```
</docs>
