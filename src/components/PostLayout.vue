<template>
  <div class="hello">
    <h1>Post layout component</h1>
    <CommentList />
  </div>
</template>

<script>
import CommentsList from "@/components/CommentsList.vue";
export default {
  components: CommentsList,
  name: "PostLayout",
};
</script>

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
