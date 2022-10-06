<template>
    <input @keyup.enter="submit" v-model="email" placeholder="email"/> <br>
    <input @keyup.enter="submit" v-model="password" type="password" placeholder="password"/> <br>
    <button @click="submit">Envoyer</button>
</template>
  
<script setup>
import { ref } from "vue";
import axios from "axios"

let email = ref("")
let password = ref("")

async function submit() {
    const obj = {
    "email": email.value,
    "password": password.value
    };
    await axios.post(process.env.VUE_APP_API_URL + "/signin", JSON.stringify(obj))
    .then(resp => {
        localStorage.setItem("token", resp.data.token);
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token")
        console.log(localStorage.getItem("token"));
    })
}

function test() {
    const obj = {
        "message": "js"
    };
    axios.post(process.env.VUE_APP_API_URL + "/test", JSON.stringify(obj))
}
</script>