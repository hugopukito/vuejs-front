<template>
  <div class="box">
    <div @click="trigger_navbar()" style="margin-left: 1rem"> 
      <font-awesome-icon icon="fa-solid fa-bars" size="xl" /> 
    </div>
    <img class="luffy" src="@/assets/luffy.png">
  </div>
  <div class="nav-bar" @click="trigger_navbar()" :class="{ hide: hide }">
    <div class="router-links">
      <router-link to="/" > Home </router-link>
      <router-link to="/topics"> Topics </router-link>
      <router-link to="/keyboard"> Keyboard </router-link>
      <router-link to="/monitoring"> Monitoring </router-link>
      <router-link to="/chat"> Chat </router-link>
      <router-link to="/game">
        <span class="game-link"> Game 🕹️ </span>
      </router-link>
    </div>
    <div class="auth" v-if="userName === null">
      <div class="router-link" @click="openSignup()"> Sign up </div>
      <div class="router-link" @click="openSignin()"> Sign in </div>
    </div>
    <div class="auth" v-else>
      <div class="router-link"> {{ userName }} </div>
      <div class="router-link" @click="logout()"> Sign out </div>
    </div>
  </div>
  <div>
    <Signup @modal-boolean="closeSignup()" @signup-worked="closeSignup(); openSignin()" :isModalOpen="isSignupOpen"/>
    <Signin @modal-boolean="closeSignin()" @signin-worked="closeSignin(); signin()" :isModalOpen="isSigninOpen"/>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Signup from "./Signup.vue";
import Signin from "./Signin.vue";

const isSignupOpen = ref(false);
const isSigninOpen = ref(false);
let userName = ref(null);
let hide = ref(true)

onMounted(() => {
  userName.value = localStorage.getItem("userName");
})

function trigger_navbar() {
  hide.value = !hide.value
}

function signin(){
  userName.value = localStorage.getItem("userName");
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("token");
  userName.value = null;
}

function openSignup() {
  isSignupOpen.value = true;
}

function closeSignup() {
  isSignupOpen.value = false;
}

function openSignin() {
  isSigninOpen.value = true;
}

function closeSignin() {
  isSigninOpen.value = false;
}
</script>

<style scoped lang="less">
.nav-bar {
  height: 60px;
  
  display: flex;
  justify-content: space-between;

  background-color: #333;
}

.router-links, .auth {
  display: flex;
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    flex: 1;

    font-size: 1.25em;
    color: beige;
    padding: 14px;
    cursor: pointer;

    &:hover {
      background-color: #111;
    }
  }
}

.router-link-active {
  color: aquamarine;
}

.box {
  display: none;
}
</style>

<style scoped lang="less">
@media screen and (max-device-width: 500px) {
  .nav-bar {
    height: calc(100vh - 60px);
    height: calc(100dvh - 60px);
    width: 100vw;

    flex-direction: column;

    opacity: 1;
    transition: opacity 350ms, transform 350ms;
    transform: translateX(0);

    position: absolute;
    top: 60px;
    left: 0;
    z-index: 1;
  }
  .nav-bar.hide {
    opacity: 0;
    transform: translateX(-100%);
    pointer-events: none;
  }
  .router-links, .auth {
    flex-direction: column;
  }
  .box {
    display: flex;
    align-items: center;

    width: 100vw;
    height: 60px;
    background-color: #333;
  }
  .box img {
    width: auto;
    height: 60px;
  } 
  .luffy {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>