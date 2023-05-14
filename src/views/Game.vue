<template>
  <div class="main" id="main">
    <div class="playground-container">
      <canvas id="playground" class="playground" :height="height" :width="width"></canvas>
      <div v-if="isLoading" class="spinner"><Spinner/></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Spinner from "@/components/Spinner.vue"

const height = 600
const width = 1200
const xOffset = 3
const yOffset = 30

let socket
let context
let isLoading = ref(true)
let playerId
let players = []

onMounted(() => {
  initSocket()
  initPlayground()
  window.addEventListener('keydown', handleKeyDown);
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

  context.fillStyle = "rgb(32, 32, 32)"
  context.fillRect(0, 0, width, height)

  context.font = "30px Arial"
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
      playerId = json.id
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
}

function drawPlayers() {
  context.clearRect(0, 0, width, height);
  players.map(p => {
    context.fillText("🐝", p.position.x + xOffset, p.position.y + yOffset)
  })
}

function sendPlayer(player) {
  socket.send(JSON.stringify(player))
}

function handleKeyDown(event) {
  const foundPlayer = players.find(p => p.id == playerId)
  const position = foundPlayer.position
  let player = {
    id: playerId,
    position: position
  }
  switch (event.key) {
    case 'z':
    case 'ArrowUp':
      player.position.y -= 5
      sendPlayer(player)
      break;
    case 'q':
    case 'ArrowLeft':
      player.position.x -= 5
      sendPlayer(player)
      break;
    case 's':
    case 'ArrowDown':
      player.position.y += 5
      sendPlayer(player)
      break;
    case 'd':
    case 'ArrowRight':
      player.position.x += 5
      sendPlayer(player)
      break;
    default:
      break;
  }
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
      border: 1px solid antiquewhite;
    }
  }
}
</style>
