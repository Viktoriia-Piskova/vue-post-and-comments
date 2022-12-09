<template>
  <div class="container p-5 my-5 border bg-light">
    <div class="mb-3">
      <label for="formFile" class="form-label">Select .json file</label>
      <input type="file" id="selectFiles" class="form-control" /><br />
      <button id="import" @click="readJson" class="btn btn-success">
        Preview
      </button>
    </div>
    <div v-if="!postPreview.validated">
      <p>"title" property is required</p>
      <p>"description" property is required. Min length is 50 characters</p>
    </div>
    <div v-if="postPreview.validated">
      <p>
        {{ postPreview.title }}
      </p>
      <p>
        {{ postPreview.description }}
      </p>
    </div>
    <button
      @click="$emit('isLoadedAsJson', postPreview)"
      class="btn btn-success disabled"
      :disabled="!postPreview.validated"
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
        title: "",
        description: "",
        validated: true,
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
        if (result.title && result.description) {
          if (result.title.length >= 1 && result.description.length >= 50) {
            this.postPreview.title = result.title;
            this.postPreview.description = result.description;
            this.postPreview.validated = true;
          }
        } else {
          alert("Unable to read this file");
        }
      };
      fr.readAsText(files.item(0));
    },
  },
};
</script>
