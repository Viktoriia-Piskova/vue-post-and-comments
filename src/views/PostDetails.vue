<template>
  <div class="home">
    <PostLayout :post="post" />
    <CommentsList v-if="comments" :comments="comments" />
  </div>
</template>

<script>
import PostLayout from "@/components/PostLayout.vue";
import CommentsList from "@/components/CommentsList.vue";

export default {
  name: "PostDetails",
  components: {
    PostLayout,
    CommentsList,
  },
  props: ["id"],
  computed: {
    post() {
      return this.$store.state.currentPosts.find(
        (post) => post.id === this.$route.params.id
      );
    },
    comments() {
      return this.post.comments;
    },
  },
};
</script>
