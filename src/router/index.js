import { createRouter, createWebHistory } from "vue-router";
import CreatePost from "../views/CreatePost.vue";
import PostDetails from "../views/PostDetails.vue";
import PostsList from "../views/PostsList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PostsList,
  },
  {
    path: "/create",
    name: "create",
    component: CreatePost,
  },
  {
    path: "/post:id",
    name: "post",
    component: PostDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
