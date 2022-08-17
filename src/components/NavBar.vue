<template>
  <div id ="box" class="box">
    <img @click="trigger" src="@/assets/white_beard_nobg.png">
  </div>
  <nav> 
    <ul>
      <li><router-link to="/"> Home </router-link> </li>
      <li><router-link to="/topics"> Topics </router-link> </li>
      <li><router-link to="/monitoring"> Monitoring </router-link> </li>
      <li><router-link to="/chat"> Chat </router-link> </li>
    </ul>
  </nav>
</template>

<script setup>
function trigger() {
  if (document.getElementById("box").classList.contains("active")) {
    document.getElementById("box").classList.remove("active");
  } else {
    document.getElementById("box").classList.add("active");
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

@media screen and (max-device-width: 480px) {
  nav {
    display: none;
  }
  .box {
    display: flex;
    width: 100vw;
    height: 7vh;
    background-color: #333;
    transition: width 200ms;
  }
  .box img {
    width: auto;
    height: 7vh;
  } 
  .box.active {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }
}
</style>