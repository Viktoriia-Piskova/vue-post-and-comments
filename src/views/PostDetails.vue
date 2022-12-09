<template>
  <div class="home">
    <NotFound v-if="post == false" />
    <PostLayout v-if="post" :post="post" />
    <CommentsList v-if="post" :comments="comments" :id="id" />
  </div>
</template>

<script>
import PostLayout from "@/components/PostLayout.vue";
import CommentsList from "@/components/CommentsList.vue";
import NotFound from "@/views/NotFound.vue";

export default {
  name: "PostDetails",
  components: {
    PostLayout,
    CommentsList,
    NotFound,
  },
  props: ["id"],
  computed: {
    post() {
      return (
        this.$store.state.currentPosts.find(
          (post) => post.id === this.$route.params.id
        ) || false
      );
    },
    comments() {
      return this.post.comments || false;
    },
  },
};
</script>
