<template>
    <div class="chat">
        <div class="h3">Websocket chat</div>
        <div class="messages" id="messages">
          <div v-if="!isLoading">
            <div v-for="(msg, index) in msgs" :key="index">
                <div style="color: aquamarine;">{{ msg.name }}</div>
                <div style="color: orange;">{{ msg.message }}</div>
                <br>
            </div>
        </div>
        <div v-else class="spinner"><Spinner/></div>  
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
    <div class="test" id="test">
        test <br>test <br>test <br>test <br>test <br>
        test <br>test <br>test <br>test <br>test <br>test <br>test <br>
        test <br>test <br>test <br>test <br>test <br>
        test <br>test <br>test <br>test <br>test <br>
    </div>  
</template>

<script setup>
import { ref, onMounted } from "vue";
import Spinner from "@/components/Spinner.vue"

let name = ref("")
let message = ref("")
let socket = ref(null)
let msgs = []
let noMessages = ref(false)
let isLoading = ref(true)

onMounted(() => {
    socket = new WebSocket("ws://localhost:8080/websocket")
    socket.onmessage = (msg) => {
        isLoading.value = true
        if (!(JSON.parse(msg.data) == null)) {
            noMessages.value = false
            msgs.push(JSON.parse(msg.data))
            isLoading.value = false
        } else {
            noMessages.value = true
        }
        isLoading.value = false
        scrollBottom()
    }
    // setTimeout(() => {
    //     scrollBottom()
    // }, 1000)
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
    background: rgb(51, 51, 51);
    width: 30vw;
    margin: 0 auto;
    margin-top: 50px;
}
.h3 {
    margin-top: 20px;
}
.spinner {
    display: flex;
    justify-content: center;
    align-items: center;
}
.messages {
    height: 250px;
    overflow: auto;
}
.test {
    background-color: black;
    width: 20vw;
    height: 250px;
    margin: 0 auto;
    overflow: auto;
}
</style>