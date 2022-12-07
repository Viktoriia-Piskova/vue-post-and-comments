<template>
  <div class="about">
    <h1>Create your own post</h1>
    <h4>Upload your post as .json file</h4>
    <UploadPostAsJson @isLoadedAsJson="importFromJson" />
    <h4>or fill the form manually</h4>
    <form
      @submit.prevent="createPost"
      class="was-validated p-5 my-5 border bg-light"
    >
      <div class="mb-3 mt-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
          v-model="postTemplate.title"
          required
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="mb-3 mt-3">
        <label for="description">Description, at least 50 characters</label>
        <textarea
          class="form-control"
          rows="5"
          id="description"
          name="description"
          placeholder="Description"
          v-model="postTemplate.description"
          minlength="50"
          required
        ></textarea>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">
          Please fill out this field, at least 50 characters required
        </div>
      </div>
      <div class="container">
        <div v-if="error.value == true" class="text-light bg-danger m-2">
          {{ error.message }}
        </div>
        <button type="submit" class="btn btn-success m-2">Create</button>
        <button type="button" class="btn btn-danger m-2" @click="cancel">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import UploadPostAsJson from "@/components/UploadPostAsJson.vue";
export default {
  name: "CreatePost",
  data() {
    return {
      postTemplate: {
        title: "",
        description: "",
      },
      error: {
        value: false,
        message: "Please enter valid text into all fields",
      },
    };
  },
  components: {
    UploadPostAsJson,
  },
  methods: {
    importFromJson(postPreview) {
      this.postTemplate.title = postPreview.title;
      this.postTemplate.description = postPreview.description;
      this.createPost();
    },
    createPost() {
      if (this.postTemplate.title < 1 || this.postTemplate.description < 50) {
        return (this.error.value = true);
      } else {
        this.error.value = false;
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
      }
    },
    cancel() {
      (this.postTemplate.title = ""),
        (this.postTemplate.description = ""),
        this.$router.push({ name: "home" });
    },
  },
};
</script>
