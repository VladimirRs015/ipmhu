<template>
  <div id="teachers">
    <TeachersList />
  </div>
</template>

<script>
import TeachersList from "../components/teachersList.vue";
export default {
  name: "teachersView",
  components: {
    TeachersList
  }
};
</script>

<style>
</style>