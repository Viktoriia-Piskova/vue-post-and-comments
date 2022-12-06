<template>
  <div class="card m-2 p-2">
    <h1>{{ post.title }}</h1>
    <h6>{{ post.date }}</h6>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
export default {
  name: "PostLayout",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
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
