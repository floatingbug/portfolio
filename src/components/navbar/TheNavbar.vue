<script setup>
import NavbarDesktop from "./components/NavbarDesktop.vue";
import NavbarMobile from "./components/NavbarMobile.vue";
import device from "@/composables/device.js";

</script>

<template>
	<NavbarMobile v-if="device.size < 900"></NavbarMobile>
	<NavbarDesktop v-else></NavbarDesktop>
</template>

<style scoped>
</style>
