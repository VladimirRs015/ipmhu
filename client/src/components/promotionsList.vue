<template>
  <div id="PromotionsList">
    <article class="promotionsArticle" v-for="promotion in pagination()" :key="promotion.id">
      <h1 class="promotionsName">{{promotion.name}}</h1>
      <p class="promotionsDate">{{promotion.year}}</p>
      <div class="promotionsImageContainer">
        <img class="promotionsImage" :src="promotion.image" alt />
      </div>
      <p class="promotionInfo">{{promotion.info}}</p>
    </article>
    <PaginationButtons />
  </div>
</template>
<script>
// import getPromotions from "../services/getPromotions.js";
import PaginationButtons from "./paginationButton";
import PaginationElements from "../mixins/pagination";
import axios from "axios";
export default {
  name: "promotionsList",
  mixins: [PaginationElements],
  methods: {
    getPromotions() {
      return axios
        .get("http://localhost:4000/promotions")
        .then(res => (this.items = res.data));
    }
  },
  created() {
    this.getPromotions();
    // console.log(this.$data);
  },
  components: {
    PaginationButtons
  }
};
</script>

<style>
#PromotionsList {
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  align-items: center;
  justify-content: space-around;
}
.promotionsArticle {
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  background: var(--fourth-color);
  border-radius: 10px;
  margin: 20px;
  padding: 15px;
  min-width: 100px;
  box-shadow: 0 0 20px 3px var(--fourth-color);
  max-width: 700px;
}
.promotionsName {
  color: white;
  flex: 0 1 auto;
  margin-bottom: 20px;
  font-size: 2em;
}
.promotionInfo {
  flex: 0 1 auto;
  color: white;
  font-size: 1.2em;
}
.promotionsImageContainer {
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 1px 2px var(--color3);
  max-width: 700px;
}
.promotionsImage {
  flex: 0 1 auto;
  width: 100%;
  border-radius: 10px;
}
.promotionsDate {
  background: var(--color3);
  color: var(--third-color);
  text-align: center;
  /* display: flex; */
  position: relative;
  left: 0;
}
</style>