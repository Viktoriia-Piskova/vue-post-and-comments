<template>
  <div class="home">
    <button @click="showLatestFirst">New posts first</button>
    <button @click="showMostCommented">Most commented first</button>
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
    showMostCommented() {
      this.$store.dispatch("showMostCommented");
    },
  },
};
</script>
