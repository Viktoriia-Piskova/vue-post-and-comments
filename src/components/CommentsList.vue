<template>
  <div class="card">
    <CommentCard
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
    <form @submit.prevent="addComment" class="bg-secondary p-2">
      <div class="mb-3 mt-3">
        <label for="author" class="form-label text-light">Your name:</label>
        <input
          type="text"
          class="form-control"
          id="author"
          placeholder="Enter name"
          v-model="commentTemplate.author"
          name="author"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="content" class="form-label text-light"
          >Add a comment:</label
        >
        <input
          type="text"
          class="form-control"
          id="content"
          placeholder="Enter comment"
          v-model="commentTemplate.content"
          name="content"
        />
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import CommentCard from "@/components/CommentCard.vue";

export default {
  name: "CommentsList",
  components: { CommentCard },
  props: {
    comments: Array,
    id: String,
  },
  data() {
    return {
      commentTemplate: {
        author: "",
        content: "",
      },
    };
  },
  methods: {
    addComment() {
      const newComment = {
        ...this.commentTemplate,
        date: new Date(),
        id: Math.random().toString(16).slice(2),
      };
      this.$store.dispatch("addComment", {
        postId: this.id,
        comment: newComment,
      });
      console.log(newComment);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
