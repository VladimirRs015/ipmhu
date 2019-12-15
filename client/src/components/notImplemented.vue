<template>
  <div id="noImplemented">
    <img class="noImpImg" src="../assets/icons/repairing.png" alt />
    <p
      class="Info"
    >Esta funcionalidad aún no esta empleada al 100% en esta versión, la próxima habrá mejoras notables en funcionalidad y en experiencia de usuario.</p>
    <RouterLink to="/">
      <img class="returnImage" src="../assets/icons/return.png" alt />
    </RouterLink>
  </div>
</template>


<script>
export default {
  name: "noImplemented",
  created() {}
};
</script>

<style scoped>
#noImplemented {
  display: flex;
  flex: 0 1 auto;
  width: 100vw;
  position: absolute;
  min-height: 100vh;
  background: #263e58be;
  top: 0;
  left: 0;
  z-index: 4;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.noImpImg {
  width: 50%;
  max-width: 200px;
  margin-bottom: 20px;
}
.Info {
  max-width: 500px;
  font-size: 1.5em;
  color: var(--color3);
}
.returnImage {
  width: 50px;
  position: absolute;
  top: 100px;
  left: 100px;
}
</style>