  <template>
  <section :style="styleObject">
    <slot></slot>
  </section>
</template>
  
  <script>
export default {
  name: "BoxContainerSection",
  props: ["styleObject"]
};
</script>
  
  <style>
</style>