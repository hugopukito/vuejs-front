<template>
  <input v-model="nom" placeholder="nom" />
  <input v-model="message" placeholder="message" />
  <button @click="submit">Submit</button>
</template>

<script setup>

import { ref } from "vue"

const emit = defineEmits(["submit"])

let nom = ref("")
let message = ref("")

function submit() {
    emit("submit", nom, message)
    message.value = ""
}

</script>

<style>
input{
    margin-top: 40px;
}
</style>