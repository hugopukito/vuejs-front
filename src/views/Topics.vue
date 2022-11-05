<template>
  <div class="grid">
    <nav id="vertical_nav">
        <ul>
          <li class="close_button" @click="trigger_navbar">X</li>
          <li class="hardware&os" @click="trigger_navbar"><a href="#hardware&os">Hardware & OS ⚙️</a></li>
          <li class="ssh" @click="trigger_navbar"><a href="#ssh">SSH 🔌</a></li>
          <li class="ssh_keys" @click="trigger_navbar"><a href="#ssh_keys">SSH Keys 🔑</a></li>
          <li class="port_forwarding" @click="trigger_navbar"><a href="#port_forwarding">Port forwarding 🌐</a></li>
          <li class="dns" @click="trigger_navbar"><a href="#dns">DNS 🌎</a></li>
          <li class="nginx" @click="trigger_navbar"><a href="#nginx">NGINX 🛣️</a></li>
          <li class="https" @click="trigger_navbar"><a href="#https">HTTPS 🔒</a></li>
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
            🚧 If you've got message error "unable to read partition as fat",
            just destroy your SD card and buy another one. You can try to repair it by searching for solution, 
            in my case I couldn't do anything so I changed it. 🚧
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
        <div class="h2">Port forwarding 🌐</div>
        <div class="text">
          If you want to connect on your pi4 without being connected to your local network, you can enable port forwarding 
          on your internet provider's
          interface. You can access it by typing '192.168.0.1' or '192.168.1.1' (depends on your internet box). <br> <br>
          Your login should be 'admin' and the password usually is your wifi's password. <br> <br>
          Once you've logged in, you should see the IP address of your internet box, this one is unique and you're gonna need it for later. 
          Go on the section "port forwarding". <br> <br>
          Now you need to enter the port you want to forward, in our case, the port '22' for ssh. Then select "both protocol" and put pi4 
          local ip address. <br> <br>
          Try to open a terminal on your local machine, instead of <code>ssh 'pi4_host_name'@'pi4_ip_address'</code> try using <br> <br>
          <code> ssh 'pi4_host_name'@'your_internet_box_ip_address'</code> <br> <br>
          You should be able to access your pi4 with another internet connection and access it from anywhere ✨ <br> <br>
          You can forward other ports, so everything which is running on a certain port locally on your pi4 can be access from anywhere ! <br> <br>
          If you're running an api on port 8080, forward this port, put pi4 local ip address, then type 'your_internet_box_ip_address':8080 and
          you will be able to access your api running on your pi4 without being connected on your local network 🙃 <br> <br>
          If you type 'your_internet_box_ip_address' without specifying any port behind, it gonna use the port 80. <br> <br>
          Forward the port 80 of your box on the port 80 of your pi4, run a little program on you pi4 like "node.js" on port 80 
          and provide an index.html file. <br> <br>
          Type 'your_internet_box_ip_address', you should see your index.html 😋
        </div>
      </section>
      <section id="dns">
        <div class="h2">DNS 🌎</div>
        <div class="text">
          Typing your box internet ip address can be anoying, especially if you want to present your fresh index.html to someone 🧊 <br> <br>
          Buying a domain name and put it on your ip address is really simple and cheap (7💲 a year) <br> <br>
          That's how I did to make 'hugopukito.com' use my box internet 
          ip address so you can access this website (running on port 80 with port forwarding). <br> <br>
          I used <a href="https://www.namecheap.com/" target="_blank"> name cheap </a> to buy my domain name, once you found a name available, 
          buy it, select it and go to "Advanced DNS".
        </div>

        <img src="@/assets/topics/name_cheap.png">

        <div class="text">
          Replace the hidden value by your box internet ip address and "hugopukito.com" by your domain name <br> <br>
          Now you can try on your local machine <code> ssh 'pi4_host_name'@'your_domain_name'</code> <br> <br>
          If you type your domain name on google's search bar, you should see your fresh index.html 🧊 <br> <br>
          You don't need anymore your box internet ip address and can give your domain name to your friends 😋
        </div>
      </section>
      <section id="nginx">
        <div class="h2">NGINX 🛣️</div>
        <div class="text">
          By accessing your ip with your DNS, you get on the port 80 by default, if you want to access a service
          running on another port, for example port 8080, you need to type 'your_dns':8080, you also need to
          add port 8080 on port forwarding on your internet box configuration, it can be pretty anoying if you
          want to add different services on your pi4. <br> <br>
          Thanks to a reverse proxy, you can do some routing on your DNS ! <br> <br>
          Imagine you're running your golang api on localhost:8080, you want to access it with your DNS by typing
          'your_dns'/api (for example). <br> <br>
          By running NGINX on your pi4, you will be able to configure all 
          routes to go on your local services. <br> <br>
          NGINX will run on your port 80 by default, you will first configure the default route to give your
          index.html 🧊. So when a user will type your DNS, it will go on your port 80, then go on your NGINX
          and will route to your index.html. <br> <br>
          <code>sudo apt install nginx</code> <br> <br>
          Now you need to go in nginx directory and create your own conf file for your website. <br> <br> 
          <code>cd /etc/nginx/sites-enabled/</code> <br> <br> 
          <code>cd /etc/nginx/sites-available/</code> <br> <br> 
          Remove everything in those folders, create a file named with your DNS (for me it's hugopukito.com) <br> <br>
          <code>cd /etc/nginx/sites-enabled/ && touch 'your_dns'</code> <br> <br>
          And create a link between sites-enabled and sites-available so you don't need to duplicate this file. <br> <br>
          <code>ln -s /etc/nginx/sites-enabled/'your_dns' /etc/nginx/sites-available/</code> <br> <br>
          🚧 In progress... 🚧
          <!-- Now everything you add in this file (mine is hugopukito.com) will be used by nginx as a conf file, 
          you can now put your index.html like so :
          <pre>
          <code style="display:block;">http {
            server {
              listen 80;
              location / 
                {
                  root /www/data;
                }
              }
            }</code>
          </pre> -->
        </div>
      </section>
      <section id="https">
        <div class="h2">HTTPS 🔒</div>
        <div class="text">
          🚧 In progress... 🚧
        </div>
      </section>
      <section id="monitoring">
        <div class="h2">Monitoring 📺</div>
        <div class="h3">Grafana</div>
        <div class="text">
          🚧 In progress... 🚧
        </div>
        <div class="h3">Telegraf</div>
        <div class="text">
          🚧 In progress... 🚧
        </div>
      </section>
      <section id="chat">
        <div class="h2">Chat 🗣️</div>
        <div class="h3">Back-end</div>
        <div class="text">
          🚧 In progress... 🚧
        </div>
        <div class="h3">Front-end</div>
        <div class="text">
          🚧 In progress... 🚧
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