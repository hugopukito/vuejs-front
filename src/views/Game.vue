<template>
  <div class="main" id="main">
    <div class="playground-container">
      <canvas id="playground" class="playground"></canvas>
      <div v-if="isLoading" class="spinner"><Spinner/></div>
    </div>
    <div class="cat">
      <span v-if="!isLoading" @click="send">🐱</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Spinner from "@/components/Spinner.vue"

let socket
let isLoading = ref(true)

onMounted(() => {
  initSocket()
  initPlayground()
})

onBeforeUnmount(() => {
  socket.close()
})

function initPlayground() {
  var canvas = document.getElementById("playground");
  var context = canvas.getContext("2d");
}

function initSocket() {
  socket = new WebSocket(process.env.VUE_APP_GAME_URL)
  socket.onopen = () => {
    isLoading.value = false
  }
  socket.onmessage = (msg) => {
    console.log(msg.data)
  }
}

function send() {
  socket.send(JSON.stringify("test"))
}

</script>

<style scoped lang="less">
.main {
  height: calc(100vh - 60px);
  height: calc(100dvh - 60px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  .playground-container {
    position: relative;
    .spinner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
    canvas.playground {
      height: 600px;
      width: 1200px;
      border: 1px solid antiquewhite;
    }
  }

  .cat {
    height: 50px;
    width: 50px;
    font-size: 50px;
    span {
      cursor: pointer;
    }
  }
}
</style>
