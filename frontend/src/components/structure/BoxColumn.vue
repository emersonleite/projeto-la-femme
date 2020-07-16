  <template>
  <div :class="_class">
    <slot></slot>
  </div>
</template>
  
  <script>
export default {
  name: "BoxColumn",
  props: ["_class"]
};
</script>
  
<style>
</style>