<template>
  <div id ="box" class="box">
    <div @click="trigger_navbar" style="margin-left: 1rem"> 
      <font-awesome-icon icon="fa-solid fa-bars" size="xl" /> 
    </div>
    <img class="luffy" src="@/assets/luffy.png">
  </div>
  <nav id="nav"> 
    <ul>
      <li><router-link to="/" @click="trigger_navbar"> Home </router-link> </li>
      <li><router-link to="/topics" @click="trigger_navbar"> Topics </router-link> </li>
      <li><router-link to="/keyboard" @click="trigger_navbar"> Keyboard </router-link> </li>
      <li><router-link to="/monitoring" @click="trigger_navbar"> Monitoring </router-link> </li>
      <li><router-link to="/chat" @click="trigger_navbar"> Chat </router-link> </li>
    </ul>
  </nav>
</template>

<script setup>

const emit = defineEmits(["triggerNavbar"]);

function trigger_navbar() {
  emit("triggerNavbar");
  if (document.getElementById("nav").classList.contains("active")) {
    document.getElementById("nav").classList.remove("active");
  } else {
    document.getElementById("nav").classList.add("active");
  }
}
</script>


<style scoped>
nav {
  list-style: none;
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  text-align: center;
}

li {
  display: inline;
}

li a {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-size: 1.25em;
  color: beige;
  padding: 14px 16px;
}

li a:hover {
  background-color: #111;
}

.router-link-active {
  font-weight: bold;
  color: aquamarine;
}

.box {
  display: none;
}

@media screen and (max-device-width: 500px) {
  nav {
    position: absolute;
    left: -100vw;
    top: 7vh;
  }
  ul {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .box {
    display: flex;
    width: 100vw;
    height: 7vh;
    background-color: #333;
    align-items: center;
    margin: 0;
  }
  .box img {
    width: auto;
    height: 7vh;
  } 
  .luffy {
    position:absolute;
    left:0;
    right:0;
    margin:0 auto;
  }
  nav.active {
    transition: 350ms;
    left: 0;
  }
}
</style>