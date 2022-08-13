<template>
  <div class="grid">
    <vertical-nav-bar/>
    <div class="main">
      <div class="h1"> topics </div>
      <div class="section" id="section-1">
          <div class="h2">Section 1</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?
      </div>
      <div class="section" id="section-2">
        <div class="h2">Section 2</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
      </div>
      <section id="section-3">
        <div class="h2">Section 3</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
      </section>
      <section id="section-4">
        <div class="h2">Section 4</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
      </section>
      <section id="section-5">
        <div class="h2">Section 5</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
        <br><br><br><br><br><br><br><br>
      </section>
      <section id="section-6">
        <div class="h2">Section 6</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
        <br><br><br><br><br><br><br><br>
      </section>
      <section id="section-7">
        <div class="h2">Section 7</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
        <br><br><br><br><br><br><br><br>
      </section>
      <section id="section-8">
        <div class="h2">Section 8</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
        <br><br><br><br><br><br><br><br>
      </section>
      <section id="section-9">
        <div class="h2">Section 9</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
      </section>
    </div>
    <footer>&copy; pukito</footer>
  </div>
</template>

<style scoped>
.grid {
  margin: 0;
  display: grid;
  grid-template-columns: min-content;
}

.h1 {
  background-color: blueviolet;
  margin-top: 0;
}

.section {
  background-color:brown;
  margin-top: 0;
}

footer {
  background-color:coral;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;
}

@media screen and (max-device-width: 480px) {
  h1 {
    margin-top: 30px;
    font-size: 22px;
  }
}
</style>

<script setup>
import VerticalNavBar from "@/components/VerticalNavBar.vue"

let mainNavLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
</script>