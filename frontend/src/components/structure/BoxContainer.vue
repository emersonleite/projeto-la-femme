  <template>
  <section :class="_class">
    <slot></slot>
  </section>
</template>
  
  <script>
export default {
  name: "BoxContainer",
  props: ["_class"]
};
</script>
  
<style>
</style>