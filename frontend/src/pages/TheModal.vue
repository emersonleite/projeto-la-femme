 <template>
  <div :class="{'modal':'showModal'}">
    <div class="style">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat nibh id orci luctus dictum laoreet vitae neque. Vestibulum eleifend sollicitudin nibh quis placerat. Maecenas efficitur id ipsum a posuere. Ut id dolor urna. Nunc quam quam, ornare eget dapibus venenatis, congue at libero. Suspendisse accumsan velit metus, quis tempor nulla ultrices ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue a est fringilla dignissim ac ac lacus. Pellentesque posuere diam non hendrerit venenatis. Etiam lobortis quis ipsum quis gravida. Aliquam erat volutpat.
        Nunc a velit neque. Curabitur sit amet nunc efficitur, ornare elit vel, semper purus. Integer vitae lectus vitae elit condimentum volutpat ac in nisl. Mauris iaculis enim nec dui rutrum, vel elementum eros consectetur. Morbi rhoncus ligula quis erat molestie, non iaculis ligula tristique. Suspendisse convallis quam erat, quis congue urna lobortis vitae. Pellentesque venenatis lectus arcu, non mattis leo dignissim non.
        Vivamus faucibus fermentum enim, in interdum augue elementum in. Cras magna magna, efficitur non nulla a, bibendum imperdiet ex. Integer nec suscipit dui, faucibus sodales est. Suspendisse potenti. Vestibulum dignissim ultrices purus non dictum. Nulla ut feugiat libero, id cursus sapien. Vestibulum quis nisi fermentum, ullamcorper tortor lacinia, ullamcorper purus. Praesent nec.
      </p>
    </div>
  </div>
</template>
 
 <script>
export default {
  props: ["show-modal"],
  watch: {
    modal() {
      console.log(this.modal);
    },
  },
};
</script>
 
 <style>
/* Modal */

.style {
  height: 50%;
  width: 50%;
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: flex-start; /* or center */
  /* depending on what z-index values exist in your page, in order for the modal layer to sit on top of other content */
  z-index: 1000;
  /* enable scrolling if needed - although this is not really necessary since we are going take care of overflow in modal-content */
  overflow: auto;
  background-color: rgba(0, 0, 0, 1);
}
</style>