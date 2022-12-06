<template>
  <div class="about">
    <h1>This is the create post page</h1>
    <form @submit.prevent="createPost">
      <input type="text" v-model="postTemplate.title" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="postTemplate.description"
      ></textarea>
      <div class="container">
        <button type="submit" class="btn btn-success">Create</button>
        <button type="button" class="btn btn-danger">Cancel</button>
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
      if (this.postTemplate.title.length > 5) {
        const newPost = {
          ...this.postTemplate,
          date: new Date(),
          id: Math.random().toString(16).slice(2),
        };
        this.$store.state.currentPosts.push(newPost);
        this.$router.push({
          name: "PostDetails",
          params: { id: newPost.id },
        });
        console.log(this.$store.state.currentPosts);
      }
    },
  },
};
</script>
