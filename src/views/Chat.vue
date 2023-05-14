<template>
    <div class="main">
        <div class="h3"> Chat working with WebSockets !</div>
        <div class="chat">
            <ul class="messages" id="messages">
            </ul>
            <div v-if="isLoading" class="spinner">
                <Spinner/>
            </div>
            <div v-if="noMessages">
                <div style="color: yellow;"> Be the first to send a message !</div>
            </div>
        </div>
        <form :action="sendMessage" @click.prevent="onSubmit">
            <input v-model="message" type="text" placeholder="Enter message...">
            <input type="submit" value="Send" @click="sendMessage">
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Spinner from "@/components/Spinner.vue"

let message = ref("")
let socket
let noMessages = ref(false)
let isLoading = ref(true)

onMounted(() => {
    let msg_container = document.getElementById("messages")
    socket = new WebSocket(process.env.VUE_APP_CHAT_URL)
    socket.onopen = () => {
        isLoading.value = false
    }
    socket.onmessage = (msg) => {
        let msgData = JSON.parse(msg.data)
        if (!(msgData == null)) {
            noMessages.value = false
            const colors = msgData.color.split("/")
            const rgb = `rgb(${colors[0]},${colors[1]},${colors[2]}`
            let contentHtml = `<li class="message">
            <span style="color: ${rgb}"> ${msgData.name}</span>: ${msgData.message}</li>`
            msg_container.innerHTML += contentHtml
            scrollBottom()
        } else {
            noMessages.value = true
        }
    }
})

onBeforeUnmount(() => {
    socket.close()
})

function scrollBottom() {
    const elt = document.getElementById("messages")
    elt.scrollTop = elt.scrollHeight
}

function sendMessage() {
    const form = document.forms[0]
    const input_text = form.querySelector('input[type="text"]')
    input_text.focus()

    let userName = localStorage.getItem("userName")
    if (userName === null) {
        userName = "anonymous"
    }
    const msg = {
        "name": userName,
        "message": message.value
    }
    socket.send(JSON.stringify(msg))
    message.value = ""
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: 50px auto;
}
.chat {
    background: rgb(51, 51, 51);
}
form {
    display: flex;
    height: 30px;
    caret-color: white;
}
input[type=text], input[type=submit] {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;
    border: none;
}
input[type=text] {
    flex: 1;
    background-color: #333;
    font-size: 16px;
}
input::placeholder, input:focus {
    color: white;
    font-size: 16px;
    outline: none;
}
input:focus::placeholder {
  color: transparent;
}
input[type=submit] {
    background-color: rgb(122, 5, 168);
    color: white;
    font-weight: bold;
    padding-right: 13px;
    padding-left: 13px;
}
.spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.messages {
    height: 450px;
    margin: 0;
    padding: 0;
    overflow: auto;
    overflow-x: hidden;
    text-align: left;
}
:deep(.message) {
    font-size: 18px;
    list-style: none;
    padding: 5px;
}
:deep(.message):nth-child(odd) {
    background-color: rgb(31, 25, 37);
}
:deep(.message):nth-child(even) {
    background-color: rgb(15, 15, 15);
}
</style>

<style scoped>
@media screen and (max-device-width: 480px) {
  .main {
    width: 95vw;
  }
}
</style>
