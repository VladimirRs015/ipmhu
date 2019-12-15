<template>
  <div id="paginationButtons">
    <div class="back" @click="PaginationBack"></div>
    <div class="next" @click="PaginationNext"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    PaginationNext() {
      //   console.log(this.$store.state);
      return this.$store.commit("nextPage");
    },
    PaginationBack() {
      return this.$store.commit("backPage");
      //   return this.store.commits("nextPage");
    },
    resetPaginationState() {
      return (this.$store.state.numPage = 1);
    }
  },
  created() {
    this.resetPaginationState();
  }
};
</script>
<style scoped>
#paginationButtons {
  display: flex;

  position: fixed;
  bottom: 0;
  flex: 0 1 auto;
  justify-self: center;
  align-self: center;
}
.next,
.back {
  width: 50px;
  height: 50px;
  /* border: 1px solid; */
  padding: 5px 10px 5px 10px;
}
.next,
.back {
  background-image: url("../assets/icons/arrow.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 20px;
}
.back {
  transform: rotate(-180deg);
}
</style>