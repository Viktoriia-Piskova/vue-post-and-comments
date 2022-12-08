<template>
  <paginate
    :pageCount="pageCount"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
  </paginate>
</template>

<script>
import Paginate from "vuejs-paginate-next";
export default {
  name: "PostPagination",
  components: {
    paginate: Paginate,
  },
  methods: {
    clickCallback(pageNum) {
      this.$emit("changePage", pageNum);
    },
  },
  props: {
    pageCount: Number,
  },
};
</script>

<style lang="css">
/* Adopt bootstrap pagination stylesheet. */
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

.pagination {
  color: initial;
}
.page-item {
  color: initial;
}
</style>
