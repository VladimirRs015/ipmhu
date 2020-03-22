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
// import axios from 'axios'
// import Axios from "axios";
export default {
  data(){
    return {
      logged  : false 
    }
  }, 
  components: {
    NavBar,
    Footer
  },
  methods:{
  //   valid(){
  //     console.log(this.$store.state)
  //     console.log(this.$session.get('jwt'))
  //     if(this.$store.state.AuthorizationToken === this.$session.get('jwt')){
  //       axios.get('http://localhost:4000/teachers').then(res=>console.log(res))
  //  }
    // }
    
  },
  created() {
    
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
