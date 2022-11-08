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
        </ul>
    </nav>
    <div id="main" class="main">
      <div class="h1"> Deploy your website </div>
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
            the simple command <div class="code">ip a</div> To get the local ip address of your pi4 to access it later.
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
          to dev on it by accessing to the same terminal of your real pi4 machine with SSH protocol. Use the command bellow :
          <div class="code"> ssh 'pi4HostName'@'pi4Ip'</div>
          In my case :
          <div class="code"> ssh pukito@192.168.0.27</div>
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
          To generate those keys, you will need to use the command : <div class="code"> ssh-keygen</div>
          Then they will ask you a file to save the public and private key, just press Enter. You will need to enter a passphrase, it's up to you,
          if you feel like your private key won't be stolen, just press Enter. If you set a passphrase, each time you will try to connect
          with ssh on your pi4, it will ask you the passphrase. <br> <br>
          Setting a passphrase will add another layer of security, brut forcing rsa keys need a lot of ressource so an attacker won't
          try to brut force your private key, but if he steals your private key, the passphrase will slow down the attacker. <br> <br>
          Now you've generated the two keys in <div class="code">/home/'pi4HostName'/.ssh/</div>, public key: id_rsa.pub, private key: id_rsa, 
          take the private key with a secure way (best way is to store it in an usb key). <br> <br>
          Next step is to go on the machine you wanna use to connect on your pi4, take your private key (id_rsa) and place it in
          <div class="code">/home/'yourMachineName'/.ssh/</div>
          Try to connect on your pi4 with : <div class="code">ssh 'pi4HostName'@'pi4Ip'</div> It will ask you your passphrase (if you set one),
          there is one more thing to change on your pi4, if someone don't have any private key on their machine they use to connect on your pi4,
          they will use automatically your basic authentication. <br> <br>
          So you need to disable it to anyone that doesn't have the key can't use the basic
          authentication. <br> <br>
          Go on your pi4, use <div class="code"> sudo nano /etc/ssh/sshd_config</div> And set <div class="code"> PasswordAuthentication no</div>
          Now you can restart ssh service and your done !
          <div class="code"> sudo service ssh restart</div>
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
          Try to open a terminal on your local machine, instead of <div class="code">ssh 'pi4HostName'@'pi4Ip'</div> Try using
          <div class="code"> ssh 'pi4HostName'@'yourBoxIp'</div>
          You should be able to access your pi4 with another internet connection and access it from anywhere ✨ <br> <br>
          You can forward other ports, so everything which is running on a certain port locally on your pi4 can be access from anywhere ! <br> <br>
          If you're running an api on port 8080, forward this port, put pi4 local ip address, then type 'yourBoxIp':8080 and
          you will be able to access your api running on your pi4 without being connected on your local network 🙃 <br> <br>
          If you type 'yourBoxIp' without specifying any port behind, it gonna use the port 80. <br> <br>
          Forward the port 80 of your box on the port 80 of your pi4, run a little program on you pi4 like "node.js" on port 80 
          and provide an index.html file. <br> <br>
          Type 'yourBoxIp', you should see your index.html 😋
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
          Now you can try on your local machine <div class="code"> ssh 'pi4HostName'@'yourDomainName'</div>
          If you type your domain name on google's search bar, you should see your fresh index.html 🧊 <br> <br>
          You don't need anymore your box internet ip address and can give your domain name to your friends 😋
        </div>
      </section>
      <section id="nginx">
        <div class="h2">NGINX 🛣️</div>
        <div class="text">
          By accessing your ip with your DNS, you get on the port 80 by default, if you want to access a service
          running on another port, for example port 8080, you need to type 'yourDns':8080, you also need to
          add port 8080 on port forwarding on your internet box configuration, it can be pretty anoying if you
          want to add different services on your pi4. <br> <br>
          Thanks to a reverse proxy, you can do some routing on your DNS ! <br> <br>
          Imagine you're running your golang api on localhost:8080, you want to access it with your DNS by typing
          'yourDns'/api (for example). <br> <br>
          By running NGINX on your pi4, you will be able to configure all 
          routes to go on your local services. <br> <br>
          NGINX will run on your port 80 by default, you will first configure the default route to give your
          index.html 🧊. So when a user will type your DNS, it will go on your port 80, then go on your NGINX
          and will route to your index.html.
          <div class="code">sudo apt install nginx</div>
          Now you need to go in nginx directory and create your own conf file for your website.
          <div class="code">cd /etc/nginx/sites-enabled/</div>
          <div class="code">cd /etc/nginx/sites-available/</div>
          Remove everything in those folders, create a file named with your DNS (for me it's hugopukito.com).
          <div class="code">cd /etc/nginx/sites-enabled/ && touch 'yourDns'</div>
          And create a link between sites-enabled and sites-available so you don't need to duplicate this file.
          <div class="code">ln -s /etc/nginx/sites-enabled/'yourDns' /etc/nginx/sites-available/</div>
          Now everything you add in this file (mine is hugopukito.com) will be used by nginx as a conf file, 
          you can now put your index.html like so :
          <div class="code" style="text-align:left;">
            server { <br>
              &ensp; listen 80; <br>
              &ensp; location / { <br>
              &ensp; &ensp; root /home/'yourWorkDir'/website; <br> 
              &ensp;&ensp;} <br>
            } <br>
          </div>
          Go in your working directory and create a folder 'website' with the index.html in it,
          then you need to reload nginx and you type your dns.
          <div class="code">sudo systemctl reload nginx</div>
          You should see your index.html 🧊 like before ! 😋 <br> <br>
          Let's return to our basic example, we want to add a route to our service running on port 8080. <br> <br>
          This service running on port 8080 is our api, so we will add a route in the nginx conf for it.
          <div class="code" style="text-align:left;">
            server { <br>
              &ensp; listen 80; <br> <br>
              &ensp; root /home/'yourWorkDir'/website; <br> <br>
              &ensp; location /api { <br>
              &ensp; &ensp; rewrite  ^/api/(.*)  /$1 break; <br>
              &ensp; &ensp; proxy_pass http://127.0.0.1:8080; <br> 
              &ensp;&ensp;} <br>
            } <br>
          </div>
          We add the route /api in our conf, '127.0.0.1' refer to 'localhost'. The proxy pass will pass
          all request on our DNS with /api on our service running on local on port 8080. <br> <br>
          To get proper route rewriting calling the intern routes of your api, you can use the rewrite option. <br> <br>
          Notice that you don't really need to specify the '/' location for the root route. <br> <br>
          Personnally, I need to type 'hugopukito.com/api' to access my api running locally on port 8080 <br> <br>
          Try typing 'yourDns'/api, you should see the response from your api printing ! 🐯 <br> <br>
          You can create as many services as you want and route then with NGINX ✨ <br> <br>
        </div>
      </section>
      <section id="https">
        <div class="h2">HTTPS 🔒</div>
        <div class="text">
          Once your website is running with different services, you may want to use https instead of http. <br> <br>
          This can be done for free by using a program called Let's encrypt. <br> <br>
          Let's install the certbot tool made by them and get into it.
          <div class="code">sudo apt install certbot</div> 
          This tool will generate a 3 month certificate that ensure data transiting on your website is encrypted. <br> <br>
          Make sure to stop nginx before launching the command, this bot will test your 80 port, so it need to be free <br> <br>
          <div class="code">sudo systemctl stop nginx</div>
          <div class="code">sudo certbot certonly --standalone --preferred-challenges http-01 -d 'yourDns'</div>
          Now you've got ssl certificate and the key with it, you will need to specify the location of those files
          in your nginx conf.
          <div class="code" style="text-align:left;">
            server { <br>
              &ensp; listen 80; <br>
              &ensp; server_name 'yourDns' <br>
              &ensp; return 301 https://$server_name$request_uri; <br>
            } <br> <br>
            server { <br>
              &ensp; listen 443 ssl http2; <br>
              &ensp; server_name 'yourDns' <br> <br>
              &ensp; ssl_certificate /etc/letsencrypt/live/'your Dns'/fullchain.pem; <br>
              &ensp; ssl_certificate_key /etc/letsencrypt/live/'your Dns'/privkey.pem; <br> <br>
              &ensp; root /home/'yourWorkDir'/website; <br>
            } <br>
          </div>
          Now all request comming on port 80 (http) will be redirect on port 443 (https), you should see
          the green padlock before the url of your website on your browser once your restarted nginx. <br> <br>
          You will need to regenerate your certificate because it expire every 3 months, 
          you can do it 1 month before it expire with this command, don't forget to stop nginx before <br> <br>
          <div class="code">sudo systemctl stop nginx</div>
          <div class="code">sudo certbot renew</div>
          There is one last thing to take into considaration, all your services are still running with http except
          your website. The api we routed before don't have any certificate link to it. <br> <br>
          There is a trick to pass the request made to the api in https from users to http in local.
          <div class="code" style="text-align:left;">
            server { <br>
              &ensp; listen 80; <br>
              &ensp; server_name 'yourDns' <br>
              &ensp; return 301 https://$server_name$request_uri; <br>
            } <br> <br>
            server { <br>
              &ensp; listen 443 ssl http2; <br>
              &ensp; server_name 'yourDns' <br> <br>
              &ensp; ssl_certificate /etc/letsencrypt/live/'your Dns'/fullchain.pem; <br>
              &ensp; ssl_certificate_key /etc/letsencrypt/live/'your Dns'/privkey.pem; <br> <br>
              &ensp; root /home/'yourWorkDir'/website; <br> <br>
              &ensp; location /api { <br>
              &ensp; &ensp; rewrite  ^/api/(.*)  /$1 break; <br>
              &ensp; &ensp; proxy_pass http://127.0.0.1:8080; <br> 
              &ensp; &ensp; proxy_set_header Host $host; <br>
              &ensp; &ensp; proxy_set_header X-Real-IP $remote_addr; <br>
              &ensp; &ensp; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; <br>
              &ensp; &ensp; proxy_set_header X-Forwarded-Proto https; <br>
              &ensp;&ensp;} <br>
            } <br>
          </div>
          Now you can fully use https 🔒 with all your services ! ✨
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

.code {
  background-color: #1e1e3f;
  color: #9efeff;
  padding: 10px;
  border-radius: 10px;
  font-family: monospace;
  font-size: 0.8em;
  margin: 20px 0;
  text-align: start;
}

.text {
  font-size: 1.2em;
  margin-top: 3em;
  margin-bottom: 3em;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  text-align: start;
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
    width: 90vw;
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