<template>
  <nav>
    <ul>
      <li><a href="#1st">1st</a></li>
      <li><a href="#2nd">2nd</a></li>
      <li><a href="#3rd">3rd</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  white-space: nowrap;
  background: blanchedalmond;
  width: 170px;
  height: 100vh;
  top: 0;
  position: sticky;
  float: left;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li a {
  display: block;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
}

a:hover {
  background-color: rgb(161, 3, 3);
}
</style>
