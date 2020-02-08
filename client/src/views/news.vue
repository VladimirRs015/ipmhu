<template>
  <div id="newsViwe">
    <h1>Noticias</h1>

    <NewsList />
  </div>
</template>

<script>
import NewsList from "../components/newsList.vue";
export default {
  name: "newsView",
  components: {
    NewsList
  }
};
</script>

<style>
</style>