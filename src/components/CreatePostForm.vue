<template>
  <form
    @submit.prevent="validatePost"
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
</template>

<script>
export default {
  name: "CreatePostForm",
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
  methods: {
    validatePost() {
      if (this.postTemplate.title < 1 || this.postTemplate.description < 50) {
        return (this.error.value = true);
      } else {
        this.error.value = false;
        this.$emit("postIsValidated", this.postTemplate);
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
