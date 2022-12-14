import { createStore } from "vuex";
import { currentPosts } from "@/currentPosts.js";

export default createStore({
  state: { currentPosts },
  getters: {
    //SORT_BY_LATEST(){}
  },
  mutations: {
    CREATE_POST(state, post) {
      state.currentPosts.push(post);
    },
    SORT_LATEST_FIRST(state) {
      state.currentPosts.sort((a, b) => {
        const dateA = Date.parse(a.date);
        const dateB = Date.parse(b.date);
        if (dateA < dateB) {
          return 1;
        }
        if (dateA > dateB) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    LAST_COMMENTED_FIRST(state) {
      //Math.max(...array.map(o => o.y))
      state.currentPosts.sort((a, b) => {
        const commentsA = Math.max(
          ...a.comments.map((comm) => Date.parse(comm.date))
        );
        const commentsB = Math.max(
          ...b.comments.map((comm) => Date.parse(comm.date))
        );
        if (commentsA < commentsB) {
          return 1;
        }
        if (commentsA > commentsB) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    MOST_COMMENTED_FIRST(state) {
      state.currentPosts.sort((a, b) => {
        const commentsA = a.comments.length;
        const commentsB = b.comments.length;
        if (commentsA < commentsB) {
          return 1;
        }
        if (commentsA > commentsB) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    ADD_COMMENT(state, comment) {
      const postToAddComment = state.currentPosts.find(
        (post) => post.id === comment.postId
      );
      postToAddComment.comments.push(comment.comment);
    },
  },
  actions: {
    createPost({ commit }, post) {
      commit("CREATE_POST", post);
    },
    showLatestFirst({ commit }) {
      commit("SORT_LATEST_FIRST");
    },
    showMostCommented({ commit }) {
      commit("MOST_COMMENTED_FIRST");
    },
    addComment({ commit }, comment) {
      commit("ADD_COMMENT", comment);
    },
    showRecentlyCommentedFirst({ commit }) {
      commit("LAST_COMMENTED_FIRST");
    },
  },
  modules: {},
});
