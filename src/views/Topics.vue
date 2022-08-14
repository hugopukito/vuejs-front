<template>
  <div id="grid" class="grid">
    <vertical-nav-bar :temp="section"/>
    <div class="main">
      <div class="h1"> IT topics of usefull things </div>
      <div id="hardware">
          <div class="h2">Hardware</div>
          <div class="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, 
            blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab
             quibusdam ratione veniam in, mollitia fuga repudiandae?
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,</div>
      </div>
      <div id="os">
        <div class="h2">Os</div>
        <div class="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, 
            blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab
             quibusdam ratione veniam in, mollitia fuga repudiandae?</div>
      </div>
      <div id="ssh">
        <div class="h2">Ssh</div>
        <div class="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, 
            blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab
             quibusdam ratione veniam in, mollitia fuga repudiandae?</div>
      </div>
      <div id="https">
        <div class="h2">Https</div>
        <div class="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, 
            blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab
             quibusdam ratione veniam in, mollitia fuga repudiandae?</div>
      </div>
      <div id="nginx">
        <div class="h2">Nginx</div>
        <div class="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, 
            blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab
             quibusdam ratione veniam in, mollitia fuga repudiandae?</div>
      </div>
    </div>
    <footer>&copy; pukito</footer>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: min-content;
  color:beige;
}

.h1 {
  /* background-color: blueviolet; */
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 30px;
  color: orange;
}

.h2 {
  /* background-color:darkgreen; */
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 30px;
}

.content {
  background-color: crimson;
  min-height: 100px;
  width: 60vw;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
}

footer {
  background-color:#333;
  color:beige;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;
}

@media screen and (max-device-width: 480px) {
  .grid {
    display: initial;
  }
}
</style>

<script setup>
import { ref } from "vue"
import VerticalNavBar from "@/components/VerticalNavBar.vue"

let section = "test"

// console.log(document.getElementById("grid").querySelectorAll("."))

// window.onscroll = function() {myFunction()}
// function myFunction() {
//   console.log("coucou")
// }
</script>