<template>
  <Teleport to="#modal">
      <Transition name="modal">
        <div class="modal-bg" v-if="isModalOpen">
          <div class="modal" ref="modal">
            <div class="title">
              Sign up
            </div>
            <div class="form">
              <div class="txt_field">
                <input @keyup.enter="submit" v-model="name" type="text" required>
                <span :style="{'--bgColor': '#2691d9'}"></span>
                <label>Name</label>
              </div>
              <div class="txt_field">
                <input @keyup.enter="submit" v-model="email" type="text" required>
                <span :style="{'--bgColor': bgColor}"></span>
                <label v-if="!conflict">Email</label>
                <label v-if="conflict" style="color: orange;">Email already taken</label>
              </div>
              <div class="txt_field">
                <input @keyup.enter="submit" v-model="password" type="password" required>
                <span :style="{'--bgColor': '#2691d9'}"></span>
                <label>Password</label>
              </div>
              <button @click="submit" :class="{ created: created }">
                <div v-if="!created && !inCreation">Create</div>
                <div v-if="inCreation"><Spinner/></div>
                <div v-if="created" style="color: green;">Created :)</div>
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

const emit = defineEmits(["modalBoolean", "signupWorked"]);

const modal = ref(null);
let created = ref(false);
let inCreation = ref(false);
let conflict = ref(false);

let name = ref("")
let email = ref("")
let password = ref("")

const bgColor = ref("#2691d9");

onClickOutside(modal, () => {
  emit("modalBoolean");
  created.value = false;
});

function closeModal() {
  emit("modalBoolean");
  created.value = false;
}

async function submit() {
    inCreation.value = true;
    const obj = {
      "name": name.value,
      "email": email.value,
      "password": password.value
    };
    await axios.post(process.env.VUE_APP_API_URL + "/signup", JSON.stringify(obj))
    .then(resp => {
      if (resp.status == 201) {
        inCreation.value = false;
        conflict.value = false;
        created.value = true;
        name.value = "";
        email.value = "";
        password.value = "";

        setTimeout(() => {
          emit("signupWorked");
          created.value = false;
        }, 2000)
      }
    })
    .catch(error => {
      if (error.response.status == 409) {
        inCreation.value = false;
        conflict.value = true;
        bgColor.value = "orange";
        setTimeout(() => {
          conflict.value = false;
        }, 3000)
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
button.created{
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