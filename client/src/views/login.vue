<template>
  <div id="login">
    <h1 class="loginTitle">Login</h1>
    <div class="loginBox">
      <form action method @submit.prevent="login" class="loginForm">
        <div class="inputEmail iconLogin iconError">
          <input type="text" placeholder="Ingrese su E-mail" class="loginInput" />
        </div>
        <div class="inputPassword iconLogin iconError">
          <input type="passwod" placeholder="Ingrese su contrase.." class="loginInput" />
        </div>
        <input type="submit" value="Entrar" class="loginButton" />
      </form>
    </div>

    <p class="invitationRegister">Si aún no tienes una cuenta puedes registrarte</p>
    <RouterLink to="register">aquí</RouterLink>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    login() {}
  }
};
</script>

<style scoped>
.loginTitle {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 3em;
  margin-left: 15px;
}
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1 1 auto;
}
.loginBox {
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  justify-content: center;
}
.loginForm {
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: center;
}
.iconLogin {
  display: flex;
  flex: 1 1 auto;
}
.iconLogin::before {
  content: "";
  width: 15px;
  height: 15px;
  background-size: 15px 15px;
  background-repeat: no-repeat;
  /* position: relative; */
  display: inline-block;
  left: 5px;
  top: 5px;
  /* background: yellow; */
}
.iconError::after {
  content: "";
  width: 20px;
  height: 20px;
  background-size: 15px;
  background-repeat: no-repeat;
  background-image: url("../assets/icons/error.png");
  /* position: absolute; */
}
.inputEmail::before {
  background-image: url("../assets/icons/userlogin.png");
}
.inputPassword::before {
  background-image: url("../assets/icons/lock.png");
}
.loginInput {
  display: inline-block;
  width: 300px;
  height: 35px;
  margin-bottom: 2em;
  border: none;
  border-bottom: 1px solid var(--color3);
  flex: 0 1 auto;
}
.loginButton {
  flex: 0 1 auto;
  width: 300px;
  border: none;
  height: 35px;
  background: var(--color2);
  color: var(--color4);
  margin-left: 15px;
}
.invitationRegister {
  margin-top: 70px;
}
.invitationRegister a {
  /* display: inline; */
  border: 3 solid var(--color2);
}
</style>