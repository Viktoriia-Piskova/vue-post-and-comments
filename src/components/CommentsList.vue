<template>
  <div class="card">
    <CommentCard
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
    <form @submit.prevent="addComment" class="bg-light p-2 was-validated">
      <div class="mb-3 mt-3">
        <label for="author" class="form-label text-light">Your name:</label>
        <input
          type="text"
          class="form-control"
          id="author"
          placeholder="Enter name"
          v-model="commentTemplate.author"
          name="author"
          required
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
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
          required
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div v-if="error.value == true" class="text-light bg-danger m-2">
        {{ error.message }}
      </div>
      <button class="btn btn-primary" type="submit">Send</button>
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
      error: {
        value: false,
        message: "Please enter valid text into all fields",
      },
    };
  },
  methods: {
    addComment() {
      if (
        this.commentTemplate.author.length <= 0 ||
        this.commentTemplate.content <= 0
      ) {
        return (this.error.value = true);
      } else {
        this.error.value = false;
        const newComment = {
          ...this.commentTemplate,
          date: new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
          }),
          id: Math.random().toString(16).slice(2),
        };
        this.$store.dispatch("addComment", {
          postId: this.id,
          comment: newComment,
        });
      }
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
