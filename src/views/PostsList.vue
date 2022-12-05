<template>
  <div class="home">
    <h1>Post previews list</h1>
    <PostPreview />
  </div>
</template>

<script>
// @ is an alias to /src
import PostPreview from "@/components/PostPreview.vue";

export default {
  name: "PostDetails",
  components: {
    PostPreview,
  },
};
</script>
