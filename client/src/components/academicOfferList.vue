<template>
  <div id="AcademicOfferList">
    <div class="academicOffer" v-for="offer in offers" :key="offer.id">
      <div class="module academicLink" @click="ModuleInfo(offer.id),send(offer)">{{offer.module}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "academicOfferList",
  data() {
    return {
      offers: [
        {
          id: 1,
          module: "Informatica",
          function: ""
        },
        {
          id: 2,
          module: "Electronica",
          function: ""
        },
        {
          id: 3,
          module: "Logistica",
          function: ""
        },
        {
          id: 4,
          module: "Electricidad",
          function: ""
        },
        {
          id: 5,
          module: "Contabilidad",
          function: ""
        }
      ]
    };
  },
  methods: {
    send(offer) {
      //stored in the state
      this.$store.state.offer = offer;
      console.log(this.$store.state);
    },
    ModuleInfo(id) {
      this.$router.push({
        name: "academicDatails",
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>
#AcademicOfferList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 0 1 auto;
}
.academicOffer {
  flex: 0 1 auto;
  border: 1px solid;
  display: block;
  width: 200px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  padding: 10px 10px 0px 10px;
  transition: all 0.5s;
  overflow-wrap: break-word;
  overflow: hidden;
  position: relative;
  background-color: var(--fourth-color);
  box-shadow: 0 5px 10px 0 black;
}

.module {
  display: flex;
  margin-bottom: 15px;
  display: block;
  text-align: center;
  color: var(--color4);
  font-size: 1.7em;
}
.moduleFunction {
  background: rgb(58, 61, 63);
  color: var(--color4);
  padding: 0 10px 10px 10px 10px;
  font-size: 1.2em;
}
.academicLink {
  color: var(--color4);
  text-decoration: none;
  cursor: pointer;
}
.academicOffer:hover {
  background: var(--primary-color);
}
</style>