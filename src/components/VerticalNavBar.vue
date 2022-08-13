<template>
  <nav>
  <ul>
    <li><a href="#section-1">Section 1</a></li>
    <li><a href="#section-2">Section 2</a></li>
    <li><a href="#section-3">Section 3</a></li>
    <li><a href="#section-4">Section 4</a></li>
    <li><a href="#section-5">Section 5</a></li>
    <li><a href="#section-6">Section 6</a></li>
    <li><a href="#section-7">Section 7</a></li>
    <li><a href="#section-8">Section 8</a></li>
    <li><a href="#section-9">Section 9</a></li>
  </ul>
</nav>
</template>

<script setup>
  
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
}
nav ul li a.current {
  background: black;
}
</style>
