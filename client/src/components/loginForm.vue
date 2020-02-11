<template>
  <div id="login">
    <div class="loginBox">
      <div class="card">
        <h1 class="loginTitle">Login</h1>
        <form action method @submit.prevent="startLogin" class="loginForm">
          <div class="inputEmail iconLogin iconError">
            <input type="text" placeholder="Ingrese su E-mail" class="loginInput" />
          </div>
          <div class="inputPassword iconLogin iconError">
            <input type="passwod" placeholder="Ingrese su contrase.." class="loginInput" />
          </div>
          <input type="submit" value="Entrar" class="loginButton" />
        </form>
        <p class="invitationRegister">
          Si aún no tienes una cuenta puedes registrarte
          <RouterLink :to="{name:'register'}">aquí</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import loginService from '../services/Login'
export default {
  name: "Login",
  data() {
    return {
      loginForm : {
        email : '', 
        password : ''
      }
    };
  },
  methods: {
    async startLogin(){
      let form = this.loginForm 
     loginService.post(form).then(res=>{
       console.log(res)
     })
    
    }
  }
};
</script>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
.card {
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0px 0px 8px 1px #cccccc;
  border-radius: 15px;
}
.loginTitle {
  display: inline-block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  font-size: 3em;
  /* text-align: center; */
}
#login {
  display: flex;
  justify-self: center;
  align-self: center;
  flex: 1 1 auto;
  flex-direction: column;
}
.loginBox {
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  justify-content: center;
  flex-direction: column;
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
  position: relative;
  display: inline-block;
  top: 10px;
  right: 10px;
}
.iconError::after {
  content: "";
  width: 20px;
  height: 20px;
  background-size: 15px;
  background-repeat: no-repeat;
  background-image: url("../assets/icons/error.png");
  position: relative;
  top: 10px;
  left: 5px;
}
.inputEmail::before {
  background-image: url("../assets/icons/userlogin.png");
}
.inputPassword::before {
  background-image: url("../assets/icons/lock.png");
}
.loginInput {
  display: inline-block;
  width: 260px;
  height: 35px;
  margin-bottom: 2em;
  border: none;
  border-bottom: 1px solid var(--color3);
  flex: 0 1 auto;
}
.loginButton {
  flex: 0 1 auto;
  width: 260px;
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