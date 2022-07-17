<template>
  <div class="form__group field">
    <input v-model="nom" placeholder="Nom" />
    <input @keyup.enter="submit" v-model="message" placeholder="Message" />
    <button @click="submit">Envoyer</button>
  </div>
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