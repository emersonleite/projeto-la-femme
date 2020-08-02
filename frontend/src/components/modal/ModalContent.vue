 <template>
  <div :class="_class">
    <slot></slot>
  </div>
</template>
 
 <script>
export default {
  name: "ModalContent",
  props: ["_class"],
};
</script>
 
 <style lang="scss">
</style>