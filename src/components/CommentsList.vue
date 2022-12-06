<template>
  <div class="card">
    <CommentCard
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
    <form>
      <input type="text" /><button class="btn" type="submit"></button>
    </form>
  </div>
</template>

<script>
import CommentCard from "@/components/CommentCard.vue";

export default {
  name: "CommentsList",
  components: { CommentCard },
  props: {
    comments: Array,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
