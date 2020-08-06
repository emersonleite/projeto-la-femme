 <template>
  <input :value="_currentValue" type="submit" :class="_class" :style="_style" @click="_handleClick" />
</template>
 
 <script>
/* import { changeTextFromElementAfterATime as change } from "@/functions/changeTextFromElementAfterATime.js"; */
/**
 * The only true button.
 * @displayName Dynamic Button
 */
export default {
  name: "DynamicButton",
  /* data() {
    return {
      $hook: true,
    };
  }, */
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
        width: "200px",
        "::hover": {
          transform: "scale(1.3)",
        },
      };
    },
  },
  props: {
    /**
     * Hook for the event.
     */
    _hook: {
      type: Boolean,
      default: false,
    },
    /**
     * Current value for the button.
     */
    _currentValue: {
      type: String,
      default: "OK",
    },
    /**
     * Time elapsed with the new value.
     */
    _timeElapsed: {
      type: Number,
      default: 1000,
    },
    /**
     * Value of the button for a time.
     */
    _valueAfterATime: {
      type: String,
      required: true,
    },
    /**
     * Class for styling.
     */
    _class: {
      type: String,
    },
  },
  methods: {
    _handleClick() {
      if (this._hook) {
        console.log(this.$el.value);
        this.$el.value = this._valueAfterATime;
        window.setInterval(() => {
          this.$el.value = this._currentValue;
        }, this._timeElapsed);
      }
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
    message: 'ola',
  }),
  computed:{
    value1(){
      return 'click me';
    }, 
    value2(){
      return 'ohhhhh, clicked';
    }
  },
  methods: {
   write() {
      console.log('ola');
    },
  },
  template: `
    <div>
      <DynamicButton :_handleClick="write" :_hook="true" :_currentValue="value1" :_valueAfterATime="value2" :_time="2000" />
    </div>
  `
})
```
</docs>