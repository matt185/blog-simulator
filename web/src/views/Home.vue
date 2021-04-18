<template>
  <v-row class="mt-6"
    ><v-col
      ><postCard
        class="mb-6"
        v-for="(post, i) in posts"
        :key="i"
        :like="post.point"
        :username="post.creator.username"
        :title="post.title"
        :text="post.text" /></v-col
  ></v-row>
</template>

<script>
// @ is an alias to /src
import postCard from "../components/home/postCard";

export default {
  name: "Home",
  components: { postCard },
  created() {
    this.$store.dispatch("posts/posts");
    console.log(this.$store.state.posts.posts[0].creator);
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
};
</script>
