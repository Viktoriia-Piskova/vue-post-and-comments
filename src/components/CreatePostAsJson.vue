<template>
  <div class="container p-5 my-5 border bg-light">
    <div class="mb-3">
      <label for="formFile" class="form-label">Select .json file</label>
      <input type="file" id="selectFiles" class="form-control" /><br />
      <button id="import" @click="readJson" class="btn btn-primary">
        Preview
      </button>
    </div>
    <div v-if="!postPreview.validated">
      <div class="alert alert-warning">{{ warning }}</div>
    </div>
    <div v-if="postPreview.validated">
      <p class="text-success">
        This is your post preview. If everything is OK, make sure to press
        "Send" button
      </p>
      <div class="alert alert-success">
        <p class="fw-bold">
          {{ postPreview.title }}
        </p>
        <p>
          {{ postPreview.description }}
        </p>
      </div>
    </div>
    <button
      @click="$emit('isLoadedAsJson', postPreview)"
      class="btn btn-success"
      :disabled="postPreview.validated == 0"
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
        validated: 0,
      },
      warning: `Make sure your data structure is correct, i.e. {"title": "at least 1 symbol", "description": "at least 50 symbols"}`,
    };
  },
  name: "UploadPostAsJson",
  methods: {
    readJson() {
      const files = document.getElementById("selectFiles").files;
      if (files.length <= 0) {
        this.warning = "Please press 'Choose File' and select .json file";
      }

      const fr = new FileReader();
      fr.onload = (e) => {
        const result = JSON.parse(e.target.result);
        if (result.title && result.description) {
          if (result.title.length >= 1 && result.description.length >= 50) {
            this.postPreview.title = result.title;
            this.postPreview.description = result.description;
            this.postPreview.validated = 1;
          }
        } else {
          this.warning = `Sorry, could't read your file. Try another one with structure {"title": "at least 1 symbol", "description": "at least 50 symbols"}`;
        }
      };
      fr.readAsText(files.item(0));
    },
  },
};
</script>
