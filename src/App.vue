<template>
  <nav-bar @trigger-navbar="changeRouterView"/>
  <div id="router" class="router">
    <router-view/>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue"

function changeRouterView() {
  if (document.getElementById("router").classList.contains("disable")) {
    document.getElementById("router").classList.remove("disable");
  } else {
    setTimeout(() => {
      document.getElementById("router").classList.add("disable");
    }, 350);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: beige;
}
@media screen and (max-device-width: 480px) {
  .router.disable {
    display: none;
  }
}
</style>