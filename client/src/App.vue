<template>
  <div id="app">
    <NavBar />

    <router-view />

    <Footer />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/footer.vue";
// import Axios from "axios";
export default {
  components: {
    NavBar,
    Footer
  },
  created() {
    // function request() {
    //   Axios.get("http://localhost:4000/hola");
    // }
    // request();
  }
};
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  margin-bottom: auto;
}
</style>
