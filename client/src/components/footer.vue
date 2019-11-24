<template>
  <div id="footer">
    <footer>
      <div>
        <a href>footer1Link</a>
      </div>

      <div>
        <a href>footer1Link</a>
      </div>
      <div>
        <a href>footer1Link</a>
      </div>
      <div>
        <a href>footer1Link</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style>
footer {
  background: black;
}
#footer {
  /* position: relative; */
  min-width: 100%;
  bottom: 0;
  left: 0;
  margin-top: auto;
}
a {
  color: white;
}
</style>