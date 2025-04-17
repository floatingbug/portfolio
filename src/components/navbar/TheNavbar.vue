<script setup>
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import NavbarDesktop from "./components/NavbarDesktop.vue";
import NavbarMobile from "./components/NavbarMobile.vue";
import device from "@/composables/device.js";


const route = useRoute();
const showNavbar = ref(true);


watch(() => route.query, () => {
	if(route.name === "legalNotice" || route.name === "privacyPolicy"){
		showNavbar.value = false;
	}
	else showNavbar.value = true;
});

</script>

<template>
	<NavbarMobile v-if="device.size < 900 && showNavbar"></NavbarMobile>
	<NavbarDesktop v-if="device.size >= 900 && showNavbar"></NavbarDesktop>
</template>

<style scoped>
</style>
