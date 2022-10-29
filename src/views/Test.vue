<template>
  <div v-if="loading">loading...</div>
  <div v-else v-for="n in 10" :key="n">
    <!-- <img src="http://localhost:8080/images/zoro" 
    loading="lazy" v-show="loaded" width="500" @load="imgLoaded"> -->
    <img v-lazy="{ src: url, loading: url }" 
    width="500"/>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, onMounted } from "vue"

let loaded = ref(false)
let loading = ref(false)
let url = "http://localhost:8080/images/zoro"

// onMounted(() => {
//   loading.value = true
// })

function imgLoaded() {
  loaded.value = true
  loading.value = false
}

</script>

<style scoped>
img[lazy=loading] {
  filter: blur(10px);
  transition: filter 0.7s;
}
img[lazy=loaded] {
  filter: blur(0);
}
</style>
