<template>
  <div class="h1">
    Custom Keyboard ⌨️
  </div>
  <div class="resume">
    Learn how to build a 65% ISO-FR keyboard from scratch
  </div>
  <img src="@/assets/keyboard/keyboard.png">
  <div class="h3">
    I'll describe in each section the different elements you'll need to
    build this custom keyboard
  </div>
  <div class="text">
    Be aware of the compatibility between components you'll choose, there are plenty of possibilities
    for each element in a keyboard. <br> <br>
    I'll give the reference of each element I used to make my keyboard.
    Mine is a 65% ISO-FR keyboard, didn't found any seller of this size combined with this layout 😭
  </div>
  <div class="h2">
    PCB
  </div>
  <div class="text">
    To make the link between where you're typing on the keyboard and your computer, 
    you'll need a Printed Circuit Board. There are different size and layout of PCB, I'll explain everything.
  </div>
  <div class="text">
    The size means the numbers of keys you want on your keyboard, 100% is a full keyboard, 
    mine is a 65%, no number pad and function row. More info 
    <a href="https://switchandclick.com/keyboard-sizes/" target="_blank"> here</a>. <br> <br>
    The layout depends on your country, if you're used to manipulate a qwerty keyboard, your layout is ANSI.
    Otherwise, you probably need an ISO layout, in my case I choosed an ISO-FR layout (because I'm 🇫🇷).
  </div>
  <div class="text">
    The last parameter to take into account is how you'll fix your keys on your keyboards.
    When you'll press a key, the switch will make contact and give electricity on a specific place of your PCB,
    then your computer will recognize the key you pressed.
    So you need to fix the switch (part of the keys, we'll see later) on your PCB, you can solder it or just plug it. <br> <br>
    I recommend taking the hotswap version, so you can easily take in and off switches from the PCB.
    If you're an old school, maybe you'll prefer to solder every single switch to your PCB.
  </div>
  <img src="@/assets/keyboard/PCB.png">
  <div class="text">
    The PCB I choosed is the CK65 (rgb 🌈) from candykey, it's a 65%, ISO-FR and hot swappable PCB. Reference 
    <a href="https://candykeys.com/product/ck65-iso-pcb-hotswap" target="_blank"> here</a>.
  </div>
  <div class="text" style="color: rgb(252, 58, 58)">
    &#9888; Before going any further, test every single key (go on Testing section) &#9888;
  </div>
  <div class="h2">
    Case
  </div>
  <div class="text">
    Now you've found what type of keyboard you want to build, you can choose the house of your PCB. <br> <br>
    What you'll need to buy is the case, you can choose between different materials (plastic, wood, aluminium & resin).
    There are plenty of cases for the 65% keyboards, it depends on your preferences, examples 
    <a href="https://kbdfans.com/collections/case" target="_blank"> here</a>.
  </div>
  <div class="text" style="color: rgb(252, 58, 58)">
    &#9888; Be aware of the screw holes on the PCB matching the case &#9888;
  </div>
  <div class="text">
    My case, aluminium (raiseable)
    <a href="https://kprepublic.com/collections/case/products/anodized-aluminium-flat-case-with-metal-feet-for-
custom-mechanical-keyboard-black-siver-grey-red-blue-colorway-for-xd68-65" target="_blank"> here</a>.
  </div>
  <img src="@/assets/keyboard/case_recto.png">
  <img src="@/assets/keyboard/case_verso.png">
  <div class="h2">
    Plate
  </div>
  <div class="text">
    You can't just put the keys on the pcb without anything, you need a layer between switches and PCB.
    Switches will be more stable and you won't see the PCB behind your keys when the keyboard will be assembled,
    that's why you need a plate (at least in this build). <br> <br>
    I highly recommend to put an extra foam between the plate and the PCB. It will reduce the sound of the keys and improve
    the stability of your keyboard by filling the void between the plate and the pcb. Example bellow.
  </div>
  <img src="@/assets/keyboard/mounting.png">
  <div class="text">
    Bellow my plate with the ref 
    <a href="https://kbdfans.com/collections/65-layout-plate/products/65-cnc-aluminum-plate" target="_blank"> here</a>.
  </div>
  <img src="@/assets/keyboard/plate.jpg">
  <div class="text">
    And the additionnal foam with the ref 
    <a href="https://fr.aliexpress.com/item/1005003001766783.html?spm=a2g0o.order_list.0.0.10235e5bwAB5Es
&gatewayAdapt=glo2fra" target="_blank"> here</a>.
  </div>
  <img src="@/assets/keyboard/PCB_foam.jpg">
  <div class="h2">
    Switches
  </div>
  <div class="text">
    Next step is to choose what type of switch you want, only depends on your tastes.
    There are two types of switch, linear and tactile (and clicky). A link of the difference between switches 
    <a href="https://www.mechanical-keyboard.org/switch-types/" target="_blank"> here</a>.  <br> <br>
    I recommend checking a sound test of the different switches, personally I prefer linear ones, most used linear switch
    are the red switch (mx cherry red), I wanted to get the silent version, so I took the pink switches. Link
    <a href="https://fr.aliexpress.com/item/32950361232.html?spm=a2g0o.order_list.0.0.10235e5b67dMJJ
&gatewayAdapt=glo2fra" target="_blank"> here</a>.
  </div>
  <img src="@/assets/keyboard/switch.png">
  <div class="text" style="color: rgb(252, 58, 58)">
    &#9888; Most important part if you want to get the best sound from your keyboard ! &#9888;
  </div>
  <div class="text">
    If there is one part you really need to follow, this one can't be skipped. Lube your fcking switch, please 🙃 <br> <br>
    The difference between lube switch and non-lube one is huge, the sound will change a lot, the sensation of scraping 
    will be gone, it takes a lot of time but that's really worth it. A link to materials 
    <a href="https://fr.aliexpress.com/item/1005003263621064.html?spm=a2g0o.order_list.0.0.10235e5b77kcmT
&gatewayAdapt=glo2fra" target="_blank"> here </a> and lube 
    <a href="https://www.etsy.com/fr/listing/974317624/5-grammes-krytox-gpl-205-g0-pour?click_key=03f683c
3a3c02832bf19aec5833849e0267167bf%3A974317624&click_sum=f9bb387c&ref=shop_home_feat_1&sts=1" target="_blank"> here</a>. <br> <br>
    Lubing a switch isn't too complicated, but don't put to much on it, link to a youtube tutorial 
    <a href="https://www.youtube.com/watch?v=3CvcycYHsOw" target="_blank"> here</a>.
  </div>
  <div class="text" style="color: rgb(252, 58, 58)">
    &#9888; Test all switch as well &#9888;
  </div>
  <div class="h2">
    Stabilizers
  </div>
  <div class="text">
    There are three keys on this layout which need a little bit of help for their stability. Those are the biggest keys of the keyboard,
    Enter, Space and Back key. If you don't put anything under those keys, they won't be stable and this gonna be annoying for you.
    You need to buy stabilizers but don't make the same mistake as me, they is two types of stabilizers, screw and no-screw. <br> <br>
    The PCB I took only have little holes to accept those stabilizers, you need to take stabilizers with screw or this will be not possible for 
    you to put other ones unless you glue them (not the best option 😅). Best stabilizers are 
    <a href="https://candykeys.com/product/durock-screw-in-stabilisers-V2" target="_blank"> here</a>, just take it. <br> <br>
  </div>
  <div class="text" style="color: rgb(252, 58, 58)">
    &#9888; You need to lube them as well ! &#9888;
  </div>
  <div class="text">
    If you don't lube your stabilizers, this will sound horrible, another link to do it 
    <a href="https://www.youtube.com/watch?v=-2dlAFt6SuA" target="_blank"> here</a>. <br> <br>
    Now you can clip stabilizers on the three keys, put screws in the holes by reversing your PCB and your done !
  </div>
    <img src="@/assets/keyboard/stabilizers.png">
  <div class="h2">
    Keycaps
  </div>
  <div class="text">
    Now you've assembled everything, you can choose the keycaps of your keyboard, things that you put on the switches.
  </div>
  <img src="@/assets/keyboard/assembled.png">
  <div class="text">
    Before choosing how your keyboard will render with nice keycaps, you need to know that if you took the ISO layout,
    you won't get a lot of possibilities. The only keycaps you'll find on aliexpress will be ANSI sets with additionnal
    keycaps to make it ISO compatible. A link of all ISO FR keycaps (with other ISO display), and mine as well
    <a href="https://azertykeycap.github.io/" target="_blank"> here</a>. <br> <br>
    If you want to create your own set of keycaps you can use wasdkeyboard website, link 
    <a href="https://www.wasdkeyboards.com/products/mechanical-keyboards/custom-printed-keyboards.html" target="_blank"> here</a>. <br> <br>
    Your last option is to subscribe to group buy, here you can find people asking to a constructor a specific layout of keycaps,
    if there are enough people interest by one layout, the constructor will product it in only one edition.
  </div>
  <div class="h2">
    Cable
  </div>
  <div class="text">
    Cable USB to type C isn't in the package of the PCB, you can buy a simple one or the same as me 
    <a href="https://fr.aliexpress.com/item/1005003636090168.html?spm=a2g0o.order_list.0.0.18755e5bxtLpXW&gatewayAdapt=glo2fra" target="_blank"> here</a>.
  </div>
  <div class="h2">
    Tape
  </div>
  <div class="text">
    Another way to reduce noisy sound of the keyboard is to put tape behind the PCB, you can also put a thin layer of between
    the PCB and the case, don't forget to make holes if you wan't to screw your PCB to your case at the end 😉
  </div>
  <img src="@/assets/keyboard/tape.png">
  <div class="h2">
    Testing and Flashing
  </div>
  <div class="text">
    One of the stressful part of building a keyboard is testing, I've encountered some problems during this build... <br> <br>
    You first need to test by making contact the two pins of your PCB with a contact clamp (don't forget to plug it 😂), for testing, I used a 
    website that also provide an open source tools we'll use later. Link 
    <a href="https://config.qmk.fm/" target="_blank"> here</a>. <br> <br>
    If one of your key isn't working, check the back of the PCB if there is any problem of soldering, personally on key was unsoldered.
    I used a soldering iron to fix my problem. Then when the PCB have been tested, you can test it while plugging switches one by one.
    Testing before addind the switch is the best way to save time, if you test everything at the end, it will be annoying to demount all components
    if the problem come from the PCB and not a switch. <br> <br>
    Next you will be able to flash your PCB and assign the keys the way you want. First download the tool 
    <a href="https://github.com/qmk/qmk_toolbox/releases" target="_blank"> here</a>. <br> <br>
    Then go to qmk website, choose your PCB (for me it was CK65), change the disposition as you want, compile, download the firmware.
    After launch the tool you've download, plug your PCB while pressing the esc key to enter in flash mode (not the only way to enter this mode).
    You should see a yellow text telling you that you entered flash mode. <br> <br>
    Now you need to select the MCU of your PCB, you can find it on the electronic chip (mine is atmega32u4). Click "flash" and your done ✨ <br> <br>
    A complete tutorial of flashing
    <a href="https://www.youtube.com/watch?v=fuBJbdCFF0Q" target="_blank"> here</a>.
  </div>
</template>

<style scoped>
.h3 {
  margin-bottom: 3em;
}

img {
  margin-bottom: 3em;
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
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
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
