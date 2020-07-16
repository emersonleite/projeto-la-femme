 <template>
  <div>
    <label :class="labelClassName" :for="label">{{formatedField}}</label>
    <input :class="inputClassName" :type="type" :name="label" :id="label" />
  </div>
</template>
 
 <script>
export default {
  name: "InputFieldsOne",
  props: ["type", "label", "inputClassName ", "labelClassName"],
  computed: {
    formatedField() {
      return this.label.charAt(0).toUpperCase() + this.label.slice(1);
    }
  }
};
</script>
 
 <style lang="scss" scoped>
.inputField {
  font-size: 1.25rem;
  flex: 1;
  height: 35px;
  margin-bottom: 20px;
  padding: 2.5;
}
</style>