<template>
  <div class="about">
    <h1>Create your own post</h1>
    <h4>Upload your post as file</h4>
    <UploadPostAsJson @isLoadedAsJson="createPost" />
    <h4>or fill the form manually</h4>
    <CreatePostForm @postIsValidated="createPost" />
  </div>
</template>

<script>
import UploadPostAsJson from "@/components/UploadPostAsJson.vue";
import CreatePostForm from "@/components/CreatePostForm.vue";
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
    CreatePostForm,
  },
  methods: {
    createPost(postPreview) {
      const newPost = {
        ...postPreview,
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
