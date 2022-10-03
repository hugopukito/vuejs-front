<template>
    <input @keyup.enter="submit" v-model="email" placeholder="email"/> <br>
    <input @keyup.enter="submit" v-model="password" placeholder="password"/> <br>
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
        console.log(resp.data.token);
      })
  }
  </script>