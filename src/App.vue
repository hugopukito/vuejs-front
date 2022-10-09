<template>
  <NavBar @trigger-navbar="changeRouterView()" @re-render="reRender()"/>
  <div id="router" class="router">
    <router-view v-if="render"/>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue"
import { ref, onMounted } from "vue";

let render = ref(true);
var Buffer = require('buffer/').Buffer

onMounted(() => {
  if (localStorage.token != null) {
    const jwtPayload = parseJwt(localStorage.token);
    if (jwtPayload.exp < Date.now()/1000) {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
    }
  }
})

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(Buffer.from(base64, "base64").toString("ascii").split("").map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

function reRender(){
  render.value = false;
  render.value = true;
  console.log("test");
  // re render not working, chat bug
}

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
.h1 {
  font-size: 2.2em;
  margin-top: 1.5em;
  margin-bottom: 1.7em;
  color:orange;
}
.h2 {
  font-size: 1.9em;
  margin-bottom: 1.5em;
  color:aquamarine;
}
.h3 {
  font-size: 1.5em;
  margin-bottom: 1.5em;
  color:coral;
}
a {
  text-decoration: none;
  color:coral;
}
@media screen and (max-device-width: 480px) {
  .router.disable {
    display: none;
  }
}
</style>