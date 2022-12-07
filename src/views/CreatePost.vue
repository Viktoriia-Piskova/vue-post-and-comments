<template>
  <div class="about">
    <h1>This is the create post page</h1>
    <form @submit.prevent="createPost">
      <div class="mb-3 mt-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
          v-model="postTemplate.title"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          rows="5"
          id="description"
          name="description"
          placeholder="Description"
          v-model="postTemplate.description"
        ></textarea>
      </div>
      <div class="container">
        <button type="submit" class="btn btn-success m-2">Create</button>
        <button type="button" class="btn btn-danger m-2">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      postTemplate: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createPost() {
      const newPost = {
        ...this.postTemplate,
        date: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }),
        id: Math.random().toString(16).slice(2),
        comments: [],
      };
      this.$store.dispatch("createPost", newPost);
      this.$router.push({
        name: "PostDetails",
        params: { id: newPost.id },
      });
    },
  },
};
</script>
