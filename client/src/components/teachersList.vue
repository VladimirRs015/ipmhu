<template>
  <div id="teachersList">
    <!-- <h2>Teacher's List</h2> -->
    <article class="teacherBox " v-for="teacher in pagination()" :key="teacher.id">
      <details :class="teacher._id">
        <summary class="summary-drop-down">
      <h1 class="teacherName">{{teacher.name}}</h1>
      <p class="teachersAsignare">{{teacher.asignature}}</p>
      <img class="teacherImg" :src="  teacher.images" alt />
        </summary>
      <p class="teacherSummary">{{teacher.summary}}</p>
      </details>
    </article>
    <PaginationButtons />
  </div>
</template>

<script>
//Services
// import Service_getTeachers from "../services/getTeachers.js";
import Axios from "axios";
import PaginationComponents from "../mixins/pagination.js";
import PaginationButtons from "../components/paginationButton";
export default {
  mixins: [PaginationComponents],
  name: "techersList",
  data() {
    return {};
  },
  methods: {
    getTeachers() {
      //   Service_getTeachers.get().then(res => (this.teachers = res.data));
      Axios.get("http://localhost:4000/teachers").then(res => {
        this.items = res.data;
      });
    }
  },
  created() {
    this.getTeachers();
  },
  components: {
    PaginationButtons
  }
};
</script>

<style>
#teachersList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.teacherBox {
  border: 1px solid black;
  width: 300px;
  min-height: 400px;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 20px;
  margin-right: 10px;
  align-content: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5em;
  padding: 1em 2em;
  background: var(--fourth-color);
}
.teacherBox:hover .teacherSummary {
  top: 0;
  transition: all 0.5s;
}
.teacherName {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px;
  position: static;
  text-align: center;
  color: var(--color3);
}
.teacherSummary {
  text-align: left;
  width: 100%;
  height: 100%;
  background: rgba(1, 1, 1, 0.1);
  display: block;
  align-self: center;
  justify-self: center;
  color: var(--color4);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 10px;
}
.teachersAsignare{
  color:white; 
  align-self: flex-end;
  margin-right: 2em
}
.teacherImg {
  width: 150px;
  height: 150px;
  align-self: center;
  justify-self: center;
  border-radius: 10%;
  margin-bottom: 20px;
}
.drop-down{
  display: flex ; 
  justify-content: center; 
  align-items: center; 
}
 .drop-down[open] summary ~ * {
  animation: sweep .5s ease-in-out;
}

@keyframes sweep {
  0%    {opacity: 0; margin-left: -15px}
  100%  {opacity: 1; margin-left: 0px}
}
.summary-drop-down{
  display: flex ; 
  justify-content: center; 
  align-items: center; 
  flex-wrap: wrap ;
  flex-direction: column;
  cursor: pointer;
 
}
</style>