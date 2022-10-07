<template>
  <Teleport to="#modal">
      <Transition name="modal">
        <div class="modal-bg" v-if="isModalOpen">
          <div class="modal" ref="modal">
            <button @click="isModalOpen = false" class="close-btn">x</button>
            <input @keyup.enter="submit" v-model="name" placeholder="name"/> <br>
            <input @keyup.enter="submit" v-model="email" placeholder="email"/> <br>
            <input @keyup.enter="submit" v-model="password" type="password" placeholder="password"/> <br>
            <button @click="submit">Create</button>
            <div v-if="created">done !</div>
          </div>
        </div>
      </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from "vue"
import { onClickOutside } from "@vueuse/core";
import axios from "axios";

defineProps({
    isModalOpen: Boolean
})

const emit = defineEmits(["modalBoolean"]);

const modal = ref(null);

let name = ref("")
let email = ref("")
let password = ref("")

onClickOutside(modal, () => {
  emit("modalBoolean");
  created.value = false;
});

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
        name.value = "";
        email.value = "";
        password.value = "";
      }
    })
}
</script>

<style scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;

  background: white;
  padding: 50px 100px;
  border-radius: 5px;
  box-shadow: 0px 10px 5px 2px rgba(0, 0, 0, 0.1);
}

.modal .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;

  background: none;
  border: none;
  cursor: pointer;
}

.modal-enter-active, .modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>