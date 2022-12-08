<template>
  <router-link
    class="no-text-decor"
    :to="{ name: 'PostDetails', params: { id: post.id } }"
  >
    <div class="card m-3">
      <h5 class="card-header text-success">{{ post.title }}</h5>
      <p class="card-body text-start">
        {{ preview }} <span class="text-end text-secondary">Read more</span>
      </p>
      <div class="card-footer d-flex justify-content-between">
        <div>{{ formatedDate }}</div>
        <div>Comments: {{ commentsCount }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    post: {
      type: Object,
      required: true,
    },
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
    formatedDate() {
      return new Date(this.post.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    },
  },
};
</script>

<style scoped>
.no-text-decor {
  text-decoration: none;
  color: initial;
}

.card:hover {
  background-color: #ffffff;
  border: 2px solid #42b983;
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
