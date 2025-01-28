<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import TheNavbar from "./components/navbar/TheNavbar.vue";
import { useUser } from "./store/useUser.js";
import {useTranslations} from "./composables/useTranslations.js";
import {device} from "./composables/device.js";


const {userSettings} = useUser();
const {translation, setTranslation} = useTranslations();


onMounted(async () => {
	const html = document.documentElement;

	//handle language
	let currLang = localStorage.getItem("lang");
	currLang = currLang ? currLang : userSettings.lang;
	html.lang = currLang;
	setTranslation(currLang);

	//handle dark-mode
	const isDarkMode = localStorage.getItem("isDarkMode");

	if (isDarkMode === true || isDarkMode === "true") {
		html.className = "dark-mode";
		userSettings.isDarkMode = true;
	}

	//handle device size
	device.size = "ld";
	if(window.innerWidth < 1000) device.size = "md";
	if(window.innerWidth < 500) device.size = "sd";

	window.addEventListener("resize", () => {
		device.size = "ld";
		if(window.innerWidth < 1000) device.size = "md";
		if(window.innerWidth < 500) device.size = "sd";
	});
});
</script>

<template>
	<TheNavbar></TheNavbar>

	<RouterView />
</template>

<style scoped></style>
