<template>
  <div class="card p-2">
    <div class="card-header">
      <h1 class="text-primary display-3">{{ post.title }}</h1>
      <h6 class="text-secondary">{{ post.date }}</h6>
    </div>
    <p class="card-body">{{ post.description }}</p>
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
