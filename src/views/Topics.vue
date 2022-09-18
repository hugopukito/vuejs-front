<template>
  <div class="grid">
    <nav id="vertical_nav">
        <ul>
          <li class="close_button" @click="trigger_navbar">X</li>
          <li class="hardware&os" @click="trigger_navbar"><a href="#hardware&os">Hardware & OS</a></li>
          <li class="ssh" @click="trigger_navbar"><a href="#ssh">SSH</a></li>
          <li class="port_forwarding" @click="trigger_navbar"><a href="#port_forwarding">Port forwarding</a></li>
          <li class="nginx&https" @click="trigger_navbar"><a href="#nginx&https">NGINX & HTTPS</a></li>
          <li class="monitoring" @click="trigger_navbar"><a href="#monitoring">Monitoring</a></li>
          <li class="chat" @click="trigger_navbar"><a href="#chat">Chat</a></li>
        </ul>
    </nav>
    <div id="main" class="main">
      <div class="h1"> Remake this website </div>
      <div id ="box" class="box">
        <div @click="trigger_navbar" style="margin: 5px"> Find your topic &nbsp;
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> 
        </div>
      </div>
      <section id="hardware&os">
        <div class="h2">Hardware & OS</div>
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
        <div class="h2">SSH</div>
        <div class="text">
          <span>&#9888;</span> In progress... <span>&#9888;</span> <br><br><br>
        </div>
      </section>
      <section id="port_forwarding">
        <div class="h2">Port forwarding</div>
        <div class="text">
          <span>&#9888;</span> In progress... <span>&#9888;</span> <br><br><br>
        </div>
      </section>
      <section id="nginx&https">
        <div class="h2">NGINX & HTTPS</div>
        <div class="text">
          <span>&#9888;</span> In progress... <span>&#9888;</span> <br><br><br>
        </div>
      </section>
      <section id="monitoring">
        <div class="h2">Monitoring</div>
        <div class="h3">Grafana</div>
        <div class="text">
          <span>&#9888;</span> In progress... <span>&#9888;</span> <br><br><br>
        </div>
        <div class="h3">Telegraf</div>
        <div class="text">
          <span>&#9888;</span> In progress... <span>&#9888;</span> <br><br><br>
        </div>
      </section>
      <section id="chat">
        <div class="h2">Chat</div>
        <div class="h3">Back-end</div>
        <div class="text">
          <span>&#9888;</span> In progress... <span>&#9888;</span> <br><br><br>
        </div>
        <div class="h3">Front-end</div>
        <div class="text">
          <span>&#9888;</span> In progress... <span>&#9888;</span> <br><br><br>
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

.box {
  display: none;
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

.close_button {
  display: none;
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
  width: 11vw;
}

nav ul {
  position: sticky;
  list-style: none;
  margin: 0;
  padding: 0;
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
</style>

<style scoped>
@media screen and (max-device-width: 1300px) {
  nav {
    width: 160px;
  }
}
</style>

<style scoped>
@media screen and (max-device-width: 480px) {
  .grid {
    display: block;
    margin-top: 3rem;
  }
  .h1 {
    font-size: 2em;
    margin-top: 1.5em;
  }
  section {
    width: 85vw;
  }
  .box {
    display: block;
    margin: auto;
    width: 60vw;
    border-style: solid;
    margin-top: 3em;
    margin-bottom: 1.5em;
    font-size: 1.5em;
  }
  nav {
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding-top: 1.5em;
    top: -200vh;
    background: rgba(15, 19, 21, 0.8);
    backdrop-filter: blur(1rem);
  }
  nav ul li a {
    color:aquamarine;
    font-size: 1.5rem;
    margin: 1rem;
  }
  .close_button {
    display: initial;
  }
  nav.active {
    top: 7vh;
  }
  .main.hideOverflow {
    height: 80vh;
    overflow: hidden;
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

function trigger_navbar() {
  if (document.getElementById("vertical_nav").classList.contains("active")) {
    document.getElementById("vertical_nav").classList.remove("active");
    document.getElementById("main").classList.remove("hideOverflow");
  } else {
    document.getElementById("vertical_nav").classList.add("active");
    document.getElementById("main").classList.add("hideOverflow");
  }
}

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