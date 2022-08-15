<template>
  <nav>
    <ul>
      <li><a href="#hardware">Hardware</a></li>
      <li><a href="#os">Os</a></li>
      <li><a href="#ssh">Ssh</a></li>
      <li><a href="#https">Https</a></li>
      <li><a href="#nginx">Nginx</a></li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps(["temp"])
//console.log(props.temp)
</script>

<style scoped>
nav {
  white-space: nowrap;
  background: #37474F;
  width: 150px;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul {
  position: sticky;
  top: 0;
}
nav ul li a {
  display: block;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}
nav ul li a:hover {
  background-color: #111;
}
nav ul li a.current {
  background: #111;
}

@media screen and (max-device-width: 480px) {
  nav {
    display: none;
  }
}
</style>
