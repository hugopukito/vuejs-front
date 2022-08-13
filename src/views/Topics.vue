<template>
    <vertical-nav-bar/>
    <h1> topics </h1>
    <main>
      <section id="section-1">
        <h2>Section 1</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
      </section>
      <section id="section-2">
        <h2>Section 2</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
      </section>
      <section id="section-3">
        <h2>Section 3</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
      </section>
      <section id="section-4">
        <h2>Section 4</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
      </section>
      <section id="section-5">
        <h2>Section 5</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
      </section>
      <section id="section-6">
        <h2>Section 6</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
      </section>
    </main>
</template>

<script setup>
import VerticalNavBar from "@/components/VerticalNavBar.vue"
</script>


<style scoped>
h1{
  margin-top: 30px;
  /* padding-right: 200px; */
  background-color: blueviolet;
}

h2{
  /* padding-right: 200px; */
  background-color:brown;
}

section {
  text-align: left;
}

@media screen and (max-device-width: 480px) {
  h1 {
    margin-top: 30px;
    font-size: 22px;
  }
}
</style>