import Vue from "vue";
import DynamicButton from "../components/buttons/DynamicButton.vue";

export default { title: "Dynamic Button" };

/* export const withText = () => "<my-button>with text</my-button>";

export const withEmoji = () => "<my-button>😀 😎 👍 💯</my-button>"; */

export const asAComponent = () => ({
  components: { DynamicButton },
  template:
    '<DynamicButton :_handleClick="write" :_hook="true" _currentValue="value1" _valueAfterATime="value2" :_time="2000" />',
});
