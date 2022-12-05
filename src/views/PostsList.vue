<template>
  <div class="home">
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
      return this.$store.state.currentPosts;
    },
  },
};
</script>
