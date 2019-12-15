<template>
  <div id="NavBar">
    <!-- Logo -->
    <div class="NavBar">
      <img src="../assets/Logo.png" class="logo" alt="Logo IPMHU" id="logoHome" />
      <RouterLink id="linkHome" :to="{name:'home'}"></RouterLink>

      <!-- Hamburger Menu -->
      <div class="btn-menu-container">
        <label for="menu-mod" class="labelBnt">
          <div class="btn-menu">
            <img src="../assets/menu-button.png" alt="menu-button" class="img-menu" id="idBtn-menu" />
          </div>
        </label>
      </div>
      <!-- Checkbox for to use checked in css for show the menu -->
      <input type="checkbox" class="chk-menu" name="chk-menu" id="menu-mod" />
      <nav class="nav-bar">
        <ul class="main-menu">
          <li class="nav-bar-item">
            <router-link class="home icons" :to="{name:'home'}">Inicio</router-link>
          </li>
          <li class="nav-bar-item">
            <router-link class="about icons" :to="{name:'about'}">Nosotros</router-link>
          </li>
          <li class="nav-bar-item">
            <router-link class="teachers icons" :to="{name:'teachers'}">Maestros</router-link>
          </li>
          <li class="nav-bar-item">
            <router-link class="promotions icons" :to="{name:'promotions'}">Promociones</router-link>
          </li>
          <li class="nav-bar-item">
            <router-link class="news icons" :to="{name:'news'}">Noticias</router-link>
          </li>
          <li class="nav-bar-item">
            <router-link class="login icons" :to="{name:'login'}">Login</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<style scoped>
#NavBar {
  position: fixed;
  width: 100vw;
  height: 10px;
  top: 0;
  left: 0;
  flex: 0 0 auto;
  z-index: 3;
  margin-bottom: auto;
}
.NavBar {
  margin-bottom: auto;
  background: var(--color2);
  position: relative;
  display: flex;
  flex: 0 0 auto;
  box-shadow: 0px 3px 5px 0px rgb(84, 84, 84);
}
.logo {
  position: relative;
  width: 80px;
  height: 80px;
  right: 0;
  top: 0;
  margin-right: auto;
  margin-top: 5px;
}
.logHome {
  display: inline-block;
}
a {
  font-family: inherit;
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  display: inline-block;
  font-weight: 700;
}
[for="menu-mod"] {
  width: inherit;
  height: inherit;
  padding: inherit;
  margin: 0;
  background: #fff;
}
.nav-bar {
  display: flex;
  flex: 0 0 auto;
  padding: 0 15px;
  /* margin-right: 10px; */
}
.nav-bar-item {
  display: inline-block;
  padding: 22px 20px;
  margin: 15px 10;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: var(--color3);
  border-right: 1px solid rgba(1, 1, 1, 0.1);
}
.nav-bar-item:last-child {
  border: none;
}
.nav-bar-item:hover {
  transition: all 0.3s ease-in-out;
  background: rgba(100, 100, 100, 0.9);
}
/* .nav-bar-item:hover {
  background-color: red;
} */
/* */
/* Icons */
.icons::before {
  content: "";
  width: 25px;
  height: 25px;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  position: relative;
  display: inline-block;
  right: 5px;
}
.home::before {
  background-image: url("../assets/icons/home.png");
}
.teachers::before {
  background-image: url("../assets/icons/teachers.png");
}
.about::before {
  background-image: url("../assets/icons/worker.png");
}
.promotions::before {
  background-image: url("../assets/icons/medal.png");
}
.news::before {
  background-image: url("../assets/icons/newspaper.png");
}
.login::before {
  background-image: url("../assets/icons/user.png");
}
/* Icons end */
[class="chk-menu"] {
  display: none;
}
.img-menu {
  display: none;
}
.labelBtn {
  width: inherit;
  height: inherit;
  display: inline-block;
  font: inherit;
  background: inherit;
}
.nav-bar-item a.router-link-exact-active {
  transition: all 0.4s ease-in-out;
  color: var(--fourth-color);
  display: flex;
}

@media (max-width: 968px) {
  .nav-bar {
    width: 300px;
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: var(--color2);
    padding: 0 0;
    transform: translateX(-400px);
    transition: all 0.4s;
    margin-top: 0;
    position: absolute;
    top: 55px;
  }
  .main-menu {
    flex: 1 1 auto;
    height: auto;
  }
  .nav-bar-item {
    display: flex;
    flex: 1 1 auto;
    padding: 20px 5px;
    margin: 0px 0px;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: var(--color3);
    border-bottom: 1px solid rgba(1, 1, 1, 0.1);
  }
  .nav-bar-item:last-child {
    border: none;
  }
  .btn-menu-container {
    display: flex;
    width: 3.5em;
    height: 3.5em;
    padding: 0px 0px;
    margin-left: 0px;
    justify-content: center;
  }
  .btn-menu-container:hover {
    background: #cccccc;
  }
  .img-menu {
    display: block;
    width: inherit;
    height: inherit;
    margin-top: 10.5px;
    margin-left: auto;
    margin-right: auto;
  }
  .chk-menu:checked ~ .nav-bar {
    margin-left: 0px;
    transform: translateX(0px);
    transition: all 0.5s;
  }
  .logo {
    position: absolute;
    width: 50px;
    height: 50px;
    right: 0;
    top: 0;
    margin-right: 5px;
    margin-top: 5px;
  }

  /* Visual efect with active item */
}
</style>
