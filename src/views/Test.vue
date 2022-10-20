<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <img :src="logo1">
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, onMounted } from "vue"

let logo1 = ref("")
let loading = ref(true)

onMounted(() => {
    axios.get("http://localhost:8080/image",{

    headers:{
        'content-type': 'image/png',
        'accept': 'image/png'
    },

    responseType: 'blob'

    }).then((res) => {

    const urlCreator = window.URL || window.webkitURL
    logo1.value = urlCreator.createObjectURL(res.data)
    loading.value = false

    }).catch((error) => {

    console.log(error)
    })
})
</script>
