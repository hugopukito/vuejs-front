<template>
  <div class="h1">
    Custom Keyboard ⌨️
  </div>
  <div class="resume">
    Learn how to build a custom Keyboard from scratch
  </div>
  <img src="@/assets/keyboard.png">
  <div class="h3">
    I'll describe in each section the different elements you'll need to
    build this custom keyboard <br>
  </div>
  <div class="text">
    Be aware of the compatibility between components you'll choose, there are plenty of possibilities
    for each element in a keyboard. <br> <br>
    I'll give the reference of each element I use to make my keyboard. <br> <br>
    Mine is a 65% ISO-FR keyboard, didn't found any seller of this size combined with this layout 😭
  </div>
  <div class="h2">
    PCB
  </div>
  <div class="text">
    To make the link between where you're typing on the keyboard and your computer, 
    you'll need a Printed Circuit Board <br> <br>
    There are different size and layout of PCB, I'll explain everything. <br> <br>
  </div>
  <div class="text">
    The size means the numbers of keys you want on your keyboard, 100% is a full keyboard, 
    mine is a 65%, no number pad and function row. More info 
    <a href="https://switchandclick.com/keyboard-sizes/" target="_blank"> here </a> <br> <br>
    The layout depends on your country, if you're used to manipulate a qwerty keyboard, your layout is ANSI. <br> <br>
    Otherwise, you probably need an ISO layout, in my case I choosed an ISO-FR layout (because I'm 🇫🇷).
  </div>
  <div class="text">
    The last parameter to take into account is how you'll fix your keys on your keyboards. <br> <br>
    When you'll press a key, the switch will make contact and give electricity on a specific place of your PCB,
    then your computer will recognize the key you pressed. <br> <br>
    So you need to fix the switch (part of the keys, we'll see later) on your PCB, you can solder it or just plug it. <br> <br>
    I recommand taking the hotswap version, so you can easily take in and off switches from the PCB. <br> <br>
    If you're an old school, maybe you'll prefer to solder every single switch to your PCB.
  </div>
  <img src="@/assets/PCB.png">
  <div class="text">
    The PCB I choosed is the CK65 (rgb 🌈) from candykey, it's a 65%, ISO-FR and hot swappable PCB. Reference 
    <a href="https://candykeys.com/product/ck65-iso-pcb-hotswap" target="_blank"> here </a>
  </div>
  <div class="h2">
    Case
  </div>
  <div class="text">
    Now you've found what type of keyboard you want to build, you can choose the house of your PCB. <br> <br>
    What you'll need to buy is the case, you can choose between different materials (plastic, wood, aluminium & resin). <br> <br>
    There are plenty of cases for the 65% keyboards, it depends on your preferences, examples 
    <a href="https://kbdfans.com/collections/case" target="_blank"> here </a>
  </div>
  <div class="text" style="color: rgb(252, 58, 58)">
    <span>&#9888;</span> Be aware of the screw holes on the PCB matching the case <span>&#9888;</span>
  </div>
  <img src="@/assets/case_recto.png">
  <img src="@/assets/case_verso.png">
  <div class="text">
    My case, aluminium (raiseable)
    <a href="https://kprepublic.com/collections/case/products/anodized-aluminium-flat-case-with-metal-feet-for-
custom-mechanical-keyboard-black-siver-grey-red-blue-colorway-for-xd68-65" target="_blank"> here </a>
  </div>
  <div class="h2">
    Plate
  </div>
  <div class="text">
    <span>&#9888;</span> In progress... <span>&#9888;</span>
  </div>
  <div class="h2">
    Switches
  </div>
  <div class="text">
    <span>&#9888;</span> In progress... <span>&#9888;</span>
  </div>
  <div class="h2">
    Keycaps
  </div>
  <div class="text">
    <span>&#9888;</span> In progress... <span>&#9888;</span>
  </div>
  <div class="h2">
    Cable
  </div>
  <div class="text">
    <span>&#9888;</span> In progress... <span>&#9888;</span>
  </div>
  <div class="h2">
    Grease
  </div>
  <div class="text">
    <span>&#9888;</span> In progress... <span>&#9888;</span>
  </div>
  <div class="h2">
    Foam
  </div>
  <div class="text">
    <span>&#9888;</span> In progress... <span>&#9888;</span>
  </div>
  <div class="h2">
    Software
  </div>
  <div class="text">
    <span>&#9888;</span> In progress... <span>&#9888;</span>
  </div>
</template>

<style scoped>
.h3 {
  margin-bottom: 3em;
}

img {
  margin-bottom: 3em;
  margin-right: 1em;
  width: 500px;
  height: auto;
  box-shadow: 0px 0px 30px 3px rgba(212, 215, 135, 0.2);
}

.resume {
  font-size: 1.6em;
  margin-top: 2em;
  margin-bottom: 2.5em;
  border-style: solid;
  box-shadow: 0px 0px 30px 10px rgba(202, 202, 212, 0.2);
  margin: 2em auto 2.5em;
  width: 35vw;
  padding: 1em;
}

.text{
  font-size: 1.1em;
  margin-bottom: 3em;
}
</style>

<style scoped>
@media screen and (max-device-width: 480px) {
  .resume {
    width: 75vw;
    padding: 0.5em;
  }
  img, .text, .h3 {
    width: 95vw;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>