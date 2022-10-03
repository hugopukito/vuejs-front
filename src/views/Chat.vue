<template>
  <Input @submit="createMsg" />
  <div v-if = isLoading><h1>loading...</h1></div>
  <div class="msgs" v-else>
    <div class="msg" v-for="(item, index) in msg" :key="index">
        <div class="element">
            <div class="name"> {{ msg[msg.length-1-index].name }} </div>
        </div>
        <div class="element">
            <div class="message"> {{ msg[msg.length-1-index].message }} </div>
        </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from "vue"
import axios from "axios"
import Input from "@/components/Input.vue"

let isLoading = ref(true)
let msg = ref(String)

onMounted(() => {
    getMsg()
    /* refresh() */
})

async function getMsg () {
    await axios.get(process.env.VUE_APP_API_URL + "/messages")
    .then(resp => {
        msg.value = resp.data
        isLoading.value = false
    })
}

function refresh() {
    setInterval(function() {
        getMsgRefresh()
    }, 10000)
}

async function getMsgRefresh () {
    await axios.get(process.env.VUE_APP_API_URL + "/messages")
    .then(resp => {
        msg.value = resp.data
    })
}

function createMsg(message) {
    const obj = {
        "message": message.value
    };
    isLoading.value = true
    axios.post(process.env.VUE_APP_API_URL + "/messages", JSON.stringify(obj))
    .then(getMsg())
}
</script>

<style scoped>
h1 {
    color: aquamarine;
}
.msgs{
    padding-top: 40px;
}
.msg{
    padding-top: 20px;
    font-size: 30px;
    color:chocolate;
}
.element{
    display: inline-block;
    margin: 10px;
}
.name{
    color: aquamarine;
}
.message{
    color: orange;
}
</style>