<template>
  <div class="home">
    <a
      id="downloadButton"
      class="btn btn-primary text-light"
      @click="downloadJson(posts, 'allPosts')"
    >
      Download as JSON
    </a>
    <div class="d-flex justify-content-around">
      <button @click="showLatestFirst" class="btn btn-primary my-2">
        New posts first
      </button>
      <button @click="showRecentlyCommentedFirst" class="btn btn-primary my-2">
        Latest comments first
      </button>
      <button @click="showMostCommented" class="btn btn-primary my-2">
        Most commented first
      </button>
    </div>
    <PostCard v-for="post in postsToDisplay" :key="post.id" :post="post" />
    <PostsPagination :pageCount="pageCount" @changePage="displayNewPage" />
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import PostsPagination from "@/components/PostsPagination.vue";
import { mapState } from "vuex";

export default {
  name: "PostDetails",
  data() {
    return { postsToDisplay: null, currentPage: 1 };
  },
  created() {
    this.postsToDisplay = this.posts.slice(0, 3);
  },
  components: {
    PostCard,
    PostsPagination,
  },
  computed: {
    ...mapState({ posts: "currentPosts" }),
    pageCount() {
      return Math.ceil(this.posts.length / 3);
    },
    postsToDisplayComp() {
      return this.posts.slice(0, 3);
    },
  },
  methods: {
    displayNewPage(pageNum) {
      const startPost = (pageNum - 1) * 3;
      const lastPost = pageNum * 3;
      this.postsToDisplay = this.posts.slice(startPost, lastPost);
      this.currentPage = pageNum;
      console.log(this.postsToDisplay);
    },
    showLatestFirst() {
      this.$store.dispatch("showLatestFirst");
      this.postsToDisplay = this.posts;
      this.displayNewPage(this.currentPage);
    },
    showRecentlyCommentedFirst() {
      this.$store.dispatch("showRecentlyCommentedFirst");
      this.postsToDisplay = this.posts;
      this.displayNewPage(this.currentPage);
    },
    showMostCommented() {
      this.$store.dispatch("showMostCommented");
      this.postsToDisplay = this.posts;
      this.displayNewPage(this.currentPage);
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

<style scoped>
#downloadButton {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
}
</style>
