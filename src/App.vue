<template>
  <nav> 
    <router-link to="/"> Home </router-link> |
    <router-link to="/monitoring"> Monitoring </router-link> |
    <router-link to="/chat"> Chat </router-link>
  </nav>
  <router-view/>
</template>

<style scoped>

nav {
  margin-top: 50px;
}

a {
  text-decoration: none;
  color: beige;
}

.router-link-active {
  font-weight: bold;
  color: aquamarine;
}

@media screen and (max-device-width: 480px) {
  nav {
    margin-top: 25px;
  }
}
</style>