<template>
  <div class="card m-3">
    <h5 class="card-header text-success">{{ post.title }}</h5>
    <p class="card-body text-start">
      {{ preview }} <span class="text-end text-secondary">Read more</span>
    </p>
    <div class="card-footer d-flex justify-content-between">
      <div>{{ post.date }}</div>
      <div>Comments: {{ commentsCount }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    post: Object,
  },
  computed: {
    preview() {
      let text = this.post.description;
      let textPreview = text.slice(0, 100);
      return `${textPreview}...`;
    },
    commentsCount() {
      return this.post.comments.length;
    },
  },
};
</script>

<style scoped>
.card:hover {
  background-color: #ffffff;
  border: 2px solid rgb(27, 26, 26);
  cursor: pointer;
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
