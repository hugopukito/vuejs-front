<template>
  <div class="grid">
    <nav id="vertical_nav">
        <ul>
          <li class="close_button" @click="trigger_navbar">X</li>
          <li class="hardware&os" @click="trigger_navbar"><a href="#hardware&os">Hardware & OS ⚙️</a></li>
          <li class="ssh" @click="trigger_navbar"><a href="#ssh">SSH 🔌</a></li>
          <li class="ssh_keys" @click="trigger_navbar"><a href="#ssh_keys">SSH Keys 🔑</a></li>
          <li class="port_forwarding" @click="trigger_navbar"><a href="#port_forwarding">Port forwarding</a></li>
          <li class="nginx&https" @click="trigger_navbar"><a href="#nginx&https">NGINX & HTTPS</a></li>
          <li class="monitoring" @click="trigger_navbar"><a href="#monitoring">Monitoring 📺</a></li>
          <li class="chat" @click="trigger_navbar"><a href="#chat">Chat 🗣️</a></li>
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
        <div class="h2">Hardware & OS ⚙️</div>
          <div class="text">
            This website is running on a pi4 with 4GB of ram, I only plugged it and install raspbian os (default). <br> <br>

            To install rapsbian on your SD card, download <a href="https://www.raspberrypi.com/software/" target="_blank"> 
            pi imager </a>, select the os you want (raspbian working well) and your SD card.
          </div>

          <img src="@/assets/topics/pi_imager.png">

          <div class="text">
            Set the hostname you want to recognize your pi4. <br> <br>
            Next you will have to activate ssh and set a password.
          </div>

          <img src="@/assets/topics/pi_imager_settings.png">

          <div class="text">
            Now you can plug the SD card in your pi4 and power it by pluggin the power cable.<br> <br>
            Plugged the hdmi cable to a screen, your keyboard and your mouse and you're good to go.
          </div>
            
          <div class="text" style="color: rgb(252, 58, 58)">
            &#9888; If you've got message error "unable to read partition as fat",
            just destroy your SD card and buy another one. You can try to repair it by searching for solution, 
            in my case I couldn't do anything so I changed it. &#9888;
          </div>

          <div class="text">
            Os should be installed on your pi4, go on the top of your screen and select your wifi. Open a terminal and run
            the simple command <code>ip a</code> to get the local ip address of your pi4 to access it later.
          </div>

          <img src="@/assets/topics/ip_address.png">

          <div class="text">
            Copy / paste this ip address somewhere on your dev computer 📝 <br> <br>
            Now you can unplug everything, your pi4 is ready for dev !
          </div>
      </section>
      <section id="ssh">
        <div class="h2">SSH 🔌</div>
        <div class="text">
          Now you've configured your pi4 on your local network, you can connect threw it with the SSH (Secure Shell), in the
          previous step we enable SSH so you don't need to install it manually. <br> <br>
          Notice that you can unplug all device on your pi4 (don't need a screen, mouse and keyboard anymore), you will be able 
          to dev on it by accessing to the same terminal of your real pi4 machine with SSH protocol. Use the command bellow :<br> <br>
          <code> ssh 'pi4_host_name'@'pi4_ip_address'</code> <br> <br>
          In my case : <br> <br>
          <code> ssh pukito@192.168.0.27</code> <br> <br>
          Once you've hit enter, the terminal should ask you for the password you set before. <br> <br>
          You can now dev on your pi4 from another device connected to your local network ! ✨
        </div>
      </section>
      <section id="ssh_keys">
        <div class="h2">SSH Keys 🔑</div>
        <div class="text">
          Now you can access your pi4 and program stuff on it, you may want to remove the password but still get a layer of security so
          not anyone can access it (although the pi4 is only visible on your local network for the moment) 🙃 <br> <br>
          The solution is SSH keys, you will generate a pair of key with your pi4, one public that will be store on your pi4, the other
          one that you will keep secret and store on the device which will access the pi4. <br> <br>
          To generate those keys, you will need to use the command <code> ssh-keygen</code>. <br> <br>
          Then they will ask you a file to save the public and private key, just press Enter. You will need to enter a passphrase, it's up to you,
          if you feel like your private key won't be stolen, just press Enter. If you set a passphrase, each time you will try to connect
          with ssh on your pi4, it will ask you the passphrase. <br> <br>
          Setting a passphrase will add another layer of security, brut forcing rsa keys need a lot of ressource so an attacker won't
          try to brut force your private key, but if he steals your private key, the passphrase will slow down the attacker. <br> <br>
          Now you've generated the two keys in <code>/home/'pi4_host_name'/.ssh/</code>, public key: id_rsa.pub, private key: id_rsa, 
          take the private key with a secure way (best way is to store it in an usb key). <br> <br>
          Next step is to go on the machine you wanna use to connect on your pi4, take your private key (id_rsa) and place it in
          <code>/home/'your_machine_name'/.ssh/</code>. <br> <br>
          Try to connect on your pi4 with <code>ssh 'pi4_host_name'@'pi4_ip_address'</code>, it will ask you your passphrase (if you set one),
          there is one more thing to change on your pi4, if someone don't have any private key on their machine they use to connect on your pi4,
          they will use automatically your basic authentication. <br> <br>
          So you need to disable it to anyone that doesn't have the key can't use the basic
          authentication. <br> <br>
          Go on your pi4, use <code> sudo nano /etc/ssh/sshd_config</code> and set <code> PasswordAuthentication no</code> <br> <br>
          Now you can restart ssh service and your done ! <br> <br> 
          <code> sudo service ssh restart</code>
        </div>
      </section>
      <section id="port_forwarding">
        <div class="h2">Port forwarding</div>
        <div class="text">
          &#9888; In progress... &#9888;
        </div>
      </section>
      <section id="nginx&https">
        <div class="h2">NGINX & HTTPS</div>
        <div class="text">
          &#9888; In progress... &#9888;
        </div>
      </section>
      <section id="monitoring">
        <div class="h2">Monitoring 📺</div>
        <div class="h3">Grafana</div>
        <div class="text">
          &#9888; In progress... &#9888;
        </div>
        <div class="h3">Telegraf</div>
        <div class="text">
          &#9888; In progress... &#9888;
        </div>
      </section>
      <section id="chat">
        <div class="h2">Chat 🗣️</div>
        <div class="h3">Back-end</div>
        <div class="text">
          &#9888; In progress... &#9888;
        </div>
        <div class="h3">Front-end</div>
        <div class="text">
          &#9888; In progress... &#9888;
        </div>
      </section>
    </div>
    <footer></footer>
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
  margin-bottom: 1.5em;
}

img {
  width: 500px;
  height: auto;
  box-shadow: 0px 0px 30px 3px rgba(212, 215, 135, 0.15);
}

.text {
  font-size: 1.1em;
  margin-top: 3em;
  margin-bottom: 3em;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
}

code {
  background-color: #111;
  color: rgb(0, 153, 0);
  padding: 1px;
}

.close_button {
  display: none;
}

footer {
  grid-column: 1 / 3;
}

nav {
  white-space: nowrap;
  background: #37474F;
  width: 195px;
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
@media screen and (max-device-width: 780px) {
  .grid {
    display: block;
    margin-top: 3rem;
  }
  .h1 {
    font-size: 2em;
    margin-top: 1.5em;
  }
  section, img, .text {
    width: 95vw;
    margin-left: auto;
    margin-right: auto;
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