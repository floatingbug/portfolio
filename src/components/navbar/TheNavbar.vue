<script setup>
import {ref} from "vue";
import NavbarLd from "./components/NavbarLd.vue";
import NavbarMd from "./components/NavbarMd.vue";
import NavbarSd from "./components/NavbarSd.vue";
import {device} from "@/composables/device.js";
import NavbarToggleButton from "./components/NavbarToggleButton.vue";


const isNavbarClosed = ref(true);


function handleNavbarAction(event){
	console.log("test", event);

	if(event.action === "toggle"){
		isNavbarClosed.value = !isNavbarClosed.value;
	}
	else if(event.action === "closeNavbar"){
		isNavbarClosed.value = true;
	}
}

</script>

<template>
	<NavbarLd v-if="device.size === 'ld'"></NavbarLd>
	<NavbarMd v-if="device.size === 'md'" :isNavbarClosed="isNavbarClosed" @toggle:action="handleNavbarAction"></NavbarMd>
	<NavbarSd v-if="device.size === 'sd'" :isNavbarClosed="isNavbarClosed" @toggle:action="handleNavbarAction"></NavbarSd>
	<NavbarToggleButton v-if="!(device.size === 'ld') && isNavbarClosed === true" @toggle:action="handleNavbarAction"></NavbarToggleButton>
</template>

<style scoped>
</style>
