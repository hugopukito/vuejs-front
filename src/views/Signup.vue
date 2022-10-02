<template>
  <input @keyup.enter="submit" v-model="name" placeholder="name"/> <br>
  <input @keyup.enter="submit" v-model="email" placeholder="email"/> <br>
  <input @keyup.enter="submit" v-model="password" placeholder="password"/> <br>
  <button @click="submit">Envoyer</button>
  <div v-if="created">done !</div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios"

let name = ref("")
let email = ref("")
let password = ref("")

let created = ref(false)

async function submit() {
    const obj = {
      "name": name.value,
      "email": email.value,
      "password": password.value
    };
    await axios.post(process.env.VUE_APP_API_URL + "/signup", JSON.stringify(obj))
    .then(resp => {
      if (resp.status == 201) {
        created.value = true;
      }
    })
}
</script>