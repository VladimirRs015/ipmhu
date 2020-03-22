<template>
  <div id="developers">
    <h1>Developers</h1>
    <DevelopersList />
  </div>
</template>

<script>
import DevelopersList from "../components/developersList.vue";
// import developersList from "../components/developersList.vue";
export default {
  name: "developers",
  data() {
    return {};
  },
  components: {
    DevelopersList
  }
};
</script>

<style>
</style>