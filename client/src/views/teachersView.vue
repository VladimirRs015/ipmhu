<template>
  <div id="teachers">
    <h1 class="title">Lista de profesores</h1>
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
.title {
  margin-top: 20px;
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
}
</style>