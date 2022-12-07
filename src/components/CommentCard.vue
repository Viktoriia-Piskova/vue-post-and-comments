<template>
  <div class="card m-2 p-2">
    <div
      class="d-flex justify-content-between align-content-center text-secondary small"
    >
      <p>{{ comment.author }}</p>
      <p>{{ comment.date }}</p>
    </div>
    <p>{{ comment.content }}</p>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
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
