<template>
  <div id="teachersAdmin">
    <form method="POST" enctype="multipart/form-data">
      <input type="text" v-model="teachersForm.teacher" placeholder="nombre del maestro" />
      <textarea
        v-model="teachersForm.summary"
        placeholder="Resumen de info de el maestro"
        value="resumen"
        cols="30"
        rows="10"
      ></textarea>
      <input type="text" v-model="teachersForm.asignature" placeholder="Asignatura" />
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teachersForm: {
        teacher: "",
        summary: "",
        asignature: ""
      }
    };
  }
};
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