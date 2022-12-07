<template>
  <div class="home">
    <a
      id="downloadButton"
      class="btn btn-info text-light"
      @click="downloadJson(posts, 'allPosts')"
    >
      Download as JSON
    </a>
    <div class="d-flex justify-content-around">
      <button @click="showLatestFirst" class="btn btn-success m-2">
        New posts first
      </button>
      <button @click="showRecentlyCommentedFirst" class="btn btn-success m-2">
        Latest comments first
      </button>
      <button @click="showMostCommented" class="btn btn-success m-2">
        Most commented first
      </button>
    </div>
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview.vue";
import { mapState } from "vuex";
export default {
  name: "PostDetails",
  components: {
    PostPreview,
  },
  computed: mapState({ posts: "currentPosts" }),
  methods: {
    showLatestFirst() {
      this.$store.dispatch("showLatestFirst");
    },
    showRecentlyCommentedFirst() {
      this.$store.dispatch("showRecentlyCommentedFirst");
    },
    showMostCommented() {
      this.$store.dispatch("showMostCommented");
    },
    downloadJson(exportObject, exportFileName) {
      const downloadButton = document.getElementById("downloadButton");
      const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(exportObject));
      downloadButton.setAttribute("href", dataStr);
      downloadButton.setAttribute("download", exportFileName + ".json");
    },
  },
};
</script>
