<template>
  <div class="grid">
    <nav>
        <ul>
          <li class="hardware&os"><a href="#hardware&os">Hardware & Os</a></li>
          <li class="ssh"><a href="#ssh">Ssh</a></li>
          <li class="https"><a href="#https">Https</a></li>
          <li class="nginx"><a href="#nginx">Nginx</a></li>
        </ul>
    </nav>
    <div class="main">
      <div class="h1"> Remake this website </div>
      <section id="hardware&os">
        <div class="h2">Hardware & Os</div>
          <div class="text">
            This website is running on a Pi4 with 4GB of ram, I only plugged it and install raspbian os (default). <br> <br>

            To install rapsbian on your SD card, download <a href="https://www.raspberrypi.com/software/" target="_blank"> 
            pi imager </a>, select the os you want (raspbian working well) and your SD card. <br> <br>

            <img src="@/assets/pi_imager.png"> <br> <br>

            Next you will need to activate ssh in settings and set your credentials. <br> <br>

            <img src="@/assets/pi_imager_settings.png"> <br> <br>

            Now you can plug the SD card in your Pi4 and power it by pluggin the power cable.<br>
            Plugged the hdmi cable to a screen, your keyboard and your mouse and you're good to go. <br> <br>

            <span>&#9888;</span> If you've got message error "unable to read partition as fat",
              just destroy your SD card and buy another one. <span>&#9888;</span> <br> <br>

            Os should be installed on your Pi4, go on the top of your screen and select your wifi, now
            you can unplugged everything, your Pi4 is ready for dev !

          </div>
      </section>
      <section id="ssh">
        <div class="h2">Ssh</div>
        <div class="text">
          <span>&#9888;</span><br><br><br>
          <span>&#9888;</span><br><br><br>
          <span>&#9888;</span><br><br><br>
          <span>&#9888;</span><br>
        </div>
      </section>
      <section id="https">
        <div class="h2">Https</div>
        <div class="text">
          <span>&#9888;</span><br><br><br>
          <span>&#9888;</span><br><br><br>
          <span>&#9888;</span><br><br><br>
          <span>&#9888;</span><br>
        </div>
      </section>
      <section id="nginx">
        <div class="h2">Nginx</div>
        <div class="text">
          <span>&#9888;</span><br><br><br>
          <span>&#9888;</span><br><br><br>
          <span>&#9888;</span><br><br><br>
          <span>&#9888;</span><br>
        </div>
      </section>
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
  font-size: 2.2em;
  margin-top: 1.5em;
  margin-bottom: 1.7em;
  color: orange;
}

.h2 {
  /* background-color:darkgreen; */
  font-size: 1.8em;
  margin-bottom: 1.5em;
  color:aquamarine;
}

section {
  /* background-color: crimson; */
  min-height: 100px;
  width: 60vw;
  margin: 0 auto;
  padding: 0.625em;
  margin-bottom: 3em;
}

img {
  padding-top: 2em;
  padding-bottom: 2em;
  width: 500px;
  height: auto;
}

.text{
  font-size: 1.1em;
}

a {
  text-decoration: none;
  color:coral;
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
nav ul li:hover, nav ul li.active {
  background-color: #111;
}

@media screen and (max-device-width: 480px) {
  .grid {
    display: initial;
  }
  .h1 {
    font-size: 2em;
  }
  section {
    width: 85vw;
  }
  nav {
    display: none;
  }
  img {
    padding: 0;
    width: 85vw;
    height: auto;
  }
}

</style>

<script setup>

import { onMounted } from "vue"

onMounted(() => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");
  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id"); 
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };
})


</script>