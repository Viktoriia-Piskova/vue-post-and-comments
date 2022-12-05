<template>
  <div class="home">
    <PostLayout />
    <CommentsList />
  </div>
</template>

<script>
// @ is an alias to /src
import PostLayout from "@/components/PostLayout.vue";
import CommentsList from "@/components/CommentsList.vue";

export default {
  name: "PostDetails",
  components: {
    PostLayout,
    CommentsList,
  },
};
</script>
