<template>
  <div id="teachersList">
    <!-- <h2>Teacher's List</h2> -->
    <article class="teacherBox" v-for="teacher in teachers" :key="teacher.id">
      <h1 class="teacherName">{{teacher.name}}</h1>
      <img class="teacherImg" :src="photos[teacher.id].url" alt />
      <p
        class="teacherSummary"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero doloribus quam sunt blanditiis sapiente beatae quod architecto praesentium ad hic libero in eveniet, a est aperiam ut omnis velit.</p>
    </article>
  </div>
</template>

<script>
//Services
// import Service_getTeachers from "../services/getTeachers.js";
import Axios from "axios";
export default {
  name: "techersList",
  data() {
    return {
      teachers: [],
      photos: []
    };
  },
  methods: {
    getTeachers() {
      //   Service_getTeachers.get().then(res => (this.teachers = res.data));
      Axios.get("https://jsonplaceholder.typicode.com/users ").then(res => {
        this.teachers = res.data;
      });
    },
    getImages() {
      Axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
        this.photos = res.data;
        console.log(res.data);
      });
    }
  },
  created() {
    this.getTeachers();
    this.getImages();
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
  margin-bottom: 10px;
  align-content: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5em;
  padding: 1em 2em;
  background: var(--color1);
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
  position: relative;
  top: 100%;
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
.teacherImg {
  width: 150px;
  height: 150px;
  align-self: center;
  justify-self: center;
  border-radius: 50%;
}
@media (max-width: 768px) {
  .teacherBox:active .teacherSummary {
    top: 0;
    transition: all 0.5s;
  }
}
</style>