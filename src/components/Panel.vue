<template>
    <h1>{{ msg }}</h1>
    <iframe src="http://77.136.126.254:3000/d-solo/Lsms3OWgz/test?orgId=1&from=1657122171663&to=1657143771663&panelId=2" width="450" height="200" frameborder="0"></iframe>
    <iframe src="http://77.136.126.254:3000/d-solo/Lsms3OWgz/test?orgId=1&from=1657631757517&to=1657653357517&panelId=4" width="450" height="200" frameborder="0"></iframe>
</template>

<script setup>

import { ref } from "vue"

const msg = ref("Monitoring")

</script>

<style scoped>
h1 {
    color: orange;
}
</style>