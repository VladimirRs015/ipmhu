<template>
  <div id="academicOffersDetails">
    <p class="return">
      <RouterLink class="returnLink" :to="{name:'home'}">
        <img class="returnImg" src="../assets/icons/return.png" alt />
      </RouterLink>
    </p>
    <div class="module">
      <h1 class="moduleName">{{offer.module}}</h1>
      <p
        class="moduleFunction"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus atque molestiae delectus, aut fugit ut esse odit, eligendi fuga corrupti iusto aliquam. Laborum minima fugiat neque porro repellendus adipisci earum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate quas, enim dignissimos animi suscipit repudiandae, non ducimus inventore eum tempora fugit sit aperiam necessitatibus vel, quis adipisci similique numquam asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quidem earum ex. Quam architecto provident illum error corporis debitis id, ea deleniti neque, laboriosam voluptas atque alias, necessitatibus repellendus at.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "academicOffersDetails",
  // props: {},
  data() {
    return {
      offer: {}
    };
  },
  methods: {
    getOffer() {
      return (this.offer = this.$store.state.offer);
    }
  },
  created() {
    this.getOffer();
  }
};
</script>


<style scoped>
#academicOffersDetails {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 80px;
}
.module {
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  width: 600px;
  background: var(--fourth-color);
  color: var(--color4);
  border-radius: 10px;
  padding: 12px 20px 12px 20px;
  box-shadow: 0px 1px 10px 5px var(--primary-color);
}
.moduleName {
  font-size: 3em;
  text-decoration: underline var(--primary-color);
  margin-bottom: 0.5em;
}
.moduleFunction {
  font-size: 1.2em;
}
.return {
  position: fixed;
  top: 0;
  margin-top: 70px;
  left: -12px;
  padding: 20px;
  height: 20px;
}
.returnImg {
  width: 30px;
  height: 35px;
}
</style>