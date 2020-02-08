<template>
  <div id="banner">
    <h1 class="title">Instituto Politécnico Max Henríquez Ureña</h1>
    <div class="bannerContainer">
      <img src="../assets/banner.jpg" class="bannerImage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {};
  }
};
</script>

<style scoped>
.title {
  display: none;
}
#banner {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 20%;
  margin-bottom: 30px;
}
.bannerImage {
  width: 100%;
  height: 100%;
}
.bannerContainer {
  margin: 0;
  flex: 0 1 auto;
  width: 100vw;
  height: 40%;

  /* margin-right: 20px; */
  display: flex;
  /* align-items: flex-end; */
  flex-wrap: wrap;
  /* position: absolute; */
}
.bannerContainer::after {
  content: "Instituto Politécnico Max Henríquez Ureña";
  color: var(--color3);
  font-size: 2.2em;
  text-align: center;

  width: 100%;
  background: rgba(1, 1, 1, 0.7);
  position: relative;
}

.HomeTitle {
  text-align: center;
  color: var(--color4);
  font-size: 2.5em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  margin-top: 0;
}
</style>