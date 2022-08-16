<template>
    <div class="vertical-menu">
      <a href="#1st">Link 1</a>
      <a href="#2nd">Link 2</a>
      <a href="#3rd">Link 3</a>
      <a href="#4th">Link 4</a>
    </div>
</template>

<style scoped>
.vertical-menu {
    width: 200px; /* Set a width if you like */
    height: 937px;
    position: sticky;
    top: 0;
    float: left;
    margin-top: 0px;
    width:200px;
    background-color: #333;
}

.vertical-menu a {
  background-color: rgb(117, 162, 106); /* Grey background color */
  color: black; /* Black text color */
  display: block; /* Make the links appear below each other */
  padding: 12px; /* Add some padding */
  text-decoration: none; /* Remove underline from links */
  font-size: 20px;
}

.vertical-menu a:hover {
  background-color: #ccc; /* Dark grey background on mouse-over */
}
</style>