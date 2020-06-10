
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style scoped >
.footer {
  background: var(--color2);
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
}
.footerLinks {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.importantLinks {
  display: block;
}
.footerLink {
  font-size: 1.2em;
  text-decoration: none;
  color: var(--fourth-color);
}
.footerLink:hover {
  color: var(--color1);
  transition: all 0.2s ease-in-out;
}
.footerLink:hover {
  text-decoration: underline 10px var(--third-color);
}

#footer {
  width: 100%;
  position: relative;
  margin-top: 100%;
  bottom: 0;
  right: 0px;
}
.direction {
  color: var(--fourth-color);
  background: white;
  font-size: 1.5em;
}
.logoContainer {
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.logoLink {
  display: flex;
  justify-content: center;
}
.logo {
  width: 100px;
  height: 100px;
  align-self: center;
}
.webSections {
  font-size: 40px;
  color: var(--color3);
  cursor: normal;
}
/* .importantLinks{
  position: ;
} */
</style>