<template>
  <div id="teachersList">
    <!-- <h2>Teacher's List</h2> -->
    <article class="teacherBox" v-for="teacher in teachers" :key="teacher.id">
      <h1 class="teacherName">{{teacher.name}}</h1>
      <img class="teacherImg" :src="photos[teacher.id].url" alt />
      <p
        class="teacherSummary"
      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi, quas, doloribus repellendus ea sint optio maiores iusto nostrum dicta aut atque amet facere eos qui pariatur architecto dolor asperiores!</p>
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
}
.teacherBox {
  border: 1px solid black;
  width: 300px;
  min-height: 250px;
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
}
.teacherName {
  position: relative;
  text-align: center;
}
.teacherSummary {
  text-align: center;
}
.teacherImg {
  width: 150px;
  height: 150px;
  align-self: center;
  justify-self: center;
  border-radius: 50%;
}
</style>