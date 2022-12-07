<template>
  <div class="container p-5 my-5 border bg-light">
    <div class="mb-3">
      <label for="formFile" class="form-label">Select .json file</label>
      <input type="file" id="selectFiles" class="form-control" /><br />
      <button id="import" @click="readJson" class="btn btn-success">
        Preview
      </button>
    </div>
    <div>
      <h5>{{ postPreview.title }}</h5>
      <p>{{ postPreview.description }}</p>
    </div>
    <button
      @click="$emit('isLoadedAsJson', postPreview)"
      class="btn btn-success"
    >
      Send
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postPreview: {
        title: "'title' is required",
        description: "'description' is required",
      },
    };
  },
  name: "UploadPostAsJson",
  methods: {
    readJson() {
      const files = document.getElementById("selectFiles").files;
      if (files.length <= 0) {
        return false;
      }
      const fr = new FileReader();
      fr.onload = (e) => {
        const result = JSON.parse(e.target.result);
        this.postPreview.title =
          result.title || "please add 'title' in your document";
        this.postPreview.description =
          result.description || "please add 'description' in your document";
      };
      fr.readAsText(files.item(0));
    },
  },
};
</script>
