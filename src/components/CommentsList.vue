<template>
  <div class="hello">
    <h1>Comments list component</h1>
    <CommentCard />
  </div>
</template>

<script>
import CommentCard from "@/components/CommentCard.vue";

export default {
  name: "CommentsList",
  components: CommentCard,
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
