<template>
  <nav> 
    <router-link to="/"> Home </router-link> |
    <router-link to="/monitoring"> Monitoring </router-link> |
    <router-link to="/chat"> Chat </router-link>
  </nav>
  <router-view/>
</template>

<style scoped>

a {
  text-decoration: none;
  color: beige;
}

.router-link-active {
  font-weight: bold;
  color: aquamarine;
}
</style>