<template>
  <div>
    <input @keyup.enter="submit" v-model="message" placeholder="Message" />
    <button @click="submit">Envoyer</button>
  </div>
</template>

<script setup>

import { ref } from "vue"

const emit = defineEmits(["submit"])

let message = ref("")

function submit() {
    emit("submit", message)
    message.value = ""
}

</script>

<style>
input{
    margin-top: 40px;
}
</style>