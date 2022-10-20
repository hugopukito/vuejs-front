<template>
  <Teleport to="#modal">
      <Transition name="modal">
        <div class="modal-bg" v-if="isModalOpen">
          <div class="modal" ref="modal">
            <div class="title">
              Sign in
            </div>
            <div class="form">
              <div class="txt_field">
                <input @keyup.enter="submit" v-model="email" type="text" required>
                <span :style="{'--bgColor': bgColor}"></span>
                <label v-if="!badAuth">Email</label>
                <label v-if="badAuth" style="color: orange;">Wrong Email</label>
              </div>
              <div class="txt_field">
                <input @keyup.enter="submit" v-model="password" type="password" required>
                <span :style="{'--bgColor': bgColor}"></span>
                <label v-if="!badAuth">Password</label>
                <label v-if="badAuth" style="color: orange;">Or Wrong Password</label>
              </div>
              <button @click="submit" :class="{ connected: connected }">
                <div v-if="!connected && !inConnection">Login</div>
                <div v-if="inConnection"><Spinner/></div>
                <div v-if="connected" style="color: green;">Connected :)</div>
              </button>
            </div>
          </div>
        </div>
      </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from "vue"
import { onClickOutside } from "@vueuse/core";
import axios from "axios";
import Spinner from "./Spinner.vue"

defineProps({
    isModalOpen: Boolean
})

const emit = defineEmits(["modalBoolean", "signinWorked"]);

const modal = ref(null);
let connected = ref(false);
let inConnection = ref(false);
let badAuth = ref(false);

const bgColor = ref("#2691d9");

let email = ref("");
let password = ref("");

onClickOutside(modal, () => {
  emit("modalBoolean");
  connected.value = false;
});

function closeModal() {
  emit("modalBoolean");
  connected.value = false;
}

async function submit() {
    inConnection.value = true;
    const obj = {
      "email": email.value,
      "password": password.value
    };
    await axios.post("https://hugopukito.com/api" + "/signin", JSON.stringify(obj))
    .then(resp => {
      if (resp.status == 200) {
        inConnection.value = false;
        connected.value = true;
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("userName", resp.data.name);
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token")
        connected.value = true;
        password.value = "";

        setTimeout(() => {
          emit("signinWorked");
          connected.value = false;
        }, 2000)
      }
    })
    .catch(() => {
      inConnection.value = false;
      connected.value = false;
      badAuth.value = true;
      bgColor.value = "orange";
        setTimeout(() => {
          badAuth.value = false;
        }, 3000)
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
  
  background: rgba(15, 19, 21, 0.8);
  backdrop-filter: blur(1rem);
}

.modal {
  position: absolute;
  width: 35vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #303245;
  border-radius: 10px;
}

.modal .title {
  font-size: 30px;
  color: white;
  text-align: center;
  padding: 30px;
  border-bottom: 1px solid white;
}

.modal .form {
  padding: 0 40px;
  box-sizing: border-box;
}

.form .txt_field {
  position: relative;
  border-bottom: 2px solid white;
  margin: 30px 0;
}

.txt_field input{
  margin: 0;
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
  caret-color: white;
  color: white;
}
.txt_field label{
  color: white;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: .5s;
}
.txt_field span::before{
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--bgColor);
  transition: .5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label{
  top: -5px;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before{
  width: 100%;
}

button{
  width: 100%;
  height: 50px;
  margin-bottom: 25px;
  border: 2px solid #2691d9;
  background: #2691d9;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
button:hover{
  border-color: white;
  transition: .5s;
}
button.connected{
  border: 2px solid white;
  background: white;
}

.modal-enter-active, .modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>

<style scoped>
@media screen and (max-device-width: 1000px) {
  .modal {
    width: 60vw;
  }
}
@media screen and (max-device-width: 600px) {
  .modal {
    width: 80vw;
  }
}
</style>