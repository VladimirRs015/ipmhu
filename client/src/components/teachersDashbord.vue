<template>
  <div id="teachersAdmin">
    <form @click.prevent="sendTeachers">
      <input type="text" v-model="form.teacher" placeholder="nombre del maestro" />
      <textarea
        v-model="form.summary"
        placeholder="Resumen de info de el maestro"
        value="resumen"
        cols="30"
        rows="10"
      ></textarea>
      <input type="text" v-model="form.asignature" placeholder="Asignatura" />
      <button type="submit">Guardar</button>
    </form>
    <form action="">
      <button @click="logout">
        Logout
      </button>
      <button @click="comprobar">
        comprobar
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        teacher: "",
        summary: "",
        asignature: ""
      }
    };
  },
  methods: {
    sendTeachers: async function() {
      let response = await axios.post(
        "http://localhost:4000/teachers",
        this.form
      );
      console.log(response);
    },
    printSession() {
      // console.log(this.$session)
      if(this.$session.exists()){
        console.log('estas logueado y el este es tu token : ')
        console.log(this.$session.get('jwt'))
      }
      else {
        console.log('ahora no estas loggeado')
      }
    }, 
      comprobar(){
        if(this.$session.exists()){
        console.log('estas logueado y el este es tu token : ')
        }
        else {
          console.log('ahora no estas logueado')
        }
      }, 
    logout(){
      if(this.$session.exists()){
        this.$session.destroy();
      } 
    }
  },
  created() {

  }
}

</script>

<style>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input:not([type="submit"]) {
  margin: 20px;
  width: 300px;
  height: 40px;
}
textarea {
  max-width: 300px;
  min-width: 300px;
  max-height: 300px;
  min-height: 300px;
}
[type="submit"] {
  width: 200px;
  height: 30px;
  border: none;
}
</style>