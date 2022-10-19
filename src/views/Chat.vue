<template>
    <form :action="sendMessage" @click.prevent="onSubmit">
        <input v-model="message" type="text">
        <input type="submit" value="Send" @click="sendMessage">
    </form>
    <div class="h3">Websocket chat</div>
    <div v-if="!isLoading">
        <div v-for="(_, index) in msgs" :key="index">
            <div style="color: aquamarine;">{{ msgs[msgs.length-1-index].name }}</div>
            <div style="color: orange;">{{ msgs[msgs.length-1-index].message }}</div>
            <br>
        </div>
    </div>
    <div v-else>loading...</div>
    <div v-if="noMessages">
        <div style="color: yellow;"> Be the first to send a message !</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let message = ref("")
let socket = ref(null)
let msgs = []
let noMessages = ref(false)
let isLoading = ref(true)

onMounted(() => {
    socket = new WebSocket("ws://localhost:8080/websocket")
    socket.onmessage = (msg) => {
        isLoading.value = true
        if (!(JSON.parse(msg.data).name == "")) {
            noMessages.value = false
            msgs.push(JSON.parse(msg.data))
            isLoading.value = false
        } else {
            noMessages.value = true
        }
        isLoading.value = false
    }
})

function sendMessage() {
    let msg = {
        "name": "Go user :)",
        "message": message.value
    }
    socket.send(JSON.stringify(msg))
    message.value = ""
}
</script>

<style scoped>
form {
    margin-top: 20px;
}
.h3 {
    margin-top: 20px;
}
</style>