<template>
  <div id="teachers">
    <h1 class="titles">Lista de profesores</h1>
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