 <template>
  <form :class="_class">
    <slot></slot>
  </form>
</template>
 
 <script>
export default {
  name: "FormContainer",
  props: ["_class"]
};
</script>
 
 <style>
</style>