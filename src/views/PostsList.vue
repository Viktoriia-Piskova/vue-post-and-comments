<template>
  <div class="home">
    <!-- <VueBlobJsonCsv
      @success="handleSuccess"
      @error="handleError"
      tag-name="div"
      file-type="json"
      file-name="sample"
      title="Download JSON"
      :data="data"
      confirm="Do you want to download it?"
    /> -->
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview.vue";
// import VueBlobJsonCsv from "vue-blob-json-csv";
export default {
  name: "PostDetails",
  components: {
    PostPreview,
    // VueBlobJsonCsv,
  },
  computed: {
    posts() {
      return this.$store.state.currentPosts;
    },
  },
};
</script>
