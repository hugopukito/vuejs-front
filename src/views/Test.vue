<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <img src="@/assets/keyboard/keyboard.png" 
    loading="lazy" v-show="loaded" width="500" @load="imgLoaded">
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, onMounted } from "vue"

let loaded = ref(false)
let loading = ref(false)

onMounted(() => {
  loading.value = true
})

function imgLoaded() {
  loaded.value = true
  loading.value = false
  console.log("salut")
}

</script>
