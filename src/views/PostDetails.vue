<template>
  <div class="home">
    <CommentCard />
    <PostFullText />
  </div>
</template>

<script>
// @ is an alias to /src
import PostFullText from "@/components/PostFullText.vue";
import CommentCard from "@/components/CommentCard.vue";

export default {
  name: "PostDetails",
  components: {
    PostFullText,
    CommentCard,
  },
};
</script>
