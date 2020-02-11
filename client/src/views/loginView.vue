<template>
  <div id="loginView">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "../components/loginForm.vue";
// import NoImplemented from "../components/notImplemented";
export default {
  name: "view",
  data() {
    return {
      
    };
  },
  components: {
    LoginForm,
  }
};
</script>

<style>
#loginView {
  display: flex;
  flex-grow: 1;
}
</style>