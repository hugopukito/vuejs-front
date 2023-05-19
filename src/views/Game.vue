<template>
  <div class="main" id="main">
    <div class="top">
      <div class="h3"> Multiplayer Low latency game 😋 !</div>
      <div class="new-player">
        <a href="/game" onclick="window.open(this.href, 'new', 'popup'); return false;">Another one</a>
      </div>
    </div>
    <div class="playground-container">
      <canvas id="playground" class="playground" :height="height" :width="width"></canvas>
      <div v-if="isLoading" class="spinner"><Spinner :size="40" :color="'purple'"/></div>
      <div v-if="isError" class="error">Error</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Spinner from "@/components/Spinner.vue"

const height = 600
const width = 1200

let socket
let context
let isLoading = ref(true)
let isError = ref(false)
let currentPlayer
let players = []
let keys = {}

onMounted(() => {
  initSocket()
  initPlayground()
  gameLoop()
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
})

onBeforeUnmount(() => {
  socket.close()
  window.removeEventListener('keydown', handleKeyDown);
})

function initPlayground() {
  var canvas = document.getElementById("playground")
  context = canvas.getContext("2d")

  canvas.height = height;
  canvas.width = width;

  context.font = "34px Arial"

  context.fillStyle = "rgb(191, 161, 161)"
  context.fillRect(0, 0, width, height)
}

function initSocket() {
  socket = new WebSocket(process.env.VUE_APP_GAME_URL)
  socket.onopen = () => {
    isLoading.value = false
  }
  socket.onmessage = (msg) => {
    let json = JSON.parse(msg.data)
    if ('delete' in json) {
      players = players.filter(p => p.id != json.id)
    } else if ('current' in json) {
      currentPlayer = players.find(p => p.id == json.player.id)
    } else {
      if (!Array.isArray(json)) {
        json = [json]
      }
      json.forEach(j => {
        const index = players.findIndex(p => p.id == j.id)
        if (index != -1) {
          players[index] = j
        } else {
          players.push(j)
        }
      })
    }
    drawPlayers()
  }
  socket.onerror = () => {
    players = []
    isError.value = true
    isLoading.value = false
    context.fillRect(0, 0, width, height)
  }
  socket.onclose = () => {
    players = []
    context.fillRect(0, 0, width, height)
    setTimeout(() => {
      isError.value = true
    }, 500)
  }
}

function drawPlayers() {
  context.fillRect(0, 0, width, height);
  players.map(p => {
    context.strokeText(p.emoji, p.position.x, p.position.y);
  })
}

function sendPlayer(player) {
  socket.send(JSON.stringify(player))
}

function gameLoop() {
  // LEFT
  if (keys[37] || keys[81]) {
    currentPlayer.position.x = (currentPlayer.position.x - 2 + width) % width;
    sendPlayer(currentPlayer);
  }
  // RIGHT
  if (keys[39] || keys[68]) {
    currentPlayer.position.x = (currentPlayer.position.x + 2) % width;
    sendPlayer(currentPlayer);
  }
  // UP
  if (keys[38] || keys[90]) {
    currentPlayer.position.y = (currentPlayer.position.y - 2 + height) % height;
    sendPlayer(currentPlayer);
  }
  // DOWN
  if (keys[40] || keys[83]) {
    currentPlayer.position.y = (currentPlayer.position.y + 2) % height;
    sendPlayer(currentPlayer);
  }
  
  requestAnimationFrame(gameLoop)
}

function handleKeyDown(event) {
  keys[event.keyCode] = true
  switch (event.keyCode) {
    case 38: // UP arrow key
    case 40: // DOWN arrow key
      event.preventDefault() // Prevent scrolling
      break;
    default:
      // Allow default behavior for other keys
      break;
  }
}

function handleKeyUp(event) {
  delete keys[event.keyCode]
}
</script>

<style scoped lang="less">
.main {
  .top {
    height: 90px;
    margin-top: 30px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .new-player {
      a {
        color: antiquewhite;
        &:hover {
          cursor: pointer;
          color: coral;
        }
      }
    }
  }
  .playground-container {
    // calc base on .navbar (60px) + .top (120px)
    height: calc(100vh - 180px);
    height: calc(100dvh - 180px);

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    .spinner, .error {
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
    .error {
      color: purple;
      font-size: 30px;
    }
    canvas.playground {
      border: 1px solid antiquewhite;
    }
  }
}
</style>
