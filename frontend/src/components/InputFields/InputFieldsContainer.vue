 <template>
  <form :class="InputFieldsContainerClass">
    <slot></slot>
  </form>
</template>
 
 <script>
export default {
  name: "InputFieldsContainer",
  props: ["InputFieldsContainerClass"]
};
</script>
 
 <style>
</style>