<template>
    <div class="chat">
        <div class="h3"> Websocket chat </div>
        <div class="messages" id="messages">
        </div>
        <div v-if="isLoading" class="spinner">
            <Spinner/>
        </div>
        <div v-if="noMessages">
            <div style="color: yellow;"> Be the first to send a message !</div>
        </div>
    </div>
    <form :action="sendMessage" @click.prevent="onSubmit">
        <input v-model="name" type="text" placeholder="name">
        <input v-model="message" type="text" placeholder="message">
        <input type="submit" value="Send" @click="sendMessage">
    </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Spinner from "@/components/Spinner.vue"

let name = ref("")
let message = ref("")
let socket = ref(null)
let noMessages = ref(false)
let isLoading = ref(true)

onMounted(() => {
    let msg_container = document.getElementById("messages")
    socket = new WebSocket("ws://localhost:8080/websocket")
    socket.onopen = () => {
        isLoading.value = false
    }
    socket.onmessage = (msg) => {
        let msgData = JSON.parse(msg.data)
        if (!(msgData == null)) {
            noMessages.value = false
            console.log(msgData.color)
            const colors = msgData.color.split("/")
            const rgb = `rgb(${colors[0]},${colors[1]},${colors[2]}`
            let contentHtml = `<div class="message">
            <span style="color: ${rgb}"> ${msgData.name}</span>: ${msgData.message}</div>`
            msg_container.innerHTML += contentHtml
            scrollBottom()
        } else {
            noMessages.value = true
        }
    }
})

function scrollBottom() {
    const elt = document.getElementById("messages")
    elt.scrollTop = elt.scrollHeight
}

function sendMessage() {
    let msg = {
        "name": name.value,
        "message": message.value
    }
    socket.send(JSON.stringify(msg))
    message.value = ""
}
</script>

<style scoped>

.chat {
    position: relative;
    background: rgb(51, 51, 51);
    width: 30vw;
    min-height: 300px;
    margin: 0 auto;
    margin-top: 50px;
}
.h3 {
    margin-top: 20px;
}
.spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.messages {
    height: 250px;
    overflow: auto;
    overflow-x: hidden;
    text-align: left;
}
::v-deep .message {
    margin-top: 10px;
}
</style>