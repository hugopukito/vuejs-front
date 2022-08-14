<template>
  <nav> 
    <ul>
      <li><router-link to="/"> Home </router-link> </li>
      <li><router-link to="/topics"> Topics </router-link> </li>
      <li><router-link to="/monitoring"> Monitoring </router-link> </li>
      <li><router-link to="/chat"> Chat </router-link> </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  list-style: none;
  text-align: center;
  grid-column: 1/3;
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
  font-size: 1.25rem;
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

@media screen and (max-device-width: 480px) {
  li a{
    font-size: 16px;
  }
  li a:hover {
  background-color: #333;
}
}
</style>