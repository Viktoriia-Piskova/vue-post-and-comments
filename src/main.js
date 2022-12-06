import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//import "vue-blob-json-csv";
// import VueBlobJsonCsv from "vue-blob-json-csv";

createApp(App).use(store).use(router).mount("#app");

// .use(VueBlobJsonCsv)
