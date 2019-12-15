<template>
  <div id="promotions">
    <h1>Promociones</h1>
    <promotionList />
  </div>
</template>
<script>
import PromotionList from "../components/promotionsList.vue";
export default {
  name: "promotions",
  data() {
    return {};
  },
  components: {
    PromotionList
  }
};
</script>

<style>
</style>