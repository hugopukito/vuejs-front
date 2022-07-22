<template>
  <Input @submit="createMsg" />
  <div v-if = isLoading><h1>loading...</h1></div>
  <div class="msgs" v-else>
    <div class="msg" v-for="(item, index) in msg" :key="index">
        <div class="element">
            <div class="nom"> {{ msg[msg.length-1-index].nom }} </div>
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
    getMsg(),
    refresh()
})

async function getMsg () {
    await axios.get("https://hugopukito.com/api")
    .then(resp => {
        msg.value = resp.data
        isLoading.value = false
    })
}

function refresh() {
    setInterval(function() {
        getMsgRefresh()
    }, 1000)
}

async function getMsgRefresh () {
    await axios.get("https://hugopukito.com/api")
    .then(resp => {
        msg.value = resp.data
    })
}

function createMsg(nom, message) {
    const obj = {
        "nom": nom.value,
        "message": message.value
    };
    isLoading.value = true
    axios.post("https://hugopukito.com/api/post", JSON.stringify(obj))
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
.nom{
    color: aquamarine;
}
.message{
    color: orange;
}
</style>