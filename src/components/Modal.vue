<template>
    <Modal v-model:visible="isVisible">
        <div>your content...</div>
    </Modal>
</template>

<script setup>
import { ref } from "vue"
import { Modal } from "usemodal-vue3"

let isVisible = ref(false);
</script>