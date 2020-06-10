 <template>
  <div>
    <p>{{photos}}</p>
    <p>{{name}}</p>
    <p>{{description}}</p>
    <p>{{price}}</p>
  </div>
</template>
 
 <script>
export default {
  props: ["name", "description", "price", "photos"]
};
</script>
 
 <style>
</style>