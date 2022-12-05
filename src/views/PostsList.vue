<template>
  <div class="home">
    <h1>Posts preview list</h1>
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview.vue";

export default {
  name: "PostDetails",
  components: {
    PostPreview,
  },
  computed: {
    posts() {
      debugger;
      return this.$store.state.currentPosts;
    },
  },
};
</script>
