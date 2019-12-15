<template>
  <div id="home">
    <Banner />

    <div class="academicOffer">
      <h2 class="subTitle">Conoce nuestra oferta académica</h2>
      <academicOfferList />
    </div>
    <div class="howToEnter">
      <h2>¿Como ingresar a nuestra institución?</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/banner.vue";
import academicOfferList from "../components/academicOfferList";
export default {
  name: "home",
  components: {
    Banner,
    academicOfferList
  }
};
</script>

<style scoped>
.academicOffer {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 1 auto;
}
.subTitle {
  font-size: 2em;
  margin-bottom: 20px;
}
</style>