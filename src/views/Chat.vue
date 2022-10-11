<template>
    <form :action="sendMessage" @click.prevent="onSubmit">
        <input v-model="message" type="text">
        <input type="submit" value="Send" @click="sendMessage">
    </form>
    <h3>websocket messages</h3>
    <p>{{ rcvMessage }}</p>
</template>

<script setup>
import { ref, onMounted } from "vue";

let message = ref("")
let socket = ref(null)
let rcvMessage = ref("")

onMounted(() => {
    socket = new WebSocket("ws://localhost:8080/socket")
    socket.onmessage = (msg) => {
        rcvMessage.value = msg.data
    }
})

function sendMessage() {
    let msg = {
        "message": message.value
    }
    socket.send(JSON.stringify(msg))
}
</script>