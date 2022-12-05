<template>
  <div class="home">
    <PostLayout :post="post" />
    <CommentsList :comments="comments" />
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
      const currPost = this.$store.state.currentPosts.find(
        (post) => post.id === +this.$route.params.id
      );
      console.log(this.$route.params.id);
      console.log(currPost);
      return currPost;
    },
    comments() {
      return this.post.comments;
    },
  },
};
</script>
