 <template>
  <div :class="_class">
    <p>
      <slot></slot>
    </p>
  </div>
</template>
 
 <script>
export default {
  name: "WarningBox",
  props: {
    _class: {
      type: String,
    },
  },
};
</script>
 
 <style>
</style>